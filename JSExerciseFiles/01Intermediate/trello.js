const days = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun']

// console.log(days[3])


// days.forEach(function(day,index){
//     console.log(`starts with ${index+1} -- ${day}`);
// })

//console.log(days.length-1)

for (let i = 0; i < days.length; i++) {
    console.log(days[i])
    
}

for (let i = days.length-1; i >=0; i--) {
    const element = days[i];
    console.log(element)
    
}