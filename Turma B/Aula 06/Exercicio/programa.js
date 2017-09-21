let alfa = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
let count = 0;

function main(){
  let btn = document.querySelector("button:last-of-type");
  btn.addEventListener("click", criar);
  let btn1 = document.querySelector("button:nth-of-type(1)");
  btn1.addEventListener("click", calcular);
}

function criar(){
  let div = document.createElement("div");
  let label = document.createElement("label");
  let inpIn = document.createElement("input");
  let inpOut = document.createElement("input");

  label.textContent = alfa[count++ % alfa.length]+": ";

  inpIn.classList.add("in");
  //inpIn.className = "in";
  //inpIn.setAttribute("class", "in");

  inpIn.setAttribute("type", "number");
  inpIn.setAttribute("id", "in"+count);
  label.setAttribute("for", "in"+count);

  inpOut.classList.add("out");
  inpOut.disabled = true;



  div.appendChild(label);
  div.appendChild(inpIn);
  div.appendChild(inpOut);

  document.body.appendChild(div);
}


let funcArray = [
  x => x+10,
  x => x*100,
  x => x**2,
  x => x**3
];


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

window.addEventListener("load", main);
