let sayHi = function(name){
    console.log('Greeting message for user');
    console.log(`Hey ${name}`)
}

//sayHi('Abshar')

let fullNameMaker = function(firstName,lastName){
    console.log("Welcome to Javascript")
    console.log(`Happy to learning ,${firstName} ${lastName}`)

}
//fullNameMaker('Abshar','Rafique')

let myAdder = function(num1,num2){
    let Added = num1 + num2
    return Added
}
let result = myAdder(16,8)
//console.log(result)


let myDivider = function(num1,num2){
    return Divider = num1/num2
}

let result1 = myDivider(21,3)
console.log(result1)


let myMultiplier = function(num1,num2){
    return num1 * num2
}
let myResult= myMultiplier(5,6)
console.log(myResult)


let guestUser = function(name = unName, courseCount = 2){
    return 'Hello ' + name +  ' and your courseCount is: '+courseCount
}
console.log(guestUser('Abshar',2))




