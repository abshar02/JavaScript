const myTodos = []

myTodos.push('Eat Morning Breakfast')
myTodos.push('Go to Office')
myTodos.push('Go to Gym')

// myTodos.forEach(element => {
//     console.log(myTodos)
    
// });

myTodos.forEach(function(todo,i){
    console.log(`Your task no. ${i+1} is: ${todo}`)
})

for (let i = 0; i < myTodos.length; i++) {
    const element = myTodos[i];
    console.log(element)
    
}