// //datatype - Array

// const superHeroes = ['Iron Man',1,'Spider Man','Super Man','Capt.America','Thor']
// console.log(superHeroes)
// console.log(superHeroes[2])
// console.log(superHeroes[superHeroes.length - 5])
// console.log(`We have ${superHeroes.length} superHeroes`)

const numbers = ['one','two','three','four','six','seven']
//console.log(numbers)
// numbers[2] = 'Hello'
// console.log(numbers)

// start
 console.log(numbers.shift())
// console.log(numbers)

//numbers.unshift()
//console.log(numbers.unshift())
numbers.unshift('Something')
console.log(numbers)

// end
//numbers.pop() 
console.log("The element to be deleted is: " +numbers.pop())
console.log(numbers)

console.log("The element to be added :"+numbers.push('eight'))
console.log(numbers)

// Middle

numbers.splice(2,2,'Hello','Hi')
console.log(numbers)