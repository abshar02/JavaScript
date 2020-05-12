let isVerified = false
let isLoggedIn = true
let hasPaymentToken = false
let isGuest = true

if(isVerified && isLoggedIn && hasPaymentToken){
    console.log('Greeting message to user')
    console.log('Grant access to paid course')
} else if(isVerified || isGuest){
    console.log('Allow Free courses')
} else{
    console.log('Message: Please contact admin')
}
 