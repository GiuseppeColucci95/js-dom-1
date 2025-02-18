//get image node from the document and save it in a variable
const imgEl = document.querySelector('img');
console.log(imgEl);

//get button node from the document and save it in a variable
const btnEl = document.querySelector('button');
console.log(btnEl);
console.log(btnEl.innerText);

//add event listener to the button
btnEl.addEventListener('click', function () {

  console.log("Button clicked!");

  //check if the lamp is turned on or turned off
  if (imgEl.src == "./assets/img/white_lamp.png") {
    imgEl.src = "./assets/img/yellow_lamp.png";
    btnEl.innerText = "Spegni";
    console.log(imgEl);
    console.log(btnEl.innerText);
  } else {
    imgEl.src = "./assets/img/white_lamp.png";
    btnEl.innerText = "Accendi";
    console.log(imgEl);
    console.log(btnEl.innerText);
  }
});