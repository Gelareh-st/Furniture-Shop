var menuIcon = document.getElementById('navbar-mobile-icon');
var navMobileCon = document.getElementById('navbar-mobile-con');

function openMenuIcon() {
  if (navMobileCon.classList.contains('active')) {

    navMobileCon.classList.remove('animationcom');

    setTimeout(function () {
      navMobileCon.classList.add('animationgo');
    }, 100);

    setTimeout(function () {
      navMobileCon.classList.remove('active');
    }, 400);

  } else {

    navMobileCon.classList.remove('animationgo');

    setTimeout(function () {
      navMobileCon.classList.add('animationcom');
    }, 100);

    navMobileCon.classList.add('active');
    
  }
}

menuIcon.onclick = function () {
  openMenuIcon();
};
