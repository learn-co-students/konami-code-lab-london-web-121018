const codes = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
]

let newA = []
let index = 0

function init () {
  // your code here

  document.body.addEventListener('keydown', e => {
    if (e.key === codes[index]) {
      // console.log(e.key)
      // console.log(codes[index])
      newA.push(e.key)

      index++
    } else {
      // console.log(e.key)
      // console.log(codes[index])
      // console.log(index)
      // console.log('restart')
      index = 0
      // console.log(index)
      newA = []
    }

    if (index === 10) {
      alert("Congrats!")
    }
  })

}




