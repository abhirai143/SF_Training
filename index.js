"use strict"
let data

import('./src/moviesPlay.js')
	.then(res => {
		console.log('data imported into data constant');
		data = res;
	});

function inputChanged(event) {
	document.getElementById('output').innerHTML = event.target.value;
}

function onSubmit(event) {
	event.preventDefault();
	console.log('Form Submitted'); 
}

function showCounts() {
	console.log(data.getCounts());
}