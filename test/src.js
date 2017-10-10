import previousElementSibling from '../';

let element = document.querySelector('ol').children[1];
console.log(element.innerHTML);//Second
let first = previousElementSibling(element);
console.log(first.innerHTML);//First
