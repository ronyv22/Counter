/*Declared variables and assigned them to the getElementById method to access and locate the elements from the html document*/
const count = document.getElementById('count');
const sub = document.getElementById('sub');
const plus = document.getElementById('plus');

/*Set up an addEventListener method for the +/- buttons when clicked on will increment/decrement 
the number value from the p element identified as count and call the function to change color*/
plus.addEventListener('click', () => {
  count.innerHTML++;
  applyColor()
});

sub.addEventListener('click', () => {
  count.innerHTML--;
  applyColor()
});

/*Defined a function that will be called to change the color of the value if the conditional statements are true*/
function applyColor() {
  if (count.innerHTML > 0) {
    count.style.color = '#3bceac';
  } else if (count.innerHTML < 0) {
    count.style.color = '#ee4266';
  } else {
    count.style.color = 'black';
  }
}
