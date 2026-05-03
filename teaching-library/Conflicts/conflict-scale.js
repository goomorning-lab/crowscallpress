// ── TYPE DATA ─────────────────────────────────────────────
const TYPES = {
  character: { name:'Character', icon:'\u2694\uFE0F', cssClass:'type-character', color:'#b85c3a', pale:'#f5e2db', keywords:['Confrontation','Opponent','External','Rivalry','Morality'] },
  self:      { name:'Self',      icon:'\uD83D\uDC64', cssClass:'type-self',      color:'#a07c28', pale:'#f5ecd0', keywords:['Internal','Emotions','Choices'] },
  society:   { name:'Society',   icon:'\u2696\uFE0F', cssClass:'type-society',   color:'#4a6e5a', pale:'#ddeee4', keywords:['Rules','Norms','Injustice','Rebellion'] },
  nature:    { name:'Nature',    icon:'\uD83C\uDF0A', cssClass:'type-nature',    color:'#3a6b7a', pale:'#d4eaf0', keywords:['Environment','Elements','Survival','Wilderness'] },
  fate:      { name:'Fate',      icon:'\u2726',       cssClass:'type-fate',      color:'#1e2d4a', pale:'#e8e0d0', keywords:['Circumstances','Destiny','Predestination','Fortune'] }
};

