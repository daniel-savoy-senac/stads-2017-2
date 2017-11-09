/*let xhr = new XMLHttpRequest();
xhr.open("get", "data.txt");
xhr.addEventListener("load", carregar);
xhr.send();

function carregar(evt){
	let txt = evt.target.responseText;
	let obj = JSON.parse(txt);
	console.log(obj);
}*/

fetch("data.txt")
	.then(t => t.json())
	.then(j => responder(j));
	
function responder(obj){
	obj.pet = {"tipo": "cão", "idade": 4};
	console.log(obj);
	let txt = JSON.stringify(obj);
	console.log(txt);
	//fetch("servletX",{method: "post", body: txt});
}





