/* ====================================================================
   DATA
   ─────────────────────────────────────────────────────────────────────
   Full literary topic tree. Each topic → themes → questions.
   To add content: add a new key to TOPICS with the same shape.
   ==================================================================== */
const TOPICS = {
  "Power": {
    themes: [
      { statement: "Power without accountability leads to corruption.",
        questions: ["Do modern institutions actually prevent the abuse of power?","Should effective leaders still face strict limits on what they can do?","Is corruption caused more by individuals or by the systems they operate in?"] },
      { statement: "Power reveals a person's true character.",
        questions: ["Does authority show who people really are, or does it change them?","Should character matter more than competence when choosing leaders?","Are people different when they gain status online vs. in real life?"] },
      { statement: "The pursuit of power often destroys the relationships that made it worth having.",
        questions: ["What do people sacrifice in order to succeed — and is it worth it?","Can someone hold power and still maintain genuine personal relationships?"] },
      { statement: "Societies often trade freedom for order when power is concentrated.",
        questions: ["Should societies sacrifice civil liberties for safety and security?","At what point does protection become control?","Who benefits most from social order — and who pays for it?"] }
    ]
  },
  "Identity": {
    themes: [
      { statement: "Identity is shaped as much by what we resist as by what we accept.",
        questions: ["How do the groups we reject define who we become?","Is rebellion against your upbringing self-discovery or self-deception?"] },
      { statement: "Society often assigns identity before individuals can choose it for themselves.",
        questions: ["How do labels given in childhood limit or liberate the people we become?","Does social media allow authentic self-expression or only perform it?","Should people be defined by categories they did not choose?"] },
      { statement: "External pressures force individuals to mask or fragment their true identity.",
        questions: ["Is code-switching a survival skill or a form of self-erasure?","What does it cost a person to hide who they are at work or school?","How should institutions balance cultural norms with individual expression?"] },
      { statement: "The search for identity can lead to genuine belonging or to dangerous self-destruction.",
        questions: ["Why do some people adopt harmful identities in order to feel seen?","How do extremist groups exploit the human need to belong?","Can the drive to 'find yourself' become its own kind of trap?"] }
    ]
  },
  "Freedom": {
    themes: [
      { statement: "True freedom requires responsibility, not just the absence of constraint.",
        questions: ["Can a person be free if they refuse all social obligations?","What responsibilities come with living in a free society?","Is unlimited personal freedom compatible with a functioning community?"] },
      { statement: "The desire for freedom often conflicts with the need for security.",
        questions: ["How much surveillance is acceptable — even for legitimate public safety?","Should governments limit individual freedoms to keep citizens safe?","Does economic security make people more willing to accept restrictions on liberty?"] },
      { statement: "Freedom granted by others is never truly secure.",
        questions: ["Does freedom that depends on someone else's permission really count?","Is legal freedom enough if social pressures still restrict behavior?","How do oppressed groups build lasting freedom rather than borrowed tolerance?"] },
      { statement: "People sometimes choose comfortable captivity over the uncertainty of freedom.",
        questions: ["Why do people stay in situations they know are harmful to them?","Is the fear of freedom a real psychological phenomenon?","How does comfort undermine the motivation to seek genuine change?"] }
    ]
  },
  "Justice": {
    themes: [
      { statement: "Legal systems do not always deliver genuine justice.",
        questions: ["Is a legal verdict always the same thing as justice?","How do wealth and privilege shape legal outcomes in practice?","When is it ethical to break a law you believe is unjust?"] },
      { statement: "Justice and revenge are not the same, even when they look similar.",
        questions: ["Can punishment ever be truly just — or is it always partly revenge?","Does restorative justice work better than punitive justice in practice?","How should victims' need for closure factor into sentencing?"] },
      { statement: "Systemic injustice outlasts the individuals who built it.",
        questions: ["Who is responsible for harms caused by systems they didn't personally design?","Can institutions built on injustice ever become genuinely just?","What does meaningful reparation actually require?"] },
      { statement: "True justice demands the courage to act against social norms.",
        questions: ["When should individuals act on conscience rather than law?","How do whistleblowers and activists shape the arc of justice?","What happens to societies that punish people for doing the right thing?"] }
    ]
  },
  "Loyalty": {
    themes: [
      { statement: "Blind loyalty protects individuals but damages the communities they belong to.",
        questions: ["At what point does loyalty become complicity?","Should employees, soldiers, or family members report wrongdoing by those they serve?","How do we teach loyalty without teaching blind obedience?"] },
      { statement: "Loyalty to principle can demand betraying loyalty to people.",
        questions: ["Is it ever right to betray a friend for a cause you believe in?","Can loyalty to a country conflict with loyalty to humanity as a whole?","How do people decide whether their first duty is to individuals or to ideals?"] },
      { statement: "Those who demand the most loyalty often offer the least in return.",
        questions: ["How do leaders and institutions exploit the loyalty of those beneath them?","Should loyalty be conditional on how it is repaid?","What does it mean to earn loyalty rather than simply demand it?"] },
      { statement: "Loyalty is tested most severely when it becomes costly.",
        questions: ["Does genuine loyalty require sacrifice, or is that just manipulation?","How do people decide when a relationship is worth staying loyal to?","What does it reveal about a person when they stay loyal under real pressure?"] }
    ]
  },
  "Ambition": {
    themes: [
      { statement: "Unchecked ambition blinds individuals to the moral consequences of their choices.",
        questions: ["Can someone be too ambitious to remain ethical?","Does competitive culture encourage people to rationalize harmful behavior?","How does drive become destructive — and when does it cross that line?"] },
      { statement: "Ambition without purpose leads to emptiness even in success.",
        questions: ["Why do highly successful people often report feeling hollow or lost?","What is the difference between ambition for recognition and ambition for meaning?","How should schools teach achievement without teaching that achievement is everything?"] },
      { statement: "Society rewards ambition unevenly, reinforcing existing inequalities.",
        questions: ["Is ambition itself a privilege — available mainly to those with safety nets?","How do gender, race, and class shape who gets to be 'ambitious' without penalty?","Does meritocracy reward effort, or mostly circumstance?"] },
      { statement: "The most dangerous ambition cannot name what it actually wants.",
        questions: ["Why do people continue pursuing goals they no longer believe in?","Can ambition be an escape from deeper questions about meaning?","How do family expectations drive people toward ambitions they didn't choose?"] }
    ]
  },
  "Isolation": {
    themes: [
      { statement: "Chosen isolation can be protection, but it eventually becomes its own prison.",
        questions: ["When does healthy solitude become harmful withdrawal?","Is there a meaningful difference between being alone and being lonely?","How do people who have been hurt learn to trust community again?"] },
      { statement: "Society isolates those who threaten or disrupt its sense of order.",
        questions: ["What groups does contemporary society push to its margins — and why?","How does social exclusion affect mental health and behavior over time?","Is social media reducing isolation or creating an illusion of connection?"] },
      { statement: "Isolation strips away social masks and reveals who a person actually is.",
        questions: ["What do people discover about themselves when removed from social pressure?","Does crisis — pandemic, grief, displacement — force a more honest self-knowledge?","How does solitary confinement as punishment reflect on a society's values?"] },
      { statement: "The most dangerous isolation is internal — being surrounded by people but understood by none.",
        questions: ["How does the loneliness of being misunderstood differ from physical solitude?","Why do people sometimes feel most alone in crowded rooms or online spaces?","How should schools respond to the epidemic of internal isolation among students?"] }
    ]
  },
  "Love": {
    themes: [
      { statement: "Love can be a force for transformation or a vehicle for control.",
        questions: ["How do we distinguish genuine love from possession in relationships?","Should love ever require someone to fundamentally change who they are?","What does 'unconditional love' actually mean — and is it always healthy?"] },
      { statement: "Romantic love is often confused with need, resulting in unhealthy attachment.",
        questions: ["Why do people so often mistake dependency for love?","How has social media changed the way people pursue and perform romantic love?","Should emotional self-sufficiency be a prerequisite for healthy relationships?"] },
      { statement: "Societies regulate love in ways that reveal their true values.",
        questions: ["Why have societies historically controlled who people are allowed to love?","How do laws and norms around relationships reflect cultural priorities over individual freedom?","Is love ever truly private — or is it always shaped by the society around it?"] },
      { statement: "The love between parents and children carries the deepest potential for both nurture and damage.",
        questions: ["How does the way we are loved as children shape the way we love as adults?","When does parental love become harmful — even when well-intentioned?","What obligations do adult children owe parents who failed them?"] }
    ]
  }
};

