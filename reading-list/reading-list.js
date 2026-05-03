function switchTab(level, btn) {
  document.querySelectorAll('.books-panel').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.level-tab').forEach(function(t) { t.classList.remove('active'); });
  document.getElementById('panel-' + level).classList.add('active');
  btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.level-tab[data-tab]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      switchTab(this.dataset.tab, this);
    });
  });
});

var BOOKS = {
  civic: [
    { month:'Jan', genre:'Step into Reading: Step 4', title:'Ben Franklin and the Magic Squares', link:'https://product.kyobobook.co.kr/detail/S000002480708' },
    { month:'Feb', genre:'Step into Reading: Step 4', title:'Volcanoes!', link:'https://product.kyobobook.co.kr/detail/S000003878934' },
    { month:'Mar', genre:'Step into Reading: Step 4', title:'How Not to Run for Class President', link:'https://product.kyobobook.co.kr/detail/S000003079614' },
    { month:'Apr', genre:'Step into Reading: Step 4', title:'Porky and Bess', link:'https://product.kyobobook.co.kr/detail/S000002482186' },
    { month:'May', genre:'Step into Reading: Step 4', title:'20,000 Baseball Cards Under the Sea', link:'https://product.kyobobook.co.kr/detail/S000003884915' },
    { month:'Jun', genre:'Step into Reading: Step 4', title:'The Titanic Lost... And Found!', link:'https://product.kyobobook.co.kr/detail/S000002501295' },
    { month:'Jul', genre:'Step into Reading: Step 4', title:'How Not to Babysit Your Brother', link:'https://product.kyobobook.co.kr/detail/S000002481114' },
    { month:'Aug', genre:'Step into Reading: Step 4', title:'The Mystery of The Pirate Ghost', link:'https://product.kyobobook.co.kr/detail/S000002501237' },
    { month:'Sep', genre:'Step into Reading: Step 4', title:'Pompeii Buried Alive!', link:'https://product.kyobobook.co.kr/detail/S000002501308' },
    { month:'Oct', genre:'Step into Reading: Step 4', title:'A Poor Excuse for a Dragon!', link:'https://product.kyobobook.co.kr/detail/S000002482488' },
    { month:'Nov', genre:'Step into Reading: Step 4', title:'Ballerina Dreams', link:'https://product.kyobobook.co.kr/detail/S000002488652' },
    { month:'Dec', genre:'Step into Reading: Step 4', title:'The Little Mermaid', link:'https://product.kyobobook.co.kr/detail/S000002736514' }
  ],
  candidate: [
    { month:'Jan', genre:'A to Z Mysteries', book1:'The Invisible Island (#I)', link1:'https://product.kyobobook.co.kr/detail/S000003878894', book2:'The Kidnapped King (#K)', link2:'https://product.kyobobook.co.kr/detail/S000002737143' },
    { month:'Feb', genre:'A to Z Mysteries', book1:'The Missing Mummy (#M)', link1:'https://product.kyobobook.co.kr/detail/S000003878898', book2:'The Orange Outlaw (#O)', link2:'https://product.kyobobook.co.kr/detail/S000003878900' },
    { month:'Mar', genre:'Junie B. Jones', book1:'Stupid Smelly Bus (#1)', link1:'https://product.kyobobook.co.kr/detail/S000002481586', book2:'A Little Monkey Business (#2)', link2:'https://product.kyobobook.co.kr/detail/S000002736572' },
    { month:'Apr', genre:'Junie B. Jones', book1:'Her Big Fat Mouth (#3)', link1:'https://product.kyobobook.co.kr/detail/S000002737171', book2:'Sneaky Peeky Spying (#4)', link2:'https://product.kyobobook.co.kr/detail/S000011055023' },
    { month:'May', genre:'Junie B. Jones', book1:"Yucky Blucky Fruitcake (#5)", link1:'https://product.kyobobook.co.kr/detail/S000011055337', book2:"Meanie Jim's Birthday (#6)", link2:'https://product.kyobobook.co.kr/detail/S000011055338' },
    { month:'Jun', genre:'Junie B. Jones', book1:'Handsome Warren (#7)', link1:'https://product.kyobobook.co.kr/detail/S000011055339', book2:'A Monster under her Bed (#8)', link2:'https://product.kyobobook.co.kr/detail/S000011055340' },
    { month:'Jul', genre:'Magic Tree House', book1:'Dinosaurs Before Dark (#1)', link1:'https://product.kyobobook.co.kr/detail/S000002736520', book2:'The Knight at Dawn (#2)', link2:'https://product.kyobobook.co.kr/detail/S000002736521' },
    { month:'Aug', genre:'Magic Tree House', book1:'Mummies in the Morning (#3)', link1:'https://product.kyobobook.co.kr/detail/S000002736522', book2:'Pirates Past Noon (#4)', link2:'https://product.kyobobook.co.kr/detail/S000002736523' },
    { month:'Sep', genre:'Magic Tree House', book1:'Night of the Ninjas (#5)', link1:'https://product.kyobobook.co.kr/detail/S000002736671', book2:'Afternoon on the Amazon (#6)', link2:'https://product.kyobobook.co.kr/detail/S000002736672' },
    { month:'Oct', genre:'Magic Tree House', book1:'Sunset of the Sabertooth (#7)', link1:'https://product.kyobobook.co.kr/detail/S000002736673', book2:'Midnight on the Moon (#8)', link2:'https://product.kyobobook.co.kr/detail/S000002736674' },
    { month:'Nov', genre:'A to Z Mysteries', book1:'The Absent Author (#A)', link1:'https://product.kyobobook.co.kr/detail/S000002736824', book2:'The Canary Caper (#C)', link2:'https://product.kyobobook.co.kr/detail/S000002737215' },
    { month:'Dec', genre:'A to Z Mysteries', book1:"The Empty Envelope (#D)", link1:'https://product.kyobobook.co.kr/detail/S000003878890', book2:"The Goose's Gold (#G)", link2:'https://product.kyobobook.co.kr/detail/S000002737050' }
  ],
  monarch: [
    { month:'Jan', genre:'Poetry & Prose', title:'I Am Phoenix: Poems for Two Voices', link:'https://product.kyobobook.co.kr/detail/S000005960952' },
    { month:'Feb', genre:'Scripted & Illustrated', title:'The Bad Guys', link:'https://product.kyobobook.co.kr/detail/S000010089479' },
    { month:'Mar', genre:'Anthologies & Novellas', title:'Peter Rabbit and Eleven Other Favorite Tales', link:'https://product.kyobobook.co.kr/detail/S000009675360' },
    { month:'Apr', genre:'Coming of Age', title:'Not Really Buddies', link:'https://product.kyobobook.co.kr/detail/S000211149877' },
    { month:'May', genre:'Fantasy', title:'Tales of Wizards and Dragons', link:'https://product.kyobobook.co.kr/detail/S000213782967' },
    { month:'Jun', genre:'Mythology & Folklore', title:'The Adventures of Sir Lancelot the Great', link:'https://product.kyobobook.co.kr/detail/S000010096879' },
    { month:'Jul', genre:'Classics', title:'The Adventures of Pinocchio', link:'https://product.kyobobook.co.kr/detail/S000009676259' },
    { month:'Aug', genre:'NonFiction', title:'The Year of Miss Agnes', link:'https://product.kyobobook.co.kr/detail/S000011102613' },
    { month:'Sep', genre:'Eastern Phil. & Translated', title:'Tashi and the Mixed-Up Monster', link:'https://www.wendybook.com/book/detail/29935' },
    { month:'Oct', genre:'Psychological Fiction', title:'Calendar Mysteries #10: October Ogre', link:'https://product.kyobobook.co.kr/detail/S000002482504' },
    { month:'Nov', genre:'Speculative Fiction', title:'Rise of the Balloon Goons', link:'https://product.kyobobook.co.kr/detail/S000002681343' },
    { month:'Dec', genre:'Social & Natural Sciences', title:'I Survived the California Wildfires, 2018', link:'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=220216786' }
  ],
  junior: [
    { month:'Jan', genre:'Poetry & Prose', title:'Joyful Noise', link:'https://product.kyobobook.co.kr/detail/S000005960953' },
    { month:'Feb', genre:'Scripted & Illustrated', title:'Be Prepared', link:'https://product.kyobobook.co.kr/detail/S000003478746' },
    { month:'Mar', genre:'Anthologies & Novellas', title:"My Father's Dragon", link:'https://product.kyobobook.co.kr/detail/S000002559066' },
    { month:'Apr', genre:'Coming of Age', title:'Tales of a Fourth Grade Nothing', link:'https://product.kyobobook.co.kr/detail/S000002294575' },
    { month:'May', genre:'Fantasy', title:'Dragons and Marshmallows', link:'https://product.kyobobook.co.kr/detail/S000003648104' },
    { month:'Jun', genre:'Mythology & Folklore', title:'The Skull: A Tyrolean Folktale', link:'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=303377746' },
    { month:'Jul', genre:'Classics', title:'The Happy Prince & Other Stories', link:'https://product.kyobobook.co.kr/detail/S000035970176' },
    { month:'Aug', genre:'NonFiction', title:'Number the Stars', link:'https://product.kyobobook.co.kr/detail/S000002683959' },
    { month:'Sep', genre:'Eastern Phil. & Translated', title:'The Cat Who Went to Heaven', link:'https://product.kyobobook.co.kr/detail/S000027326438' },
    { month:'Oct', genre:'Psychological Fiction', title:'The Twits', link:'https://product.kyobobook.co.kr/detail/S000002294633' },
    { month:'Nov', genre:'Speculative Fiction', title:'Fortunately, the Milk', link:'https://product.kyobobook.co.kr/detail/S000002219211' },
    { month:'Dec', genre:'Social & Natural Sciences', title:'Magic School Bus Dinosaur Detectives', link:'https://product.kyobobook.co.kr/detail/S000003885150' }
  ],
  lexis: [
    { month:'Jan', genre:'Poetry & Prose', title:'Love That Dog', link:'https://product.kyobobook.co.kr/detail/S000002225665' },
    { month:'Feb', genre:'Scripted & Illustrated', title:'In Real Life', link:'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=105484882' },
    { month:'Mar', genre:'Anthologies & Novellas', title:'The Hundred Dresses', link:'https://product.kyobobook.co.kr/detail/S000002299118' },
    { month:'Apr', genre:'Coming of Age', title:'Bridge to Terabithia', link:'https://product.kyobobook.co.kr/detail/S000002225439' },
    { month:'May', genre:'Fantasy', title:'The Tale of Despereaux', link:'https://product.kyobobook.co.kr/detail/S000002835651' },
    { month:'Jun', genre:'Mythology & Folklore', title:'Jason, the Argonauts, and the Golden Fleece', link:'https://product.kyobobook.co.kr/detail/S000028936549' },
    { month:'Jul', genre:'Classics', title:'Sarah, Plain and Tall', link:'https://product.kyobobook.co.kr/detail/S000002221399' },
    { month:'Aug', genre:'NonFiction', title:'World Without Fish', link:'https://product.kyobobook.co.kr/detail/S000011624783' },
    { month:'Sep', genre:'Eastern Phil. & Translated', title:'Hen Who Dreamed She Could Fly', link:'https://product.kyobobook.co.kr/detail/S000035075167' },
    { month:'Oct', genre:'Psychological Fiction', title:'The Curse of the Campfire Weenies', link:'https://product.kyobobook.co.kr/detail/S000002844933' },
    { month:'Nov', genre:'Speculative Fiction', title:'Animorphs: The Invasion', link:'https://product.kyobobook.co.kr/detail/S000002680634' },
    { month:'Dec', genre:'Social & Natural Sciences', title:'Esperanza Rising', link:'https://product.kyobobook.co.kr/detail/S000002553852' }
  ],
  mythos: [
    { month:'Jan', genre:'Poetry & Prose', title:'Instructions for Traveling West', link:'https://product.kyobobook.co.kr/detail/S000211970751' },
    { month:'Feb', genre:'Scripted & Illustrated', title:'The Many Deaths of Laila Starr', link:'https://product.kyobobook.co.kr/detail/S000033024975' },
    { month:'Mar', genre:'Anthologies & Novellas', title:'The Royal Game: A Chess Story', link:'https://product.kyobobook.co.kr/detail/S000203156915' },
    { month:'Apr', genre:'Coming of Age', title:'A Monster Calls', link:'https://product.kyobobook.co.kr/detail/S000002835114' },
    { month:'May', genre:'Fantasy', title:'Full Tilt', link:'https://product.kyobobook.co.kr/detail/S000027328642' },
    { month:'Jun', genre:'Mythology & Folklore', title:"The Magician's Nephew", link:'https://product.kyobobook.co.kr/detail/S000002225659' },
    { month:'Jul', genre:'Classics', title:"The Hitchhiker's Guide to the Galaxy", link:'https://product.kyobobook.co.kr/detail/S000002464870' },
    { month:'Aug', genre:'NonFiction', title:'Witches', link:'https://product.kyobobook.co.kr/detail/S000027542830' },
    { month:'Sep', genre:'Eastern Phil. & Translated', title:'She and Her Cat', link:'https://product.kyobobook.co.kr/detail/S000211034493' },
    { month:'Oct', genre:'Psychological Fiction', title:'The Westing Game', link:'https://product.kyobobook.co.kr/detail/S000002294133' },
    { month:'Nov', genre:'Speculative Fiction', title:'Ready Player One', link:'https://product.kyobobook.co.kr/detail/S000006057231' },
    { month:'Dec', genre:'Social & Natural Sciences', title:'The Man Who Mistook His Wife for a Hat', link:'https://product.kyobobook.co.kr/detail/S000003328876' }
  ],
  opsis: [
    { month:'Jan', genre:'Poetry & Prose', title:'Citizen: An American Lyric', link:'https://product.kyobobook.co.kr/detail/S000002293483' },
    { month:'Feb', genre:'Scripted & Illustrated', title:"It's Lonely at the Centre of the Earth", link:'https://product.kyobobook.co.kr/detail/S000030277583' },
    { month:'Mar', genre:'Anthologies & Novellas', title:'We Have Always Lived in the Castle', link:'https://product.kyobobook.co.kr/detail/S000212449168' },
    { month:'Apr', genre:'Coming of Age', title:'Speak', link:'https://product.kyobobook.co.kr/detail/S000002429861' },
    { month:'May', genre:'Fantasy', title:'Redwall', link:'https://product.kyobobook.co.kr/detail/S000006231742' },
    { month:'Jun', genre:'Mythology & Folklore', title:'Oedipus Rex', link:'https://product.kyobobook.co.kr/detail/S000009674485' },
    { month:'Jul', genre:'Classics', title:'The Picture of Dorian Gray', link:'https://product.kyobobook.co.kr/detail/S000002418364' },
    { month:'Aug', genre:'NonFiction', title:"Hidden Figures (Young Readers' Edition)", link:'https://product.kyobobook.co.kr/detail/S000002222925' },
    { month:'Sep', genre:'Eastern Phil. & Translated', title:'The Vegetarian', link:'https://product.kyobobook.co.kr/detail/S000003079380' },
    { month:'Oct', genre:'Psychological Fiction', title:"The Driver's Seat", link:'https://product.kyobobook.co.kr/detail/S000216190721' },
    { month:'Nov', genre:'Speculative Fiction', title:"Cat's Cradle", link:'https://product.kyobobook.co.kr/detail/S000002290605' },
    { month:'Dec', genre:'Social & Natural Sciences', title:"Why Fish Don't Exist", link:'https://product.kyobobook.co.kr/detail/S000003313335' }
  ]
};

