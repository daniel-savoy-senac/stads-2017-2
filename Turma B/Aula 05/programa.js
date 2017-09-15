/* COMANDOS

  let input = document.createElement("input");
  input.className = "classe";
  pai.appendChild(input);
  document.body.appendChild(pai);

*/


let funcArray = [
  x => x+10,
  x => x*100,
  x => x**2,
  x => x**3
];

function iniciar() {
  let btn = document.querySelector("button:nth-of-type(1)");
  btn.addEventListener("click", calcular);
}

function calcular(){
  let seletor = document.querySelector("select");
  let funcIndex = seletor.value;
  let func = funcArray[funcIndex];

  let ins = document.querySelectorAll(".in");
  let outs = document.querySelectorAll(".out");

  let inArray = [...ins];
  let values = inArray.map(i => Number(i.value));
  let resultados = values.map(func);

  outs.forEach((o, i) => o.value = resultados[i]);

  console.log(resultados);
}

window.addEventListener("load", iniciar);
