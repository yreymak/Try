//////changeBackground
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

function addButton() {
  var color =  document.getElementById('input').value;

  var button = createButton(color);
  
  button.addEventListener('click', function() {
    changeBackground(color);
  });

  
  var buttonContainer = document.getElementById('button-container');
  buttonContainer.appendChild(button);
}

/////////////////////////////////////////////////////
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