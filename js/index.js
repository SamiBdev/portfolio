AOS.init();

var myNav = document.getElementById('header');

window.addEventListener("scroll", () => {
  if (window.scrollY >= 70 ) {
      myNav.classList.add("header-color");
  }
  else {
      myNav.classList.remove("header-color");
  }
})