/* ====================================================================
   COLOR PALETTE
   Each topic gets a distinct color. Themes and questions inherit a
   lighter, more transparent variant of that color.
   ==================================================================== */
const PALETTE = {
  'Power':     { base: '#d06050', theme: '#da8272', question: '#e4a294' },
  'Identity':  { base: '#c8a030', theme: '#d4b454', question: '#e0c878' },
  'Freedom':   { base: '#50a872', theme: '#72b88e', question: '#94c8aa' },
  'Justice':   { base: '#507ab0', theme: '#7294c0', question: '#94aed0' },
  'Loyalty':   { base: '#b08262', theme: '#c09878', question: '#d0ae8e' },
  'Ambition':  { base: '#c87838', theme: '#d49058', question: '#e0a878' },
  'Isolation': { base: '#8878aa', theme: '#9c90ba', question: '#b0a8ca' },
  'Love':      { base: '#c8587a', theme: '#d87892', question: '#e898aa' }
};

/* ====================================================================
   NODE SIZE CONFIG
   ==================================================================== */
const NODE_R = { topic: 18, theme: 10, question: 5.5 };

/* ====================================================================
   GRAPH DATA STRUCTURES
   Nodes carry physics state (x, y, vx, vy, fixed) plus metadata.
   Edges reference node ids.
   ==================================================================== */
