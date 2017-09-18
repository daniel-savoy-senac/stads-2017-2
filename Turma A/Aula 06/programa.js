const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
let counter = 0;

function main(){
  let novoBtn = document.querySelector("button:last-child");
  console.log(novoBtn);
  novoBtn.addEventListener("click", criar);
}

function criar(){
  // Criar Elementos
  let div = document.createElement("div");
  let inputIn = document.createElement("input");
  let inputOut = document.createElement("input");
  let label = document.createElement("label");

  //Attributos

}

window.addEventListener("load", main);
