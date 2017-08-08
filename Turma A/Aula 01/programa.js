var x = "10";
var y = "A dona Aranha subiu pela parede...";
var z = soma(x);
console.log(`SOMA :: ${z}`);

function soma(a, b=10){
  return a + b;
}

var teste = function(evt){
  let resultado = soma(evt.x,evt.y);
  console.log(resultado);
}

window.addEventListener("click", teste);
