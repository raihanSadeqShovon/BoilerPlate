// Banner starts here
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    animateIn: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// Banner ends here

// CounterUp starts here
$('.counter').counterUp();
// CounterUp ends here

// Swiper slider starts here
var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1.5,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
//   Swiper slider ends here

// Brand are using slick starts here
$('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
      
// Brand are using slick ends here

$('#example').tooltip({ boundary: 'window' })

// Tooltip used for hover
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Preloader
$(function () {

  $(window).ready(function () {
    setTimeout(function(){
      $(".preLoader").fadeOut();
    },500);
});
});


const x = [2,32,258,125,24,61,98]

for(let a=0; a < x.length ;a++) {
  console.log(x[a]);
}


let person = {"name":"Raihan","age": 30, "address": "d/21"}
console.log(person.name + " is " + person.age + "years old.");

let d = document.getElementById("date").innerHTML=Date();
console.log(d);