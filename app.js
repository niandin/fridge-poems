// ── ERA GROUPINGS ──
const ERAS = {
  "Ancient & Classical": [
    "Sappho", "Ovid", "Virgil", "Homer"
  ],
  "Medieval & Renaissance": [
    "Geoffrey Chaucer", "Christopher Marlowe", "William Shakespeare", "John Donne",
    "Ben Jonson", "Edmund Spenser", "Philip Sidney", "John Milton"
  ],
  "Romantic": [
    "William Blake", "Robert Burns", "William Wordsworth", "Samuel Taylor Coleridge",
    "George Gordon, Lord Byron", "Percy Bysshe Shelley", "John Keats",
    "Ralph Waldo Emerson", "Henry Wadsworth Longfellow", "Edgar Allan Poe",
    "Alfred Lord Tennyson", "Robert Browning", "Elizabeth Barrett Browning",
    "Walt Whitman", "Emily Bronte", "Christina Rossetti", "Matthew Arnold",
    "Gerard Manley Hopkins", "Emily Dickinson", "Thomas Hardy"
  ],
  "Modern & Early 20th Century": [
    "William Butler Yeats", "Rudyard Kipling", "A. E. Housman", "Stephen Crane",
    "Paul Laurence Dunbar", "Amy Lowell", "Edward Thomas", "Rupert Brooke",
    "T. S. Eliot", "Ezra Pound", "William Carlos Williams", "Wallace Stevens",
    "D. H. Lawrence", "Siegfried Sassoon", "Wilfred Owen", "Carl Sandburg",
    "Edna St. Vincent Millay", "E. E. Cummings", "Archibald MacLeish",
    "Robert Frost", "Lewis Carroll", "Oscar Wilde"
  ],
  "Mid & Late 20th Century": [
    "W. H. Auden", "Dylan Thomas", "Theodore Roethke", "Randall Jarrell",
    "Robinson Jeffers", "Langston Hughes", "Countee Cullen", "Pablo Neruda",
    "Anne Sexton", "Sylvia Plath", "Denise Levertov", "Lawrence Ferlinghetti",
    "Allen Ginsberg", "Frank O'Hara", "Robert Lowell", "Gwendolyn Brooks",
    "Philip Larkin", "Seamus Heaney", "Mary Oliver", "Sharon Olds"
  ],
};

