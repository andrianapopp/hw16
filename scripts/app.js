const num = prompt(`Number`)
const degree = prompt(`Degree`)

  function x (num, degree = 1){
    if (typeof num !== `number` || typeof degree !== `number`){
        alert(`some error`)
    }
    return Math.pow (num, degree)
  }

  let a = Number (num)
let b = Number (degree)

  const result = x (a, b)

alert (`${result}`)