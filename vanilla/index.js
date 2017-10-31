/* console.log('Hi');


const question = prompt('Hi?');

if (question === 'fine') {
  alert("I'm so glad to hear that.");
} else {
  alert('Are you ok? ');
} */

const input = document.getElementsByClassName('new-todo') [0] ;

console.log(input);

input.addEventListener('keydown', function(e) {
  console.log(e);
  if (e.keyCode === 13) {
    alert('できたよ');
  }
});


