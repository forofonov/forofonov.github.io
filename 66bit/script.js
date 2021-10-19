$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./images/svg/prev.svg" width="37" height="41"></button>',
    nextArrow: '<button type="button" class="slick-prev"><img src="./images/svg/next.svg" width="37" height="41"></button>',
  });

  var dotsItem = $('.slick-dots li');
  console.log(dotsItem);
  var colors = ["burgundy", "blue", "green"];
  dotsItem.each(
    function setColor() {
      $(this).addClass(colors[$('.slick-dots li').index($(this))]);
      console.log($(this));
    }
  )
});

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}