function bookCoverImg(level, month, suffix, title) {
  var mon = month.toLowerCase();
  var base = '../images/reading/' + level + '/' + mon + (suffix || '');
  var altText = title ? 'Book cover for ' + title : 'Book cover for ' + mon.charAt(0).toUpperCase() + mon.slice(1) + ' reading at ' + level + ' level';
  return '<img src="' + base + '.jpg" class="book-cover-img" alt="' + altText + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
         '<div class="no-cover" style="display:none">' + mon.charAt(0).toUpperCase() + mon.slice(1) + '</div>';
}

function renderBooks() {
  Object.keys(BOOKS).forEach(function(level) {
    var grid = document.getElementById('grid-' + level);
    if (!grid) return;
    if (level === 'candidate') {
      grid.innerHTML = BOOKS[level].map(function(book) {
        return '<div class="book-card book-card-pair">' +
          '<div class="pair-month-tag">' + book.month + ' - <span>' + book.genre + '</span></div>' +
          '<div class="pair-covers">' +
            '<div class="pair-book">' +
              '<div class="book-cover">' + bookCoverImg('candidate', book.month, '-1', book.book1) + '</div>' +
              '<div class="book-info"><div class="book-title">' + book.book1 + '</div></div>' +
              '<a class="book-link' + (book.link1 === '#' ? ' no-link' : '') + '" href="' + book.link1 + '"' + (book.link1 === '#' ? '' : ' target="_blank" rel="noopener"') + '>View on Store &#8594;</a>' +
            '</div>' +
            '<div class="pair-book">' +
              '<div class="book-cover">' + bookCoverImg('candidate', book.month, '-2', book.book2) + '</div>' +
              '<div class="book-info"><div class="book-title">' + book.book2 + '</div></div>' +
              '<a class="book-link' + (book.link2 === '#' ? ' no-link' : '') + '" href="' + book.link2 + '"' + (book.link2 === '#' ? '' : ' target="_blank" rel="noopener"') + '>View on Store &#8594;</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');
    } else {
      grid.innerHTML = BOOKS[level].map(function(book) {
        var noLink = book.link === '#';
        return '<div class="book-card">' +
          '<div class="book-cover">' +
          bookCoverImg(level, book.month, null, book.title) +
          '<span class="month-tag">' + book.month + '</span>' +
          '</div>' +
          '<div class="book-info">' +
          '<div class="book-genre">' + book.genre + '</div>' +
          '<div class="book-title">' + book.title + '</div>' +
          '</div>' +
          '<a class="book-link' + (noLink ? ' no-link' : '') + '" href="' + book.link + '"' + (noLink ? '' : ' target="_blank" rel="noopener"') + '>View on Store &#8594;</a>' +
          '</div>';
      }).join('');
    }
  });
}

renderBooks();

// Newsletter bar - rises when near bottom of page
(function() {
  if (!document.getElementById('reading-newsletter-bar')) return;
  var bar = document.getElementById('reading-newsletter-bar');
  var shown = false;
  var dismissed = false;

  function onScroll() {
    if (dismissed) return;
    var scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    if (scrolled >= 0.3) {
      if (!shown) { bar.classList.add('visible'); shown = true; }
    } else {
      if (shown) { bar.classList.remove('visible'); shown = false; }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  document.getElementById('reading-bar-close').addEventListener('click', function() {
    dismissed = true;
    bar.classList.remove('visible');
  });

  document.getElementById('reading-newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = e.target;
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form)
    }).then(function(r) { return r.json(); }).then(function(json) {
      if (json.success) {
        form.style.display = 'none';
        document.getElementById('reading-newsletter-success').style.display = 'block';
      }
    }).catch(function() {});
  });
})();
