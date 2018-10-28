//color=document.getElementById('input').value;;

//changeBackground
function changeBackground(color) {
  
  var mainContainer = document.getElementById('main-container');

  mainContainer.style.background = color;
}

function createButton(color) {
  if(ValidImage(color)){
  var button = document.createElement('button');
  
  button.className = 'button';
  button.innerHTML = color;
  button.style.background = color;
  return button;
}else{
  alert("Invalid color\nChange your choise");
}
}

function create_helpful_Button(text){ 
   let button = document.createElement("button");
   button.style.height=14;
   button.textContent=text;
   let place = document.getElementById("input");
   place.insertAdjacentElement("afterend",button);
   return button;
}

function add_delete_button(obj,main_button,buttonCon){
  obj.addEventListener("click",function(){
    buttonCon.removeChild(main_button);
    obj.parentNode.removeChild(this);
  });
}


function add_change_Background_button(obj,color){
  obj.addEventListener("click",function(){
  changeBackground(color) ;
   
  obj.parentNode.removeChild(this);
  });
}



function addButton() {
  var color =  document.getElementById('input').value;

  var button_main = createButton(color);
  
  
  button_main.addEventListener('click',function(){
    add_change_Background_button(create_helpful_Button("select"),color)
    add_delete_button(create_helpful_Button("delete"),button_main,buttonContainer);
  });

  
  var buttonContainer = document.getElementById('button-container');
  buttonContainer.appendChild(button_main);
  //buttonContainer.insertAdjacentElement("beforeend",button_main);
}

//////////////////////////////////////////////////////
//////__delete__////////////////////////////////////
function obj_delete(obj){
   delete obj;
}



//////////////////////////////////////////////////////
//Checks color valid
/////////////////////////////////////////////////////
function WhiteCheck(value,obj){
  obj.style.color="rgb(255,255,255)";
  obj.style.color=value;
  return obj.style.color;
}

function BlackCheck(value,obj){
  obj.style.color="rgb(0,0,0)";
  obj.style.color=value;
  return obj.style.color;
}

function ValidImage(color){

  if(color===""){return false;}
    
  var image=document.createElement("img");
  
  return (BlackCheck(color,image)===WhiteCheck(color,image));
}