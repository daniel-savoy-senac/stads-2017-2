let iniciar = () => {
  // QUERIES
  let elm0 = document.querySelector("#raiz");
  let elm1 = document.querySelectorAll("body");
  let elm2 = document.querySelectorAll(".teste");

  let elm3 = document.getElementById("raiz");
  let elm4 = document.getElementsByTagName("body");
  let elm5 = document.getElementsByClassName("teste");
};

let criar = (evt) => {
  // Criar NOVO
  // PARAM: Nome da Tag
  let novo = document.createElement("div");

  // Seta attribute
  novo.setAttribute("class", "novo");

  // Modifica propriedade (style)
  novo.style.left = `${evt.x}px`;
  novo.style.top = `${evt.y}px`;

  // Modifica textContent
  novo.textContent = ~~(Math.random() * 255);

  console.log(novo);
  document.body.appendChild(novo);
};

window.addEventListener("load", iniciar);
window.addEventListener("click", criar);
