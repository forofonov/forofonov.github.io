let navigationOpenButton = document.querySelector('.open-navigation');
let navigationCloseButton = document.querySelector('.close-navigation');
let navigation = document.querySelector('.navigation');
let navigationItemsList = document.querySelectorAll('.navigation-menu-item');

navigationOpenButton.addEventListener('click', openNavigation, false);
navigationCloseButton.addEventListener('click', closeNavigation, false);

for ( let navigationItem of navigationItemsList ) {
  navigationItem.addEventListener('click', moveToSection, false);
}

function openNavigation () {
  navigationCloseButton.classList.add('show');
  navigation.classList.add('navigation-open');
}

function closeNavigation () {
  navigationCloseButton.classList.remove('show');
  navigation.classList.remove('navigation-open');
}

function moveToSection () {
  for ( let navigationItem of navigationItemsList ) {
    navigationItem.classList.remove('active-page');
  }
  this.classList.add('active-page');
  setTimeout(closeNavigation, 250);
}