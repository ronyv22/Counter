/*Build a simple counter*/

/*
Step 1: Create an html doc with a container that will house the counter display and button elements +/-, linking the document to the JavaScript file.
Step 2: Create a css doc that will be used to style the counter display an +/- buttons
Step 3: Declare variables for the count and +/- buttons that will be accessed from the html doc
Step 4: Set up EventListeners for buttons to increment/deincrement to pull functions when clicked on
Step 5: Define a function that will change color of the counter display when the value goes to postive or negative.
*/


/* 
First, I declared a variable called count and intialized it to a value of 0 for the starting point for the counter

Next, I declared variables and assigned them to the getElementById method to access the elements from the html document by Id

After that, I used the EventListener method, to set up a function that will be called when the +/- buttons are clicked on. The increment/decrement operators will update the count variable value by 1. 
I also used the textContent property to update the counter element display in the html doc whenever the count changes. 

After that, I added another function to change the color of the counter element display when changed.

Finally, I defined a function that will be called to change the color of the counter element display if the conditional statements are true
*/


let count = 0;


const counterElement = document.getElementById('count');
const subButtonElement = document.getElementById('sub');
const plusButtonElement = document.getElementById('plus');


plusButtonElement.addEventListener('click', function() {
  count++;
  counterElement.textContent = count;
  applyColor();
});

subButtonElement.addEventListener('click', function() {
  count--;
  counterElement.textContent = count;
  applyColor();
});


function applyColor() {
  if (count > 0) {
    counterElement.style.color = '#3bceac';
  } else if (count < 0) {
    counterElement.style.color = '#ee4266';
  } else {
    counterElement.style.color = 'black';
  }
}