// Short bios (max 3-4 lines)
const BIOS = {
  "William Butler Yeats": "Irish poet and Nobel laureate (1923). A central figure of 20th-century literature, known for mystical symbolism, Irish mythology, and poems like The Second Coming and The Lake Isle of Innisfree.",
  "Robert Frost": "American poet, four-time Pulitzer Prize winner. Known for his accessible New England settings and deceptively simple poems exploring nature, loss, and choice.",
  "T. S. Eliot": "Anglo-American modernist poet and Nobel laureate (1948). His poem The Waste Land (1922) transformed modern poetry with its fragmented, allusive style.",
  "Walt Whitman": "American poet whose free-verse collection Leaves of Grass (1855) revolutionised poetry. Celebrated democracy, the body, and the American experience.",
  "Emily Dickinson": "Reclusive American poet who wrote nearly 1,800 poems, most published posthumously. Known for slant rhyme, compressed metaphysics, and dashes.",
  "Emily Bronte": "English novelist and poet, author of Wuthering Heights. Her poems are marked by passion, mysticism, and a fierce inner life.",
  "William Shakespeare": "English playwright and poet (1564–1616). His 154 sonnets explore love, time, and beauty with unmatched verbal precision.",
  "John Donne": "English metaphysical poet known for witty, complex verse fusing intellect and passion. Wrote both erotic love poems and devout religious works.",
  "Robert Burns": "Scotland's national poet, known for songs like Auld Lang Syne and A Red, Red Rose. Wrote in Scots dialect and celebrated common humanity.",
  "George Gordon, Lord Byron": "Flamboyant English Romantic poet who was famous across Europe in his lifetime. Known for Don Juan and his tempestuous life as much as his verse.",
  "Christina Rossetti": "Victorian English poet known for devotional and lyric verse. Her poem Goblin Market is a richly allegorical masterpiece.",
  "Percy Bysshe Shelley": "English Romantic poet known for Ode to the West Wind and Ozymandias. A radical idealist who died at 29.",
  "John Keats": "English Romantic poet who wrote his greatest works in a single year before dying of tuberculosis at 25. Known for sensuous odes and beauty.",
  "William Blake": "English poet and printmaker who made his own illustrated books. A visionary mystic and fierce critic of industrial society.",
  "Samuel Taylor Coleridge": "English Romantic poet known for The Rime of the Ancient Mariner and Kubla Khan. Helped launch the Romantic Age in English literature.",
  "William Wordsworth": "English Romantic poet and co-author of Lyrical Ballads with Coleridge. Celebrated nature, childhood, and ordinary rural life.",
  "Edgar Allan Poe": "American poet and master of gothic fiction. Known for The Raven and Annabel Lee, poems of grief, beauty, and obsession.",
  "Alfred Lord Tennyson": "Poet Laureate of Victorian England. Known for In Memoriam and The Charge of the Light Brigade.",
  "Walt Whitman": "American poet whose Leaves of Grass revolutionised poetry with its free verse and celebration of democracy and the body.",
  "Carl Sandburg": "American poet of the people, known for Chicago. Won three Pulitzer Prizes and celebrated industrial America and working-class life.",
  "Langston Hughes": "Central figure of the Harlem Renaissance. His jazz-influenced poetry celebrated Black American life with lyric and political force.",
  "Edna St. Vincent Millay": "American poet and first woman to win the Pulitzer Prize for Poetry (1923). Known for her sonnets and a fiercely independent life.",
  "Ezra Pound": "American modernist poet who championed imagism and influenced nearly every major 20th-century poet. Author of the monumental Cantos.",
  "Wallace Stevens": "American modernist poet and insurance executive. His work explores imagination, reality, and beauty with philosophical depth.",
  "William Carlos Williams": "American poet known for the imagist credo 'no ideas but in things'. Wrote The Red Wheelbarrow and Spring and All.",
  "Rudyard Kipling": "English author born in India, known for If— and The Jungle Book. First English-language writer to win the Nobel Prize (1907).",
  "A. E. Housman": "English classical scholar and poet. A Shropshire Lad (1896) is a cycle of elegies mourning youth, beauty, and rural England.",
  "E. E. Cummings": "American poet known for unconventional typography, lowercase letters, and playful experiments with form and syntax.",
  "W. H. Auden": "Anglo-American poet known for intellectual range and technical mastery. Musée des Beaux Arts is among the finest poems of the 20th century.",
  "Dylan Thomas": "Welsh poet known for Do Not Go Gentle into That Good Night and Fern Hill. Famous for his rich, musical reading voice.",
  "Robinson Jeffers": "American poet of the California coast. Known for his philosophy of 'inhumanism' and stark, ecological verse.",
  "Archibald MacLeish": "American poet who wrote Ars Poetica, which argued a poem should not mean but be. Three-time Pulitzer Prize winner.",
  "Lewis Carroll": "English author and mathematician. Jabberwocky and The Walrus and the Carpenter are beloved nonsense verse of Victorian literature.",
  "Ralph Waldo Emerson": "American essayist and Transcendentalist poet who inspired Whitman and Thoreau. Celebrated nature, self-reliance, and the divine in everyday life.",
  "Sappho": "Ancient Greek lyric poet from the island of Lesbos (c. 630 BC). Her poems of love and longing survive only in fragments.",
  "Philip Larkin": "English poet and librarian, central to the 'Movement' in postwar British poetry. Known for wry, melancholic verse about modern life.",
  "Seamus Heaney": "Irish Nobel laureate (1995) known for poems rooted in the land and politics of Northern Ireland. Among the most beloved poets of his era.",
};

