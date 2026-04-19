// ── ERA GROUPINGS ──
const ERAS = {
  "Medieval & Renaissance (pre-1600)": [
    "Geoffrey Chaucer","Sir Thomas Wyatt","Sir Philip Sidney","Edmund Spenser",
    "Christopher Marlowe","Michael Drayton","William Shakespeare","Sir Walter Raleigh","William Browne",
  ],
  "17th Century": [
    "John Donne","Ben Jonson","George Herbert","Richard Lovelace","John Milton",
    "Andrew Marvell","Henry Vaughan","Richard Crashaw","Sir John Suckling",
    "Katherine Philips","Anne Killigrew","John Wilmot","Thomas Flatman",
    "Anne Kingsmill Finch","Lady Mary Chudleigh","Edward Taylor","Christopher Smart",
    "John Dryden","Matthew Prior","Jonathan Swift","Isaac Watts","Anne Bradstreet",
  ],
  "18th Century": [
    "Alexander Pope","Thomas Gray","Oliver Goldsmith","Samuel Johnson","William Cowper",
    "Philip Freneau","Hugh Henry Brackenridge","John Trumbull","Joseph Warton","Thomas Warton",
    "William Lisle Bowles","Thomas Chatterton","Charlotte Smith","Jupiter Hammon",
    "Phillis Wheatley","Major Henry Livingston, Jr.","Robert Burns","William Blake",
    "Walter Savage Landor","Thomas Campbell","James Thomson",
  ],
  "Romantic (1800–1850)": [
    "William Wordsworth","Samuel Coleridge","George Gordon, Lord Byron","Percy Bysshe Shelley",
    "John Keats","Robert Southey","Thomas Moore","James Henry Leigh Hunt","Thomas Hood",
    "Henry David Thoreau","Ralph Waldo Emerson","Henry Wadsworth Longfellow","Edgar Allan Poe",
    "William Cullen Bryant","John Greenleaf Whittier","Oliver Wendell Holmes","Edward Fitzgerald",
  ],
  "Victorian (1850–1900)": [
    "Alfred Lord Tennyson","Robert Browning","Elizabeth Barrett Browning","Emily Bronte",
    "Charlotte Bronte","Anne Bronte","Christina Rossetti","George Eliot","Matthew Arnold",
    "Coventry Patmore","Gerard Manley Hopkins","Algernon Charles Swinburne","William Morris",
    "William Ernest Henley","Robert Louis Stevenson","Oscar Wilde","A. E. Housman",
    "William Barnes","Charles Kingsley","Sidney Lanier","Helen Hunt Jackson","Emma Lazarus",
    "Paul Laurence Dunbar","James Whitcomb Riley","Eugene Field","Ernest Dowson",
    "Francis Thompson","Mary Elizabeth Coleridge","Amy Levy","Jane Austen","Ann Taylor",
    "Jane Taylor","John Clare","Mark Twain","Adam Lindsay Gordon","Arthur Hugh Clough",
    "William Topaz McGonagall","Annie Louisa Walker","Louisa May Alcott","Julia Ward Howe",
    "Edward Lear","Ambrose Bierce","George Meredith",
  ],
  "Early 20th Century (1900–1945)": [
    "William Butler Yeats","Rudyard Kipling","William Vaughn Moody","Stephen Crane",
    "Alan Seeger","Edward Thomas","Rupert Brooke","Wilfred Owen","John McCrae","Charles Sorley",
    "Joyce Kilmer","Robert Frost","Carl Sandburg","Edna St. Vincent Millay","T. S. Eliot",
    "Ezra Pound","William Carlos Williams","Wallace Stevens","Robinson","Archibald MacLeish",
    "Lewis Carroll","Ralph Waldo Emerson","Edgar Allan Poe","Emily Bronte","Paul Laurence Dunbar",
  ],
  "Mid–Late 20th Century": [
    "W. H. Auden","Dylan Thomas","Theodore Roethke","Philip Larkin","Robinson Jeffers",
  ],
};

