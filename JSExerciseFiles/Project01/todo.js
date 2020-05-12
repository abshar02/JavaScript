//alert('connected')

// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')

// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h)


// var val=5
// while (val >0 ){
//     console.log(val);
//     val--
// }

var ul = document.getElementById('list');


var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem);


function addItem(){
     // console.log('Add button clicked')
     var input = document.getElementById('input');
     var item = input.value;
     ul = document.getElementById('list')
     var textnode = document.createTextNode(item)

     if(item === ''){
         return false;
         //Add a p tag and assign a value of "Enter your todo"
     } else{
         //Create li
         li = document.createElement('li');

         var checkbox = document.createElement('input');
         checkbox.type = 'checkbox';
         checkbox.setAttribute('id','check');

         //create label
         var label = document.createElement('label');
         label.setAttribute('for','item'); // optional

         //add this element to web page
         ul.appendChild(label);
         li.appendChild(checkbox);
         label.appendChild(textnode);
         li.appendChild(label);
         ul.insertBefore(li,ul.childNodes[0]);
        // li.className = 'visual';

        setTimeout(() => {
            li.className = 'visual';
        },2)
         input.value = '';
     }
}

function removeItem(){
   // console.log('Delete button clicked')
   li = ul.children
   //console.log(li)
   for(let index=-0; index < li.length; index++){
    //    const element = li[index];
    //    console.log(element);
    while (li[index] && li[index].children[0].checked) {
        ul.removeChild(li[index])
        
    }
   }
}
