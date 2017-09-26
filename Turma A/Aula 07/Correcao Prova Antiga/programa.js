/*
Qual o conteúdo necessário no arquivo "programa.js" para
  (A) criar um novo elemento <p>,
  (B) dentro do "div" de listagem,
  (C) com o texto "[Sobrenome], [Nome]" com o valor dos campos correspondentes no formulário,
  (D) toda a vez que o botão "Adicionar" for clicado.
  (E) O formulário deve ser limpo após a criação de cada novo elemento de parágrafo
*/

function criar(){
  let nome = document.querySelector("#nome").value;
  let sobrenome = document.querySelector("#sobrenome").value;
  let p = document.createElement("p");
  p.textContent = sobrenome + ", " + nome;
  let listagem = document.querySelector("div#lista.listagem");
  listagem.appendChild(p);
  limpar();
}

function limpar(){
  let inpts = document.querySelectorAll("form input");
  for(let i of inpts) i.value = "";
}

function iniciar(){
  let addBtn = document.querySelector("button[type='button']");
  addBtn.addEventListener("click", criar);
}

window.addEventListener("load", iniciar);
