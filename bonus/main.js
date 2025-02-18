//get image node from the document and save it in a variable
const imgEl = document.querySelector('img');
console.log(imgEl);


//get button node from the document and save it in a variable
const btnEl = document.querySelector('button');
console.log(btnEl);

//add event listener to the button
btnEl.addEventListener('click', function () {

  console.log("Button clicked!");

  //check if the lamp is turned on
  if (imgEl.src.includes("white_lamp.png")) {
    //turn on the lamp
    imgEl.src = "./assets/img/yellow_lamp.png";
    imgEl.alt = "lamp on";
    btnEl.innerText = "Spegni";
  } else {
    //turn off the lamp
    imgEl.src = "./assets/img/white_lamp.png";
    imgEl.alt = "lamp off";
    btnEl.innerText = "Accendi";
  }
});