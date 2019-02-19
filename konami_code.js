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

  let codeIndex = 0;
  // your code here
  document.body.addEventListener('keydown', function (e) {
    const key = e.key;

    if (codes[codeIndex] === key) {
      codeIndex += 1;
    } else {
      codeIndex = 0;
    };

    if (codeIndex === codes.length) {
      window.alert("You entered the secret code 👀");
      idx = 0;
    };
  });
};
