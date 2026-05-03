// ── Auth + welcome + sign-out + inactivity ──────────────────────────
(function () {
  var DEV_PREVIEW = false;
  if (DEV_PREVIEW && !sessionStorage.getItem('tl_token')) {
    sessionStorage.setItem('tl_token', 'dev_preview_token');
    sessionStorage.setItem('tl_name', 'Zoe');
  }
  var token = sessionStorage.getItem('tl_token');
  if (!token) { window.location.href = 'index.html'; return; }

  var name = sessionStorage.getItem('tl_name');
  if (name) document.getElementById('tl-welcome-name').textContent = name;

  document.getElementById('tl-signout').addEventListener('click', function () {
    sessionStorage.removeItem('tl_token');
    sessionStorage.removeItem('tl_name');
    window.location.href = 'index.html';
  });

  var INACTIVITY_MS = 60 * 60 * 1000;
  var inactivityTimer;
  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(function () {
      sessionStorage.removeItem('tl_token');
      sessionStorage.removeItem('tl_name');
      window.location.href = 'index.html?timeout=1';
    }, INACTIVITY_MS);
  }
  ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'].forEach(function (evt) {
    document.addEventListener(evt, resetInactivityTimer, { passive: true });
  });
  resetInactivityTimer();

  // ── Workbook data ──────────────────────────────────────────────────
  var resources = [
    {
      id: 'bat', title: 'Breakfast at Tiffany\'s', author: 'Truman Capote',
      level: 'Mythos Level', cefr: 'B2-C1', grade: '7+',
      emoji: '\uD83D\uDC8E', coverBg: '#ddeee4',
      synopsis: 'A narrator reflects on his neighbor Holly Golightly, a charming, free-spirited young woman navigating New York City. A novella of identity, belonging, and the cost of freedom.',
      viewUrl: 'breakfast-at-tiffanys.html',
      fileDevA: 'breakfast-at-tiffanys/dev-a.pdf', fileDevB: 'breakfast-at-tiffanys/dev-b.pdf', fileVocab: 'breakfast-at-tiffanys/vocab.pdf'
    },
    {
      id: 'amc', title: 'A Monster Calls', author: 'Patrick Ness',
      level: 'Mythos Level', cefr: 'B2-C1', grade: '7+',
      emoji: '\uD83C\uDF32', coverBg: '#ddeee4',
      synopsis: 'Conor is visited by an ancient monster who tells him three stories \u2014 and demands one in return. A novel about grief, guilt, and the terrible weight of truth.',
      viewUrl: 'a-monster-calls.html',
      fileDevA: 'a-monster-calls/dev-a.pdf', fileDevB: 'a-monster-calls/dev-b.pdf', fileVocab: 'a-monster-calls/vocab.pdf'
    },
    {
      id: 'ft', title: 'Full Tilt', author: 'Neal Shusterman',
      level: 'Mythos Level', cefr: 'B2-C1', grade: '7+',
      emoji: '\uD83C\uDFA2', coverBg: '#ddeee4',
      synopsis: 'Blake enters a deadly supernatural carnival to rescue his brother, facing a different nightmare ride for each of his deepest fears. A novel of survival, guilt, and the balance between caution and courage.',
      viewUrl: 'full-tilt.html',
      fileDevA: 'full-tilt/dev-a.pdf', fileDevB: 'full-tilt/dev-b.pdf', fileVocab: 'full-tilt/vocab.pdf'
    },
    {
      id: 'rg', title: 'The Royal Game', author: 'Stefan Zweig',
      level: 'Mythos Level', cefr: 'B2-C1', grade: '7+',
      emoji: '\u265F\uFE0F', coverBg: '#ddeee4',
      synopsis: 'On an ocean liner bound for Buenos Aires, a chess grandmaster is challenged by a man whose only preparation was months of Gestapo solitary confinement. A novella of obsession, trauma, and the fragility of the intellect.',
      viewUrl: 'the-royal-game-a-chess-story.html',
      fileDevA: 'the-royal-game-a-chess-story/dev-a.pdf', fileDevB: 'the-royal-game-a-chess-story/dev-b.pdf', fileVocab: 'the-royal-game-a-chess-story/vocab.pdf'
    },
    {
      id: 'cor', title: 'Coraline', author: 'Neil Gaiman',
      level: 'Lexis Level', cefr: 'B1-B2', grade: '5-6',
      emoji: '\uD83D\uDEAA', coverBg: '#f5ecd0',
      synopsis: 'Coraline discovers a door in her new house that leads to a mirrored world with an \u201cOther Mother\u201d who wants to keep her forever. A dark fantasy about identity, courage, and the danger of easy answers.',
      viewUrl: 'coraline.html',
      fileDevA: 'coraline/dev-a.pdf', fileDevB: 'coraline/dev-b.pdf', fileVocab: 'coraline/vocab.pdf'
    },
    {
      id: 'btt', title: 'Bridge to Terabithia', author: 'Katherine Paterson',
      level: 'Lexis Level', cefr: 'B1-B2', grade: '5-6',
      emoji: '\uD83C\uDF09', coverBg: '#f5ecd0',
      synopsis: 'Jess and Leslie, two imaginative outcasts, create a secret kingdom in the woods \u2014 until an unexpected tragedy forces Jess to confront loss, friendship, and what it means to be brave.',
      viewUrl: 'bridge-to-terabithia.html',
      fileDevA: 'bridge-to-terabithia/dev-a.pdf', fileDevB: 'bridge-to-terabithia/dev-b.pdf', fileVocab: 'bridge-to-terabithia/vocab.pdf'
    },
    {
      id: 'hd', title: 'The Hundred Dresses', author: 'Eleanor Estes',
      level: 'Lexis Level', cefr: 'B1-B2', grade: '5-6',
      emoji: '\uD83D\uDC57', coverBg: '#f5ecd0',
      synopsis: 'Wanda Petronski, a Polish immigrant, claims to own a hundred dresses \u2014 but wears the same faded blue one every day. A short novel about cruelty, silence, and the guilt that follows when we fail to act.',
      viewUrl: 'the-hundred-dresses.html',
      fileDevA: 'the-hundred-dresses/dev-a.pdf', fileDevB: 'the-hundred-dresses/dev-b.pdf', fileVocab: 'the-hundred-dresses/vocab.pdf'
    },
    {
      id: 'tod', title: 'The Tale of Despereaux', author: 'Kate DiCamillo',
      level: 'Lexis Level', cefr: 'B1-B2', grade: '5-6',
      emoji: '\uD83D\uDC2D', coverBg: '#f5ecd0',
      synopsis: 'A small mouse with oversized ears falls in love with a princess and descends into the dungeon to rescue her. A fairy tale of forgiveness, belonging, and the power of a story told in the dark.',
      viewUrl: 'the-tale-of-despereaux.html',
      fileDevA: 'the-tale-of-despereaux/dev-a.pdf', fileDevB: 'the-tale-of-despereaux/dev-b.pdf', fileVocab: 'the-tale-of-despereaux/vocab.pdf'
    },
    {
      id: 'dwk', title: 'Diary of a Wimpy Kid', author: 'Jeff Kinney',
      level: 'Junior Level', cefr: 'A2-B1', grade: '3-4',
      emoji: '\uD83D\uDCD3', coverBg: '#f5e2db',
      synopsis: 'Greg Heffley chronicles his first year of middle school in a journal \u2014 dodging embarrassment, navigating friendships, and trying to become popular. A comic novel about growing up and self-awareness.',
      viewUrl: 'diary-of-a-wimpy-kid.html',
      fileDevA: 'diary-of-a-wimpy-kid/dev-a.pdf', fileDevB: 'diary-of-a-wimpy-kid/dev-b.pdf', fileVocab: 'diary-of-a-wimpy-kid/vocab.pdf'
    },
    {
      id: 'mfd', title: 'My Father\'s Dragon', author: 'Ruth Stiles Gannett',
      level: 'Junior Level', cefr: 'A2-B1', grade: '3-4',
      emoji: '\uD83D\uDC09', coverBg: '#f5e2db',
      synopsis: 'Elmer Elevator travels to Wild Island armed only with a knapsack of supplies to rescue a captive baby dragon. A quest story about empathy, courage, and the quiet heroism of caring for those who cannot help themselves.',
      viewUrl: 'my-fathers-dragon.html',
      fileDevA: 'my-fathers-dragon/dev-a.pdf', fileDevB: 'my-fathers-dragon/dev-b.pdf', fileVocab: 'my-fathers-dragon/vocab.pdf'
    },
    {
      id: 'tfgn', title: 'Tales of a Fourth Grade Nothing', author: 'Judy Blume',
      level: 'Junior Level', cefr: 'A2-B1', grade: '3-4',
      emoji: '\uD83D\uDC22', coverBg: '#f5e2db',
      synopsis: 'Peter Hatcher navigates life with his unpredictable younger brother Fudge, who steals attention, destroys projects, and generally makes everything harder. A comic novel about fairness, family, and growing up.',
      viewUrl: 'tales-of-a-fourth-grade-nothing.html',
      fileDevA: 'tales-of-a-fourth-grade-nothing/dev-a.pdf', fileDevB: 'tales-of-a-fourth-grade-nothing/dev-b.pdf', fileVocab: 'tales-of-a-fourth-grade-nothing/vocab.pdf'
    },
    {
      id: 'zas', title: 'Zoey and Sassafras', author: 'Asia Citro',
      level: 'Junior Level', cefr: 'A2-B1', grade: '3-4',
      emoji: '\uD83D\uDD2C', coverBg: '#f5e2db',
      synopsis: 'When a sick baby dragon appears at Zoey\'s barn, she must use the scientific method to diagnose and treat him before it\'s too late. A science-fantasy adventure about curiosity, persistence, and responsible care.',
      viewUrl: 'zoey-and-sassafras.html',
      fileDevA: 'zoey-and-sassafras/dev-a.pdf', fileDevB: 'zoey-and-sassafras/dev-b.pdf', fileVocab: 'zoey-and-sassafras/vocab.pdf'
    }
  ];

  var token_ref = token; // keep token in scope for download handler

  // ── Render cards ──────────────────────────────────────────────────
  var grid = document.getElementById('tl-grid');
  var emptyMsg = document.getElementById('tl-empty');

  function handleDownload(fileId, btnEl, label) {
    btnEl.disabled = true;
    btnEl.textContent = 'Preparing\u2026';
    if (DEV_PREVIEW) {
      setTimeout(function () {
        showToast('Downloads require the live backend. Preview mode active.');
        btnEl.disabled = false;
        btnEl.textContent = label;
      }, 600);
      return;
    }
    fetch('https://crowscallpress-production.up.railway.app/api/files/download/' + fileId, {
      headers: { 'Authorization': 'Bearer ' + token_ref }
    })
      .then(function (res) {
        if (res.status === 401) {
          sessionStorage.removeItem('tl_token');
          sessionStorage.removeItem('tl_name');
          window.location.href = 'index.html';
          return;
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.url) { window.open(data.url, '_blank'); }
        else { showToast('Could not load the file. Please try again.'); }
        btnEl.disabled = false;
        btnEl.textContent = label;
      })
      .catch(function () {
        showToast('Something went wrong. Please check your connection.');
        btnEl.disabled = false;
        btnEl.textContent = label;
      });
  }

  function renderCards(list) {
    grid.innerHTML = '';
    if (list.length === 0) { emptyMsg.style.display = 'block'; return; }
    emptyMsg.style.display = 'none';
    list.forEach(function (r) {
      var card = document.createElement('div');
      card.className = 'tl-card';
      card.innerHTML =
        '<div class="tl-card-inner">' +
          '<div class="tl-card-cover" style="background:' + r.coverBg + '">' +
            '<span class="tl-cover-emoji">' + r.emoji + '</span>' +
          '</div>' +
          '<div class="tl-card-body">' +
            '<div class="tl-card-meta">' +
              '<span class="tl-badge tl-badge--cefr">' + r.cefr.replace('-', '\u2013') + '</span>' +
              '<span class="tl-badge tl-badge--level">' + r.level + '</span>' +
              '<span class="tl-badge tl-badge--grade">Grades ' + r.grade + '</span>' +
            '</div>' +
            '<h3 class="tl-card-title">' + r.title + '</h3>' +
            '<p class="tl-card-author">by ' + r.author + '</p>' +
            '<p class="tl-card-desc">' + r.synopsis + '</p>' +
            '<div class="tl-card-actions">' +
              '<a class="tl-action-btn tl-action-btn--primary" href="' + r.viewUrl + '">View Material</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      grid.appendChild(card);
    });
    grid.querySelectorAll('.tl-action-btn[data-file]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        handleDownload(this.getAttribute('data-file'), this, this.getAttribute('data-label'));
      });
    });
  }

  renderCards(resources);

  // ── Filters ───────────────────────────────────────────────────────
  var searchEl = document.getElementById('tl-search');
  var gradeEl  = document.getElementById('tl-filter-grade');
  var cefrEl   = document.getElementById('tl-filter-cefr');

  function applyFilters() {
    var q     = searchEl.value.toLowerCase();
    var grade = gradeEl.value;
    var cefr  = cefrEl.value;
    renderCards(resources.filter(function (r) {
      return (!q     || r.title.toLowerCase().includes(q) || r.author.toLowerCase().includes(q) || r.synopsis.toLowerCase().includes(q)) &&
             (!grade || r.grade === grade) &&
             (!cefr  || r.cefr  === cefr);
    }));
  }

  searchEl.addEventListener('input',  applyFilters);
  gradeEl.addEventListener('change',  applyFilters);
  cefrEl.addEventListener('change',   applyFilters);
  document.getElementById('tl-clear-filters').addEventListener('click', function () {
    searchEl.value = ''; gradeEl.value = ''; cefrEl.value = '';
    renderCards(resources);
  });

  // ── Toast ─────────────────────────────────────────────────────────
  function showToast(msg) {
    var toast = document.getElementById('tl-toast');
    toast.textContent = msg;
    toast.classList.add('tl-toast--visible');
    setTimeout(function () { toast.classList.remove('tl-toast--visible'); }, 4000);
  }
})();

