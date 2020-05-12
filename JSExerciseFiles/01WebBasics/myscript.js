//alert('File is attached')
//console.log(document)
//console.log(document.head)
//console.log(document.body)
//console.log(document.documentURI)
//console.log(document.title)
//document.title='I got changed'
//console.log(document.getElementById('idone'))
//console.log(document.getElementsByClassName('classone'))
// const myElement = document.querySelectorAll('#idone')
// console.log(myElement[0])

// const myElement = document.querySelectorAll('.classone')
// console.log(myElement)

const myPElements = document.querySelectorAll('p')
//myPElements.textContent = 'I am being changed JS'

myPElements.forEach(function(p){
    p.textContent = 'I am changed using loop in js'
})

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click',()=>{
  // console.log('Button was pressed!')
  event.target.textContent = 'I was Clicked'
})

//track input form

document.querySelector('#myForm').addEventListener('change',(event) =>{
   console.log(event.target.value) 
})