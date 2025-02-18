//get image node from the document and save it in a variable
const imgEl = document.querySelector('img');
console.log(imgEl);

//get button node from the document and save it in a variable
const btnEl = document.querySelector('button');
console.log(btnEl);

//add event listener to the button
btnEl.addEventListener('click', function () {
  imgEl.src = "./assets/img/yellow_lamp.png";
  imgEl.alt = "lamp on";
  console.log("Button clicked!");
  console.log(imgEl);
});