let nodes = [];
let edges = [];
let nodeMap = {}; // id → node

function buildGraph() {
  nodes = []; edges = []; nodeMap = {};

  Object.keys(TOPICS).forEach(topicKey => {
    // Topic node
    const tId = `topic__${topicKey}`;
    const tn = {
      id: tId, type: 'topic', label: topicKey, topicKey,
      x: 0, y: 0, vx: 0, vy: 0, fixed: false,
      color: PALETTE[topicKey].base
    };
    nodes.push(tn); nodeMap[tId] = tn;

    TOPICS[topicKey].themes.forEach((themeData, ti) => {
      // Theme node
      const thId = `theme__${topicKey}__${ti}`;
      const thN = {
        id: thId, type: 'theme', label: themeData.statement, topicKey,
        themeIndex: ti,
        x: 0, y: 0, vx: 0, vy: 0, fixed: false,
        color: PALETTE[topicKey].theme
      };
      nodes.push(thN); nodeMap[thId] = thN;
      edges.push({ source: tId, target: thId, kind: 'topic-theme' });

      themeData.questions.forEach((qText, qi) => {
        // Question node
        const qId = `q__${topicKey}__${ti}__${qi}`;
        const qN = {
          id: qId, type: 'question', label: qText, topicKey,
          themeIndex: ti, questionIndex: qi,
          x: 0, y: 0, vx: 0, vy: 0, fixed: false,
          color: PALETTE[topicKey].question
        };
        nodes.push(qN); nodeMap[qId] = qN;
        edges.push({ source: thId, target: qId, kind: 'theme-question' });
      });
    });
  });
}

/* ====================================================================
   INITIAL POSITIONS
   Arrange topics in a ring, themes around each topic, questions
   around each theme. Gives the physics a good warm-start so it
   converges quickly rather than exploding from random positions.
   ==================================================================== */
function setInitialPositions() {
  const topicKeys = Object.keys(TOPICS);
  const TOPIC_R   = 220;  // radius of topic ring
  const THEME_R   = 100;  // theme offset from topic
  const Q_R       = 75;   // question offset from theme

  topicKeys.forEach((key, ti) => {
    const tAngle = (2 * Math.PI * ti / topicKeys.length) - Math.PI / 2;
    const tn = nodeMap[`topic__${key}`];
    tn.x = TOPIC_R * Math.cos(tAngle);
    tn.y = TOPIC_R * Math.sin(tAngle);

    const themes = TOPICS[key].themes;
    themes.forEach((themeData, i) => {
      // Fan themes around topic, centered on outward direction
      const spread = (themes.length - 1) * 0.38;
      const thAngle = tAngle + (i - (themes.length - 1) / 2) * (spread / Math.max(themes.length - 1, 1));
      const thN = nodeMap[`theme__${key}__${i}`];
      thN.x = tn.x + THEME_R * Math.cos(thAngle);
      thN.y = tn.y + THEME_R * Math.sin(thAngle);

      themeData.questions.forEach((_, qi) => {
        const qCount = themeData.questions.length;
        const qSpread = (qCount - 1) * 0.4;
        const qAngle = thAngle + (qi - (qCount - 1) / 2) * (qCount > 1 ? qSpread / (qCount - 1) : 0);
        const qN = nodeMap[`q__${key}__${i}__${qi}`];
        qN.x = thN.x + Q_R * Math.cos(qAngle);
        qN.y = thN.y + Q_R * Math.sin(qAngle);
      });
    });
  });
}

