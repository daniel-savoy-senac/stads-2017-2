function main(){
  let btn = document.querySelector("button:nth-of-type(2)");
  btn.addEventListener("click", sendData);
}

function sendData(){
  let valor = document.querySelector("input").value;
  let action = document.querySelector("form").getAttribute("action");
  fetch(`${action}?texto=${valor}`)
    .then(r => r.text())
    .then(t => console.log(t));

}

window.addEventListener("load", main);
