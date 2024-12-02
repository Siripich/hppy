// เลือกปุ่มและการ์ด
const birthdayCard = document.querySelector('.birthdayCard');
const birthdayMusic = document.getElementById('birthday-music');
const snowContainer = document.getElementById('snow');

// ฟังก์ชันเปิดการ์ดและเริ่มหิมะตก
birthdayCard.addEventListener('click', () => {
  birthdayCard.classList.add('open');
  birthdayMusic.play(); // เริ่มเล่นเพลงเมื่อเปิดการ์ด
  startSnowfall(); // เริ่มหิมะตก
});

// ฟังก์ชันเริ่มหิมะตก
function startSnowfall() {
  setInterval(createSnowflake, 200); // สร้างหิมะตกทุก 50ms
}

// ฟังก์ชันสร้างหิมะตก
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';
  
  // กำหนดตำแหน่งเริ่มต้น
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 7}s`; // ความเร็วในการตก
  snowflake.style.fontSize = `${Math.random() * 10 + 15}px`;

  snowContainer.appendChild(snowflake);

  // ลบหิมะที่ตกออกเมื่อถึงล่างสุด
  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

document.getElementById('open-card').addEventListener('click', function() {
    const card = document.querySelector('.birthdayCard');
    card.style.transform = 'rotateY(180deg)'; // เปิดการ์ด
  });
  
  document.getElementById('close-card').addEventListener('click', function() {
    const card = document.querySelector('.birthdayCard');
    card.style.transform = 'rotateY(0deg)'; // ปิดการ์ด
  });
  