/* =====================================================
   CAPAVISTA CAVE HOUSE — Main JS
   ===================================================== */

const IMG_BASE = '../Capavista Cave House/';
const RESELIVA_URL = 'https://app.reseliva.com/';   // ← replace with real Reseliva URL
const WHATSAPP_NUM = '905320000000';                 // ← replace with real WhatsApp number

/* ── NAV scroll ── */
const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ── Hamburger ── */
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger?.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});

mobileClose?.addEventListener('click', closeMobile);
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));

function closeMobile() {
  mobileMenu?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Book Now buttons ── */
document.querySelectorAll('.js-book').forEach(btn => {
  btn.addEventListener('click', () => window.open(RESELIVA_URL, '_blank'));
});

/* ── WhatsApp buttons ── */
document.querySelectorAll('.js-whatsapp').forEach(btn => {
  const msg = encodeURIComponent('Hello Capavista! I would like to enquire about a reservation.');
  btn.addEventListener('click', () => window.open(`https://wa.me/${WHATSAPP_NUM}?text=${msg}`, '_blank'));
});

/* ── Hero slideshow ── */
(function heroSlider() {
  const slides = document.querySelectorAll('.hero__slide');
  const dots   = document.querySelectorAll('.hero__dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = idx;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  timer = setInterval(next, 6000);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      goTo(i);
      timer = setInterval(next, 6000);
    });
  });
})();

/* ── Reviews slider ── */
(function reviewsSlider() {
  const track = document.querySelector('.reviews-track');
  if (!track) return;

  const cards    = track.querySelectorAll('.review-card');
  const total    = cards.length;
  let current    = 0;
  const visible  = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const maxIndex = Math.max(0, total - visible);

  function slide() {
    const cardW = cards[0].getBoundingClientRect().width + 24;
    track.style.transform = `translateX(-${current * cardW}px)`;
  }

  function next() { current = current >= maxIndex ? 0 : current + 1; slide(); }
  function prev() { current = current <= 0 ? maxIndex : current - 1; slide(); }

  document.querySelector('.reviews-prev')?.addEventListener('click', prev);
  document.querySelector('.reviews-next')?.addEventListener('click', next);

  setInterval(next, 5000);
})();

/* ── Scroll reveal ── */
(function revealObserver() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ── Active nav link ── */
(function activeNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === page || (href === 'index.html' && page === ''))) {
      a.classList.add('active');
    }
  });
})();

/* ── Gallery lightbox (gallery.html) ── */
(function galleryLightbox() {
  const lb     = document.getElementById('lightbox');
  if (!lb) return;

  const lbImg  = lb.querySelector('.lightbox__img');
  const items  = document.querySelectorAll('.gallery-full-item');
  const images = [];
  let current  = 0;

  items.forEach((item, i) => {
    const src = item.querySelector('img').src;
    images.push(src);
    item.addEventListener('click', () => { current = i; open(i); });
  });

  function open(i) {
    lbImg.src = images[i];
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  lb.querySelector('.lightbox__close')?.addEventListener('click', close);
  lb.querySelector('.lightbox__prev')?.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    open(current);
  });
  lb.querySelector('.lightbox__next')?.addEventListener('click', () => {
    current = (current + 1) % images.length;
    open(current);
  });

  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') { current = (current-1+images.length)%images.length; open(current); }
    if (e.key === 'ArrowRight') { current = (current+1)%images.length; open(current); }
  });
})();

/* ── Gallery filter (gallery.html) ── */
(function galleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      document.querySelectorAll('.gallery-full-item').forEach(item => {
        if (cat === 'all' || item.dataset.cat === cat) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
})();

/* ── Room image tabs ── */
document.querySelectorAll('.thumb').forEach(thumb => {
  thumb.addEventListener('click', function() {
    const parent = this.closest('.room-detail__imgs');
    const mainImg = parent.querySelector('.main-img img');
    parent.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    mainImg.src = this.querySelector('img').src;
  });
});

/* ── Contact form ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type=submit]');
    btn.textContent = '✓ Message Sent';
    btn.style.background = '#2D7A4A';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}

/* ── Parallax hero ── */
window.addEventListener('scroll', () => {
  const heroSlides = document.querySelectorAll('.hero__slide.active img');
  heroSlides.forEach(img => {
    img.style.transform = `scale(1) translateY(${window.scrollY * 0.2}px)`;
  });
}, { passive: true });
