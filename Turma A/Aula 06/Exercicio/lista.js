const ler = () => document.querySelector("input").value;

const inserir = texto => {
  let item = document.createElement("li");
  item.textContent = texto;
  document.querySelector("ul").appendChild(item);
};

const lerValores = () => {
  let items = [...document.querySelectorAll("li")];
  return items.map(li => li.textContent);
};

const duplicado = texto => {
  let lista = lerValores();
  return lista.some(item => texto === item);
  /*
  for(let i = 0; i < lista.length; i++)
    if(texto === lista[i]) return true;
  return false;
  */
};

function adicionar(){
  let texto = ler();
  if(!duplicado(texto))
    inserir(texto);
}

function main(){
  let btn = document.querySelector("button");
  btn.addEventListener("click", adicionar);
}

window.addEventListener("load", main);
