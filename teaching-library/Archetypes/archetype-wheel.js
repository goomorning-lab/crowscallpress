/* =========================================================
   DATA — archetypes in clockwise order from top (startAngle 0°=top)
   ORDER=top-left (270-360°)  FREEDOM=top-right (0-90°)
   EGO=bottom-right (90-180°) SOCIAL=bottom-left (180-270°)
========================================================= */
const GROUP_INTERACTIONS = {
  'EGO-EGO':         { label:'Clash of Legacies',         text:'Two forces each driven to leave their mark. Deeply energising, yet rivalry can emerge when their visions compete. At their best, they push each other toward greatness.' },
  'EGO-FREEDOM':     { label:'Independence & Drive',       text:'Freedom fuels ambition. Together they push past every boundary — though each may resist the other\'s lead. Conflict arises when one\'s autonomy limits the other\'s legacy.' },
  'EGO-ORDER':       { label:'Power & Structure',          text:'Ambition needs a scaffold, and structure needs a champion. This pairing can be formidable when aligned — and explosive when each tries to control the other.' },
  'EGO-SOCIAL':      { label:'Achievement vs. Belonging',  text:'The drive to stand out meets the need to fit in. A powerful creative tension — the individual who craves recognition, and the community that shapes who they become.' },
  'FREEDOM-FREEDOM': { label:'Boundless Exploration',      text:'Two free spirits in motion — expansive, curious, full of possibility. Without anchor or shared purpose, however, they risk endless wandering with no arrival.' },
  'FREEDOM-ORDER':   { label:'Structure vs. Liberation',   text:'A fundamental tension between authority and autonomy. This pairing sparks growth when each respects the other\'s needs — and sharp conflict when they don\'t.' },
  'FREEDOM-SOCIAL':  { label:'Wandering vs. Belonging',    text:'One seeks the horizon, the other seeks connection. Finding each other means confronting the tension between roots and wings — a deeply human story.' },
  'ORDER-ORDER':     { label:'Structural Alignment',       text:'Both driven by order and legacy. Together they can build resilient, lasting systems — though shared rigidity may become an obstacle to necessary change.' },
  'ORDER-SOCIAL':    { label:'Structure Meets Care',       text:'The need for order can nurture or constrain community. At best, this pairing creates safe, caring systems. At worst, care quietly becomes compliance.' },
  'SOCIAL-SOCIAL':   { label:'Relational Harmony',         text:'United by the desire to connect and belong. This pairing creates warmth and community — but may avoid necessary conflict or difficult individual truths.' },
};

const GROUPS = {
  ORDER:   { startAngle:270, endAngle:360, label:'Order',   subtitle:'Provide Structure',    shades:['#c8ddf2','#a0c2e8','#78a6dc'], centerFill:'#245c99', textColor:'#1a4070', badge:'#245c99' },
  FREEDOM: { startAngle:0,   endAngle:90,  label:'Freedom', subtitle:'Yearn for Paradise',   shades:['#c8e0cb','#9ec89e','#74b074'], centerFill:'#3f8145', textColor:'#1e5228', badge:'#3f8145' },
  EGO:     { startAngle:90,  endAngle:180, label:'Ego',     subtitle:'Leave a Legacy',       shades:['#fde8c0','#fbd090','#f8b860'], centerFill:'#f58120', textColor:'#7a3800', badge:'#d06010' },
  SOCIAL:  { startAngle:180, endAngle:270, label:'Social',  subtitle:'Connect with Others',  shades:['#e8d4e8','#d0b0d0','#b88cb8'], centerFill:'#8b5287', textColor:'#4a1848', badge:'#8b5287' },
};

