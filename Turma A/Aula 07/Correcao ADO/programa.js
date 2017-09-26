let lista = [];
let order = "DX";
let sorts = {
  "DX" : (a, b) => b.x > a.x ? -1 : b.x < a.x ? 1 : 0,
  "UX" : (a, b) => b.x > a.x ? 1 : b.x < a.x ? -1 : 0,
  "DY" : (a, b) => b.y > a.y ? -1 : b.y < a.y ? 1 : 0,
  "UY" : (a, b) => b.y > a.y ? 1 : b.y < a.y ? -1 : 0
};

function sortAtual(funcIndex){
  return () => {
    order = funcIndex;
    imprimir();
  }
}

function imprimir(){
  let listaOrdenada = lista.sort(sorts[order]);
  let items = document.querySelectorAll("p");
  for(let p of items) p.remove();
  for(let item of listaOrdenada){
    let p = document.createElement("p");
    p.textContent = "X: "+ item.x +" Y: "+item.y;
    document.body.appendChild(p);
  }
}

function criar(){
  let x = document.querySelector("#inpX").value;
  let y = document.querySelector("#inpY").value;
  lista.push( { "x":x, "y":y });
  imprimir();
}

function iniciar(){
  document.querySelector("#btnOK").addEventListener("click",criar);
  document.querySelector(".btnDX").addEventListener("click", sortAtual("DX"));
  document.querySelector(".btnUX").addEventListener("click", sortAtual("UX"));
  document.querySelector(".btnDY").addEventListener("click", sortAtual("DY"));
  document.querySelector(".btnUY").addEventListener("click", sortAtual("UY"));
}

window.addEventListener("load", iniciar);
