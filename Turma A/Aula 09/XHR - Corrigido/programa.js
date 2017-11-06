// FETCH

fetch("data2.json")
  .then(r => r.json())
  .then(j => atualizarTela(j));

function atualizarTela(obj){
  console.log(obj)
  for(let i = 0; i < obj.mensagens.length; i++){
    let msg = obj.mensagens[i];
    let usr = obj.usuarios.find(u => u.id === msg.usuario);
    let humor = obj.humores[usr.humor];
    imprimir(msg, usr, humor);
  }
}

function imprimir(msg, usr, humor){
  let p = document.createElement("p");
  p.appendChild(imprimirUsr(usr));
  p.appendChild(imprimirHumor(humor));
  p.appendChild(imprimirMsg(msg));
  document.body.appendChild(p);
}

function imprimirUsr(usr){
  let element = document.createElement("div");
  element.className = "usr";
  element.setAttribute("title", usr.nome);
  element.textContent = usr.apelido;
  return element;
}

function imprimirHumor(humor){
  let element = document.createElement("div");
  element.className = "humor";
  element.textContent = humor.texto;
  return element;
}

function imprimirMsg(msg){
  let element = document.createElement("div");
  element.className = "msg";
  element.textContent = msg.texto;
  element.setAttribute("title", msg.tempo);
  return element;
}