const BIOS = {
  "Adam Lindsay Gordon": "Australian poet (1833–1870) known for vigorous verse about horses, riding, and bush life.",
  "Alan Seeger": "American poet (1888–1916) who died in WWI. Best known for I Have a Rendezvous with Death.",
  "Alexander Pope": "English poet (1688–1744), master of the heroic couplet. The Rape of the Lock defined 18th-century wit.",
  "Algernon Charles Swinburne": "English Victorian poet (1837–1909) known for musical, sensuous verse and classical themes.",
  "Ambrose Bierce": "American satirist (1842–c.1914), best known for The Devil's Dictionary.",
  "Amy Levy": "English Jewish poet and novelist (1861–1889), an early feminist voice.",
  "Andrew Marvell": "English metaphysical poet (1621–1678). To His Coy Mistress is among the finest seduction poems in English.",
  "Ann Taylor": "English poet (1782–1866), co-wrote Original Poems for Infant Minds with her sister Jane.",
  "Anne Bradstreet": "First published poet in the American colonies (1612–1672). Wrote rich verse about faith and family.",
  "Anne Bronte": "English novelist and poet (1820–1849), youngest of the Bronte sisters.",
  "Anne Killigrew": "English poet and painter (1660–1685), celebrated after her early death by Dryden's famous ode.",
  "Anne Kingsmill Finch": "English Restoration poet (1661–1720), one of the first women to write seriously about nature.",
  "Annie Louisa Walker": "19th-century English poet known for popular verse in Victorian periodicals.",
  "Arthur Hugh Clough": "English Victorian poet (1819–1861) known for sceptical, ironic verse.",
  "Ben Jonson": "English Renaissance playwright and poet (1572–1637). Shakespeare's great contemporary.",
  "Charles Kingsley": "English Victorian novelist and poet (1819–1875), author of The Water-Babies.",
  "Charles Sorley": "Scottish WWI poet (1895–1915), killed at 20. His posthumous poems showed remarkable promise.",
  "Charlotte Bronte": "English novelist and poet (1816–1855), author of Jane Eyre.",
  "Charlotte Smith": "English poet and novelist (1749–1806). Her Elegiac Sonnets helped revive the sonnet form.",
  "Christina Rossetti": "Victorian English poet (1830–1894). Goblin Market is a richly allegorical masterpiece.",
  "Christopher Marlowe": "English Renaissance dramatist and poet (1564–1593). Doctor Faustus cemented his legend.",
  "Christopher Smart": "English poet (1722–1771) known for Jubilate Agno, written during his confinement in an asylum.",
  "Coventry Patmore": "Victorian English poet (1823–1896) known for The Angel in the House.",
  "Edgar Allan Poe": "American poet (1809–1849). Known for The Raven and Annabel Lee, poems of grief and obsession.",
  "Edmund Spenser": "English Renaissance poet (1552–1599), author of The Faerie Queene.",
  "Edward Fitzgerald": "English poet and translator (1809–1883), best known for The Rubaiyat of Omar Khayyam.",
  "Edward Lear": "English artist and poet (1812–1888), master of the nonsense limerick.",
  "Edward Taylor": "American colonial poet and minister (1642–1729) whose metaphysical verse was unpublished until the 20th century.",
  "Edward Thomas": "English poet (1878–1917) killed in WWI. Known for nature poetry including Adlestrop.",
  "Eliza Cook": "English Victorian poet (1818–1889), widely read for accessible verse on everyday themes.",
  "Elizabeth Barrett Browning": "Victorian English poet (1806–1861). Sonnets from the Portuguese are among the finest love poems in English.",
  "Emily Bronte": "English novelist and poet (1818–1848), author of Wuthering Heights. Her poems are fiercely passionate.",
  "Emily Dickinson": "Reclusive American poet (1830–1886) who wrote nearly 1,800 poems. Known for slant rhyme and dashes.",
  "Emma Lazarus": "American poet (1849–1887) whose sonnet The New Colossus is inscribed on the Statue of Liberty.",
  "Ernest Dowson": "English Decadent poet (1867–1900), from whom the phrase 'gone with the wind' derives.",
  "Eugene Field": "American poet (1850–1895) known for children's poetry, especially Wynken, Blynken, and Nod.",
  "Francis Thompson": "English poet (1859–1907) known for the visionary religious ode The Hound of Heaven.",
  "Geoffrey Chaucer": "English poet (c.1343–1400), the 'Father of English Literature'. Author of The Canterbury Tales.",
  "George Eliot": "English novelist (1819–1880), pen name of Mary Ann Evans. Best known for Middlemarch.",
  "George Gordon, Lord Byron": "English Romantic poet (1788–1824). Known for Don Juan and She Walks in Beauty.",
  "George Herbert": "English metaphysical poet and clergyman (1593–1633). The Temple is a masterpiece of devotional verse.",
  "George Meredith": "English Victorian novelist and poet (1828–1909). Modern Love is a frank portrait of a failing marriage.",
  "Gerard Manley Hopkins": "English Jesuit priest and poet (1844–1889). Invented sprung rhythm; published only after his death.",
  "Helen Hunt Jackson": "American poet and activist (1830–1885), known for advocacy for Native American rights.",
  "Henry David Thoreau": "American Transcendentalist writer (1817–1862), best known for Walden.",
  "Henry Vaughan": "Welsh metaphysical poet (1621–1695) with a visionary mysticism.",
  "Henry Wadsworth Longfellow": "The most popular American poet of the 19th century (1807–1882). Author of The Song of Hiawatha.",
  "Hugh Henry Brackenridge": "American writer and jurist (1748–1816), a leading figure of the early republic.",
  "Isaac Watts": "English minister and hymn writer (1674–1748). O God, Our Help in Ages Past is his most famous work.",
  "James Henry Leigh Hunt": "English Romantic poet and journalist (1784–1859), friend of Keats and Shelley.",
  "James Thomson": "Scottish poet (1700–1748) whose The Seasons was one of the most widely read 18th-century poems.",
  "James Whitcomb Riley": "American poet (1849–1916) known as the 'Hoosier Poet' for his dialect verse about rural Indiana.",
  "Jane Austen": "English novelist (1775–1817), author of Pride and Prejudice. Her small body of verse is playful and wry.",
  "Jane Taylor": "English poet (1783–1824), best known for writing Twinkle, Twinkle, Little Star.",
  "John Clare": "English Romantic poet (1793–1864), known as the 'peasant poet'. Wrote vividly about rural life.",
  "John Donne": "English metaphysical poet (1572–1631) known for witty verse fusing intellect and passion.",
  "John Dryden": "English poet and playwright (1631–1700), first Poet Laureate of England.",
  "John Greenleaf Whittier": "American Quaker poet and abolitionist (1807–1892). Snowbound is a vivid pastoral elegy.",
  "John Keats": "English Romantic poet (1795–1821) who wrote his greatest works before dying of tuberculosis at 25.",
  "John McCrae": "Canadian poet and soldier (1872–1918) who wrote In Flanders Fields, one of the most famous WWI poems.",
  "John Milton": "English poet (1608–1674), author of Paradise Lost, one of the greatest epics in English.",
  "John Trumbull": "American satirical poet (1750–1831), known for M'Fingal, a comic epic of the American Revolution.",
  "John Wilmot": "2nd Earl of Rochester (1647–1680), English Restoration poet known for wickedly satirical verse.",
  "Jonathan Swift": "Irish satirist and poet (1667–1745), best known for Gulliver's Travels.",
  "Joseph Warton": "English critic and poet (1722–1800), an early champion of imagination over reason.",
  "Joyce Kilmer": "American poet (1886–1918) best known for the lyric Trees. Killed in action in WWI.",
  "Julia Ward Howe": "American poet and activist (1819–1910), best known for The Battle Hymn of the Republic.",
  "Jupiter Hammon": "African-American poet (1711–c.1806), the first published Black poet in America.",
  "Katherine Philips": "English poet (1632–1664), known as 'the Matchless Orinda'. Celebrated for poems on female friendship.",
  "Lady Mary Chudleigh": "English poet (1656–1710) known for To the Ladies, a feminist poem against oppressive marriage.",
  "Lewis Carroll": "English author and mathematician (1832–1898). Jabberwocky and The Walrus and the Carpenter are beloved nonsense verse.",
  "Lord Alfred Tennyson": "Poet Laureate of Victorian England (1809–1892). In Memoriam and The Charge of the Light Brigade are defining works.",
  "Louisa May Alcott": "American novelist and poet (1832–1888), best known for Little Women.",
  "Major Henry Livingston, Jr.": "American poet (1748–1828) sometimes credited as the original author of Twas the Night Before Christmas.",
  "Mark Twain": "American novelist and humorist (1835–1910), best known for Huckleberry Finn.",
  "Mary Elizabeth Coleridge": "English poet and novelist (1861–1907), great-grandniece of S. T. Coleridge.",
  "Matthew Arnold": "English Victorian poet and critic (1822–1888). Dover Beach is one of the finest poems about modern doubt.",
  "Matthew Prior": "English poet and diplomat (1664–1721), known for witty light verse in the Augustan tradition.",
  "Michael Drayton": "English Renaissance poet (1563–1631) known for his sonnet sequence Idea.",
  "Oliver Goldsmith": "Anglo-Irish writer and poet (1728–1774). The Deserted Village is a moving elegy for a displaced community.",
  "Oliver Wendell Holmes": "American poet and physician (1809–1894), known for witty occasional verse.",
  "Oscar Wilde": "Irish poet, playwright, and wit (1854–1900). The Ballad of Reading Gaol is his verse masterpiece.",
  "Paul Laurence Dunbar": "American poet (1872–1906), one of the first Black poets to gain national prominence.",
  "Percy Bysshe Shelley": "English Romantic poet (1792–1822) known for Ozymandias and Ode to the West Wind.",
  "Philip Freneau": "American poet and journalist (1752–1832), known as the 'Poet of the American Revolution'.",
  "Phillis Wheatley": "African-American poet (c.1753–1784), the first published African-American woman author.",
  "Ralph Waldo Emerson": "American Transcendentalist (1803–1882) who inspired Whitman and Thoreau.",
  "Richard Crashaw": "English metaphysical poet (1612–1649) known for extravagant Catholic devotional verse.",
  "Richard Lovelace": "English Cavalier poet (1617–1657). To Althea, from Prison is among the most quoted poems in English.",
  "Robert Browning": "Victorian English poet (1812–1889) who invented the dramatic monologue. My Last Duchess is a masterpiece.",
  "Robert Burns": "Scotland's national poet (1759–1796), known for Auld Lang Syne and A Red, Red Rose.",
  "Robert Frost": "American poet (1874–1963), four-time Pulitzer Prize winner. Known for The Road Not Taken.",
  "Robert Herrick": "English lyric poet and clergyman (1591–1674). Gather ye rosebuds is one of the greatest carpe diem poems.",
  "Robert Louis Stevenson": "Scottish novelist and poet (1850–1894), author of Treasure Island and A Child's Garden of Verses.",
  "Robert Southey": "English Romantic poet (1774–1843) and Poet Laureate.",
  "Robinson": "Likely Edwin Arlington Robinson (1869–1935), three-time Pulitzer Prize winner known for portraits of small-town life.",
  "Robinson Jeffers": "American poet (1887–1962) of the California coast. Known for stark, ecological verse.",
  "Rupert Brooke": "English WWI poet (1887–1915), famous for The Soldier. A symbol of idealistic sacrifice.",
  "Samuel Coleridge": "English Romantic poet (1772–1834), known for The Rime of the Ancient Mariner and Kubla Khan.",
  "Samuel Johnson": "English poet, critic, and lexicographer (1709–1784). His Dictionary defined English for a generation.",
  "Sarah Flower Adams": "English poet and hymn writer (1805–1848), best known for Nearer, My God, to Thee.",
  "Sidney Lanier": "American poet and musician (1842–1881) who explored the relationship between music and poetry.",
  "Sir John Suckling": "English Cavalier poet (1609–1641) known for witty, irreverent love poems.",
  "Sir Philip Sidney": "English Renaissance poet (1554–1586), author of the first great English sonnet sequence.",
  "Sir Thomas Wyatt": "English Renaissance poet (1503–1542) who introduced the Petrarchan sonnet to English poetry.",
  "Sir Walter Raleigh": "English explorer and poet (c.1554–1618), courtier of Elizabeth I.",
  "Sir Walter Scott": "Scottish novelist and poet (1771–1832), author of Ivanhoe.",
  "Stephen Crane": "American novelist and poet (1871–1900). His spare, ironic verse anticipates modernism.",
  "T. S. Eliot": "Anglo-American modernist poet and Nobel laureate (1888–1965). The Waste Land transformed modern poetry.",
  "Thomas Campbell": "Scottish poet (1777–1844), known for patriotic and narrative poems.",
  "Thomas Chatterton": "English poet (1752–1770) who died by suicide at 17. A Romantic martyr figure.",
  "Thomas Flatman": "English poet and miniature painter (1637–1688), known for elegiac verse.",
  "Thomas Gray": "English poet (1716–1771), best known for Elegy Written in a Country Churchyard.",
  "Thomas Hood": "English poet and humorist (1799–1845), known for comic verse and social protest.",
  "Thomas Moore": "Irish poet (1779–1852) and songwriter, best known for The Minstrel Boy.",
  "Thomas Warton": "English poet and critic (1728–1790), the first Professor of Poetry at Oxford.",
  "W. H. Auden": "Anglo-American poet (1907–1973) known for intellectual range and technical mastery.",
  "Walt Whitman": "American poet (1819–1892) whose free-verse Leaves of Grass revolutionised poetry.",
  "Walter Savage Landor": "English poet and writer (1775–1864), admired by Dickens and Browning.",
  "Wilfred Owen": "English WWI poet (1893–1918), killed one week before Armistice. Dulce et Decorum Est is the defining anti-war poem.",
  "William Allingham": "Irish poet (1824–1889), known for Up the Airy Mountain.",
  "William Barnes": "English poet and philologist (1801–1886) who wrote in the Dorset dialect.",
  "William Blake": "English poet and printmaker (1757–1827). A visionary mystic and fierce critic of industrial society.",
  "William Browne": "English pastoral poet (1590–c.1645) known for Britannia's Pastorals.",
  "William Cowper": "English poet (1731–1800) known for The Task and the hymn God Moves in a Mysterious Way.",
  "William Cullen Bryant": "American Romantic poet (1794–1878), best known for Thanatopsis.",
  "William Ernest Henley": "English Victorian poet (1849–1903), best known for Invictus.",
  "William Lisle Bowles": "English poet (1762–1850) whose sonnets influenced Coleridge and Southey.",
  "William Morris": "English Victorian designer and poet (1834–1896). Central to the Arts and Crafts movement.",
  "William Shakespeare": "English playwright and poet (1564–1616). His 154 sonnets explore love, time, and beauty.",
  "William Topaz McGonagall": "Scottish poet (1825–1902), often cited as the worst poet in English literary history.",
  "William Vaughn Moody": "American poet and playwright (1869–1910) known for verse questioning American imperialism.",
  "William Wordsworth": "English Romantic poet (1770–1850), co-author of Lyrical Ballads. Celebrated nature and rural life.",
  "William Butler Yeats": "Irish poet and Nobel laureate (1865–1939). Known for The Second Coming and The Lake Isle of Innisfree.",
  "Rudyard Kipling": "English author born in India (1865–1936), known for If—. First English Nobel Prize winner (1907).",
  "A. E. Housman": "English classical scholar and poet (1859–1936). A Shropshire Lad mourns youth and rural England.",
  "Archibald MacLeish": "American poet (1892–1982) who wrote Ars Poetica. Three-time Pulitzer Prize winner.",
  "Carl Sandburg": "American poet (1878–1967) known for Chicago. Three Pulitzer Prizes.",
  "Edna St. Vincent Millay": "American poet (1892–1950), first woman to win the Pulitzer Prize for Poetry (1923).",
  "Ezra Pound": "American modernist poet (1885–1972) who championed imagism. Author of the monumental Cantos.",
  "Wallace Stevens": "American modernist poet (1879–1955) and insurance executive. Explores imagination and beauty.",
  "William Carlos Williams": "American poet (1883–1963) known for 'no ideas but in things'. Wrote The Red Wheelbarrow.",
  "Dylan Thomas": "Welsh poet (1914–1953) known for Do Not Go Gentle into That Good Night and Fern Hill.",
  "Philip Larkin": "English poet and librarian (1922–1985). Known for wry, melancholic verse about modern life.",
  "Theodore Roethke": "American poet (1908–1963) and Pulitzer Prize winner. Known for The Waking and My Papa's Waltz.",
};