/* ====================================================================
   PHYSICS SIMULATION
   ─────────────────────────────────────────────────────────────────────
   Forces applied each tick:
     1. Repulsion  — all node pairs push away (inverse-square law)
     2. Attraction — connected nodes pulled toward each other (spring)
     3. Gravity    — gentle pull toward origin keeps graph centered
   Velocities are damped each tick so the simulation cools and settles.
   An alpha value gradually decays; when it drops below ALPHA_MIN the
   simulation pauses to save CPU (restarts on drag).
   ==================================================================== */
const REPULSION      = 4500;
const SPRING_K       = 0.032;
const SPRING_LEN     = { 'topic-theme': 115, 'theme-question': 85 };
const GRAVITY        = 0.0022;
const DAMPING        = 0.82;
const ALPHA_DECAY    = 0.9955;
const ALPHA_MIN      = 0.004;

let alpha = 1.0;
let simActive = true;

function simulate() {
  if (!simActive) return;

  // 1. Repulsion between every pair of nodes
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      let dx = a.x - b.x;
      let dy = a.y - b.y;
      const dist2 = dx * dx + dy * dy || 0.01;
      const dist  = Math.sqrt(dist2);
      // Scale force by alpha so early ticks move more aggressively
      const f = (REPULSION / dist2) * alpha;
      const fx = (dx / dist) * f;
      const fy = (dy / dist) * f;
      if (!a.fixed) { a.vx += fx; a.vy += fy; }
      if (!b.fixed) { b.vx -= fx; b.vy -= fy; }
    }
  }

  // 2. Spring attraction along edges
  edges.forEach(e => {
    const a = nodeMap[e.source];
    const b = nodeMap[e.target];
    const dx   = b.x - a.x;
    const dy   = b.y - a.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
    const rest = SPRING_LEN[e.kind];
    const f    = SPRING_K * (dist - rest) * alpha;
    const fx   = (dx / dist) * f;
    const fy   = (dy / dist) * f;
    if (!a.fixed) { a.vx += fx; a.vy += fy; }
    if (!b.fixed) { b.vx -= fx; b.vy -= fy; }
  });

  // 3. Center gravity
  nodes.forEach(n => {
    if (n.fixed) return;
    n.vx += -n.x * GRAVITY * alpha;
    n.vy += -n.y * GRAVITY * alpha;
  });

  // 4. Integrate + damp
  nodes.forEach(n => {
    if (n.fixed) return;
    n.vx *= DAMPING;
    n.vy *= DAMPING;
    n.x  += n.vx;
    n.y  += n.vy;
  });

  // Cool down
  alpha *= ALPHA_DECAY;
  if (alpha < ALPHA_MIN) { alpha = ALPHA_MIN; simActive = false; }
}

/* ====================================================================
   TRANSFORM (pan + zoom)
   World coordinates ↔ screen coordinates.
   tx/ty = translation of world origin in screen pixels.
   scale = zoom level.
   ==================================================================== */
let tx = 0, ty = 0, scale = 1;

// Convert screen pixel position to world coordinate
function toWorld(sx, sy) {
  return { x: (sx - tx) / scale, y: (sy - ty) / scale };
}

/* ====================================================================
   CANVAS RENDERING
   ─────────────────────────────────────────────────────────────────────
   Render order: background dots → edges → node glows → node circles
   → labels. Everything drawn in world space after ctx.setTransform.
   ==================================================================== */
let canvas, ctx;

// ── SPARKLES ─────────────────────────────────────────────────────────
const SPARKLES = [];
const SPARKLE_COUNT = 90;

function initSparkles() {
  for (let i = 0; i < SPARKLE_COUNT; i++) {
    SPARKLES.push({
      x:     Math.random(),                         // fraction of canvas width
      y:     Math.random(),                         // fraction of canvas height
      phase: Math.random() * Math.PI * 2,           // offset so they don't pulse together
      speed: 0.006 + Math.random() * 0.01,          // slow oscillation (~10-18 s cycle)
      size:  0.5 + Math.random() * 1.1              // 0.5–1.6 px radius
    });
  }
}

