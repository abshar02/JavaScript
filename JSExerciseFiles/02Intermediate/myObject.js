//let myArray = ['name',33,true]

let myYoutubeVideo1 = {
    title:'Loops in javascript',
    videoLength:15,
    videoCreator:'Abshar',
    videoDescription:'this is a video description and a long one'
}

let myYoutubeVideo2 = {
    title:'functions in javascript',
    videoLength:10,
    videoCreator:'Abshar',
    videoDescription:'this is a video description and a long one'
}
// console.log(myYoutubeVideo);
// console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator} author`)

// let myCourse = {
//     title :'Newly Added Course',
//     titleLength:'15',
//     courseAuthor:'Abshar',
//     coursePrice:'$15',
//     titleDescription : 'Hey we have added latest course'

// }
// console.log(myCourse)
// console.log(`Hey newly added course on ${myCourse.title} by ${myCourse.courseAuthor} with CoursePrice ${myCourse.coursePrice}`)

let changeVideoLength = function(myObject){
    //console.log(`Time of this video is:${myObject.videoLength}`)
   // return `Time of this video is: ${myObject.videoLength + 3}`
   return{
       formatOne:`Time of this video is: ${myObject.videoLength + 3}`,
       formatTwo :`Time of this video is: ${myObject.videoLength + 2}`
   }

}
console.log(changeVideoLength(myYoutubeVideo1));
//changeVideoLength(myYoutubeVideo2)