function iniciar(){
	document
		.querySelector("button:first-of-type")
		.addEventListener("click", editar);
	document
		.querySelector("button:last-of-type")
		.addEventListener("click", remover);
	document
		.querySelector("#buscaCliente")
		.addEventListener("change", buscar);
}

function buscar(){
	let valor = document.querySelector("#buscaCliente").value;
	let url = `servlets/BuscaClientes?query=${valor}`;
	/*FETCH*/
	fetch(url)
		.then(r => r.json())
		.then(j => processar(j));
	/*XHR*/
	//let xhr = new XMLHttpRequest();
	//xhr.open("get", url);
	//xhr.addEventListener("load", processarXHR);
	//xhr.send();
}
/*
function processarXHR(evt){
	let txt = evt.target.responseText;
	let json = JSON.parse(txt);
	processar(json);
}
*/
function processar(obj){
	document.querySelector("input[name='id']").value = obj.id;
	document.querySelector("input[name='cpf']").value = obj.CPF;
	document.querySelector("input[name='cliente']").value = obj.nome;
	document.querySelector("input[name='saldo']").value = obj.creditos - obj.debitos;
}

function editar(){
	let article = ler();
	let saldo = Number(document.querySelector("input[name='saldo']").value);
	let section = saldo < 0 ? ".devedores" : ".credores";
	document.querySelector(section).appendChild(article);
	limpar();
}

function remover(){
	let article = ler();
	document.querySelector(".inativos").appendChild(article);
	limpar();
}

function ler(){
	let id = document.querySelector("input[name='id']").value;
	let cpf = document.querySelector("input[name='cpf']").value;
	let cliente = document.querySelector("input[name='cliente']").value;
	let saldo = document.querySelector("input[name='saldo']").value;
	let txt = `${id} :: ${cpf} :: ${cliente} :: ${saldo}`;
	let article = document.createElement("article");
	article.textContent = txt;
	return article;
}

function limpar(){
	let inputs = document.querySelectorAll("input[name]");
	inputs.forEach(i => i.value = "");
}

window.addEventListener("load", iniciar);
