var counter = 0;



////////////////////////////
//changeBackground
function changeBackground(color) {
  
  var mainContainer = document.getElementById('main-container');

  mainContainer.style.background = color;
}

/////////////////////////////
///////////creating Main-Button

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



///////////////////////////////////
///////creating helpful-Button
function create_helpful_Button(text){ 
  
   let button = document.createElement("button");

   button.style.height=14;
   button.textContent=text;
   button.id=text;;
 
   let place = document.getElementById("input");
   place.insertAdjacentElement("afterend",button);
   return button;
}




/////////////////////////
///Delete-Button
function add_delete_button(obj,main_button,buttonContainer){
  obj.addEventListener("click",function(){

    buttonContainer.removeChild(main_button);
    
    Remove_Elements_by_ID("delete");
    Remove_Elements_by_ID("select");
    counter--;
    
  });
}



/////////////////////////////////
/////////add_change_Background_button
function add_change_Background_button(obj,color){
  obj.addEventListener("click",function(){
  changeBackground(color) ;

  Remove_Elements_by_ID("select");
  Remove_Elements_by_ID("delete");
  counter--;
  
  
  });
}



////////////////////////////
//////////Adding Main-Button
function addButton() {
  var color =  document.getElementById('input').value;

  var button_main = createButton(color);
  var buttonContainer = document.getElementById('button-container');
  buttonContainer.appendChild(button_main);
  
  button_main.addEventListener('click',button_control);
  

  function button_control(){
   if(counter===0){
    add_change_Background_button(create_helpful_Button("select"),color)
    add_delete_button(create_helpful_Button("delete"),button_main,buttonContainer);
    counter++;
  }
  else{
    Remove_Elements_by_ID("select");
    Remove_Elements_by_ID("delete");
    counter--;
    button_control();

  }
}  
  
  
}




function Remove_Elements_by_ID(ID){
 
  var element = document.getElementById(ID);
  element.parentNode.removeChild(element);
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