// ── TILE THEMES ──
const THEMES = {
  bw: { label: "B&W", getTileStyle: () => ({ className: Math.random() < 0.18 ? 'tile inv' : 'tile', style: {} }) },
  kitschy: {
    label: "Kitschy",
    colors: [
      {bg:'#e8433a',color:'#fff'},{bg:'#2d6be4',color:'#fff'},{bg:'#f5c518',color:'#111'},
      {bg:'#2ab573',color:'#fff'},{bg:'#f07d2a',color:'#fff'},{bg:'#e84393',color:'#fff'},
      {bg:'#7c4de8',color:'#fff'},{bg:'#1ab5b5',color:'#fff'},{bg:'#fff',color:'#111'},
    ],
    getTileStyle: function() {
      const c = this.colors[Math.floor(Math.random()*this.colors.length)];
      return { className:'tile', style:{background:c.bg,color:c.color,borderColor:'rgba(0,0,0,0.15)',boxShadow:'1.5px 1.5px 0 rgba(0,0,0,0.2)'} };
    }
  },
  pastel: {
    label: "Pastel",
    colors: [
      {bg:'#ffd6d6',color:'#7a3333'},{bg:'#d6e8ff',color:'#2a4a7a'},{bg:'#fff4cc',color:'#7a6000'},
      {bg:'#d6f5e3',color:'#1a5c38'},{bg:'#f5d6f5',color:'#5c1a7a'},{bg:'#ffe8d6',color:'#7a3a00'},
      {bg:'#d6f0f5',color:'#0a4a5c'},{bg:'#f5f5d6',color:'#4a4a00'},
    ],
    getTileStyle: function() {
      const c = this.colors[Math.floor(Math.random()*this.colors.length)];
      return { className:'tile', style:{background:c.bg,color:c.color,borderColor:c.color+'55',boxShadow:`1.5px 1.5px 0 ${c.color}33`} };
    }
  },
  dark: {
    label: "Dark",
    colors: [
      {bg:'#1a1a2e',color:'#e0e0ff'},{bg:'#2d1b1b',color:'#ffd0d0'},{bg:'#1b2d1b',color:'#d0ffd0'},
      {bg:'#2d2d1b',color:'#ffffd0'},{bg:'#2d1b2d',color:'#ffd0ff'},{bg:'#111',color:'#e0c97f'},
      {bg:'#1b1b2d',color:'#c0c0ff'},
    ],
    getTileStyle: function() {
      const c = this.colors[Math.floor(Math.random()*this.colors.length)];
      return { className:'tile', style:{background:c.bg,color:c.color,borderColor:c.color+'44',boxShadow:`1.5px 1.5px 0 ${c.color}33`} };
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
let sessionPoems = []; // { title, author }

// ── CANVAS STATE ──
let canvasX = 0, canvasY = 0;
let isPanning = false;
let panStartX = 0, panStartY = 0;
let canvasStartX = 0, canvasStartY = 0;

// ── TILE DRAG STATE ──
let draggingTile = null;
let dragOX = 0, dragOY = 0;

// ── TOOLTIP ──
let tooltipEl = null;

// ── INIT ──
async function init() {
  initThemePicker();
  setupCanvas();

  try {
    const res = await fetch('https://poetrydb.org/author');
    const data = await res.json();
    allAuthors = (data.authors || []).sort((a, b) => a.split(' ').pop().localeCompare(b.split(' ').pop()));
    renderSidebar();
  } catch (e) {
    document.getElementById('poetList').innerHTML = '<div class="loading-poets" style="color:#c00">Could not reach PoetryDB.</div>';
  }
}

// ── CANVAS SETUP ──
function setupCanvas() {
  const fridge = document.getElementById('fridge');
  const canvas = document.getElementById('fridgeCanvas');

  // Two-finger / trackpad pan
  fridge.addEventListener('wheel', (e) => {
    // Only pan if it's a trackpad (deltaMode === 0 and not zooming)
    if (e.ctrlKey) return; // let browser handle pinch-zoom
    e.preventDefault();
    canvasX -= e.deltaX;
    canvasY -= e.deltaY;
    updateCanvasTransform();
  }, { passive: false });

  // Middle-mouse or space+drag pan
  fridge.addEventListener('mousedown', (e) => {
    if (e.button === 1 || e.target === fridge || e.target === canvas) {
      // Only pan if clicking empty canvas area
      if (e.target === fridge || e.target === canvas) {
        isPanning = true;
        panStartX = e.clientX;
        panStartY = e.clientY;
        canvasStartX = canvasX;
        canvasStartY = canvasY;
        fridge.style.cursor = 'grabbing';
        e.preventDefault();
      }
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (!isPanning) return;
    canvasX = canvasStartX + (e.clientX - panStartX);
    canvasY = canvasStartY + (e.clientY - panStartY);
    updateCanvasTransform();
  });

  document.addEventListener('mouseup', (e) => {
    if (isPanning) {
      isPanning = false;
      fridge.style.cursor = '';
    }
  });
}

function updateCanvasTransform() {
  document.getElementById('fridgeCanvas').style.transform = `translate(${canvasX}px, ${canvasY}px)`;
}

// ── STANDALONE HEADER ACTIONS (called from HTML) ──
function showAddWord() {
  const word = prompt('Add a word to the fridge:');
  if (word && word.trim()) addCustomTile(word.trim());
}

function resetView() {
  canvasX = 0; canvasY = 0;
  updateCanvasTransform();
}

// ── THEME PICKER (populate the #themePicker div already in HTML) ──
function initThemePicker() {
  const picker = document.getElementById('themePicker');
  if (!picker) return;
  Object.entries(THEMES).forEach(([key, theme]) => {
    const btn = document.createElement('button');
    btn.className = 'theme-btn' + (key === currentTheme ? ' active' : '');
    btn.textContent = theme.label;
    btn.dataset.theme = key;
    btn.onclick = () => setTheme(key);
    picker.appendChild(btn);
  });
}

function setTheme(key) {
  currentTheme = key;
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === key));
  document.body.dataset.theme = key;
}

// ── POET OF THE DAY ──
async function showPoetOfTheDay() {
  if (!allAuthors.length) return;
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const name = allAuthors[seed % allAuthors.length];
  activePoet = name;
  renderSidebar();
  if (!poetsData[name]) await loadPoetPoems(name);
  if (poetsData[name]?.length > 0) {
    showPoem(name, seed % poetsData[name].length);
  }
}

// ── ERA ──
function getEra(name) {
  for (const [era, poets] of Object.entries(ERAS)) {
    if (poets.includes(name)) return era;
  }
  return 'Other';
}

// ── SIDEBAR ──
function renderSidebar() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const list = document.getElementById('poetList');
  list.innerHTML = '';

  const filtered = allAuthors.filter(n => !q || n.toLowerCase().includes(q));
  if (!filtered.length) { list.innerHTML = '<div class="loading-poets">no poets found</div>'; return; }

  if (q) {
    filtered.forEach(n => renderPoetEntry(list, n));
  } else {
    const grouped = {};
    filtered.forEach(n => { const e = getEra(n); if (!grouped[e]) grouped[e] = []; grouped[e].push(n); });
    [...Object.keys(ERAS), 'Other'].forEach(era => {
      if (!grouped[era]?.length) return;
      const h = document.createElement('div');
      h.className = 'era-heading';
      h.textContent = era;
      list.appendChild(h);
      grouped[era].forEach(n => renderPoetEntry(list, n));
    });
  }
}

function renderPoetEntry(list, name) {
  const wrap = document.createElement('div');
  const pb = document.createElement('button');
  pb.className = 'poet-btn' + (activePoet === name ? ' active' : '');

  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;
  pb.appendChild(nameSpan);

  if (BIOS[name]) {
    const dot = document.createElement('span');
    dot.className = 'bio-dot';
    dot.textContent = 'i';
    dot.onclick = e => { e.stopPropagation(); showTooltip(e, BIOS[name]); };
    pb.appendChild(dot);
  }

  const chev = document.createElement('span');
  chev.className = 'chevron';
  chev.innerHTML = activePoet === name ? '&#9650;' : '&#9660;';
  pb.appendChild(chev);
  pb.onclick = () => togglePoet(name);

  const pe = document.createElement('div');
  pe.className = 'poem-entries' + (activePoet === name ? ' open' : '');
  pe.id = 'poems-' + name.replace(/[\s,\.]/g, '-');
  if (activePoet === name && poetsData[name]) renderPoemList(pe, name);

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
function hideTooltip() { if (tooltipEl) { tooltipEl.remove(); tooltipEl = null; } }

// ── TOGGLE / LOAD ──
async function togglePoet(name) {
  if (activePoet === name) { activePoet = null; renderSidebar(); return; }
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
    poetsData[name] = Array.isArray(data) && data.length ? data.sort((a,b) => a.title.localeCompare(b.title)) : [];
  } catch(e) { poetsData[name] = []; }
  const pe2 = document.getElementById(peId);
  if (pe2) renderPoemList(pe2, name);
}

function renderPoemList(container, name) {
  container.innerHTML = '';
  const poems = poetsData[name];
  if (!poems?.length) {
    container.innerHTML = '<div style="padding:8px 14px 8px 24px;font-family:var(--tile-font);font-size:12px;color:var(--mid)">no poems found</div>';
    return;
  }
  poems.forEach((poem, pmi) => {
    const btn = document.createElement('button');
    btn.className = 'poem-btn' + (activePoet === name && activePoem === pmi ? ' active' : '');
    btn.textContent = poem.title;
    btn.title = poem.title;
    btn.onclick = e => { e.stopPropagation(); showPoem(name, pmi); };
    container.appendChild(btn);
  });
}

// ── SHOW POEM ──
function showPoem(name, pmi) {
  activePoem = pmi;
  document.querySelectorAll('.poem-btn').forEach((b, i) => b.classList.toggle('active', i === pmi));
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
      const br = document.createElement('div'); br.className = 'stanza-break'; container.appendChild(br);
    } else {
      const p = document.createElement('p'); p.textContent = line; container.appendChild(p);
    }
  });
  document.getElementById('reader').scrollTop = 0;
}

