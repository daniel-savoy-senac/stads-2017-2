function iniciar(){
  document
    .querySelector("button:first-of-type")
    .addEventListener("click", editar);

    document
      .querySelector("button:last-of-type")
      .addEventListener("click", remover);

    document
      .querySelector("#buscaCliente")
      .addEventListener("keypress", buscar);
}

function limpar(){
  let inputs = document.querySelectorAll("[name]");
  //inputs.forEach(i => i.value = "");
  for(var i = 0 ; i < inputs.length; i++)
    inputs[i].value = "";
}

function salvar(){
  let id = document.querySelector("[name='id']").value;
  let cliente = document.querySelector("[name='cliente']").value;
  let cpf = document.querySelector("[name='cpf']").value;
  let saldo = document.querySelector("[name='saldo']").value;
  let txt = `[${id}] :: [${cpf}] :: [${cliente}] :: [${saldo}]`;
  let article = document.createElement("article");
  article.textContent = txt;
  return article;
}

function remover(){
  let article = salvar();
  document.querySelector(".inativos").appendChild(article);
  limpar();
}

function editar(){
  let article = salvar();
  let saldo = Number(document.querySelector("[name='saldo']").value);
  let section = saldo < 0 ? ".devedores" : ".credores";
  document.querySelector(section).appendChild(article);
  limpar();
}

function buscar(){
  let busca = document.querySelector("#buscaCliente").value;
  let url = `servlets/BuscaClientes?query=${busca}`;
  fetch(url)
    .then(r => r.json())
    .then(j => processar(j));
}

function processar(obj){
  document.querySelector("[name='id']").value = obj.id;
  document.querySelector("[name='cliente']").value = obj.nome;
  document.querySelector("[name='cpf']").value = obj.CPF;
  document.querySelector("[name='saldo']").value = obj.creditos - obj.debitos;
}

window.addEventListener("load", iniciar);
