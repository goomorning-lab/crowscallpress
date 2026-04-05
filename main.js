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
