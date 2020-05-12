const convertToRs = (dollar) => {
    if(typeof dollar === 'number'){
        dollar * 65
    } else{
        throw Error('Amounts need to be in  number')
    }
}
try {
   const myValue = convertToRs('four')
   console.log(myValue);
} catch (error) {
    console.log(error)
    
}

console.log('I will not run if program crashes')