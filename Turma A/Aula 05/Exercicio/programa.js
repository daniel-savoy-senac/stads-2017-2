function calcular(){

  // acha o seletor de comandos
  let seletor = document.querySelector("select");
  // lê o valor escolhido no select
  let funcIndex = seletor.value;

  // acha os inputs de entrada
  let inputs = document.querySelectorAll(".in");
  // converte de Collection para Array;
  let inArray = [... inputs];

  // acha os inputs de saída
  let outputs = document.querySelectorAll(".out");

  // lê os valores de entrada e converte para número
  let param = inArray.map(i => Number(i.value));

  // cria uma array com as funções de cálculo
  let funcArray = [
    (x => x + 10),
    (x => x * 100),
    (x => x ** 2),
    (x => x ** 3)
  ];

  // escolhe a função de acordo com a seleção do usuário
  let func = funcArray[funcIndex];

  // executa a função em cada parâmetro
  let resultados = param.map(p => func(p));

  // escreve o resultado nos outputs
  for(let i = 0; i < outputs.length; i++){
    outputs[i].value = resultados[i];
  }

}


function iniciar(){
  // pega o primeiro BUTTON da tela
  let btn = document.querySelector("button");

  // chama CALCULAR quando o botão for clicado
  btn.addEventListener("click", calcular);
}

// espera o carregamento da tela para chamar INICIAR
window.addEventListener("load", iniciar);
