import $ from "jquery";
$(".burger").click(function() {
  $(this).toggleClass("active");
});
// const burger = document.querySelector('.burger');

// const toggleState = (elem, one, two) => {
//   elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
// };

// burger.onclick = function (e) {
//   toggleState(burger, 'menu-on', 'menu-off');
//   e.preventDefault();
// };