// Google Analytics initialization
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DRFNF20Z92');

// Back to top button
(function() {
  var btt = document.createElement('button');
  btt.className = 'back-to-top';
  btt.setAttribute('aria-label', 'Back to top');
  btt.innerHTML = '↑';
  document.body.appendChild(btt);
  btt.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) btt.classList.add('visible');
    else btt.classList.remove('visible');
  }, { passive: true });
})();

// Active nav highlighting
(function() {
  var path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (!href || link.classList.contains('nav-cta') || link.classList.contains('nav-lang')) return;
    if (href === '/' && path === '/') link.classList.add('nav-active');
    else if (href !== '/' && path.startsWith(href)) link.classList.add('nav-active');
  });
})();

// Cookie consent banner
(function() {
  if (localStorage.getItem('cookieConsent')) return;
  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = '<span>We use cookies to analyze site traffic via Google Analytics. By continuing to use this site, you accept our <a href="/privacy/">Privacy Policy</a>.</span><button id="cookie-accept">Got it</button>';
  document.body.appendChild(banner);
  setTimeout(function() { banner.classList.add('visible'); }, 800);
  document.getElementById('cookie-accept').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'true');
    banner.style.transform = 'translateY(100%)';
  });
})();

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(function(q) {
  q.addEventListener('click', function() {
    var item = q.closest('.faq-item');
    var answer = item.querySelector('.faq-a');
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function(openItem) {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Hamburger menu
function closeMenu() {
  document.getElementById('nav-mobile').classList.remove('open');
}
document.getElementById('nav-hamburger').addEventListener('click', function() {
  document.getElementById('nav-mobile').classList.toggle('open');
});

// Close mobile menu when any nav-mobile link is clicked
document.querySelectorAll('.nav-mobile a').forEach(function(link) {
  link.addEventListener('click', function() { closeMenu(); });
});

// IntersectionObserver reveal animation
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(function(r) { revealObs.observe(r); });

// Slideshow (index.html only)
var slideIndex = 0;
function moveSlide(dir) {
  var slides = document.querySelectorAll('.book-slideshow .slide');
  if (!slides.length) return;
  var dots = document.querySelectorAll('.book-slideshow .dot');
  slides[slideIndex].classList.remove('active');
  dots[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + dir + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}
function goSlide(n) {
  var slides = document.querySelectorAll('.book-slideshow .slide');
  if (!slides.length) return;
  var dots = document.querySelectorAll('.book-slideshow .dot');
  slides[slideIndex].classList.remove('active');
  dots[slideIndex].classList.remove('active');
  slideIndex = n;
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

// Slideshow event listeners (curriculum/index.html)
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var prev = document.getElementById('slide-prev');
    var next = document.getElementById('slide-next');
    if (prev) prev.addEventListener('click', function() { moveSlide(-1); });
    if (next) next.addEventListener('click', function() { moveSlide(1); });
    [0,1,2,3].forEach(function(i) {
      var dot = document.getElementById('slide-dot-' + i);
      if (dot) dot.addEventListener('click', function() { goSlide(i); });
    });
  });
})();

// Trial popup — show after 15–20% scroll, once per session
// Only runs if the popup element exists (index.html)
(function() {
  if (!document.getElementById('trial-popup-overlay')) return;
  if (sessionStorage.getItem('trialPopupShown')) return;
  var triggered = false;
  var threshold = 0.15 + Math.random() * 0.05; // 15–20%
  function showPopup() {
    var overlay = document.getElementById('trial-popup-overlay');
    overlay.classList.add('active');
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { overlay.classList.add('visible'); });
    });
    sessionStorage.setItem('trialPopupShown', '1');
  }
  function closePopup() {
    var overlay = document.getElementById('trial-popup-overlay');
    overlay.classList.remove('visible');
    setTimeout(function() { overlay.classList.remove('active'); }, 400);
  }
  function onScroll() {
    if (triggered) return;
    var scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    if (scrolled >= threshold) {
      triggered = true;
      showPopup();
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  document.getElementById('trial-popup-close').addEventListener('click', closePopup);
  document.getElementById('trial-popup-overlay').addEventListener('click', function(e) {
    if (e.target === this) closePopup();
  });

  document.getElementById('trial-popup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = e.target;
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form)
    }).then(function(r) { return r.json(); }).then(function(json) {
      if (json.success) {
        form.style.display = 'none';
        document.getElementById('trial-popup-success').style.display = 'block';
      }
    }).catch(function() {});
  });
})();

// Contact form handler (index.html + contact/index.html)
(function() {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var successEl = document.getElementById('form-success');
    var errorEl   = document.getElementById('form-error');
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form)
    }).then(function(r) { return r.json(); }).then(function(json) {
      if (json.success) {
        if (successEl) successEl.style.display = 'block';
        if (errorEl)   errorEl.style.display   = 'none';
        form.reset();
      } else {
        if (errorEl)   errorEl.style.display   = 'block';
        if (successEl) successEl.style.display = 'none';
      }
    }).catch(function() {
      if (errorEl)   errorEl.style.display   = 'block';
      if (successEl) successEl.style.display = 'none';
    });
  });
})();

// Page transitions
document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = '0';
  requestAnimationFrame(function() {
    document.body.style.transition = 'opacity 0.25s ease';
    document.body.style.opacity = '1';
  });
  document.querySelectorAll('a[href]').forEach(function(link) {
    var href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http') || link.target === '_blank') return;
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(function() { window.location.href = href; }, 250);
    });
  });
});
