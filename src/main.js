// Ahmed Baqir portfolio: interactions
// 1. Rolling designation title  2. Cursor spotlight + hero grid  3. Active nav link

const app = document.getElementById('app');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const motion = !reduceMotion && app.classList.contains('moving');

/* ---------- 1. Rolling designation title ---------- */
const TITLES = ['GOHIGHLEVEL SPECIALIST', 'CUSTOMER SUCCESS LEAD', 'AUTOMATION & CRM BUILDER'];
const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*';
const roller = document.getElementById('roller');

function paint(chars) {
  roller.replaceChildren(
    ...chars.map(({ ch, locked }) => {
      const span = document.createElement('span');
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      span.style.color = locked ? '#FFFFFF' : '#5E5E5E';
      return span;
    })
  );
}

function roll(index) {
  const target = TITLES[index];
  let frame = 0;
  const timer = setInterval(() => {
    frame += 1;
    let done = true;
    const chars = target.split('').map((ch, i) => {
      if (ch === ' ' || frame >= 6 + i * 2) return { ch, locked: true };
      done = false;
      return { ch: POOL[Math.floor(Math.random() * POOL.length)], locked: false };
    });
    paint(chars);
    if (done) {
      clearInterval(timer);
      setTimeout(() => roll((index + 1) % TITLES.length), 2800);
    }
  }, 50);
}

if (roller) {
  roller.setAttribute('aria-label', TITLES.join(', '));
  if (motion) roll(0);
  else paint(TITLES[0].split('').map((ch) => ({ ch, locked: true })));
}

/* ---------- 2. Cursor spotlight + hero grid highlight ---------- */
const spot = document.getElementById('spot');
const grid = document.getElementById('gridlit');
let px = 0, py = 0, raf = null;

if (motion && window.matchMedia('(pointer: fine)').matches) {
  app.addEventListener('mousemove', (e) => {
    px = e.clientX;
    py = e.clientY;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      spot.style.setProperty('--x', px + 'px');
      spot.style.setProperty('--y', py + 'px');
      spot.classList.add('on');
      const r = grid.getBoundingClientRect();
      grid.style.setProperty('--gx', px - r.left + 'px');
      grid.style.setProperty('--gy', py - r.top + 'px');
      grid.classList.toggle('on', py >= r.top && py <= r.bottom);
    });
  });
  app.addEventListener('mouseleave', () => {
    spot.classList.remove('on');
    grid.classList.remove('on');
  });
}

/* ---------- 3. Highlight the nav link for the section in view ---------- */
const links = document.querySelectorAll('.navlink[data-section]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('is-active', a.dataset.section === entry.target.id));
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
['top', 'services', 'approach', 'experience', 'contact'].forEach((id) => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});
