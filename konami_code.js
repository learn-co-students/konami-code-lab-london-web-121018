const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const input = document.querySelector('body');
let index = 0
function init() {
  // your code here
  input.addEventListener('keydown', function(e) {
  const key = e.key;



  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }

});
}
