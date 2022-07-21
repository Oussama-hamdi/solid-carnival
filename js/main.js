let showMenu = document.querySelector(".show-menu");
let megaMenu = document.querySelector(".mega-menu");
let links = document.querySelectorAll(".links li");

showMenu.onclick = function () {
  megaMenu.classList.toggle("active-menu");
  links.forEach(function (ele) {
    ele.onclick = function () {
      megaMenu.classList.remove("active-menu");
    };
  });
};

// The End Of The Year Date CountDwon

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now & Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector("#events .days").innerHTML =
    days < 10 ? `0${days}` : days;

  document.querySelector("#events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;

  document.querySelector("#events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  document.querySelector("#events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
