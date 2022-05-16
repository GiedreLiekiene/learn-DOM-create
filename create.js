const paragraph = document.createElement('p');
const h1 = document.createElement('h1');

h1.textContent = "Cool text!";

paragraph.innerHTML = "My text is bold <em>Giedre</em> text"


document.body.appendChild(h1);

//select parent node ul
const itemList = document.querySelector('ul')
const item = document.createElement('li');

let ul = document.getElementsByClassName('ul');
//
const itemWithId = document.getElementById('last');
const itemFirstId = document.getElementById('first');
item.textContent = "text";

itemList.insertBefore(item, itemList[1])
itemList.removeChild(itemList.lastElementChild);
itemList.removeChild(itemFirstId);

console.log(h1);
console.log(paragraph);