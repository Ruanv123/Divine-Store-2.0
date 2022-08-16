/* Menu */

$(document).ready(function () {
  $('.hamburguer').click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass('active');
  });
});


/* carousel */

window.addEventListener('load', function () {
  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: true,
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__seguinte'
    }
  });
});