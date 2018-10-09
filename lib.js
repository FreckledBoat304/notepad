function openFile(callback){var fileopener = document.createElement("input");fileopener.type = "file";fileopener.accept = "multiple";fileopener.onchange = (function(){callback(this.files);});fileopener.click();fileopener.remove();}

function readFile(fileobj, callback){var fr = new FileReader();fr.onload = (function(){callback({"contents": fr.result, "name": String(fileobj.name), "lastModified": String(fileobj.lastModified), "lastModifiedDate": String(fileobj.lastModifiedDate), "size": String(fileobj.size), "type": String(fileobj.type)});});fr.readAsText(fileobj);}

function getCursorPos(id){return [getEl(id).selectionStart, getEl(id).selectionEnd];}

function setCursorPos(id, start, end){getEl("main").setSelectionRange(start, end);}

function downloadFile(name, contents){var downloadlink = document.createElement("a");downloadlink.download = String(name);downloadlink.href = String("data:text/plain;," + contents);downloadlink.click();downloadlink.remove();}

function focusEl(id){getEl(id).focus();}

function getEl(id){return document.getElementById(String(id));}