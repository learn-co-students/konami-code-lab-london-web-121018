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
  let codeIndex = 0

  function onKeyDown(key) {

    const currentKey = key.key


    if (currentKey === codes[codeIndex]) {
      codeIndex++;
      console.log(key)

      if (codeIndex === codes.length) {
        window.alert("Correct!");
        console.log("win!")
        codeIndex = 0;
      }
    } else {
      codeIndex = 0;
    }
  }

  document.body.addEventListener('keydown', onKeyDown)

}
