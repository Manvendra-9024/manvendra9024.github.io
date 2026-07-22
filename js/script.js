// ── Typed.js hero role rotation (only runs if #typed-out exists on the page) ──
if (document.getElementById('typed-out') && window.Typed) {
  new Typed('#typed-out', {
    strings: [
      'Power BI Developer',
      'MIS Reporting Specialist',
      'SQL Developer',
      'Data Visualization Expert',
      'Web Developer',
      'ML Enthusiast',
      'Cyber Security Learner'
    ],
    typeSpeed: 55, backSpeed: 30, backDelay: 1200, loop: true
  });
}

// ── Navbar scroll shadow ──
const nb = document.getElementById('navbar');
if (nb) {
  window.addEventListener('scroll', () => nb.classList.toggle('scrolled', window.scrollY > 20));
}

// ── Hamburger menu ──
const ham = document.getElementById('ham'), mob = document.getElementById('mob');
if (ham && mob) {
  ham.addEventListener('click', () => { ham.classList.toggle('open'); mob.classList.toggle('open'); });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open'); mob.classList.remove('open');
  }));
}

// ── Active nav link: mark link matching current page + hash ──
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const hash = window.location.hash;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const [hrefPath, hrefHash] = href.split('#');
    const linkPage = hrefPath || path;
    const matchesPage = linkPage === path;
    const matchesHash = hrefHash ? ('#' + hrefHash) === hash : true;
    if (matchesPage && (hash ? matchesHash : !hrefHash)) {
      a.classList.add('active');
    }
  });
})();

// ── Section-based active nav (for in-page anchors on the same page, e.g. about.html) ──
const secs = document.querySelectorAll('main section[id]');
const nls  = document.querySelectorAll('.nav-links a, .mobile-menu a');
if (secs.length) {
  secs.forEach(s => new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        nls.forEach(a => {
          const href = a.getAttribute('href') || '';
          if (href === `${path}#${e.target.id}` || href === `#${e.target.id}`) {
            nls.forEach(x => x.classList.remove('active'));
            a.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.35 }).observe(s));
}

// ── Reveal on scroll ──
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// ── Skill bars fill (only on pages with .skill-fill, i.e. about.html) ──
const so = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(b => b.style.width = b.dataset.width + '%');
      so.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('#skills .card').forEach(c => so.observe(c));

// ── Timeline draw (only on pages with .timeline, i.e. about.html) ──
const tlo = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('tl-visible'); tlo.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.timeline').forEach(t => tlo.observe(t));

// ── Contact form (front-end only — see README for wiring it to a real backend) ──
const cform = document.getElementById('contact-form');
if (cform) {
  cform.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = cform.querySelector('[name="name"]').value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'website visitor'}`);
    const body = encodeURIComponent(cform.querySelector('[name="message"]').value.trim());
    window.location.href = `mailto:manvendrasingh120803@gmail.com?subject=${subject}&body=${body}`;
  });
}
