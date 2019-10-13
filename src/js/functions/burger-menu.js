// import $ from "jquery";
// $(".burger").click(function() {
//   $(this).toggleClass("active");
// });
const burger = document.querySelector('.burger-btn');

const toggleState = (elem, one, two) => {
  elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};

burger.onclick = function (e) {
  toggleState(burger, 'menu-on', 'menu-off');
  e.preventDefault();
};

if (burger.dataset.state === "menu-on") {
  burger.style.backgroundColor = "rgba(255,255,255,0)";
}