const ARCHETYPES = [
  { n:4,  name:'INNOCENT', group:'FREEDOM', startAngle:0,   motivation:'safety',         tagline:'Wants peace, safety, and a pure world.',                          sub:[{name:'Utopian',desc:'Seeks idealistic perfection'},{name:'Traditionalist',desc:'Loves established norms'},{name:'Romantic',desc:'Seeks ideal love'},{name:'Daydreamer',desc:'Imagines pure beauty'}],          shadowName:'Victim',    shadowDesc:'Innocence exploited or weaponised — taken advantage of by others.',                                teach:'Cinderella as the Daydreamer is a classic example — she imagines beauty despite grim surroundings. The Shadow Victim emerges when innocence is exploited rather than protected. Great for discussing vulnerability in narrative.' },
  { n:5,  name:'SAGE',     group:'FREEDOM', startAngle:30,  motivation:'understanding',  tagline:'Seeks truth, wisdom, and deeper understanding.',                  sub:[{name:'Expert',desc:'Master of a domain of knowledge'},{name:'Detective',desc:'Uncovers truth behind a proposed lie'},{name:'Philosopher',desc:'Questions life and death deeply'},{name:'Mentor',desc:'Wisdom shared across generations'}], shadowName:'Elitist',   shadowDesc:'Hoards knowledge — believes sharing it devalues their sense of self.',                               teach:'The Sage pursues truth. Mentors, wise elders, truth-seeking detectives all qualify. The Elitist Shadow is subtle: a character who has knowledge but gatekeeps it out of ego or superiority.' },
  { n:6,  name:'EXPLORER', group:'FREEDOM', startAngle:60,  motivation:'freedom',        tagline:'Seeks new experiences, horizons, and answers.',                   sub:[{name:'Seeker',desc:'Longs for more opportunity or answers'},{name:'Iconoclast',desc:'Breaks all established rules'},{name:'Wanderer',desc:'Roams without destination'},{name:'Pilgrim',desc:'Journeys with spiritual purpose'}],  shadowName:'Raider',    shadowDesc:'Takes from what they find without respect — exploration becomes exploitation.',                       teach:'The Pilgrim has spiritual purpose; the Wanderer has none; the Raider takes selfishly from what is discovered. Ask students: what does this character\'s journey reveal about their values?' },
  { n:7,  name:'OUTLAW',   group:'EGO',     startAngle:90,  motivation:'revolution',     tagline:'Breaks rules boldly — resists, disrupts, and defies.',             sub:[{name:'Rebel',desc:'Resists authority openly'},{name:'Revolutionary',desc:'Fights for large-scale change'},{name:'Misfit',desc:"Doesn't fit into society"},{name:'Wild Person',desc:'Lives an untamed, unbound life'}],            shadowName:'Criminal',  shadowDesc:'Lawlessness tied to personal interest — breaking rules for gain, not principle.',                    teach:'The Outlaw breaks rules — but why? A Revolutionary breaks them for others; a Criminal breaks them for themselves. This distinction unlocks morally complex characters and encourages students to interrogate motive, not just action.' },
  { n:8,  name:'MAGICIAN', group:'EGO',     startAngle:120, motivation:'transformation', tagline:'Transforms reality through vision, power, and mystery.',           sub:[{name:'Visionary',desc:'Renewed perception of reality'},{name:'Arcanist',desc:'Magical objects and untold secrets'},{name:'Charismatic Leader',desc:'Entices others to imagine more'},{name:'Healer',desc:'Helps others transform themselves'}], shadowName:'Deceiver',  shadowDesc:'Uses charm and mystery to manipulate and deceive rather than genuinely transform.',                  teach:'The Magician changes the world — or how others perceive it. Healers and visionaries fit here. The Deceiver Shadow uses the same charisma to manipulate rather than uplift.' },
  { n:9,  name:'HERO',     group:'EGO',     startAngle:150, motivation:'mastery',        tagline:'Proves worth through courage, sacrifice, and action.',             sub:[{name:'Crusader',desc:'Fights for spiritually guided justice'},{name:'Rescuer',desc:'Saves others or themselves'},{name:'Superhero',desc:'Protects others with power'},{name:'Soldier',desc:'Serves with discipline and duty'}],      shadowName:'Villain',   shadowDesc:'Uses the same strength and power, but directs it toward harm rather than protection.',               teach:'The Hero acts — they prove themselves through challenge. The Crusader is spiritually guided; the Soldier serves duty. The Villain Shadow uses identical strength, but toward harm. A great lens for antagonist analysis.' },
  { n:10, name:'LOVER',    group:'SOCIAL',  startAngle:180, motivation:'intimacy',       tagline:'Craves closeness, passion, and deep connection.',                  sub:[{name:'Partner',desc:'Shares deep, committed connection'},{name:'Enthusiast',desc:'Simply enjoys the little things'},{name:'Sensualist',desc:'Lives through sensory pleasure'},{name:'Team-Builder',desc:'Bonds and unifies the group'}],  shadowName:'Seducer',   shadowDesc:'Manipulates others for attention and affection — connection becomes control.',                        teach:'The Lover values deep connection and the beauty of being alive — not just romance, but passion for all things. The Seducer Shadow uses that same magnetism to control, rather than genuinely connect.' },
  { n:11, name:'JESTER',   group:'SOCIAL',  startAngle:210, motivation:'joy',            tagline:'Brings joy, laughter, and disruption through humour.',             sub:[{name:'Fool',desc:'Ignorance played as comedy'},{name:'Trickster',desc:'Mischievous games, often accidentally hurtful'},{name:'Practical Joker',desc:'Sets up situations for humour'},{name:'Comedian',desc:'Makes a group laugh'}],         shadowName:'Hater',     shadowDesc:'Mocks, shames, or attacks — humour becomes a weapon rather than a gift.',                           teach:'The Jester uses humour, but not all humour is kind. The Trickster often hurts others accidentally; the Hater does it deliberately. Ask: is this character laughing with others, or at them?' },
  { n:12, name:'EVERYMAN', group:'SOCIAL',  startAngle:240, motivation:'belonging',      tagline:'Just wants to belong — ordinary, decent, relatable.',              sub:[{name:'Good Person',desc:'Does what most would agree is right'},{name:'Realist',desc:'Between optimism and pessimism'},{name:'Solid Citizen',desc:'Follows society\'s established rules'},{name:'Silent Majority',desc:'The masses who choose silence'}], shadowName:'Follower',  shadowDesc:'Blissful ignorance — goes along without questioning or taking responsibility.',                      teach:'The Everyman is the most relatable archetype — ordinary, decent, striving to fit in. The Follower Shadow emerges when belonging becomes more important than conscience. Perfect for discussions of peer pressure and bystander behaviour.' },
  { n:1,  name:'RULER',    group:'ORDER',   startAngle:270, motivation:'control',        tagline:'Leads through control and established authority.',                 sub:[{name:'Leader',desc:'For a group of people'},{name:'Aristocrat',desc:'Born to lead by status'},{name:'Role Model',desc:'Inspires by example'},{name:'Politician',desc:'Holds established office'}],                                       shadowName:'Tyrant',    shadowDesc:'Controls others through fear rather than earned respect.',                                           teach:'Look for Rulers wherever order is maintained — kings, presidents, dominant parents. The key question: does this character lead through inspiration or through fear? That distinction separates the Ruler from its Shadow, the Tyrant.' },
  { n:2,  name:'CREATOR',  group:'ORDER',   startAngle:300, motivation:'creation',       tagline:'Builds something meaningful through imagination.',                 sub:[{name:'Artist',desc:'Expresses with imagination'},{name:'Inventor',desc:'Physical creation'},{name:'Innovator',desc:'Mental creation'},{name:'Dreamer',desc:'Imagines what could be'}],                                                    shadowName:'Destroyer', shadowDesc:'Tears things down rather than building up — creative energy turned destructive.',                     teach:'The Creator appears whenever a character brings something new into the world — art, invention, vision. When that creative impulse inverts into destruction or nihilism, the Shadow Destroyer emerges.' },
  { n:3,  name:'CAREGIVER',group:'ORDER',   startAngle:330, motivation:'nurturing',      tagline:'Puts others first — nurtures, protects, and supports.',            sub:[{name:'Saint',desc:'Guided by religious values'},{name:'Altruist',desc:'Unselfish devotion to others'},{name:'Parent',desc:'Nurtures and protects'},{name:'Support',desc:'Offers help and comfort'}],                                        shadowName:'Slave',     shadowDesc:'Loses all sense of self in service of others — sacrifice becomes self-annihilation.',                teach:'Caregivers sacrifice for others. The vital teaching moment: is this sacrifice empowering or self-annihilating? When a character has no identity beyond serving others, they have crossed into the Shadow of the Slave.' },
];

