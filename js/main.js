'use strict'

// ------- перемещение при скролле -------------
const animItems = document.querySelectorAll('.anim');
window.addEventListener('scroll', animOnScroll);
function animOnScroll() {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
      animItem.classList.add('_active');
    } else {
      animItem.classList.remove('_active');
    }
  } 
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

animOnScroll()




// ---------- Увеличение картинки ---------------------
$(function(){
  $('.eventsGallery__image').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();

    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});




// // ------- переключение меню ---------------

let menu__list = document.querySelectorAll('.menu__list');
function function1() {
  menu__list.forEach(item =>{
    if (!item.classList.contains('hidden')) {
    item.classList.add('hidden')}
  })
}

function function2(menuItem) {
    var element = document.getElementById(menuItem);
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden')
    };
}

document.querySelector('#soupe').onclick = () => {function1(), function2('menu__list_soupe')};
document.querySelector('#pizza').onclick = () => {function1(), function2('menu__list_pizza')};
document.querySelector('#pasta').onclick = () => {function1(), function2('menu__list_pasta')};
document.querySelector('#desert').onclick = () => {function1(), function2('menu__list_desert')};
document.querySelector('#wine').onclick = () => {function1(), function2('menu__list_wine')};
document.querySelector('#beer').onclick = () => {function1(), function2('menu__list_beer')};
document.querySelector('#drinks').onclick = () => {function1(), function2('menu__list_drinks')};




// ----------------- уменьшение логотипа ----------------

const logo = {
  elem: document.getElementById('logo'),

  addEventListener1() {
    window.addEventListener('scroll', () => {
      const scrollY1 = window.scrollY || document.documentElement.scrollTop;
      scrollY1 > 1000 ? this.elem.classList.add('log-small') : this.elem.classList.remove('log-small');
    });
  }
}

logo.addEventListener1();




// ------- возврат в начало страницы --------------
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();
