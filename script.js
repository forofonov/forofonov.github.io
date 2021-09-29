let header = document.querySelector('.header');
let navigation = document.querySelector('.navigation');
let tabs = navigation.querySelectorAll('.tab');
let sections = document.querySelectorAll('section');
let footer = document.querySelector('.footer');
let currenSection;

for (let tab of tabs) {
  tab.addEventListener('click', function(event) {
    event.preventDefault();
    for (let section of sections) {
      section.classList.add('hide');
      if (tab.classList.contains('contacts-tab')) {
        footer.classList.add('footer--active');
        footer.style.top = header.clientHeight + navigation.clientHeight + "px";
        window.scrollTo(top);
      } else if (tab.getAttribute('href') == ('#' + section.getAttribute('id'))) {
        footer.classList.remove('footer--active');
        section.classList.remove('hide');
        currenSection = section;
        window.scrollTo(getCoords(currenSection));
      }
    }
    for (let tab of tabs) {
      tab.classList.remove('tab--active');
    }
    tab.classList.add('tab--active');
  })
}

function getCoords(element) {
  let box = element.getBoundingClientRect();

  return {
    top: box.top + pageYOffset - navigation.clientHeight,
    left: box.left + pageXOffset
  }
}