// ── TILE THEMES ──
const THEMES = {
  bw: {
    label: "B&W",
    getTileStyle: () => {
      const inv = Math.random() < 0.18;
      return {
        className: inv ? 'tile inv' : 'tile',
        style: {}
      };
    }
  },
  kitschy: {
    label: "Kitschy",
    colors: [
      { bg: '#e8433a', color: '#fff' },
      { bg: '#2d6be4', color: '#fff' },
      { bg: '#f5c518', color: '#111' },
      { bg: '#2ab573', color: '#fff' },
      { bg: '#f07d2a', color: '#fff' },
      { bg: '#e84393', color: '#fff' },
      { bg: '#7c4de8', color: '#fff' },
      { bg: '#1ab5b5', color: '#fff' },
      { bg: '#fff', color: '#111' },
    ],
    getTileStyle: function() {
      const c = this.colors[Math.floor(Math.random() * this.colors.length)];
      return {
        className: 'tile',
        style: { background: c.bg, color: c.color, borderColor: 'rgba(0,0,0,0.15)',
          boxShadow: `1.5px 1.5px 0 rgba(0,0,0,0.2)` }
      };
    }
  },
  pastel: {
    label: "Pastel",
    colors: [
      { bg: '#ffd6d6', color: '#7a3333' },
      { bg: '#d6e8ff', color: '#2a4a7a' },
      { bg: '#fff4cc', color: '#7a6000' },
      { bg: '#d6f5e3', color: '#1a5c38' },
      { bg: '#f5d6f5', color: '#5c1a7a' },
      { bg: '#ffe8d6', color: '#7a3a00' },
      { bg: '#d6f0f5', color: '#0a4a5c' },
      { bg: '#f5f5d6', color: '#4a4a00' },
    ],
    getTileStyle: function() {
      const c = this.colors[Math.floor(Math.random() * this.colors.length)];
      return {
        className: 'tile',
        style: { background: c.bg, color: c.color, borderColor: c.color + '55',
          boxShadow: `1.5px 1.5px 0 ${c.color}33` }
      };
    }
  },
  dark: {
    label: "Dark",
    colors: [
      { bg: '#1a1a2e', color: '#e0e0ff' },
      { bg: '#2d1b1b', color: '#ffd0d0' },
      { bg: '#1b2d1b', color: '#d0ffd0' },
      { bg: '#2d2d1b', color: '#ffffd0' },
      { bg: '#2d1b2d', color: '#ffd0ff' },
      { bg: '#111', color: '#e0c97f' },
      { bg: '#1b1b2d', color: '#c0c0ff' },
    ],
    getTileStyle: function() {
      const c = this.colors[Math.floor(Math.random() * this.colors.length)];
      return {
        className: 'tile',
        style: { background: c.bg, color: c.color, borderColor: c.color + '44',
          boxShadow: `1.5px 1.5px 0 ${c.color}33` }
      };
    }
  }
};

let currentTheme = 'bw';

// ── STATE ──
let allAuthors = [];
let poetsData = {};
let activePoet = null;
let activePoem = null;
let currentLines = [];
let draggingTile = null;
let dragOX = 0, dragOY = 0;
let tooltipEl = null;

// ── INIT ──
async function init() {
  buildThemePicker();
  buildHeader();

  try {
    const res = await fetch('https://poetrydb.org/author');
    const data = await res.json();
    allAuthors = (data.authors || []).sort((a, b) => {
      const lastName = n => n.split(' ').pop();
      return lastName(a).localeCompare(lastName(b));
    });
    renderSidebar();
  } catch (e) {
    document.getElementById('poetList').innerHTML =
      '<div class="loading-poets" style="color:#c00">Could not reach PoetryDB.</div>';
  }
}

// ── HEADER EXTRAS ──
function buildHeader() {
  const header = document.querySelector('header');

  // Poet of the day button
  const potd = document.createElement('button');
  potd.className = 'header-btn';
  potd.textContent = 'poet of the day';
  potd.onclick = showPoetOfTheDay;

  // Add word button
  const addWord = document.createElement('button');
  addWord.className = 'header-btn';
  addWord.textContent = '+ add word';
  addWord.onclick = () => {
    const word = prompt('Add a word to the fridge:');
    if (word && word.trim()) addCustomTile(word.trim());
  };

  // Clear fridge button
  const clearBtn = document.createElement('button');
  clearBtn.className = 'header-btn';
  clearBtn.textContent = 'clear fridge';
  clearBtn.onclick = clearFridge;

  header.appendChild(potd);
  header.appendChild(addWord);
  header.appendChild(clearBtn);
}

