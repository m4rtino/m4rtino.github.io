var myImage = document.querySelector("img");

myImage.onclick = function() {
var src = myImage.getAttribute("src");
if (src === "images/logo.jpg"){
	myImage.setAttribute("src","images/logo2.jpg")
	} else {
	myImage.setAttribute("src","images/logo.jpg")
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {									/* funkcja */
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {			//warunek
  setUserName();
} else {
  var storedName = localStorage.getItem('name');//warunek
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
