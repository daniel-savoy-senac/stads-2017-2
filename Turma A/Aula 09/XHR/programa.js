// FETCH

fetch("data.json")
  .then(r => r.json())
  .then(j => atualizarTela(j));

function atualizarTela(obj){
  console.log(obj)
  for(let i = 0; i < obj.msg.length; i++){
    let usr = obj.usuarios[i % 2];
    imprimir(usr, obj.msg[i]);
  }
}

function imprimir(usr, msg){
  let p = document.createElement("p");
  p.textContent = `${usr} disse: ${msg}`;
  document.body.appendChild(p);
}


/*
// XHR
let xhr = new XMLHttpRequest();
xhr.addEventListener("load", atualizar);
xhr.open("get","data.json");
xhr.send();


function atualizar(evt){
  let text = evt.target.responseText;
  let clone = JSON.parse(text);
  clone.msg.push("HAHAHHAHAH");
  let text2 = JSON.stringify(clone);
  console.log(text2);
}*/