const COMBOS = {
  'character-character': { title:'Character vs. Character', tagline:'Two wills, one victor', tension:'Who has the stronger claim \u2014 and what will each sacrifice to prevail?', description:'The most direct form of conflict: two characters with opposing goals collide. This creates rivalry, betrayal, mentorship gone wrong, or ideological war. The drama lives in the gap between what each side wants and why they want it.', example:{ work:'Harry Potter', detail:'Harry vs. Voldemort \u2014 good vs. evil, love vs. fear, two sides of the same prophecy locked in mutual destruction. Neither can live while the other survives.' } },
  'character-self':      { title:'Character vs. Self',      tagline:'The war within',       tension:'Can this person become who they need to be \u2014 or will their own fear stop them?', description:'The character\'s greatest enemy is their own doubt, guilt, desire, or belief. The external world provides the pressure, but the real battle is internal \u2014 between who they are and who they must become.', example:{ work:'Coraline', detail:'Coraline vs. Self-Doubt \u2014 to save her parents and the ghost children, she must confront fear with bravery and take risks instead of staying passive and safe.' } },
  'character-society':   { title:'Character vs. Society',   tagline:'One against the many', tension:'What does it cost to stand apart \u2014 and is the fight worth what must be given up?', description:'A character finds themselves at odds with the rules, values, or expectations of their world. This conflict drives stories of rebellion, reform, outcasts, and visionaries who see what others refuse to.', example:{ work:'The Hunger Games', detail:'Katniss Everdeen vs. the Capitol \u2014 one girl\'s defiance ignites a revolution against a system designed to keep people powerless and afraid.' } },
  'character-nature':    { title:'Character vs. Nature',    tagline:'Human will against the wild', tension:'Can human strength and ingenuity outlast a world that doesn\'t care if we survive?', description:'A character must struggle against the indifferent power of the natural world. Nature doesn\'t hate the protagonist \u2014 it simply is. Survival depends on adaptability, courage, and resourcefulness in the face of vast indifference.', example:{ work:'Hatchet', detail:'Brian Robeson must survive alone in the Canadian wilderness after a plane crash, learning to read nature\'s rules or perish without any rescuer coming.' } },
  'character-fate':      { title:'Character vs. Fate',      tagline:'Defiance against the inevitable', tension:'Is free will real \u2014 or are we actors in a story already written?', description:'A character strains against destiny, prophecy, or circumstances they did not choose. This conflict asks the deepest question: can human agency overpower forces that predate and outlast any single life?', example:{ work:'Coraline', detail:'Coraline vs. The Rules of the Other Mother\'s World \u2014 she outsmarts a fate that has claimed others before her, bending the rules with cleverness and sheer willpower.' } },
  'self-self':           { title:'Self vs. Self',           tagline:'Divided against oneself', tension:'Which version of this person will survive \u2014 and at what cost to the other?', description:'The character holds two irreconcilable parts of themselves in direct opposition \u2014 past vs. future self, suppressed identity vs. performed identity. Rare and deeply psychological, this is the most intimate battlefield in fiction.', example:{ work:'Strange Case of Dr Jekyll and Mr Hyde', detail:'Jekyll\'s rational self wages war against Hyde\'s uninhibited nature \u2014 two personalities in one body, neither able to fully destroy the other.' } },
  'self-society':        { title:'Self vs. Society',        tagline:'Inner truth against outer pressure', tension:'Is belonging worth the cost of becoming someone else?', description:'The character\'s private values, identity, or sense of self conflicts with what the world demands of them. This is the conflict of conformity \u2014 of being asked to erase yourself to belong, to perform instead of simply be.', example:{ work:'The Perks of Being a Wallflower', detail:'Charlie\'s fragile inner world collides with the social performances of high school \u2014 authenticity vs. the relentless pressure to fit in and be seen.' } },
  'self-nature':         { title:'Self vs. Nature',         tagline:'Mind and body in the wild', tension:'When the body is at its limit, what does the inner self reveal?', description:'Physical survival strips away social armor, forcing a reckoning with who the character truly is. The wilderness becomes a mirror \u2014 reflecting the character\'s psychological state back at them with brutal clarity.', example:{ work:'Into the Wild', detail:'Christopher McCandless seeks truth in the Alaskan wilderness, but his rejection of society leads to a confrontation with both nature and his own illusions about himself.' } },
  'self-fate':           { title:'Self vs. Fate',           tagline:'Acceptance or resistance', tension:'How much of who we are is chosen \u2014 and how much is simply given to us?', description:'A character grapples with their own identity in relation to forces they didn\'t choose: illness, trauma, prophecy, loss. The conflict is between surrendering to what is written and insisting on the right to author oneself.', example:{ work:'The Fault in Our Stars', detail:'Hazel Grace must reconcile her sense of self with a terminal diagnosis she didn\'t choose \u2014 finding meaning and love within a fate she cannot escape or change.' } },
  'society-society':     { title:'Society vs. Society',     tagline:'System against system', tension:'When two worlds collide, which values survive \u2014 and which are buried with the dead?', description:'Two opposing social structures, cultures, or factions clash. Neither is purely right or wrong \u2014 each has its own internal logic. The conflict reveals how human communities construct meaning and defend it at great cost.', example:{ work:'Romeo and Juliet', detail:'The Montagues and Capulets \u2014 two social systems locked in generational hatred that destroys the very things each claims to protect.' } },
  'society-nature':      { title:'Society vs. Nature',      tagline:'Order vs. the untameable', tension:'Can civilization hold its shape when nature refuses to be controlled?', description:'The structures humans build \u2014 laws, cities, economies \u2014 strain against the indifference of the natural world. This conflict asks whether human order is true strength or simply fragility well-disguised.', example:{ work:'Coraline', detail:'Normal People vs. the Other World \u2014 ordinary society ignores danger while nature\'s uncanny side intrudes and consumes those who don\'t heed the warning.' } },
  'society-fate':        { title:'Society vs. Fate',        tagline:'Collective will against the inevitable', tension:'Can a people reshape their destiny together \u2014 or are some forces too large for any community?', description:'A society faces a fate it cannot outrun: prophecy, ecological collapse, historical reckoning. The story examines how communities respond to forces larger than any individual \u2014 with denial, sacrifice, or transformation.', example:{ work:'Coraline', detail:'Ghost Children vs. Forgetting \u2014 a lost society of souls reaches out for rescue while fate works to erase their voices and identities forever.' } },
  'nature-nature':       { title:'Nature vs. Nature',       tagline:'Force against force', tension:'When no human will shapes the outcome, what laws govern who survives?', description:'Natural forces oppose each other \u2014 predator and prey, storm and shoreline, fire and forest. Rare as a primary conflict, but powerful as backdrop or metaphor.', example:{ work:'The Call of the Wild', detail:'Buck\'s domesticated nature wars against his awakening wild instincts \u2014 two versions of nature competing within one creature for dominance.' } },
  'nature-fate':         { title:'Nature vs. Fate',         tagline:'Wild chance and predestined end', tension:'Is a natural disaster the hand of fate \u2014 or meaningless chaos we choose to make meaningful?', description:'The forces of the natural world intersect with questions of destiny. A storm, plague, or famine arrives not by any character\'s will \u2014 and survivors must decide whether it was random, ordained, or something they can yet defy.', example:{ work:'Life of Pi', detail:'Pi\'s survival at sea pits him against nature\'s violence and fate\'s apparent indifference \u2014 forcing him to construct meaning in circumstances no one could have chosen.' } },
  'fate-fate':           { title:'Fate vs. Fate',           tagline:'Competing destinies', tension:'What happens when two ordained outcomes cannot both be true \u2014 and something must shatter?', description:'Two prophecies, two destinies, two inescapable outcomes that cannot coexist. This conflict sits at the heart of epic and mythological storytelling.', example:{ work:'Macbeth', detail:'Macbeth\'s prophesied rise vs. Banquo\'s prophesied line \u2014 two fates that cannot both be fulfilled in full, setting in motion a chain of destruction.' } }
};

let zones = { left:null, right:null };
let dragType = null;

document.querySelectorAll('.conflict-block').forEach(card=>{
  card.addEventListener('dragstart', e=>{ dragType=card.dataset.type; card.classList.add('dragging'); e.dataTransfer.effectAllowed='copy'; });
  card.addEventListener('dragend', ()=>{ card.classList.remove('dragging'); dragType=null; });
});
document.querySelectorAll('.scale-pan').forEach(pan=>{
  pan.addEventListener('dragover', e=>{ e.preventDefault(); e.dataTransfer.dropEffect='copy'; pan.classList.add('drag-over'); });
  pan.addEventListener('dragleave', e=>{ if(!pan.contains(e.relatedTarget)) pan.classList.remove('drag-over'); });
  pan.addEventListener('drop', e=>{ e.preventDefault(); pan.classList.remove('drag-over'); if(dragType) setZone(pan.dataset.zone,dragType); });
});

