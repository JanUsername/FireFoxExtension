require("sdk/tabs").on("ready", logURL);
 
 var url = "";
 var local = "http:localhost:8195";
 
function logURL(tab) {
  console.log(tab.url);
  url = tab.url;
  if(!(url.indexOf("newtab") != -1)){
	sendURL(url);
  }
}

function sendURL(url){
	
	var  urlEncoded = fixedEncodeURIComponent(url);
	var local2 = local+ "/?url"+ urlEncoded;
	
	console.log("-----------------------------");
	//console.log("THe URL" + url);
	//console.log("The URL encoded:"+urlEncoded );
	
	console.log( "URL + ENCODING + address: " + local2);
	
	
 	var {XMLHttpRequest} = require('sdk/net/xhr');
	var xhr = new XMLHttpRequest();
	xhr.onload = reqListener;
	xhr.open("GET",local2,true);
	xhr.send();

	console.log("-----------------------------");
}

function fixedEncodeURIComponent(url){
	var tmp = url; 
    return encodeURIComponent(url).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
 } 
 
 function reqListener () {
	 console.log("---------------...........................................--------------");
  console.log(this.responseText);
  console.log("------------------.......................................-----------");
}