const num = prompt(`Number`)
const degree = prompt(`Degree`)

  function x (num, degree = 1){
    if (isNaN(num)|| isNaN(degree)){
        return`some error`
    }
    return Math.pow (num, degree)
  }

  let a = Number (num)
let b = Number (degree)
if (num === null || degree === null){
  alert(`wrong type`)
} else {
  const result = x (a, b)
  alert(result)
}