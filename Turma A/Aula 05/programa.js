function iniciar() {
  /*let teste = document.querySelector("#teste");
  console.log(teste);
  let x = 1 - 2;
  console.log(x);
  let texto = true;
  console.log(texto);*/
  /*
  let gambi = 10 - 5 * 2 ;
  let gambi2 = (gambi, 5);
  console.log(gambi2);
  */
  let array = [0,1,"hahaha",3];
  console.log(array[2]);

  let obj = {a: 10, b: 30, c: array};
  obj.d = obj;

  let f = z => z**2;

  let f2 = (x,y=20) => x*y;

  let f3 = () => 5+4;

  let f4 = z => {
    let x = z*z;
    return x - z;
  }

  let f5 = (a, ...r) => r.map(x => x + 10);


}

let f6 = n => x => x+n;

window.addEventListener("load", iniciar);
