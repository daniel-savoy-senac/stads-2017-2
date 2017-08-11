function colorir(evt){
  let x = evt.x;
  let y = evt.y;
  let lar = window.innerWidth;
  let r = ~~(x / lar * 255);
  console.log(`rgb(${r},0,0)`);
  document.body.style.background = `rgb(${r},0,0)`;
}

window.addEventListener("mousemove", colorir);