// ── Help widget ───────────────────────────────────────────────────────
(function () {
  var answers = {
    archetype: '<strong>Archetype Wheel</strong><p>The Archetype Wheel helps students identify classic character types within a novel. Open the tool, then drag character names onto the wheel segment that best describes them \u2014 Hero, Shadow, Mentor, Trickster, and more.</p><p>There are no wrong answers. The goal is to spark classroom discussion about <em>why</em> a character fits a particular role and how that role shifts throughout the story.</p>',
    conflict:  '<strong>Conflict Scale</strong><p>The Conflict Scale lets students categorise the types of conflict present in the novel by dragging cards into four columns: <em>Self, Person, Society,</em> and <em>Nature</em>.</p><p>Use it before or after reading a chapter to track how conflicts develop \u2014 or as a revision activity at the end of the unit.</p>',
    theme:     '<strong>Literary Theme Web</strong><p>The Theme Web visualises how the novel\'s central themes connect to one another. Nodes are linked by shared ideas \u2014 click any node to highlight its relationships.</p><p>Use it as a discussion starter, a brainstorming tool, or a visual map students can reference throughout the unit.</p>',
    downloads: '<strong>Downloading Materials</strong><p>Each book card on your dashboard has download buttons below it. Click <em>Dev Response A</em>, <em>Dev Response B</em>, or <em>Vocabulary</em> to open the file in a new tab.</p><p>Files are securely hosted and only accessible to logged-in teachers. If a button is greyed out, the file has not been uploaded yet.</p>',
    books:     '<strong>Available Books</strong><p>Your dashboard shows all books currently in your library. New titles are added on an ongoing basis \u2014 check back each month for updates.</p><p>If you would like to request a specific title, contact us at <a href="mailto:crowscallpress@gmail.com">crowscallpress@gmail.com</a>.</p>',
    signout:   '<strong>Signing Out</strong><p>Click the <em>Sign Out</em> button in the top right of the dashboard at any time. You are also signed out automatically when you close the browser tab.</p><p>For security on shared computers, always sign out manually before leaving.</p>',
    password:  '<strong>Password Help</strong><p>Passwords are set by your school administrator or by Crow\'s Call Press when your account is created.</p><p>If you need a reset, email us at <a href="mailto:crowscallpress@gmail.com">crowscallpress@gmail.com</a> with your school name and we\'ll get it sorted quickly.</p>',
    contact:   '<strong>Contact Us</strong><p>We\'re happy to help with anything not covered here.</p><p>Email: <a href="mailto:crowscallpress@gmail.com">crowscallpress@gmail.com</a></p><p>We aim to respond within one business day.</p>'
  };

  var btn   = document.getElementById('tlHelpBtn');
  var panel = document.getElementById('tlHelpPanel');
  var close = document.getElementById('tlHelpClose');
  var qs    = document.getElementById('tlHelpQuestions');
  var ans   = document.getElementById('tlHelpAnswer');
  var text  = document.getElementById('tlHelpAnswerText');
  var back  = document.getElementById('tlHelpBack');

  btn.addEventListener('click', function () {
    var open = panel.classList.toggle('tl-help-panel--open');
    panel.setAttribute('aria-hidden', !open);
    showQuestions();
  });
  close.addEventListener('click', function () {
    panel.classList.remove('tl-help-panel--open');
    panel.setAttribute('aria-hidden', 'true');
  });
  back.addEventListener('click', showQuestions);

  document.querySelectorAll('.tl-help-q[data-q]').forEach(function (q) {
    q.addEventListener('click', function () {
      text.innerHTML = answers[this.dataset.q] || '';
      qs.classList.add('hidden');
      ans.classList.remove('hidden');
    });
  });

  document.getElementById('tlTakeTour').addEventListener('click', function () {
    panel.classList.remove('tl-help-panel--open');
    panel.setAttribute('aria-hidden', 'true');
    if (window.ccpStartTour) window.ccpStartTour();
  });

  function showQuestions() {
    ans.classList.add('hidden');
    qs.classList.remove('hidden');
  }
})();

