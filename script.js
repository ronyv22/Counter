/*Build a simple counter*/

/*

Step1 create an html doc with a container that will house the p element and button elements +/-

*/








/*Defined a variable called count with a value of 0 for the starting point*/

let count = 0;

/*Declared variables and assigned them to the getElementById method to access and locate the elements from the html document*/
const counterElement = document.getElementById('count');
const subButtonElement = document.getElementById('sub');
const plusButtonElement = document.getElementById('plus');

/*I Set up an addEventListener method for the +/- button elements everytime the buttons are clicked.
The number value of the counter element will increment/decrement by 1 and call the function to change color*/
plusButtonElement.addEventListener('click', () => {
  count++;
  counterElement.textContent = count;
  applyColor();
});

subButtonElement.addEventListener('click', () => {
  count--;
  counterElement.textContent = count;
  applyColor();
});

/*Defined a function that will be called to change the color of the value if the conditional statements are true*/
function applyColor() {
  if (count > 0) {
    counterElement.style.color = '#3bceac';
  } else if (count < 0) {
    counterElement.style.color = '#ee4266';
  } else {
    counterElement.style.color = 'black';
  }
}