const CX = 250, CY = 250;
const R_CENTER = 82, R_SUB = 116, R_ARCH = 163, R_LABEL = 207, R_SHADOW = 244;
const NS = 'http://www.w3.org/2000/svg';

function mkEl(tag, attrs) {
  const e = document.createElementNS(NS, tag);
  for (const [k,v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
}
function polar(r, deg) {
  const a = (deg - 90) * Math.PI / 180;
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}
function sector(r1, r2, a1, a2) {
  const lg = (a2 - a1 > 180) ? 1 : 0;
  const s1=polar(r1,a1), s2=polar(r1,a2), e1=polar(r2,a2), e2=polar(r2,a1);
  return `M${s1.x},${s1.y} A${r1},${r1} 0 ${lg} 1 ${s2.x},${s2.y} L${e1.x},${e1.y} A${r2},${r2} 0 ${lg} 0 ${e2.x},${e2.y} Z`;
}
function pie(r, a1, a2) {
  const lg = (a2 - a1 > 180) ? 1 : 0;
  const p1=polar(r,a1), p2=polar(r,a2);
  return `M${CX},${CY} L${p1.x},${p1.y} A${r},${r} 0 ${lg} 1 ${p2.x},${p2.y} Z`;
}
function arcPath(r, a1, a2) {
  const s=polar(r,a1), e=polar(r,a2);
  return `M${s.x},${s.y} A${r},${r} 0 0 1 ${e.x},${e.y}`;
}
function textTx(r, angle) {
  return `translate(${CX},${CY}) rotate(${angle}) translate(0,${-r})`;
}

function buildWheel() {
  const svg = document.getElementById('wheelSvg');
  const GRPTEXT_R = (R_CENTER + R_SUB) / 2;
  const ARCH_R    = (R_ARCH + R_LABEL) / 2;
  const SHAD_R    = (R_LABEL + R_SHADOW) / 2;
  const GREY   = '#8c8c8c';
  const wg = mkEl('g', { id:'wheelGroup' });
  svg.appendChild(wg);
  const defs = mkEl('defs', {});
  ARCHETYPES.forEach((arch, i) => {
    const a1 = arch.startAngle + 1.5, a2 = arch.startAngle + 28.5;
    defs.appendChild(mkEl('path', { id:`tpa${i}`, d:arcPath(ARCH_R, a1, a2), fill:'none' }));
    defs.appendChild(mkEl('path', { id:`tps${i}`, d:arcPath(SHAD_R, a1, a2), fill:'none' }));
  });
  Object.entries(GROUPS).forEach(([gKey, g]) => {
    const a1 = g.startAngle + 1.5, a2 = g.startAngle + 88.5;
    defs.appendChild(mkEl('path', { id:`tpg_${gKey}`, d:arcPath(GRPTEXT_R, a1, a2), fill:'none' }));
  });
  wg.appendChild(defs);
  wg.appendChild(mkEl('circle', { cx:CX, cy:CY, r:R_SHADOW+7, fill:'#ddd9ce', stroke:'#bbb5aa', 'stroke-width':'1' }));
  Object.entries(GROUPS).forEach(([, g]) => {
    wg.appendChild(mkEl('path', { d:sector(R_CENTER+1,R_SUB,g.startAngle+0.5,g.startAngle+89.5), fill:g.shades[0], stroke:'rgba(245,240,232,0.6)', 'stroke-width':'1.2', 'pointer-events':'none' }));
  });
  ARCHETYPES.forEach((arch, i) => {
    const a1=arch.startAngle+0.7, a2=arch.startAngle+29.3;
    wg.appendChild(mkEl('path', { d:sector(R_LABEL+2,R_SHADOW+5,a1,a2), fill:GREY }));
    const st=mkEl('text',{ fill:'rgba(28,18,8,0.78)','font-family':"'DM Sans', sans-serif",'font-size':'13','font-style':'italic','pointer-events':'none' });
    const stp=mkEl('textPath',{ href:`#tps${i}`, startOffset:'50%','text-anchor':'middle' });
    stp.setAttribute('dy','5'); stp.textContent=arch.shadowName;
    st.appendChild(stp); wg.appendChild(st);
  });
  ARCHETYPES.forEach((arch, i) => {
    const g=GROUPS[arch.group], a1=arch.startAngle+0.7, a2=arch.startAngle+29.3, mid=arch.startAngle+15;
    const shadeIdx=(arch.startAngle-g.startAngle)/30;
    const grp=mkEl('g',{ class:'arch-g','data-idx':i, style:'cursor:pointer' });
    const path=mkEl('path',{ d:sector(R_SUB+1,R_ARCH,a1,a2), fill:g.shades[shadeIdx]||g.shades[0], stroke:'#f5f0e8','stroke-width':'1.4', class:'seg',style:'transition:filter 0.14s;' });
    grp.appendChild(path);
    grp.appendChild(mkEl('path',{ d:sector(R_ARCH+2,R_LABEL,a1,a2), fill:'#f8f2e6',stroke:'#f5f0e8','stroke-width':'1.4' }));
    const numT=mkEl('text',{ 'text-anchor':'middle','dominant-baseline':'middle', fill:'rgba(255,255,255,0.7)','font-family':"'DM Sans', sans-serif",'font-size':'11','pointer-events':'none', transform:textTx(R_SUB+20,mid) });
    numT.textContent=arch.n; grp.appendChild(numT);
    const nt=mkEl('text',{ fill:g.textColor,'font-family':"'Fraunces', Georgia, serif",'font-size':'14','font-weight':'600','pointer-events':'none' });
    const ntp=mkEl('textPath',{ href:`#tpa${i}`, startOffset:'50%','text-anchor':'middle' });
    ntp.setAttribute('dy','6'); ntp.textContent=arch.name;
    nt.appendChild(ntp); grp.appendChild(nt);
    grp.addEventListener('click',() => selectArch(i));
    grp.addEventListener('mouseenter',() => { if(selIdx!==i) path.style.filter='brightness(0.88)'; });
    grp.addEventListener('mouseleave',() => { if(selIdx!==i) path.style.filter=''; });
    wg.appendChild(grp);
  });
  Object.entries(GROUPS).forEach(([gKey, g]) => {
    const st=mkEl('text',{ fill:g.textColor,'font-family':"'DM Sans', sans-serif",'font-size':'11.5','font-style':'italic','pointer-events':'none' });
    const stp=mkEl('textPath',{ href:`#tpg_${gKey}`, startOffset:'50%','text-anchor':'middle' });
    stp.setAttribute('dy','5'); stp.textContent=g.subtitle;
    st.appendChild(stp); wg.appendChild(st);
  });
  for (let a=0; a<360; a+=30) {
    const p1=polar(R_SUB+1,a), p2=polar(R_SHADOW+5,a);
    wg.appendChild(mkEl('line',{ x1:p1.x,y1:p1.y,x2:p2.x,y2:p2.y, stroke:'rgba(245,240,232,0.9)','stroke-width':a%90===0?'2.2':'1.4','pointer-events':'none' }));
  }
  wg.appendChild(mkEl('circle',{ cx:CX,cy:CY,r:R_SHADOW+5, fill:'none',stroke:'#6e6e6e','stroke-width':'2','pointer-events':'none' }));
  const cg=mkEl('g',{ 'pointer-events':'none' });
  [{g:GROUPS.FREEDOM,a1:0,a2:90},{g:GROUPS.EGO,a1:90,a2:180},{g:GROUPS.SOCIAL,a1:180,a2:270},{g:GROUPS.ORDER,a1:270,a2:360}].forEach(cs=>{
    cg.appendChild(mkEl('path',{ d:pie(R_CENTER,cs.a1+0.5,cs.a2-0.5), fill:cs.g.centerFill }));
  });
  cg.appendChild(mkEl('circle',{ cx:CX,cy:CY,r:R_CENTER, fill:'none',stroke:'rgba(245,240,232,0.8)','stroke-width':'2' }));
  [0,90,180,270].forEach(a=>{ const p=polar(R_CENTER-1,a); cg.appendChild(mkEl('line',{ x1:CX,y1:CY,x2:p.x,y2:p.y, stroke:'rgba(245,240,232,0.55)','stroke-width':'1.2' })); });
  const centerR=R_CENTER*0.47;
  [{g:GROUPS.ORDER,angle:315,label:'Order'},{g:GROUPS.FREEDOM,angle:45,label:'Freedom'},{g:GROUPS.EGO,angle:135,label:'Ego'},{g:GROUPS.SOCIAL,angle:225,label:'Social'}].forEach(cl=>{
    const t=mkEl('text',{ 'text-anchor':'middle','dominant-baseline':'middle',fill:'rgba(255,255,255,0.95)','font-family':"'Fraunces', Georgia, serif",'font-size':'12','font-weight':'600',transform:textTx(centerR,cl.angle) });
    t.textContent=cl.label; cg.appendChild(t);
  });
  wg.appendChild(cg);
  svg.appendChild(mkEl('polygon',{ points:`${CX-7},6 ${CX+7},6 ${CX},18`, fill:'#b85c3a','pointer-events':'none' }));
}

let selIdx=-1, wheelRotation=0, animating=false;

function calcTarget(midAngle, extraSpins) {
  let target=-midAngle;
  while(target>wheelRotation-10) target-=360;
  target-=360*extraSpins;
  return target;
}
function animateWheel(to, duration, onDone) {
  if(animating) return; animating=true;
  const wg=document.getElementById('wheelGroup'), from=wheelRotation, t0=performance.now();
  function step(now) {
    const t=Math.min((now-t0)/duration,1), e=1-Math.pow(1-t,3);
    wg.setAttribute('transform',`rotate(${from+(to-from)*e},${CX},${CY})`);
    if(t<1){ requestAnimationFrame(step); } else { wheelRotation=to; animating=false; if(onDone) onDone(); }
  }
  requestAnimationFrame(step);
}
function selectArch(idx) {
  if(animating) return;
  if(selIdx>=0){ const prev=document.querySelector(`.arch-g[data-idx="${selIdx}"] .seg`); if(prev) prev.style.filter=''; }
  selIdx=idx;
  const seg=document.querySelector(`.arch-g[data-idx="${idx}"] .seg`);
  if(seg) seg.style.filter='brightness(0.76) saturate(1.1)';
  animateWheel(calcTarget(ARCHETYPES[idx].startAngle+15,0),900,()=>showPanel(ARCHETYPES[idx]));
}
function showPanel(arch) {
  document.getElementById('pEmpty').style.display='none';
  const d=document.getElementById('pDetail'); d.classList.remove('show'); void d.offsetWidth;
  const g=GROUPS[arch.group];
  document.getElementById('pNum').textContent=`Archetype ${arch.n} of 12`;
  document.getElementById('pMotivation').textContent=`Motivated by ${arch.motivation}`;
  document.getElementById('pName').textContent=arch.name; document.getElementById('pName').style.color=g.badge;
  document.getElementById('pTagline').textContent=`"${arch.tagline}"`;
  const badge=document.getElementById('pBadge'); badge.textContent=`${arch.group} — ${g.subtitle}`; badge.style.background=g.badge;
  document.getElementById('pChips').innerHTML=arch.sub.map(s=>`<div class="chip"><strong>${s.name}</strong><em>${s.desc}</em></div>`).join('');
  document.getElementById('pShadowName').textContent=arch.shadowName;
  document.getElementById('pShadowDesc').textContent=arch.shadowDesc;
  document.getElementById('pTeach').textContent=arch.teach;
  d.classList.add('show');
}
function clearSelection() {
  if(animating) return;
  if(selIdx>=0){ const s=document.querySelector(`.arch-g[data-idx="${selIdx}"] .seg`); if(s) s.style.filter=''; }
  selIdx=-1;
  document.getElementById('pEmpty').style.display=''; document.getElementById('pDetail').classList.remove('show');
  const nearZero=Math.ceil(wheelRotation/360)*360;
  animateWheel(nearZero,900,()=>{ document.getElementById('wheelGroup').setAttribute('transform',`rotate(0,${CX},${CY})`); wheelRotation=0; });
}
function spinWheel() {
  if(animating) return;
  const idx=Math.floor(Math.random()*12);
  if(selIdx>=0){ const prev=document.querySelector(`.arch-g[data-idx="${selIdx}"] .seg`); if(prev) prev.style.filter=''; }
  selIdx=idx;
  animateWheel(calcTarget(ARCHETYPES[idx].startAngle+15,4),2400,()=>{
    const seg=document.querySelector(`.arch-g[data-idx="${idx}"] .seg`);
    if(seg) seg.style.filter='brightness(0.76) saturate(1.1)';
    showPanel(ARCHETYPES[idx]);
  });
}

let selectedSubs=[];
function toggleGroup(gKey) { document.getElementById('seg-'+gKey).classList.toggle('open'); }
function toggleSub(archIdx, subIdx) {
  const key=archIdx+'-'+subIdx, existing=selectedSubs.findIndex(s=>s.key===key);
  if(existing>=0){ selectedSubs.splice(existing,1); } else { if(selectedSubs.length>=2) selectedSubs.shift(); selectedSubs.push({key,archIdx,subIdx}); }
  document.querySelectorAll('.sub-toggle').forEach(el=>{ el.classList.toggle('active',selectedSubs.some(s=>s.key===el.dataset.key)); });
  renderCompare();
}
function renderCompare() {
  const empty=document.getElementById('cmpEmpty'), detail=document.getElementById('cmpDetail');
  if(selectedSubs.length<2){ empty.style.display=''; detail.style.display='none'; empty.querySelector('p').textContent=selectedSubs.length===1?'Select one more subtype to compare.':'Select two subtypes from the explorer below to compare their values and see how they interact.'; return; }
  const sides=selectedSubs.map(s=>({ arch:ARCHETYPES[s.archIdx], sub:ARCHETYPES[s.archIdx].sub[s.subIdx] }));
  const [A,B]=sides, gA=GROUPS[A.arch.group], gB=GROUPS[B.arch.group];
  const pairKey=[A.arch.group,B.arch.group].sort().join('-');
  const ix=GROUP_INTERACTIONS[pairKey]||{ label:'Unique Pairing',text:'An unusual combination — the interaction between these two is entirely dependent on context and character.' };
  empty.style.display='none'; detail.style.display='';
  detail.innerHTML=`<div class="cmp-grid"><div class="cmp-grid-hd cmp-col-a" style="background:${gA.badge}">${A.arch.group}</div><div class="cmp-grid-hd" style="background:${gB.badge}">${B.arch.group}</div><div class="cmp-sub-name cmp-col-a">${A.sub.name}</div><div class="cmp-sub-name">${B.sub.name}</div><div class="cmp-sub-desc cmp-col-a">${A.sub.desc}</div><div class="cmp-sub-desc">${B.sub.desc}</div><div class="cmp-grid-lbl">Archetype</div><div class="cmp-grid-val cmp-col-a">${A.arch.name}</div><div class="cmp-grid-val">${B.arch.name}</div><div class="cmp-grid-lbl">Motivated by</div><div class="cmp-grid-val cmp-col-a">${A.arch.motivation.charAt(0).toUpperCase()+A.arch.motivation.slice(1)}</div><div class="cmp-grid-val">${B.arch.motivation.charAt(0).toUpperCase()+B.arch.motivation.slice(1)}</div><div class="cmp-grid-lbl">Shadow risk</div><div class="cmp-grid-val cmp-col-a">${A.arch.shadowName}</div><div class="cmp-grid-val">${B.arch.shadowName}</div></div><div class="cmp-interaction"><div class="cmp-int-label">${ix.label}</div><p class="cmp-int-text">${ix.text}</p></div><div class="cmp-taglines"><div class="cmp-tag" style="border-color:${gA.badge}">"${A.arch.tagline}"</div><div class="cmp-tag" style="border-color:${gB.badge}">"${B.arch.tagline}"</div></div>`;
}

function buildExplorer() {
  const container=document.getElementById('subtypeExplorer');
  const order=['ORDER','FREEDOM','EGO','SOCIAL'];
  container.innerHTML=order.map(gKey=>{
    const g=GROUPS[gKey], archs=ARCHETYPES.filter(a=>a.group===gKey);
    const subsHtml=archs.map(arch=>{
      const ai=ARCHETYPES.indexOf(arch);
      const subItems=arch.sub.map((sub,si)=>{
        const k=ai+'-'+si;
        return `<div class="se-sub" data-arch="${ai}" data-sub="${si}">
          <span class="sub-toggle" data-key="${k}" style="--tc:${g.badge}"></span>
          <span class="se-sub-name">${sub.name}</span>
          <span class="se-sub-desc">${sub.desc}</span>
        </div>`;
      }).join('');
      return `<div class="se-arch"><div class="se-arch-name">${arch.name}</div><div class="se-subs">${subItems}</div></div>`;
    }).join('');
    return `<div class="se-group" id="seg-${gKey}">
      <div class="se-header" data-group="${gKey}">
        <span class="se-dot" style="background:${g.badge}"></span>
        <span class="se-gname">${gKey}</span>
        <span class="se-gsub">${g.subtitle}</span>
        <span class="se-chevron">▾</span>
      </div>
      <div class="se-body" id="seb-${gKey}">${subsHtml}</div>
    </div>`;
  }).join('');

  // Event delegation — replace onclick attributes
  container.addEventListener('click', function(e) {
    var sub = e.target.closest('.se-sub[data-arch]');
    if (sub) { toggleSub(parseInt(sub.dataset.arch), parseInt(sub.dataset.sub)); return; }
    var header = e.target.closest('.se-header[data-group]');
    if (header) { toggleGroup(header.dataset.group); }
  });
}

buildWheel();
buildExplorer();

// Button event listeners (replaces onclick attributes in HTML)
document.addEventListener('DOMContentLoaded', function() {
  var spinBtn = document.getElementById('btnSpinWheel');
  var clearBtn = document.getElementById('btnClearSelection');
  if (spinBtn)  spinBtn.addEventListener('click', spinWheel);
  if (clearBtn) clearBtn.addEventListener('click', clearSelection);
});
