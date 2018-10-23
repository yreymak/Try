function output(){
 var temp=document.getElementById("inpur").value;
  return temp;
}

function createButton(color){
  var colour=color; //для хранения значения цвета для другой ф-ции
    var div =document.getElementById("down");
    var butt = document.createElement("button");
    butt.id="knopka";
    butt.innerHTML="применить";
   
    butt.style=" width:100px;height:70px; border-top-left-radius: 100% 20px; border-bottom-right-radius: 100% 20px;background: "+color;
    div.insertAdjacentElement("beforeend",butt);

  
}

function apply(colot){        //эта функция на будущее 
  var templ=document.getElementById("entire");
    templ.style.background=colot;
}