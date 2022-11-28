window.onload = function(){
	window.setInterval(function(){
		var now = new Date();
		var clock = document.getElementById("clock");
	clock.innerHTML = now.toLocaleTimeString();
}, 1000);
};

let number = 5;
number=10;
console.log(number);
const sum = 8;
console.log(sum);
let text = 'andrei';
console.log(text);
console.log(number + sum);