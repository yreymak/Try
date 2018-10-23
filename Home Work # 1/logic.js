function output(){ //функция обработки  ввода пользователя
 var temp=document.getElementById("inpur").value; 
  return temp;
}

function createButton(color){
  var colour=color; //для хранения значения цвета для другой ф-ции
    var div =document.getElementById("down");//выбираю div, в котором юуду размещать кнопки
    var butt = document.createElement("button");//создаю саму кнопку
    butt.innerHTML="применить";//текст кнопки
   
    butt.style=" width:100px;height:70px; border-top-left-radius: 100% 20px;  border-bottom-right-radius: 100% 20px;background: "+color; //стиль  кнопки
    butt.onclick=apply;     //вызов кнопки 
 
    function apply(){       //функция, меняющая фон страницы
      var templ=document.getElementById("entire"); //выбираю самый первый div (всю страницу)
       templ.style.background=color; //присваиваю фону страницы цвет
   }

    div.insertAdjacentElement("beforeend",butt); // добавляю созданную кнопку в выбранный ранее div 
}