// ── SESSION TRACKER ──
function addToSession(title, author) {
  if (sessionPoems.find(p => p.title === title && p.author === author)) return;
  sessionPoems.push({ title, author });
  renderSessionTracker();
  // Show tracker if collapsed
  const panel = document.getElementById('sessionPanel');
  if (panel.classList.contains('collapsed')) toggleSessionPanel();
}

function renderSessionTracker() {
  const list = document.getElementById('sessionList');
  list.innerHTML = '';
  if (!sessionPoems.length) {
    list.innerHTML = '<div class="session-empty">no poems yet</div>';
    return;
  }
  sessionPoems.forEach(p => {
    const item = document.createElement('div');
    item.className = 'session-item';
    item.innerHTML = `<span class="session-title">${p.title}</span><span class="session-author">${p.author}</span>`;
    list.appendChild(item);
  });
  document.getElementById('sessionCount').textContent = sessionPoems.length;
}

function toggleSessionPanel() {
  const panel = document.getElementById('sessionPanel');
  panel.classList.toggle('collapsed');
  document.getElementById('sessionToggleIcon').textContent = panel.classList.contains('collapsed') ? '+' : '−';
}

// ── FRIDGE ──
const STOPWORDS = new Set('the a an and or but in on at to for of with is it its that this as by from was are be been have has had not they their them he she we you i me my his her our your into than then when if up out so do did no nor yet all each more most other such what which who whom how about above after again against along already also always among any away back because before between can come could down during ever every few first get give go good great here him just know like little long look make many may might much must never now old once only over own part place put say see seem should since some still take those though through time too under until upon us very want way well were while will without would'.split(' '));

