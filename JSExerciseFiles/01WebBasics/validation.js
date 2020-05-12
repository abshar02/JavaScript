//alert('connected')
function myvalidation(){
    let myvalue = document.getElementById('myForm').value;
   if(isNaN(myvalue) || myvalue<1 || myvalue>30){
       console.log('Not a valid input')

   } else {
       console.log('This input is Ok')
   }
}

//form validation

document.querySelector('.myForm').addEventListener('submit',(event) =>{
  
   console.log(event.target.realname.value)
})
