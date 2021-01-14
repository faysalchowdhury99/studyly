// Swiper Js
var swiper = new Swiper('.swiper-container.about', {
    effect: 'coverflow',
    initialSlide: 1,
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 800,
      modifier: 1,
      slideShadows: true,
    },
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     }
});     


// Back To Top

//Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