// ── Dashboard tour ────────────────────────────────────────────────────
(function () {
  var TOUR_KEY = 'ccp_tl_tour_done';
  var steps = [
    { title: 'Welcome to your Teaching Library!', text: 'You\'re all set up. Let\'s take a quick look at what\'s here \u2014 it\'ll only take a moment.', target: null },
    { title: 'Teaching Tools', text: 'The Archetype Wheel, Conflict Scale, and Literary Theme Web are always here. Click any card to open an interactive tool in a new tab.', target: '.tl-tools-section' },
    { title: 'Your Books', text: 'Each card is a book in your library. You\'ll see the title, author, level, and a short synopsis at a glance.', target: '.tl-grid' },
    { title: 'Download Materials', text: 'Use these buttons to open materials for each text. Files open securely in a new tab \u2014 only accessible to logged-in teachers.', target: '.tl-card-actions' },
    { title: 'Need Help?', text: 'Click the ? button any time to get answers to common questions \u2014 or to restart this tour.', target: '#tlHelpBtn' }
  ];

  var cur = 0, hlEl = null, ttEl = null;

  function startTour() {
    cur = 0;
    if (!hlEl) { hlEl = document.createElement('div'); hlEl.className = 'tl-tour-highlight'; document.body.appendChild(hlEl); }
    if (!ttEl) { ttEl = document.createElement('div'); ttEl.className = 'tl-tour-tooltip'; document.body.appendChild(ttEl); }
    hlEl.style.opacity = '1'; ttEl.style.display = 'block';
    showStep(0);
  }

  function showStep(i) {
    var step = steps[i];
    var isLast = (i === steps.length - 1);
    var target = step.target ? document.querySelector(step.target) : null;
    var dots = steps.map(function (_, idx) {
      return '<span class="tl-tour-dot' + (idx === i ? ' tl-tour-dot--active' : '') + '"></span>';
    }).join('');
    ttEl.innerHTML =
      '<p class="tl-tour-step">Step ' + (i + 1) + ' of ' + steps.length + '</p>' +
      '<h3 class="tl-tour-title">' + step.title + '</h3>' +
      '<p class="tl-tour-text">' + step.text + '</p>' +
      '<div class="tl-tour-actions">' +
        '<div class="tl-tour-dots">' + dots + '</div>' +
        '<div style="display:flex;gap:8px;align-items:center;">' +
          '<button class="tl-tour-skip" id="tlTourSkip">Skip</button>' +
          '<button class="tl-tour-next" id="tlTourNext">' + (isLast ? 'Got it!' : 'Next \u2192') + '</button>' +
        '</div>' +
      '</div>';
    document.getElementById('tlTourNext').addEventListener('click', function () { if (isLast) { endTour(); } else { showStep(++cur); } });
    document.getElementById('tlTourSkip').addEventListener('click', endTour);
    if (!target) {
      hlEl.style.opacity = '0'; hlEl.style.width = '0'; hlEl.style.height = '0';
      ttEl.style.position = 'fixed'; ttEl.style.top = '50%'; ttEl.style.left = '50%'; ttEl.style.transform = 'translate(-50%, -50%)';
    } else {
      hlEl.style.opacity = '1'; ttEl.style.transform = '';
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(function () { positionAround(target); }, 380);
    }
  }

  function positionAround(target) {
    var r = target.getBoundingClientRect(), pad = 10;
    hlEl.style.position = 'fixed';
    hlEl.style.top    = (r.top  - pad) + 'px'; hlEl.style.left   = (r.left - pad) + 'px';
    hlEl.style.width  = (r.width  + pad * 2) + 'px'; hlEl.style.height = (r.height + pad * 2) + 'px';
    var ttH = ttEl.offsetHeight || 190, ttW = ttEl.offsetWidth || 300, gap = 14;
    var top  = (r.bottom + ttH + gap < window.innerHeight) ? r.bottom + gap : r.top - ttH - gap;
    var left = r.left + r.width / 2 - ttW / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - ttW - 12));
    top  = Math.max(12, top);
    ttEl.style.position = 'fixed'; ttEl.style.top = top + 'px'; ttEl.style.left = left + 'px';
  }

  function endTour() {
    if (hlEl) { hlEl.remove(); hlEl = null; }
    if (ttEl) { ttEl.remove(); ttEl = null; }
    localStorage.setItem(TOUR_KEY, '1');
  }

  if (!localStorage.getItem(TOUR_KEY)) { setTimeout(startTour, 900); }
  window.ccpStartTour = startTour;
})();
