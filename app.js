const firstSec = document.getElementById("first-section");
const secondSec = document.getElementById("second-section");
const thirdSec = document.getElementById("third-section");
const fourthSec = document.getElementById("fourth-section");

// TODO: 誤差が多い 原因改名と修正
const processTime = 250;
const firstAnimationEndTime = 5500 + processTime;
const secondAnimationEndTime = firstAnimationEndTime;
const thirdAnimationEndTime = secondAnimationEndTime - 2000;
// const fourthAnimationEndTime = 3000 + processTime;

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
  // .then(() => displayNone(fourthSec))
  .catch(error => console.log(error));