let touchType=null, ghost=null;
document.querySelectorAll('.conflict-block').forEach(card=>{
  card.addEventListener('touchstart', e=>{ touchType=card.dataset.type; ghost=card.cloneNode(true); ghost.style.cssText=`position:fixed;pointer-events:none;opacity:0.88;z-index:9999;width:${card.offsetWidth}px;transform:scale(1.07);border-radius:14px;`; document.body.appendChild(ghost); moveGhost(e.touches[0]); }, { passive:true });
  card.addEventListener('touchmove', e=>{ e.preventDefault(); moveGhost(e.touches[0]); highlightPanUnder(e.touches[0]); }, { passive:false });
  card.addEventListener('touchend', e=>{ const touch=e.changedTouches[0], el=document.elementFromPoint(touch.clientX,touch.clientY), pan=el?.closest('.scale-pan'); if(pan&&touchType) setZone(pan.dataset.zone,touchType); if(ghost){ghost.remove();ghost=null;} document.querySelectorAll('.scale-pan').forEach(p=>p.classList.remove('drag-over')); touchType=null; });
});

function moveGhost(touch) { if(!ghost) return; ghost.style.left=(touch.clientX-ghost.offsetWidth/2)+'px'; ghost.style.top=(touch.clientY-ghost.offsetHeight/2)+'px'; }
function highlightPanUnder(touch) { document.querySelectorAll('.scale-pan').forEach(p=>p.classList.remove('drag-over')); const el=document.elementFromPoint(touch.clientX,touch.clientY), pan=el?.closest('.scale-pan'); if(pan) pan.classList.add('drag-over'); }

function setZone(side, type) { zones[side]=type; renderPan(side); updateAll(); }
function clearZone(side) { zones[side]=null; renderPan(side); updateAll(); }
function clearAll() { zones={left:null,right:null}; renderPan('left'); renderPan('right'); updateAll(); }

function renderPan(side) {
  const type=zones[side], capSide=side.charAt(0).toUpperCase()+side.slice(1);
  const pan=document.getElementById('zone'+capSide), emptyEl=document.getElementById('empty'+capSide), contentEl=document.getElementById('content'+capSide);
  Object.values(TYPES).forEach(t=>pan.classList.remove(t.cssClass));
  pan.classList.remove('has-block');
  if(!type){ emptyEl.style.display=''; contentEl.style.display='none'; contentEl.innerHTML=''; return; }
  const t=TYPES[type];
  pan.classList.add('has-block',t.cssClass);
  emptyEl.style.display='none'; contentEl.style.display='';
  contentEl.innerHTML=`
    <button class="pan-remove" data-zone="${side}" title="Remove">\u2715</button>
    <span class="pan-block-icon">${t.icon}</span>
    <span class="pan-block-name" style="color:${t.color}">${t.name}</span>
    <div class="pan-chips">
      ${t.keywords.map(k=>`<span class="pan-chip" style="background:${t.pale};color:${t.color}">${k}</span>`).join('')}
    </div>
  `;
}

function updateAll() {
  const {left,right}=zones, bothFilled=!!(left&&right);
  document.getElementById('vsBadge').classList.toggle('active',bothFilled);
  document.getElementById('fulcrumStem').classList.toggle('active',bothFilled);
  document.getElementById('fulcrumBase').classList.toggle('active',bothFilled);
  const beam=document.getElementById('beamArm'); beam.classList.remove('settling');
  if(bothFilled){ void beam.offsetWidth; beam.classList.add('settling'); }
  const empty=document.getElementById('analysisEmpty'), content=document.getElementById('analysisContent');
  if(!bothFilled){ empty.style.display=''; content.classList.remove('show'); return; }
  empty.style.display='none';
  const key=COMBOS[`${left}-${right}`]?`${left}-${right}`:`${right}-${left}`;
  const combo=COMBOS[key]; if(!combo) return;
  document.getElementById('aTitle').textContent=combo.title;
  document.getElementById('aTagline').textContent=`"${combo.tagline}"`;
  document.getElementById('aDesc').textContent=combo.description;
  document.getElementById('aTension').textContent=combo.tension;
  document.getElementById('aWork').textContent=combo.example.work;
  document.getElementById('aDetail').textContent=combo.example.detail;
  content.classList.remove('show'); void content.offsetWidth; content.classList.add('show');
}

// Event delegation for dynamically rendered pan-remove buttons
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.scale-pan').forEach(function(pan) {
    pan.addEventListener('click', function(e) {
      var btn = e.target.closest('.pan-remove');
      if (btn) clearZone(btn.dataset.zone);
    });
  });

  var clearAllBtn = document.getElementById('btnClearAll');
  if (clearAllBtn) clearAllBtn.addEventListener('click', clearAll);
});
