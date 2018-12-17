window.onload = function(){

	focusEl("main");

	window.addEventListener("beforeunload", function(e){e.preventDefault();return "";});
	
	getEl("main").addEventListener("keydown", function(e){

		var key = e.keyCode;

		if(key == 9){

			e.preventDefault();
			var cursorpos = getCursorPos("main");
			getEl("main").value = String(getEl("main").value.substring(0, cursorpos[0]) + "\t" + getEl("main").value.substring(cursorpos[1], getEl("main").value.length));
			setCursorPos("main", Number(cursorpos[0] + 1), Number(cursorpos[0] + 1));

		}

	});

	getEl("titlebar").addEventListener("keypress", function(e){

		var key = e.keyCode;
		var illegalChars = [33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 47, 59, 60, 62, 63, 64, 92, 94, 96, 124, 126];

		if(illegalChars.indexOf(key) != (-1)){

			e.preventDefault();

		}else if(key == 13){

			focusEl("main");

		}

	});

}

function openLocalFile(){

	openFile(function(files){

		readFile(files[0], function(file){

			if(String(getEl("main").value) == ""){

				getEl("main").value = String(file.contents);
				getEl("titlebar").value = String(file.name);

			}else{

				if(confirm("Are you sure you want to clear the current project?")){

					getEl("main").value = String(file.contents);
					getEl("titlebar").value = String(file.name);

				}

			}

		});

	});

	focusEl("main");

}

function saveFile(){

	downloadFile(getEl("titlebar").value, getEl("main").value);
	focusEl("main");

}

function clearText(){

	if(getEl("main").value != ""){

		if(confirm("Are you sure you want to clear the current project?")){

			getEl("main").value = "";
			getEl("titlebar").value = "index.html";

		}

	}else{

		getEl("titlebar").value = "index.html";

	}

	focusEl("main");

}

function testText(){

	if(getEl("testframe").style.display != "block"){

		getEl("testframe").style.display = "block";
		getEl("mainframe").style.display = "none";
		getEl("testiframe").srcdoc = getEl("main").value;

	}else{

		getEl("testframe").style.display = "none";
		getEl("mainframe").style.display = "block";
		getEl("testiframe").srcdoc = "";
		focusEl("main");

	}

}
