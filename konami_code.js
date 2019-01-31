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

let index = 0;

document.addEventListener('keydown', e => eventHandler(e.key));



function eventHandler(keylisten) {
    if(keylisten === codes[index]){
      index ++;
      console.log(keylisten, index, codes.length);

      if(index === codes.length){
        index = 0;
        return window.alert("Secret unlocked");
      }

    }else {
      index = 0;
    }
}


// Keys for A, B, and C keys.
// const alphabet = ['a', 'b', 'c'];
 
// // Keep track of index outside of the event handler.
// let index = 0;
 
// // This is the function that would be invoked by the event listener.
// function onKeyDownHandler(e) {
//   const key = e.key;
 
//   if (key === alphabet[index]) {
//     index++;
 
//     if (index === alphabet.length) {
//       alert("Hurray!");
 
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
// }