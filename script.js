var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2"); 
var body = document.getElementById("gradient");
var randomColor1 = document.getElementById("color1Random")
var randomColor2 = document.getElementById("color2Random")
//since it is a query selector we choose the class the same way we would in CSS
//ie .class



// function randomColor(){
// 	var hue = 'rgb(' 
// 	+ (Math.floor(Math.random() * 256)) 
// 	+ ',' 
// 	+ (Math.floor(Math.random() * 256)) 
// 	+ ',' 
// 	+ (Math.floor(Math.random() * 256)) 
// 	+ ')';
// 	console.log(hue);
// }
//this one generates a random RGB color

// function randomizeColor1(){
// 	var hue = '#'+Math.random().toString(16).substr(-6);
// 	console.log(hue);
// 	color1 = hue;
// }

// function randomizeColor2(){
// 	var hue = '#'+Math.random().toString(16).substr(-6);
// 	console.log(hue);
// 	color2 = hue;
// }

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


// function randomizeColor1(){
// 	color1 = '#'+Math.random().toString(16).substr(-6);
// 	console.log(color1);
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// function randomizeColor2(){
// 	color2 = '#'+Math.random().toString(16).substr(-6);
// 	console.log(color2);
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

//In this case the function works with either click one random button OR the color selectors
//however once I click the random button I cant use the color input selectors

//.textContent adds text to the DOM, this shows how there are several ways to add 
//text to the DOM

window.onload = setGradient;

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

// randomColor1.addEventListener("click", randomizeColor1)

// randomColor2.addEventListener("click", randomizeColor2)

//the input event listener listens for a change in value of the input, in this case
//the color picker

//in this case we dont need to call the function since 
//we want to call it every time the input is selected
