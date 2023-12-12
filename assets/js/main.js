/*=============== SHOW SIDEBAR ===============*/

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]");
tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });
    tab.classList.add("skills__active");
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },

  animation: {
    duration: 300,
  },
});
/*===== Link Active Work =====*/

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((L) => L.classList.remove(".active-work"));
  this.classList.add(".active-work");
}

linkWork.forEach((L) => L.addEventListener("click", activeWork));
/*===== Work Popup =====*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;

  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work__title").innerHTML;

  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/

/*=============== ACHIEVEMENT SLIDER ===============*/
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");

prevButton.onclick = () => nextSlide(-1);
nextButton.onclick = () => nextSlide(+1);

let slideIndex = 1;

showSlides(slideIndex);

function nextSlide(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".imgScroll__slide");
  const dots = document.querySelectorAll(".imgScroll__dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all the sections that have an id defined
const sections = document.querySelectorAll("section[id]");
// console.log(sections);
// above code will select all the <section> elements which id attribute is defined

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);
/*=============== SHOW SCROLL UP ===============*/

function navHighlighter() {
  //get current scroll position
  let scrollY = window.scrollY;

  // Now we loop through sections to get the height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    // console.log(sectionHeight);

    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    /*
    if our current scroll position enters the space where current section on screen is 
    , add '.active' class to corresponding navigation link else remove it
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
      /* The *= operator in the attribute selector means "contains". 
      So it selects any anchor element whose href attribute contains the 
      sectionId value.*/
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/**************SHOW SIDE BAR**************/
const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
// Once user click on a an any menu option then we will remove
navOptions = document.querySelectorAll(".nav__item");

navOptions.forEach(function (navOption) {
  // Add a click event listener to each navOption
  navOption.onclick = function () {
    // Do something when the navOption is clicked, for example, remove the "show-sidebar" class
    navMenu.classList.remove("show-sidebar");
    navToggle.innerHTML = "=";
  };
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-sidebar");
    if (navToggle.innerHTML === "X") {
      navToggle.innerHTML = "=";
    } else {
      navToggle.innerHTML = "X";
    }
  });
}
