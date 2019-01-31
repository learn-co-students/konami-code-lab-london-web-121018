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
  let index = 0
  main = document.body


   function pressedKey(event) {
    // debugger
    let key = event.key

     if (key === codes[index]) {
      index++
      console.log(key)
      if (index === codes.length) {
        alert("HURRAY!!!");

         index = 0;
      };
    } else {
      index = 0;
    };
  };

   main.addEventListener('keydown', pressedKey)
};
