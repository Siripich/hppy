const card = document.querySelector('.card');
const openBtn = document.getElementById('open-card');
const closeBtn = document.getElementById('close-card');

openBtn.addEventListener('click', () => {
  card.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  card.classList.remove('open');
});
