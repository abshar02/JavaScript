let userEmail = 'rafiqueabshar32@gmail.com'
let password = '1234'


// console.log(userEmail.toUpperCase().trim())
//console.log(userEmail.toUpperCase())
// console.log(password.length)

let userChecker = function(myString){
    if((myString.includes(32)) && (myString.length >6)){
        return true
    }
    return false

}
console.log(userChecker(userEmail))

let passChecker = function(pass){
    if((pass.includes(32)) && (pass.length >6)){
        return true
    }
    return false
}

console.log(passChecker(password))