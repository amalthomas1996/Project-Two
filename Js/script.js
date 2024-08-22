

//hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
const loginSignupBtn = document.querySelector('.login-signup-btn');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  hamburger.classList.toggle('menu-open'); // Toggle the class for the hamburger to transform
});

// Close the menu when any link or the Log In/Sign Up button is clicked
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('menu-open'); // Remove the class when closing the menu
  });
});

loginSignupBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  hamburger.classList.remove('menu-open');
});

//Popular card Slider
const slider = document.querySelector('.car-cards-container');

let scrollAmount = 0;
let maxScroll = slider.scrollWidth - slider.clientWidth;
let autoSlideInterval;

// Function to slide to the next card
function slideNext() {
  if (scrollAmount < maxScroll) {
    scrollAmount += slider.clientWidth;
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  } else {
    scrollAmount = 0;
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

// Function to start the slideshow
function startSlideShow() {
  autoSlideInterval = setInterval(slideNext, 3000);
}

// Function to stop the slideshow
function stopSlideShow() {
  clearInterval(autoSlideInterval);
}

// Start the slideshow on page load
startSlideShow();

// Event listeners to pause/resume slideshow on hover
slider.addEventListener('mouseover', stopSlideShow);
slider.addEventListener('mouseout', startSlideShow);


//FAQ Section Open & Close

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const toggleButton = item.querySelector('.toggle-button');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      toggleButton.src = './Assets/xicon.svg';
    } else {
      toggleButton.src = './Assets/+icon.svg';
    }
  });
});


//Dropoff functionality

document.addEventListener("DOMContentLoaded", function () {
  const samePickupTab = document.getElementById("same-pickup");
  const differentDropoffTab = document.getElementById("different-dropoff");
  const dropoffLocation = document.getElementById("dropoff-location");

  // Function to handle the toggle between tabs
  function toggleDropoffLocation(show) {
    if (show) {
      dropoffLocation.classList.add("show");
    } else {
      dropoffLocation.classList.remove("show");
    }
  }

  // Event listeners for the tabs
  samePickupTab.addEventListener("click", function () {
    samePickupTab.classList.add("active");
    differentDropoffTab.classList.remove("active");
    toggleDropoffLocation(false);
  });

  differentDropoffTab.addEventListener("click", function () {
    differentDropoffTab.classList.add("active");
    samePickupTab.classList.remove("active");
    toggleDropoffLocation(true);
  });

  // Set initial state to "Same as Pick-Up"
  toggleDropoffLocation(false);
});