function drawSparkles() {
  SPARKLES.forEach(s => {
    s.phase += s.speed;
    // Opacity: gentle sine wave between ~0.04 and ~0.38 — soft twinkling
    const a = 0.04 + 0.34 * (0.5 + 0.5 * Math.sin(s.phase));
    const sx = s.x * canvas.width;
    const sy = s.y * canvas.height;
    ctx.beginPath();
    ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
    ctx.fill();
  });
}

// Draw the faint dot-grid background (Obsidian aesthetic)
function drawBackground() {
  // Solid background
  ctx.fillStyle = '#0f0d0b';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Dot grid — computed in screen space to avoid scaling issues
  const gridW = 36 * scale; // screen pixels between dots
  const dotR  = 0.9;
  if (gridW >= 8) {
    // Find first grid dot in screen space
    const offX = ((tx % gridW) + gridW) % gridW;
    const offY = ((ty % gridW) + gridW) % gridW;

    ctx.fillStyle = 'rgba(255,255,255,0.018)';
    for (let sx = offX; sx < canvas.width; sx += gridW) {
      for (let sy = offY; sy < canvas.height; sy += gridW) {
        ctx.beginPath();
        ctx.arc(sx, sy, dotR, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // Twinkling sparkles — always drawn at full opacity (they manage their own alpha)
  drawSparkles();
}

// Draw all edges
function drawEdges() {
  ctx.save();
  ctx.translate(tx, ty);
  ctx.scale(scale, scale);

  edges.forEach(e => {
    const a = nodeMap[e.source];
    const b = nodeMap[e.target];

    // Edge color: topic's base color at low opacity
    const col = PALETTE[a.topicKey || b.topicKey];
    if (e.kind === 'topic-theme') {
      ctx.strokeStyle = col.base + '44';
      ctx.lineWidth   = 1.4 / scale;
    } else {
      ctx.strokeStyle = col.theme + '30';
      ctx.lineWidth   = 0.9 / scale;
    }

    // Highlight edge if a connected node is selected/hovered
    if (selectedNode && (selectedNode.id === a.id || selectedNode.id === b.id)) {
      ctx.strokeStyle = col.base + 'bb';
      ctx.lineWidth   = e.kind === 'topic-theme' ? 2 / scale : 1.4 / scale;
    } else if (hoveredNode && (hoveredNode.id === a.id || hoveredNode.id === b.id)) {
      ctx.strokeStyle = col.base + '88';
      ctx.lineWidth   = e.kind === 'topic-theme' ? 1.8 / scale : 1.2 / scale;
    }

    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  });

  ctx.restore();
}

// Draw all nodes with glow effect
function drawNodes() {
  ctx.save();
  ctx.translate(tx, ty);
  ctx.scale(scale, scale);

  nodes.forEach(n => {
    const r       = NODE_R[n.type];
    const isHover = hoveredNode  && hoveredNode.id  === n.id;
    const isSel   = selectedNode && selectedNode.id === n.id;

    // Glow (radial gradient behind node)
    const glowR = r * (n.type === 'topic' ? 3.2 : 3.0);
    const grd = ctx.createRadialGradient(n.x, n.y, r * 0.4, n.x, n.y, glowR);
    let glowAlpha = n.type === 'topic' ? 0.35 : n.type === 'theme' ? 0.22 : 0.14;
    if (isHover || isSel) glowAlpha *= 2;
    grd.addColorStop(0, n.color + hex2(glowAlpha * 255));
    grd.addColorStop(1, n.color + '00');
    ctx.beginPath();
    ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();

    // Node circle
    const nodeR = isHover || isSel ? r * 1.15 : r;
    ctx.beginPath();
    ctx.arc(n.x, n.y, nodeR, 0, Math.PI * 2);
    ctx.fillStyle = n.color + (isSel ? 'ff' : isHover ? 'ee' : 'cc');
    ctx.fill();

    // Ring for selected node
    if (isSel) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, nodeR + 3 / scale, 0, Math.PI * 2);
      ctx.strokeStyle = '#fff4';
      ctx.lineWidth   = 1.2 / scale;
      ctx.stroke();
    }
  });

  ctx.restore();
}

// Convert 0–255 value to 2-digit hex string
function hex2(v) {
  const h = Math.round(Math.max(0, Math.min(255, v))).toString(16);
  return h.length === 1 ? '0' + h : h;
}

// Draw labels — visibility depends on node type and current zoom level
function drawLabels() {
  ctx.save();
  ctx.translate(tx, ty);
  ctx.scale(scale, scale);
  ctx.textAlign    = 'center';
  ctx.textBaseline = 'top';

  nodes.forEach(n => {
    const r = NODE_R[n.type];
    const isHover = hoveredNode  && hoveredNode.id  === n.id;
    const isSel   = selectedNode && selectedNode.id === n.id;

    // Decide whether to show label based on type and zoom
    const showTopic    = true;
    const showTheme    = scale > 0.55 || isHover || isSel;
    const showQuestion = scale > 1.05 || isHover || isSel;

    let show = (n.type === 'topic' && showTopic) ||
               (n.type === 'theme' && showTheme) ||
               (n.type === 'question' && showQuestion);

    // Always show label for hovered or selected node
    if (isHover || isSel) show = true;
    if (!show) return;

    // Font size in world coords — dividing by scale keeps screen size constant
    const screenPx = n.type === 'topic' ? 12.5 : n.type === 'theme' ? 10.5 : 9.5;
    ctx.font = `${screenPx / scale}px 'DM Sans', sans-serif`;

    const maxChars = n.type === 'topic' ? 99 : n.type === 'theme' ? 38 : 42;
    let label = n.label.length > maxChars ? n.label.slice(0, maxChars - 1) + '…' : n.label;

    const labelOffset = (r * 1.15 + 5) / scale;
    const alpha = isSel || isHover ? 0.95 : n.type === 'topic' ? 0.82 : 0.62;
    ctx.fillStyle = `rgba(240,235,227,${alpha})`;

    // Multi-line wrapping for theme and question labels at close zoom
    if (n.type !== 'topic' && (isSel || isHover || scale > 0.85)) {
      wrapText(ctx, label, n.x, n.y + labelOffset, 110 / scale, screenPx * 1.35 / scale);
    } else {
      ctx.fillText(label, n.x, n.y + labelOffset);
    }
  });

  ctx.restore();
}

// Simple canvas text wrap helper
function wrapText(ctx, text, x, y, maxW, lineH) {
  const words = text.split(' ');
  let line = '';
  let ly   = y;
  for (let i = 0; i < words.length; i++) {
    const test = line + (line ? ' ' : '') + words[i];
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, ly);
      line = words[i];
      ly  += lineH;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, ly);
}

/* ====================================================================
   MAIN RENDER + ANIMATION LOOP
   ==================================================================== */
let sceneAlpha = 0; // starts at 0, ramps to 1 — gives slow "emerge from the dark" reveal

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Background + sparkles always at full opacity — they're the "stage"
  drawBackground();

  // Slowly ramp in the graph: ~0.007 per frame = ~2.4 s at 60 fps
  sceneAlpha = Math.min(1, sceneAlpha + 0.007);
  ctx.save();
  ctx.globalAlpha = sceneAlpha;
  drawEdges();
  drawNodes();
  drawLabels();
  ctx.restore();
}

