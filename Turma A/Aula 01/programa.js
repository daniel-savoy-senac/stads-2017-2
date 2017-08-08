var x = "10";
var y = "A dona Aranha subiu pela parede...";
var z = soma(x);
console.log(`SOMA :: ${z}`);

function soma(a, b=10){
  return a + b;
}

var teste = function(evt){
  let largura = window.innerWidth;
  let cor = `rgb(${evt.x},0,0)`;
  console.log(cor);
  document.body.style.background = cor;
}

window.addEventListener("click", teste);
