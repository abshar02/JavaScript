//alert('Hello');
localStorage.setItem('hero','thor');
localStorage.setItem('todo','Buy Ice tea');
var myHero = localStorage.getItem('hero')
console.log(myHero);
console.log(localStorage.getItem('todo'));

localStorage.setItem('todo','Record youtube videos');
console.log(localStorage.getItem('todo'));

localStorage.removeItem('hero');
//localStorage.removeItem('todo')
localStorage.clear();
//console.log(localStorage.getItem('todo'));
myHero = localStorage.getItem('hero')
console.log(myHero)

