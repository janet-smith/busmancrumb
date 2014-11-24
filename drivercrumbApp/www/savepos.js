//Load external file into div 

function ahahpos(posurl, posparams) {
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req != undefined) {
   req.open("POST", posurl, true);
		//Send the proper header information along with the request
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-length", posparams.length);
    req.setRequestHeader("Connection", "close");
    req.send(posparams);
  }
}  

function loadpos(posname,posparams) {
	ahahpos(posname,posparams);
	return false;
}

