const firstSec = document.getElementById("first-section");
const secondSec = document.getElementById("second-section");
const thirdSec = document.getElementById("third-section");
const fourthSec = document.getElementById("fourth-section");
const fifthSec = document.getElementById("fifth-section");

const processTime = 250;
const firstAnimationEndTime = 5500 + processTime;
const secondAnimationEndTime = 4500 + processTime;
const thirdAnimationEndTime = 2000 + processTime;
const fourthAnimationEndTime = 4000 + processTime;
const fifthAnimationEndTime = 1500 + processTime;

const displayNone = section => {
  section.style.display = "none";
  console.dir(section);
};

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
Promise.resolve()
  .then(() => wait(firstAnimationEndTime))
  .then(() => displayNone(firstSec))
  .then(() => wait(secondAnimationEndTime))
  .then(() => displayNone(secondSec))
  .then(() => wait(thirdAnimationEndTime))
  .then(() => displayNone(thirdSec))
  .then(() => wait(fourthAnimationEndTime))
  .then(() => displayNone(fourthSec))
  .then(() => wait(fifthAnimationEndTime))
  .then(() => displayNone(fifthSec))
  .catch(error => console.log(error));
