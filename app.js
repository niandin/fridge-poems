// ── STATE ──
let allAuthors = [];   // full list from PoetryDB
let poetsData = {};    // { authorName: [{title, lines}] } — loaded on demand
let activePoet = null;
let activePoem = null;
let currentLines = [];
let draggingTile = null;
let dragOX = 0, dragOY = 0;

// ── LOAD ALL AUTHORS ON START ──
// Instead of a hardcoded list, we fetch the full author list from PoetryDB.
// Poems are loaded lazily — only when a poet is clicked.
async function init() {
  try {
    const res = await fetch('https://poetrydb.org/author');
    const data = await res.json();
    // API returns { "authors": ["Name", ...] }
    allAuthors = (data.authors || []).sort((a, b) => {
      // Sort by last name
      const lastName = name => name.split(' ').pop();
      return lastName(a).localeCompare(lastName(b));
    });
    renderSidebar();
  } catch (e) {
    document.getElementById('poetList').innerHTML =
      '<div class="loading-poets" style="color:#c00">Could not reach PoetryDB. Check your connection.</div>';
  }
}

// ── SIDEBAR ──
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

  filtered.forEach((name) => {
    const wrap = document.createElement('div');

    // Poet button
    const pb = document.createElement('button');
    pb.className = 'poet-btn' + (activePoet === name ? ' active' : '');
    pb.innerHTML = `<span>${name}</span><span class="chevron">${activePoet === name ? '&#9650;' : '&#9660;'}</span>`;
    pb.onclick = () => togglePoet(name);

    // Poem list (empty until loaded)
    const pe = document.createElement('div');
    pe.className = 'poem-entries' + (activePoet === name ? ' open' : '');
    pe.id = 'poems-' + name.replace(/\s+/g, '-');

    if (activePoet === name) {
      renderPoemList(pe, name);
    }

    wrap.appendChild(pb);
    wrap.appendChild(pe);
    list.appendChild(wrap);
  });
}

async function togglePoet(name) {
  if (activePoet === name) {
    activePoet = null;
    renderSidebar();
    return;
  }

  activePoet = name;
  renderSidebar();

  // Load poems if not cached
  if (!poetsData[name]) {
    const pe = document.getElementById('poems-' + name.replace(/\s+/g, '-'));
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

    // Re-render just the poem list
    const pe2 = document.getElementById('poems-' + name.replace(/\s+/g, '-'));
    if (pe2) renderPoemList(pe2, name);
  }
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
    btn.onclick = (e) => {
      e.stopPropagation();
      showPoem(name, pmi);
    };
    container.appendChild(btn);
  });
}

// ── SHOW POEM ──
function showPoem(name, pmi) {
  activePoem = pmi;

  // Update active state on poem buttons
  document.querySelectorAll('.poem-btn').forEach((b, i) => {
    b.classList.toggle('active', i === pmi);
  });

  const poem = poetsData[name][pmi];
  currentLines = poem.lines;

  document.getElementById('readerEmpty').style.display = 'none';
  document.getElementById('readerContent').style.display = 'block';
  document.getElementById('displayTitle').textContent = poem.title;
  document.getElementById('displayAuthor').textContent = name;

  // Render lines
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
  const words = text
    .replace(/[^a-z\s'-]/g, ' ')
    .split(/\s+/)
    .map(w => w.replace(/^[-']+|[-']+$/g, ''))
    .filter(w => w.length > 2 && !STOPWORDS.has(w) && /^[a-z]/.test(w));

  const unique = [...new Set(words)];
  for (let i = unique.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [unique[i], unique[j]] = [unique[j], unique[i]];
  }
  return unique.slice(0, 60);
}

function throwOnFridge() {
  if (!currentLines.length) return;
  const fridge = document.getElementById('fridge');
  fridge.querySelectorAll('.tile').forEach(t => t.remove());
  document.getElementById('fridgeMsg').style.display = 'none';

  const words = extractWords(currentLines);
  const W = fridge.offsetWidth;
  const H = fridge.offsetHeight;

  words.forEach(word => {
    const tile = document.createElement('div');
    tile.className = 'tile' + (Math.random() < 0.18 ? ' inv' : '');
    tile.textContent = word;
    tile.style.transform = `rotate(${(Math.random() - 0.5) * 5}deg)`;
    tile.style.left = (12 + Math.random() * Math.max(0, W - 130)) + 'px';
    tile.style.top  = (12 + Math.random() * Math.max(0, H - 36)) + 'px';
    tile.addEventListener('mousedown', tileDown);
    tile.addEventListener('touchstart', tileTouchDown, { passive: false });
    fridge.appendChild(tile);
  });
}

// ── DRAG: MOUSE ──
function tileDown(e) {
  e.preventDefault();
  draggingTile = e.currentTarget;
  draggingTile.classList.add('dragging');
  const r = draggingTile.getBoundingClientRect();
  dragOX = e.clientX - r.left;
  dragOY = e.clientY - r.top;
  document.addEventListener('mousemove', tileMove);
  document.addEventListener('mouseup', tileUp);
}

function tileMove(e) { if (draggingTile) move(e.clientX, e.clientY); }

function tileUp() {
  if (!draggingTile) return;
  draggingTile.classList.remove('dragging');
  draggingTile = null;
  document.removeEventListener('mousemove', tileMove);
  document.removeEventListener('mouseup', tileUp);
}

// ── DRAG: TOUCH ──
function tileTouchDown(e) {
  e.preventDefault();
  draggingTile = e.currentTarget;
  draggingTile.classList.add('dragging');
  const t = e.touches[0];
  const r = draggingTile.getBoundingClientRect();
  dragOX = t.clientX - r.left;
  dragOY = t.clientY - r.top;
  document.addEventListener('touchmove', tileTouchMove, { passive: false });
  document.addEventListener('touchend', tileTouchUp);
}

function tileTouchMove(e) {
  e.preventDefault();
  if (draggingTile) { const t = e.touches[0]; move(t.clientX, t.clientY); }
}

function tileTouchUp() {
  if (!draggingTile) return;
  draggingTile.classList.remove('dragging');
  draggingTile = null;
  document.removeEventListener('touchmove', tileTouchMove);
  document.removeEventListener('touchend', tileTouchUp);
}

function move(cx, cy) {
  const f = document.getElementById('fridge');
  const fr = f.getBoundingClientRect();
  let x = Math.max(0, Math.min(cx - fr.left - dragOX, f.offsetWidth - draggingTile.offsetWidth));
  let y = Math.max(0, Math.min(cy - fr.top - dragOY, f.offsetHeight - draggingTile.offsetHeight));
  draggingTile.style.left = x + 'px';
  draggingTile.style.top = y + 'px';
}

// ── RESIZABLE PANEL ──
const handle = document.getElementById('dragHandle');
const reader = document.getElementById('reader');
const main = document.querySelector('.main');
let resizing = false, resY = 0, resH = 0;

handle.addEventListener('mousedown', e => {
  resizing = true; resY = e.clientY; resH = reader.offsetHeight;
  document.body.style.cursor = 'row-resize';
  document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', e => {
  if (!resizing) return;
  const total = main.offsetHeight - handle.offsetHeight;
  reader.style.height = Math.max(80, Math.min(resH + (e.clientY - resY), total - 80)) + 'px';
});

document.addEventListener('mouseup', () => {
  if (!resizing) return;
  resizing = false;
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
});

// ── START ──
init();
