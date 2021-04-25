var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var generatorBtn = document.getElementById("GenBackgroud");


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
generatorBtn.addEventListener("click",randomColors);

setGradient();


function setGradient() 
{
	generate( color1.value,color2.value )
}

function generate( colorA,colorB)
{
	body.style.background = 
	"linear-gradient(to right, " 
	+ colorA 
	+ ", " 
	+ colorB
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColors()
{
	var hex = '#';
	var hex2 = '#';
	var range = 'ABCDEF0123456789';

	for (var i = 0; i < 6; i++ ) 
	{
	  var randomC = Math.random();
	  var randomB = randomC * range.length;
	  var floorM = Math.floor(randomB);
	  hex += range.charAt(floorM);
	  hex2 += range.charAt(Math.floor(Math.random() * range.length));
	  
	}
	color1.value = hex;
	color2.value = hex2;
	generate( hex,hex2)
	
}