//Movement Animation to happen
const card = document.querySelector("#card");
const container = document.querySelector(".container");

//Moving Animation Event
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  verticalDeg=xAxis  
  if (xAxis < 10) {
    verticalDeg *= -1;
  }
  // let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateZ(${-verticalDeg}deg)`;
});

//Animate In
card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  card.style.cursor = "pointer";
});

//Animate Out
card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


// Change Card Background
const bgButton = document.querySelector("button#generate-bg").addEventListener("click", changeColor);

function changeColor() {
    const card= document.querySelector("#card");
   const randomColor = [randomInteger(255),randomInteger(255),randomInteger(255)]
   for (const color of randomColor) {
     console.log(color);
   }
    // card.style.borderColor = `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`;
    card.style.boxShadow = `0px 0px 10px 10px rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}