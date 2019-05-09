//= require jquery
//= require popper
//= require bootstrap-sprockets
//= require_tree .

// Sticky Navbar Tabs
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function() {myFunction()};

// On page load defines if mobile-card or descktop card is visible
if (window.matchMedia("(max-width: 576px)").matches) {
  const as = document.querySelectorAll(".mobile-card");
    as.forEach((a) => {
      a.classList.remove('d-none');
  });

  const bs = document.querySelectorAll(".desktop-card");
    bs.forEach((b) => {
      b.classList.add('d-none');
  });
}

// On window resize changes behavior
const as = document.querySelectorAll(".mobile-card");
const bs = document.querySelectorAll(".desktop-card");

window.addEventListener("resize", function() {
  if (window.matchMedia("(max-width: 576px)").matches) {
      as.forEach((a) => {
        a.classList.remove('d-none');
    });
      bs.forEach((b) => {
        b.classList.add('d-none');
    });
    // console.log("Screen under 576px - mobile");
  } else if (window.matchMedia("(min-width: 577px").matches) {
      as.forEach((a) => {
        a.classList.add('d-none');
    });
      bs.forEach((b) => {
        b.classList.remove('d-none');
    });
    // console.log("Screen over 576px - desktop");
  }
});

