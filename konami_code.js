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

function init() {
  // your code here
  let indx = 0;
  document.body.addEventListener('keydown', (letter) => {
    let comp = letter.key;
  
    if (comp === codes[indx]) {
      ++indx
      if (indx === codes.length) {
        alert('Correct!')
      }
    } else {
      indx = 0;
    }
  })


}
