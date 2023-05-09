const langInput = document.getElementById('lang');
const engContent = document.querySelectorAll('.eng');
const vietContent = document.querySelectorAll('.vie');

langInput.addEventListener('change', (event) => {
  const language = event.target.value;
  if (language === 'eng') {
    engContent.forEach((ele) => {
      ele.classList.remove('hidden');
    });
    vietContent.forEach((ele) => {
      ele.classList.add('hidden');
    });
  } else {
    engContent.forEach((ele) => {
      ele.classList.add('hidden');
    });
    vietContent.forEach((ele) => {
      ele.classList.remove('hidden');
    });
  }
});
