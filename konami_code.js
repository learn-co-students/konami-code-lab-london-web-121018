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

let body = document.body
 
 let index = 0;

console.log("outside: ", index);

body.addEventListener('keydown', function(e) {
  if (e.key === codes[index]) {
       index++;
       console.log("inside the event :" + index);
  if(e.key === codes[codes.length -1]) {
    index = 0;
    alert("KONAMI");
  } 
  } else {
    index = 0;
    console.log("wrong key " + e.key, "index " + index);
  }
  console.log("outside the event" + index)
});
}
