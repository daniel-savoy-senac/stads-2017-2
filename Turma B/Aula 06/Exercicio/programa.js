const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","W","Z"];
let counter = 0;

function main(){
  let novoBtn = document.querySelector("button:last-child");
  novoBtn.addEventListener("click", criar);
}

function criar(){
  // Criar Elementos
  let div = document.createElement("div");
  let inputIn = document.createElement("input");
  let inputOut = document.createElement("input");
  let label = document.createElement("label");

  // ID
  let letra = letras[counter++ % letras.length];
  let id = "in"+letra;

  // Attributos
  label.setAttribute("for", id);
  inputIn.setAttribute("id", id);
  inputIn.setAttribute("type", "number");

  inputIn.setAttribute("class", "in");
  inputOut.setAttribute("class", "out");
  inputOut.setAttribute("disabled", true);

  label.textContent = letra+":";

  // Ir para Tela
  div.appendChild(label);
  div.appendChild(inputIn);
  div.appendChild(inputOut);

  document.body.appendChild(div);

/*
  inputIn.className = "in feio anos80";
  inputIn.classList.add("in");
  inputIn.classList.remove("feio");
  inputIn.classList.toggle("anos80");
*/

}

window.addEventListener("load", main);
