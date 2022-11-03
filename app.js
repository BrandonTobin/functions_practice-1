function printGreeting(name) {
  return `Hello there ${name}`
}
console.log(printGreeting('Slimer'))
//Research into .split() and what you can add into arg.
function reverseWordOrder(str) {
  //tracking variables
  let result = []
  //turn into array of strings
  let strArr = str.split(' ')
  //Use a backwards
  for (let i = strArr.length - 1; i >= 0; i--) {
    result.push(strArr[i])
  }
  let resultStr = result.join(' ')
  //Have our function return data for use somewhere else in our code
  //Every function can have a return, but depending on the use case and if you need data, you may not need to use one
  //You can also use a return to simply exit the function code block
  return resultStr
}

console.log(reverseWordOrder('Call me Ishmael'))
console.log(reverseWordOrder('Ishmael me Call'))
console.log(reverseWordOrder('I use Lâncome on my comb'))
