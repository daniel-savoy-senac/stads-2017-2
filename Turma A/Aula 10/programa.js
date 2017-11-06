function main(){
  let btn = document.querySelector("button:nth-of-type(2)");
  btn.addEventListener("click", sendData);
}

function sendData(){
  let form = document.querySelector("form");
  let action = form.getAttribute("action");
  let data = new FormData(form);
  fetch(action, {method: "post", body: data})
    .then(r => r.text())
    .then(t => console.log(t));
}

function sendData2(){
  let inputs = [...document.querySelectorAll("form *[name]")];

  let param = inputs
    .map(i => `${i.getAttribute("name")}=${i.value}`)
    .join("&");

  let action = document.querySelector("form").getAttribute("action");

  fetch(`${action}?${param}`)
    .then(r => r.text())
    .then(t => console.log(t));

}

window.addEventListener("load", main);
