const textContent = document.getElementById('text-content');
const navText = document.getElementById('next-text');

const texts = [
  "این وب‌سایت نمایشی از یک فضای دیجیتال الهام‌گرفته از کیهان است.\nدر طراحی آن تلاش شده است تا حس آرامش، سکوت و وسعت فضا منتقل شود.",
  "در ساخت این وب‌سایت از فناوری‌های زیر استفاده شده است:\nHTML: ساختار صفحات\nCSS: طراحی بصری و جلوه‌های فضایی\nJava: منطق و بخش‌های برنامه‌نویسی\nVS Code: محیط توسعه"
];

let currentIndex = 0;

// نمایش متن اول
textContent.textContent = texts[currentIndex];

function showText(index) {
  textContent.style.opacity = 0;
  textContent.style.transform = 'translateX(-100%)';

  setTimeout(() => {
    textContent.textContent = texts[index];
    textContent.style.transform = 'translateX(100%)';
    textContent.style.opacity = 0;

    setTimeout(() => {
      textContent.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      textContent.style.transform = 'translateX(0)';
      textContent.style.opacity = 1;
    }, 50);

    if(index === 0) {
      navText.textContent = "< بعدی";
    } else {
      navText.textContent = "< قبلی";
    }
  }, 600);
}

navText.addEventListener('click', () => {
  if(currentIndex === 0) {
    currentIndex = 1;
  } else {
    currentIndex = 0;
  }
  showText(currentIndex);
});