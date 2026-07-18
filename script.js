// get element by id
// let headElement = document.getElementById(`header`);
// headElement.style.fontSize = '50px';
// headElement.style.color = 'red';
// con


// let itemsParents = document.getElementById('items');
// let item = itemsParents.getElementsByClassName('item');

// for (let i = 0; i<item.length; i++) {
//     const element = item[i].style.color ='red';
    
// }

// console.log(item);

let items = document.querySelector('#items').querySelector('.item:nth-child(2)');
items.style.color ='red';
