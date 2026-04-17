/**
 * Crow's Call Press — Teaching Library
 * Shared utilities for login and dashboard pages
 */

// Page fade transitions
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.body.style.opacity = '0';
    requestAnimationFrame(function () {
      document.body.style.transition = 'opacity 0.25s ease';
      document.body.style.opacity = '1';
    });
    document.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http') || link.target === '_blank') return;
      link.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.style.transition = 'opacity 0.2s ease';
        document.body.style.opacity = '0';
        setTimeout(function () { window.location.href = href; }, 200);
      });
    });
  });
})();

// Token helpers
var TL = {
  getToken: function () { return localStorage.getItem('tl_token'); },
  getName:  function () { return localStorage.getItem('tl_name'); },
  clear:    function () { localStorage.removeItem('tl_token'); localStorage.removeItem('tl_name'); }
};
