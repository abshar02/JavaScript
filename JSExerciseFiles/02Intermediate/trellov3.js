let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0 ,

    addMeeting: function(num){
        //console.log(this);
        this.meetings = this.meetings + num
    },
    summary: function(){
        return `You have ${this.meetings} meetings today!`
    }

}
myTodos.addMeeting(3)
console.log(myTodos.summary());
//myTodos.summary()

// let myTodosTwo = {
//     day: 'Tuesday',
//     meetings: 12,
//     meetDone: 3,

//     addMeeting: function(){
//         console.log(this);
//     }
// }
// myTodosTwo.addMeeting()

