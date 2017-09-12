let iniciar = () => {
  // QUERIES
  let elm0 = document.querySelector("#raiz");
  let elm1 = document.querySelectorAll("body");
  let elm2 = document.querySelectorAll(".teste");

  let elm3 = document.getElementById("raiz");
  let elm4 = document.getElementsByTagName("body");
  let elm5 = document.getElementsByClassName("teste");

  // Criar NOVO
  // PARAM: Nome da Tag
  let novo = document.createElement("div");
  novo.setAttribute("class", "novo");
  console.log(novo);

};

window.addEventListener("load", iniciar);
