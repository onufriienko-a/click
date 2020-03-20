'use strict';

// ET = 12 hours, AT = 5 hours

let container = document.querySelector('.container');

function drawAField(horizontalСells, verticallyCells, target = 'table') {

	let elem = document.createElement(target);

	elem.className = 'field';
	elem.style.margin = '20px auto';
	elem.style.height = '250px';
	elem.style.width = '250px';
	elem.style.border = '2px solid black';
	elem.style.borderCollapse = 'collapse';
	container.appendChild(elem);

	for (let i = 0; i < horizontalСells; i++) {
		let tr = document.createElement('tr');
		tr.style.border = '2px solid black';
		elem.appendChild(tr);

		for (let j = 0; j < verticallyCells; j++) {
			let td = document.createElement('td');
			td.style.border = '2px solid black';
			tr.appendChild(td);
		}
	}
}

drawAField(10, 10);

let table = document.querySelector('.field');
let tableClone;

table.addEventListener('click', function (event) {
    if (event.target.tagName === 'TD') {
		event.target.classList.toggle('black');
   	}
});

document.querySelector('.clear-btn').addEventListener('click', function () {
	if (document.querySelector('.black')) {
		tableClone = table.cloneNode(true);
       	document.querySelectorAll('td').forEach(function (item) {
           item.classList.remove('black');
       });
	}
 });

 document.querySelector('.restore-btn').addEventListener('click', function () {
	if (tableClone !== undefined) {
		table.remove('.container');
		container.appendChild(tableClone);
	}
 });
