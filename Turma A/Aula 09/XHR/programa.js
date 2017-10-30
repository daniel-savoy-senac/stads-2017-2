let xhr = new XMLHttpRequest();
xhr.addEventListener("load", atualizar);
xhr.open("data.json", "get");
xhr.send();


function atualizar(evt){
  console.log(evt);
}
