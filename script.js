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
