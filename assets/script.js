const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log("Hello World")

//EventListener pour arrows
const btn = document.getElementById("btn");

function showMsg() {
  console.log("Bonjour");
}

btn.addEventListener("click", showMsg);


 

let numero = 0; /*numero de slide*/
const bullets = document.querySelectorAll(".dots .dot");
let i = 0;

function plusSlides(sens){
	numero = numero + sens;
	
	if( numero == slides.length) numero = 0;
	if( numero == -1) numero = slides.length-1;

	/*Changer la source des images*/
	document.getElementById("slide").src = "assets/images/slideshow/" + slides[numero].image;
	document.getElementById("texte").innerHTML = slides[numero].tagLine;


	/*Parcourir les dots*/
	 const dot = document.getElementsByClassName('dot');
	 bullets.forEach((bullet, index)=> {
	 for (i = 0; i < 4; i++) {
		if ( i === numero) 
		dot[i].classList.add('dotselected');
		else
		dot[i].classList.remove('dotselected');
	} });



}