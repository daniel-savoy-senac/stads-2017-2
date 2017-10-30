let xhr = new XMLHttpRequest();
xhr.addEventListener("load", atualizar);
xhr.open("get","data.json");
xhr.send();


function atualizar(evt){
  let text = evt.target.responseText;
  let clone = JSON.parse(text);
  clone.msg.push("HAHAHHAHAH");
  let text2 = JSON.stringify(clone);
  console.log(text2);
}