function loop() {
  simulate();
  render();
  requestAnimationFrame(loop);
}

/* ====================================================================
   HIT TESTING — find which node (if any) is under screen coordinates
   ==================================================================== */
function nodeAtScreen(sx, sy) {
  const w = toWorld(sx, sy);
  // Iterate in reverse so top-rendered nodes (topic > theme > question) win
  for (let i = nodes.length - 1; i >= 0; i--) {
    const n  = nodes[i];
    const r  = NODE_R[n.type] * 1.25; // slightly larger hit area
    const dx = w.x - n.x;
    const dy = w.y - n.y;
    if (dx * dx + dy * dy <= r * r) return n;
  }
  return null;
}

/* ====================================================================
   INFO PANEL
   ==================================================================== */
let panelEl, panelDot, panelTypeLabel, panelTitle, panelBody, panelCloseBtn;
let selectedNode = null;

function openPanel(node) {
  selectedNode = node;
  panelDot.style.background      = node.color;
  panelDot.style.boxShadow       = `0 0 6px ${node.color}88`;
  panelTypeLabel.textContent     = node.type === 'topic' ? 'Literary Topic'
                                 : node.type === 'theme' ? 'Theme Statement'
                                 : 'Discussion Question';
  panelTitle.textContent         = node.label;
  panelTitle.style.color         = 'rgba(255,255,255,0.92)';

  // Build panel body based on node type
  panelBody.innerHTML = '';

  if (node.type === 'topic') {
    // List all themes for this topic
    const label = document.createElement('div');
    label.className   = 'panel-section-label';
    label.textContent = 'Theme statements';
    panelBody.appendChild(label);

    TOPICS[node.topicKey].themes.forEach((themeData, ti) => {
      const card       = document.createElement('div');
      card.className   = 'panel-theme-card';
      card.style.borderLeftColor = PALETTE[node.topicKey].theme;
      card.textContent = themeData.statement;
      card.addEventListener('click', () => {
        openPanel(nodeMap[`theme__${node.topicKey}__${ti}`]);
      });
      panelBody.appendChild(card);
    });
  }

  else if (node.type === 'theme') {
    const themeData = TOPICS[node.topicKey].themes[node.themeIndex];

    // Parent topic chip
    const chip = document.createElement('div');
    chip.className = 'panel-topic-chip';
    chip.innerHTML = `<div class="panel-badge-dot" style="background:${PALETTE[node.topicKey].base}"></div>${node.topicKey}`;
    chip.addEventListener('click', () => openPanel(nodeMap[`topic__${node.topicKey}`]));
    panelBody.appendChild(chip);

    // Questions
    const label = document.createElement('div');
    label.className   = 'panel-section-label';
    label.textContent = 'Contemporary discussion questions';
    panelBody.appendChild(label);

    themeData.questions.forEach((q, qi) => {
      const row    = document.createElement('div');
      row.className = 'panel-q';
      const bullet = document.createElement('div');
      bullet.className   = 'panel-q-bullet';
      bullet.style.background = PALETTE[node.topicKey].question + '44';
      bullet.style.color      = PALETTE[node.topicKey].question;
      bullet.textContent      = '?';
      const text  = document.createElement('div');
      text.textContent = q;
      // Make question clickable to focus that node
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => openPanel(nodeMap[`q__${node.topicKey}__${node.themeIndex}__${qi}`]));
      row.appendChild(bullet);
      row.appendChild(text);
      panelBody.appendChild(row);
    });
  }

  else if (node.type === 'question') {
    const themeData = TOPICS[node.topicKey].themes[node.themeIndex];

    // Parent topic chip
    const chip = document.createElement('div');
    chip.className = 'panel-topic-chip';
    chip.innerHTML = `<div class="panel-badge-dot" style="background:${PALETTE[node.topicKey].base}"></div>${node.topicKey}`;
    chip.addEventListener('click', () => openPanel(nodeMap[`topic__${node.topicKey}`]));
    panelBody.appendChild(chip);

    // Parent theme reference
    const themeLabel = document.createElement('div');
    themeLabel.className   = 'panel-section-label';
    themeLabel.textContent = 'From theme statement';
    panelBody.appendChild(themeLabel);

    const stmt = document.createElement('div');
    stmt.className   = 'panel-parent-stmt';
    stmt.textContent = themeData.statement;
    stmt.style.cursor = 'pointer';
    stmt.title = 'View this theme';
    stmt.addEventListener('click', () => openPanel(nodeMap[`theme__${node.topicKey}__${node.themeIndex}`]));
    panelBody.appendChild(stmt);

    // All questions for this theme, highlighting current
    const qLabel = document.createElement('div');
    qLabel.className   = 'panel-section-label';
    qLabel.textContent = 'All questions on this theme';
    panelBody.appendChild(qLabel);

    themeData.questions.forEach((q, qi) => {
      const row    = document.createElement('div');
      row.className = 'panel-q';
      if (qi === node.questionIndex) {
        row.style.color  = '#fff';
        row.style.fontWeight = '500';
      }
      const bullet = document.createElement('div');
      bullet.className   = 'panel-q-bullet';
      bullet.style.background = PALETTE[node.topicKey].question + '44';
      bullet.style.color      = PALETTE[node.topicKey].question;
      bullet.textContent      = '?';
      const text  = document.createElement('div');
      text.textContent = q;
      row.appendChild(bullet);
      row.appendChild(text);
      panelBody.appendChild(row);
    });
  }

  panelEl.classList.add('open');
  document.getElementById('legend').classList.add('panel-open');
}

