window.onload = function(){
	window.setInterval(function(){
		var now = new Date();
		var clock = document.getElementById("clock");
	clock.innerHTML = now.toLocaleTimeString();
}, 1000);
};



// var zombig = document.querySelector('#zombig');
// const lektop = document.querySelector('#lektop');

/*zombig.onclick = function() {
    const answer = +prompt('1-Yes, 0-No','');
		console.log(answer);

	if(zombig == 1){zombig.addEventListener('click', ()=>{
		window.open('https://lektop159.github.io', '_blank');
	})}else{}
    }*/

// zombig.addEventListener('click', ()=>{
// 	window.open('https://lektop159.github.io', '_blank');
// })

lektop.addEventListener('click', ()=>{
	window.open('https://lektop158.github.io', '_blank');
})

function AlertMsg() {
var zombig = confirm ("You are getting redirected. Click OK to continue.")
if (zombig)
window.location="http://lektop159.github.io";
}

alert(Добро пожаловать в - Avalon)

/*const result = confirm('Вам есть 18?')
console.log(result);*/

/*console.log(`https://lekop${answer}.github.io`)*/

/*const answstud = +prompt('Сколько вам лет?','');

if(answstud >= 18){
	console.log('Добро пожаловать')
} else if(answstud < 18){
	console.log('Shit');
} else{
	console.log('Back');
}*/

/*let a = 1
while(a < 100){
	console.log(a);
	a++
}*/

for(let i = 1; i<10; i++){
	console.log(i);
}

/*function sayHello(){
	console.log('Hello');
}
sayHello;

function calc(a, b){
	return(a+b);
}

calc(5, 2);

let sum = calc(5, 2)
console.log(sum);*/

