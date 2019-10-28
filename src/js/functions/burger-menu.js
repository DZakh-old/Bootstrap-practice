import $ from 'jquery';

$('.burger').click(() => {
  $(this).toggleClass('active');
  $('.navigation').toggleClass('active');
  $('.page').toggleClass('overflow-hidden');
});