function closePanel() {
  panelEl.classList.remove('open');
  document.getElementById('legend').classList.remove('panel-open');
  selectedNode = null;
}

/* ====================================================================
   MOUSE / TOUCH INTERACTION
   (wired up inside DOMContentLoaded after canvas is assigned)
   ==================================================================== */
let hoveredNode = null;
let dragNode    = null;
let dragStarted = false;
let mouseDownPos = null;
let panStart     = null;

function wireInteraction() {
  canvas.addEventListener('mousemove', e => {
    const { offsetX: sx, offsetY: sy } = e;

    if (dragNode) {
      const w = toWorld(sx, sy);
      dragNode.x  = w.x;
      dragNode.y  = w.y;
      dragNode.vx = 0;
      dragNode.vy = 0;
      dragStarted = true;
      simActive = true; alpha = Math.max(alpha, 0.15);
      return;
    }

    if (panStart) {
      tx = panStart.tx + (sx - panStart.sx);
      ty = panStart.ty + (sy - panStart.sy);
      dragStarted = true;
      canvas.classList.add('grabbing');
      return;
    }

    const hit = nodeAtScreen(sx, sy);
    if (hit !== hoveredNode) {
      hoveredNode = hit;
      canvas.classList.toggle('on-node', !!hit);
    }
  });

  canvas.addEventListener('mousedown', e => {
    const { offsetX: sx, offsetY: sy } = e;
    mouseDownPos = { sx, sy };
    dragStarted  = false;

    const hit = nodeAtScreen(sx, sy);
    if (hit) {
      dragNode       = hit;
      dragNode.fixed = true;
      simActive = true; alpha = Math.max(alpha, 0.3);
    } else {
      panStart = { sx, sy, tx, ty };
      canvas.classList.add('grabbing');
    }
    e.preventDefault();
  });

  canvas.addEventListener('mouseup', () => {
    if (dragNode) {
      dragNode.fixed = false;
      if (!dragStarted) openPanel(dragNode);
      dragNode = null;
    } else if (panStart) {
      if (!dragStarted) closePanel();
      panStart = null;
      canvas.classList.remove('grabbing');
    }
    dragStarted = false;
  });

  canvas.addEventListener('mouseleave', () => {
    dragNode = null;
    panStart = null;
    canvas.classList.remove('grabbing');
  });

  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    const { offsetX: sx, offsetY: sy } = e;
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.91;
    const newScale   = Math.max(0.12, Math.min(4.5, scale * zoomFactor));
    tx = sx - (sx - tx) * (newScale / scale);
    ty = sy - (sy - ty) * (newScale / scale);
    scale = newScale;
  }, { passive: false });
}

