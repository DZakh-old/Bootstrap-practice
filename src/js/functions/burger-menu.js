import $ from "jquery";
$(".burger").click(function() {
  $(this).toggleClass("active");
  $('.navigation').toggleClass("active");
  $('.page').toggleClass("overflow-hidden");
});