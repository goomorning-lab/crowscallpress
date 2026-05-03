(function () {
  // If already logged in this session, go straight to dashboard
  if (sessionStorage.getItem('tl_token')) {
    window.location.href = 'dashboard.html';
    return;
  }

  // Show timeout message if redirected after inactivity
  if (new URLSearchParams(window.location.search).get('timeout')) {
    var err = document.getElementById('tl-error');
    err.textContent = 'You were signed out after 60 minutes of inactivity.';
  }

  // Show/hide password toggle
  document.getElementById('tl-show-pw').addEventListener('click', function () {
    var input = document.getElementById('tl-password');
    var isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    document.getElementById('tl-eye-icon').style.opacity = isHidden ? '0.4' : '1';
  });

  var form = document.getElementById('tl-login-form');
  var errorEl = document.getElementById('tl-error');
  var submitBtn = document.getElementById('tl-submit-btn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('tl-email').value.trim();
    var password = document.getElementById('tl-password').value;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorEl.textContent = 'Please enter a valid email address.';
      return;
    }
    if (password.length < 6 || password.length > 128) {
      errorEl.textContent = 'Password must be between 6 and 128 characters.';
      return;
    }
    var captchaToken = hcaptcha.getResponse();
    if (!captchaToken) {
      errorEl.textContent = 'Please complete the captcha.';
      return;
    }

    errorEl.textContent = '';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing in\u2026';

    fetch('https://crowscallpress-production.up.railway.app/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password, captchaToken: captchaToken })
    })
      .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
      .then(function (result) {
        if (result.ok && result.data.token) {
          sessionStorage.setItem('tl_token', result.data.token);
          if (result.data.name) sessionStorage.setItem('tl_name', result.data.name);
          window.location.href = 'dashboard.html';
        } else {
          hcaptcha.reset();
          errorEl.textContent = result.data.message || 'Incorrect email or password. Please try again.';
          submitBtn.disabled = false;
          submitBtn.textContent = 'Sign In';
        }
      })
      .catch(function () {
        hcaptcha.reset();
        errorEl.textContent = 'Something went wrong. Please check your connection and try again.';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign In';
      });
  });
})();