/* ====================================================================
   ZOOM CONTROLS + RESET
   ==================================================================== */
function zoomBy(factor) {
  const cx = canvas.width  / 2;
  const cy = canvas.height / 2;
  const ns = Math.max(0.12, Math.min(4.5, scale * factor));
  tx = cx - (cx - tx) * (ns / scale);
  ty = cy - (cy - ty) * (ns / scale);
  scale = ns;
}

function wireControls() {
  document.getElementById('btn-zoom-in') .addEventListener('click', () => zoomBy(1.18));
  document.getElementById('btn-zoom-out').addEventListener('click', () => zoomBy(0.85));
  document.getElementById('btn-reset')   .addEventListener('click', resetView);
  document.getElementById('panel-close') .addEventListener('click', closePanel);
}

function resetView() {
  tx    = canvas.width  / 2;
  ty    = canvas.height / 2;
  scale = 1;
}

/* ====================================================================
   CANVAS RESIZE
   ==================================================================== */
function resizeCanvas() {
  const area  = canvas.parentElement;
  canvas.width  = area.clientWidth;
  canvas.height = area.clientHeight;
  // Re-center translation on resize
  if (tx === 0 && ty === 0) resetView();
}

window.addEventListener('resize', () => {
  resizeCanvas();
});

/* ====================================================================
   INIT
   ==================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  canvas = document.getElementById('graph-canvas');
  ctx    = canvas.getContext('2d');

  panelEl        = document.getElementById('panel');
  panelDot       = document.getElementById('panel-dot');
  panelTypeLabel = document.getElementById('panel-type-label');
  panelTitle     = document.getElementById('panel-title');
  panelBody      = document.getElementById('panel-body');
  panelCloseBtn  = document.getElementById('panel-close');

  resizeCanvas();
  resetView();
  initSparkles();
  buildGraph();
  setInitialPositions();
  wireInteraction();
  wireControls();
  loop();
});
</script>
