function iniciar() {
  let teste = document.querySelector("input#teste");

  let x = "HHAH'AHAH";
  let y = 'HHAH ${x} AHAH';
  let z = `HHAH ${x} AHAH`;

  teste.value = z;

  console.log(teste.value);
}

window.addEventListener("load", iniciar);