function extractWords(lines) {
  const text = lines.join(' ').toLowerCase();
  const words = text.replace(/[^a-z\s'-]/g,' ').split(/\s+/)
    .map(w => w.replace(/^[-']+|[-']+$/g,''))
    .filter(w => w.length > 2 && !STOPWORDS.has(w) && /^[a-z]/.test(w));
  const unique = [...new Set(words)];
  for (let i = unique.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [unique[i],unique[j]] = [unique[j],unique[i]];
  }
  return unique.slice(0, 40);
}

function makeTile(word) {
  const { className, style } = THEMES[currentTheme].getTileStyle();
  const canvas = document.getElementById('fridgeCanvas');
  const fridge = document.getElementById('fridge');

  const tile = document.createElement('div');
  tile.className = className;
  tile.textContent = word;
  Object.assign(tile.style, style);

  // Place randomly within the current viewport, accounting for canvas offset
  const viewW = fridge.offsetWidth;
  const viewH = fridge.offsetHeight;
  tile.style.transform = `rotate(${(Math.random()-0.5)*5}deg)`;
  tile.style.left = (12 - canvasX + Math.random() * Math.max(0, viewW - 130)) + 'px';
  tile.style.top  = (12 - canvasY + Math.random() * Math.max(0, viewH - 36)) + 'px';

  tile.addEventListener('mousedown', tileDown);
  tile.addEventListener('touchstart', tileTouchDown, { passive: false });
  return tile;
}

function throwOnFridge() {
  if (!currentLines.length) return;
  const canvas = document.getElementById('fridgeCanvas');
  document.getElementById('fridgeMsg').style.display = 'none';
  extractWords(currentLines).forEach(word => canvas.appendChild(makeTile(word)));

  // Track in session
  const title = document.getElementById('displayTitle').textContent;
  const author = document.getElementById('displayAuthor').textContent;
  if (title && author) addToSession(title, author);
}

function addCustomTile(word) {
  document.getElementById('fridgeMsg').style.display = 'none';
  document.getElementById('fridgeCanvas').appendChild(makeTile(word));
}

function clearFridge() {
  document.getElementById('fridgeCanvas').querySelectorAll('.tile').forEach(t => t.remove());
  document.getElementById('fridgeMsg').style.display = '';
  sessionPoems = [];
  renderSessionTracker();
  canvasX = 0; canvasY = 0;
  updateCanvasTransform();
}

// ── TILE DRAG ──
function tileDown(e) {
  e.preventDefault(); e.stopPropagation();
  draggingTile = e.currentTarget;
  draggingTile.classList.add('dragging');
  draggingTile.style.zIndex = 50;
  const r = draggingTile.getBoundingClientRect();
  dragOX = e.clientX - r.left;
  dragOY = e.clientY - r.top;
  document.addEventListener('mousemove', tileMove);
  document.addEventListener('mouseup', tileUp);
}

function tileMove(e) { if (draggingTile) moveTile(e.clientX, e.clientY); }

function tileUp() {
  if (!draggingTile) return;
  draggingTile.classList.remove('dragging');
  draggingTile.style.zIndex = '';
  draggingTile = null;
  document.removeEventListener('mousemove', tileMove);
  document.removeEventListener('mouseup', tileUp);
}

function tileTouchDown(e) {
  e.preventDefault(); e.stopPropagation();
  draggingTile = e.currentTarget;
  draggingTile.classList.add('dragging');
  const t = e.touches[0], r = draggingTile.getBoundingClientRect();
  dragOX = t.clientX - r.left;
  dragOY = t.clientY - r.top;
  document.addEventListener('touchmove', tileTouchMove, { passive: false });
  document.addEventListener('touchend', tileTouchUp);
}

function tileTouchMove(e) { e.preventDefault(); if (draggingTile) { const t = e.touches[0]; moveTile(t.clientX, t.clientY); } }

function tileTouchUp() {
  if (!draggingTile) return;
  draggingTile.classList.remove('dragging');
  draggingTile = null;
  document.removeEventListener('touchmove', tileTouchMove);
  document.removeEventListener('touchend', tileTouchUp);
}

function moveTile(cx, cy) {
  // Position in canvas space (accounting for canvas offset)
  const fridge = document.getElementById('fridge');
  const fr = fridge.getBoundingClientRect();
  const x = cx - fr.left - dragOX - canvasX;
  const y = cy - fr.top  - dragOY - canvasY;
  draggingTile.style.left = x + 'px';
  draggingTile.style.top  = y + 'px';
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
  reader.style.height = Math.max(80, Math.min(resH+(e.clientY-resY), main.offsetHeight-handle.offsetHeight-80))+'px';
});
document.addEventListener('mouseup', () => {
  if (!resizing) return;
  resizing = false; document.body.style.cursor=''; document.body.style.userSelect='';
});

init();
renderSessionTracker();
