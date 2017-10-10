function adicionar(){
  //A
  let article = document.createElement("article");

  //B
  let nome = document.querySelector("#usuario").value;
  article.textContent = nome;

  //C
  let section = document.querySelector("section");
  section.appendChild(article);

  //E
  let senha = document.querySelector("#senha").value;
  if(senha.length < 8) article.style.background = "orange";
}

//D
function iniciar(){
  let btn = document.querySelector("button:last-of-type");
  btn.addEventListener("click", adicionar);
}

window.addEventListener("load", iniciar);







let selectors = ["div",".campo.senha",".senha","form div:nth-of-type(even)","#senha","button, input, legend, section",".ativo div>label","form *:empty",".senha .senha","input[name]","label+input","div>input:nth-child(2)"];

let resposta = () => selectors.map(s => {
  console.log(s +" :: "+ document.querySelectorAll(s).length);
});


//http://www.abcd.com.br/login.jsp?username=Daniel&remember=true&password=Savoy
