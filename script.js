const card = document.querySelector('.card');
const openBtn = document.getElementById('open-card');
const closeBtn = document.getElementById('close-card');
const music = document.getElementById('birthday-music'); // ดึง audio element

openBtn.addEventListener('click', () => {
  card.classList.add('open');
  music.currentTime = 0; // รีเซ็ตเพลงให้เริ่มใหม่
  music.play(); // เล่นเพลง
});

closeBtn.addEventListener('click', () => {
  card.classList.remove('open');
  music.pause(); // หยุดเพลง
  music.volume = 0.5; // ปรับระดับเสียง 50%

});
