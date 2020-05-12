let getMyGrade = function(currentMarks, totalMarks){
    let myPercent = (currentMarks/totalMarks) * 100;
    let myGrade = ''

    if(myPercent >= 90){
        myGrade = 'A'
        console.log('Excellent')
    } else if(myGrade >= 80){
        myGrade = 'B'
    } else if(myGrade <= 70)
    {
        myGrade = 'C'
    } else{
        myGrade = 'F'
    }
    return `Your grade is ${myGrade} and percentage is ${myPercent}`
    
}
    let yourResult = getMyGrade(72,100) 
        console.log(yourResult)
