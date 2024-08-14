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
//Date Time Picker

