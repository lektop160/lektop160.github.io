window.onload = function(){
	window.setInterval(function(){
		var now = new Date();
		var clock = document.getElementById("clock");
	clock.innerHTML = now.toLocaleTimeString();
}, 1000);
};
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let lektop = document.querySelector('#lektop');
lektop.addEventListener('click', ()=>{
	window.open('https://lektop158.github.io', '_blank');
})
function AlertMsg() {
var zombig = confirm ("You are getting redirected. Click OK to continue.")
if (zombig)
window.location="http://lektop159.github.io";
}
for(let i = 1; i<10; i++){
	console.log(i);
}
const massive = [1, 2, 3];
massive.push(10);
console.log(massive);
massive.pop();
console.log(massive);
console.log(massive.join(','));
