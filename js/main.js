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
