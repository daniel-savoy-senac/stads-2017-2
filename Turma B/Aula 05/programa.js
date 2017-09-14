function iniciar() {
  let teste = document.querySelector("#teste");
  let x = "HHAH'AHAH";
  let y = 'HHAH ${x} AHAH';
  let z = `HHAH ${x} AHAH`;
  console.log(y);
}

window.addEventListener("load", iniciar);
