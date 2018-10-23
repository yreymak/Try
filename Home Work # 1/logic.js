function changeBackground(color) {
  var mainContainer = document.getElementById('main-container');

  mainContainer.style.background = color;
}

function createButton(color) {
  var button = document.createElement('button');

  button.className = 'button';
  button.innerHTML = color;
  button.style.background = color;

  return button;
}

function addButton() {
  var color = document.getElementById('input').value;

  var button = createButton(color);
  
  button.addEventListener('click', function() {
    changeBackground(color);
  });
  
  var buttonContainer = document.getElementById('button-container');
  buttonContainer.appendChild(button);
}
