let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open');
}



 window.addEventListener("load", () => {
    autoSlide();
 })
 
 function autoSlide() {
    setInterval(() => {
       slide(getItemActiveIndex() + 1);
    }, 5000); // slide speed = 3s
 }
 
 function slide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
 
    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
       toIndex = 0;
    }
 
    const newItemActive = itemsArray[toIndex];
 
    // start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
       newItemActive.classList.add("carousel_item__next");
       itemActive.classList.add("carousel_item__next");
    }, 20);
 
    // remove all transition class and switch active class
    newItemActive.addEventListener("transitionend", () => {
       itemActive.className = "carousel_item";
       newItemActive.className = "carousel_item carousel_item__active";
    }, {
       once: true
    });
 }
 
 function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
 }

 $('.main-carousel').flickity({
   // About options
   cellAlign: 'left',
   wrapAround: true,
   freeScroll: true
   });

          document.querySelectorAll('.image-container img').forEach(Image=>{ 
                Image.onclick = () => {
                    document.querySelector('.popup-image').style.display = 'block';
                    document.querySelector('.popup-image img').src = Image .getAttribute('src');
                }
            });
            document.querySelector('.popup-image span').onclick = () =>{
                document.querySelector('.popup-image').style.display = 'none';

            }


              // About galeries

            document.querySelectorAll('.image-container img').forEach(Image=>{ 
               Image.onclick = () => {
                   document.querySelector('.popup-image').style.display = 'block';
                   document.querySelector('.popup-image img').src = Image .getAttribute('src');
               }
           });
           
           document.querySelector('.popup-image span').onclick = () =>{
               document.querySelector('.popup-image').style.display = 'none';

           }




           var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$('.slide-nav').on('click', function(e) {
   e.preventDefault();
   // get current slide
   var current = $('.flex--active').data('slide'),
     // get button data-slide
     next = $(this).data('slide');
 
   $('.slide-nav').removeClass('active');
   $(this).addClass('active');
 
   if (current === next) {
     return false;
   } else {
     $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
     $('.flex--active').addClass('animate--end');
     setTimeout(function() {
       $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
       $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
     }, 800);
   }
 });
 