// ── THEME PICKER ──
function buildThemePicker() {
  const header = document.querySelector('header');
  const picker = document.createElement('div');
  picker.className = 'theme-picker';
  picker.id = 'themePicker';

  Object.entries(THEMES).forEach(([key, theme]) => {
    const btn = document.createElement('button');
    btn.className = 'theme-btn' + (key === currentTheme ? ' active' : '');
    btn.textContent = theme.label;
    btn.dataset.theme = key;
    btn.onclick = () => setTheme(key);
    picker.appendChild(btn);
  });

  header.appendChild(picker);
}

function setTheme(key) {
  currentTheme = key;
  document.querySelectorAll('.theme-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.theme === key);
  });
  // Update body class for dark theme fridge background
  document.body.dataset.theme = key;
}

// ── POET OF THE DAY ──
function showPoetOfTheDay() {
  if (!allAuthors.length) return;
  // Deterministic by date
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const idx = seed % allAuthors.length;
  const name = allAuthors[idx];

  // Open the poet in sidebar and load a random poem
  activePoet = name;
  renderSidebar();

  // Scroll sidebar to poet
  setTimeout(async () => {
    if (!poetsData[name]) await loadPoetPoems(name);
    if (poetsData[name] && poetsData[name].length > 0) {
      const pmi = seed % poetsData[name].length;
      showPoem(name, pmi);
      // Scroll sidebar
      const poetBtns = document.querySelectorAll('.poet-btn');
      poetBtns.forEach(btn => {
        if (btn.querySelector('span') && btn.querySelector('span').textContent === name) {
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }
  }, 100);
}

// ── SIDEBAR ──
function getEra(name) {
  for (const [era, poets] of Object.entries(ERAS)) {
    if (poets.includes(name)) return era;
  }
  return 'Other';
}

function renderSidebar() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const list = document.getElementById('poetList');
  list.innerHTML = '';

  const filtered = allAuthors.filter(name =>
    !q || name.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    list.innerHTML = '<div class="loading-poets">no poets found</div>';
    return;
  }

  if (q) {
    // Flat list when searching
    filtered.forEach(name => renderPoetEntry(list, name));
  } else {
    // Grouped by era
    const grouped = {};
    filtered.forEach(name => {
      const era = getEra(name);
      if (!grouped[era]) grouped[era] = [];
      grouped[era].push(name);
    });

    // Render in era order
    const eraOrder = [...Object.keys(ERAS), 'Other'];
    eraOrder.forEach(era => {
      if (!grouped[era] || grouped[era].length === 0) return;

      const eraHead = document.createElement('div');
      eraHead.className = 'era-heading';
      eraHead.textContent = era;
      list.appendChild(eraHead);

      grouped[era].forEach(name => renderPoetEntry(list, name));
    });
  }
}

function renderPoetEntry(list, name) {
  const wrap = document.createElement('div');

  const pb = document.createElement('button');
  pb.className = 'poet-btn' + (activePoet === name ? ' active' : '');

  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;

  const chevron = document.createElement('span');
  chevron.className = 'chevron';
  chevron.innerHTML = activePoet === name ? '&#9650;' : '&#9660;';

  pb.appendChild(nameSpan);

  // Bio tooltip
  if (BIOS[name]) {
    const infoBtn = document.createElement('span');
    infoBtn.className = 'bio-dot';
    infoBtn.textContent = 'i';
    infoBtn.title = BIOS[name];
    infoBtn.onclick = (e) => { e.stopPropagation(); showTooltip(e, BIOS[name]); };
    pb.appendChild(infoBtn);
  }

  pb.appendChild(chevron);
  pb.onclick = () => togglePoet(name);

  const pe = document.createElement('div');
  pe.className = 'poem-entries' + (activePoet === name ? ' open' : '');
  pe.id = 'poems-' + name.replace(/[\s,\.]/g, '-');

  if (activePoet === name) {
    renderPoemList(pe, name);
  }

  wrap.appendChild(pb);
  wrap.appendChild(pe);
  list.appendChild(wrap);
}

// ── TOOLTIP ──
function showTooltip(e, text) {
  hideTooltip();
  tooltipEl = document.createElement('div');
  tooltipEl.className = 'bio-tooltip';
  tooltipEl.textContent = text;
  document.body.appendChild(tooltipEl);

  const r = e.target.getBoundingClientRect();
  tooltipEl.style.top = (r.bottom + 6) + 'px';
  tooltipEl.style.left = Math.min(r.left, window.innerWidth - 280) + 'px';

  setTimeout(() => document.addEventListener('click', hideTooltip, { once: true }), 10);
}

function hideTooltip() {
  if (tooltipEl) { tooltipEl.remove(); tooltipEl = null; }
}

// ── LOAD & TOGGLE POET ──
async function togglePoet(name) {
  if (activePoet === name) {
    activePoet = null;
    renderSidebar();
    return;
  }
  activePoet = name;
  renderSidebar();
  await loadPoetPoems(name);
}

async function loadPoetPoems(name) {
  if (poetsData[name]) return;

  const peId = 'poems-' + name.replace(/[\s,\.]/g, '-');
  const pe = document.getElementById(peId);
  if (pe) pe.innerHTML = '<div style="padding:8px 14px 8px 24px;font-family:var(--tile-font);font-size:12px;color:var(--mid)">loading...</div>';

  try {
    const res = await fetch(`https://poetrydb.org/author/${encodeURIComponent(name)}/title,lines`);
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      data.sort((a, b) => a.title.localeCompare(b.title));
      poetsData[name] = data;
    } else {
      poetsData[name] = [];
    }
  } catch (e) {
    poetsData[name] = [];
  }

  const pe2 = document.getElementById(peId);
  if (pe2) renderPoemList(pe2, name);
}

function renderPoemList(container, name) {
  container.innerHTML = '';
  const poems = poetsData[name];
  if (!poems || poems.length === 0) {
    container.innerHTML = '<div style="padding:8px 14px 8px 24px;font-family:var(--tile-font);font-size:12px;color:var(--mid)">no poems found</div>';
    return;
  }
  poems.forEach((poem, pmi) => {
    const btn = document.createElement('button');
    btn.className = 'poem-btn' + (activePoet === name && activePoem === pmi ? ' active' : '');
    btn.textContent = poem.title;
    btn.title = poem.title;
    btn.onclick = (e) => { e.stopPropagation(); showPoem(name, pmi); };
    container.appendChild(btn);
  });
}

// ── SHOW POEM ──
function showPoem(name, pmi) {
  activePoem = pmi;
  document.querySelectorAll('.poem-btn').forEach((b, i) => {
    b.classList.toggle('active', i === pmi);
  });

  const poem = poetsData[name][pmi];
  currentLines = poem.lines;

  document.getElementById('readerEmpty').style.display = 'none';
  document.getElementById('readerContent').style.display = 'block';
  document.getElementById('displayTitle').textContent = poem.title;
  document.getElementById('displayAuthor').textContent = name;

  const container = document.getElementById('poemText');
  container.innerHTML = '';
  poem.lines.forEach(line => {
    if (line.trim() === '') {
      const br = document.createElement('div');
      br.className = 'stanza-break';
      container.appendChild(br);
    } else {
      const p = document.createElement('p');
      p.textContent = line;
      container.appendChild(p);
    }
  });
  document.getElementById('reader').scrollTop = 0;
}

// ── FRIDGE ──
const STOPWORDS = new Set(
  'the a an and or but in on at to for of with is it its that this as by from was are be been have has had not they their them he she we you i me my his her our your into than then when if up out so do did no nor yet all each more most other such what which who whom how about above after again against along already also always among any away back because before between can come could down during ever every few first get give go good great here him just know like little long look make many may might much must never now old once only over own part place put say see seem should since some still take those though through time too under until upon us very want way well were while will without would'.split(' ')
);

function extractWords(lines) {
  const text = lines.join(' ').toLowerCase();
  const words = text.replace(/[^a-z\s'-]/g, ' ').split(/\s+/)
    .map(w => w.replace(/^[-']+|[-']+$/g, ''))
    .filter(w => w.length > 2 && !STOPWORDS.has(w) && /^[a-z]/.test(w));
  const unique = [...new Set(words)];
  for (let i = unique.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [unique[i], unique[j]] = [unique[j], unique[i]];
  }
  return unique.slice(0, 40);
}

function makeTile(word) {
  const theme = THEMES[currentTheme];
  const { className, style } = theme.getTileStyle();
  const tile = document.createElement('div');
  tile.className = className;
  tile.textContent = word;
  Object.assign(tile.style, style);

  const fridge = document.getElementById('fridge');
  const W = fridge.offsetWidth, H = fridge.offsetHeight;
  tile.style.transform = `rotate(${(Math.random() - 0.5) * 5}deg)`;
  tile.style.left = (12 + Math.random() * Math.max(0, W - 130)) + 'px';
  tile.style.top  = (12 + Math.random() * Math.max(0, H - 36)) + 'px';
  tile.addEventListener('mousedown', tileDown);
  tile.addEventListener('touchstart', tileTouchDown, { passive: false });
  return tile;
}

function throwOnFridge() {
  if (!currentLines.length) return;
  document.getElementById('fridgeMsg').style.display = 'none';
  const fridge = document.getElementById('fridge');
  const words = extractWords(currentLines);
  words.forEach(word => fridge.appendChild(makeTile(word)));
}

function addCustomTile(word) {
  document.getElementById('fridgeMsg').style.display = 'none';
  document.getElementById('fridge').appendChild(makeTile(word));
}

function clearFridge() {
  document.getElementById('fridge').querySelectorAll('.tile').forEach(t => t.remove());
  document.getElementById('fridgeMsg').style.display = '';
}

// ── DRAG: MOUSE ──
function tileDown(e) {
  e.preventDefault();
  draggingTile = e.currentTarget; draggingTile.classList.add('dragging');
  const r = draggingTile.getBoundingClientRect();
  dragOX = e.clientX - r.left; dragOY = e.clientY - r.top;
  document.addEventListener('mousemove', tileMove);
  document.addEventListener('mouseup', tileUp);
}
function tileMove(e) { if (draggingTile) move(e.clientX, e.clientY); }
function tileUp() {
  if (!draggingTile) return;
  draggingTile.classList.remove('dragging'); draggingTile = null;
  document.removeEventListener('mousemove', tileMove);
  document.removeEventListener('mouseup', tileUp);
}

// ── DRAG: TOUCH ──
function tileTouchDown(e) {
  e.preventDefault();
  draggingTile = e.currentTarget; draggingTile.classList.add('dragging');
  const t = e.touches[0], r = draggingTile.getBoundingClientRect();
  dragOX = t.clientX - r.left; dragOY = t.clientY - r.top;
  document.addEventListener('touchmove', tileTouchMove, { passive: false });
  document.addEventListener('touchend', tileTouchUp);
}
function tileTouchMove(e) { e.preventDefault(); if (draggingTile) { const t = e.touches[0]; move(t.clientX, t.clientY); } }
function tileTouchUp() {
  if (!draggingTile) return;
  draggingTile.classList.remove('dragging'); draggingTile = null;
  document.removeEventListener('touchmove', tileTouchMove);
  document.removeEventListener('touchend', tileTouchUp);
}

function move(cx, cy) {
  const f = document.getElementById('fridge'), fr = f.getBoundingClientRect();
  let x = Math.max(0, Math.min(cx - fr.left - dragOX, f.offsetWidth - draggingTile.offsetWidth));
  let y = Math.max(0, Math.min(cy - fr.top - dragOY, f.offsetHeight - draggingTile.offsetHeight));
  draggingTile.style.left = x + 'px'; draggingTile.style.top = y + 'px';
}

// ── RESIZABLE PANEL ──
const handle = document.getElementById('dragHandle');
const reader = document.getElementById('reader');
const main = document.querySelector('.main');
let resizing = false, resY = 0, resH = 0;
handle.addEventListener('mousedown', e => {
  resizing = true; resY = e.clientY; resH = reader.offsetHeight;
  document.body.style.cursor = 'row-resize'; document.body.style.userSelect = 'none';
});
document.addEventListener('mousemove', e => {
  if (!resizing) return;
  const total = main.offsetHeight - handle.offsetHeight;
  reader.style.height = Math.max(80, Math.min(resH + (e.clientY - resY), total - 80)) + 'px';
});
document.addEventListener('mouseup', () => {
  if (!resizing) return;
  resizing = false; document.body.style.cursor = ''; document.body.style.userSelect = '';
});

init();
