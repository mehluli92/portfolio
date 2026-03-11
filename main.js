// ── Mobile menu ──────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.textContent = open ? 'Close' : 'Menu';
  });
}

// ── Dubai live time ───────────────────────────
function updateDubaiTime() {
  const el = document.getElementById('dubaiTime');
  if (!el) return;
  const now = new Date();
  const t = now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Dubai',
    hour: '2-digit', minute: '2-digit', hour12: true
  });
  el.textContent = t;
}
updateDubaiTime();
setInterval(updateDubaiTime, 10000);

// ── Drag-to-scroll testimonials ───────────────
const scroller = document.querySelector('.testi-scroller');
if (scroller) {
  let isDown = false, startX, scrollLeft;
  scroller.addEventListener('mousedown', e => {
    isDown = true; scroller.style.cursor = 'grabbing';
    startX = e.pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
  });
  scroller.addEventListener('mouseleave', () => { isDown = false; scroller.style.cursor = 'grab'; });
  scroller.addEventListener('mouseup',    () => { isDown = false; scroller.style.cursor = 'grab'; });
  scroller.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x  = e.pageX - scroller.offsetLeft;
    const walk = (x - startX) * 1.2;
    scroller.scrollLeft = scrollLeft - walk;
  });
}

// ── Fade-in on scroll ─────────────────────────
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.work-card, .svc-row, .testi-card, .exp-card, .stack-item, .port-item, .about-text-card'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  io.observe(el);
});
