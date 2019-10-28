import $ from 'jquery';

$('.burger').click(function processBurgerClick() {
  $(this).toggleClass('active');
  $('.navigation').toggleClass('active');
  $('.page').toggleClass('overflow-hidden');
});
