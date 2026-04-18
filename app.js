// ── ERA GROUPINGS (covers all 128 PoetryDB poets) ──
const ERAS = {
  "Ancient & Classical": [],
  "Medieval & Renaissance (pre-1600)": [
    "Geoffrey Chaucer", "Sir Thomas Wyatt", "Sir Philip Sidney", "Edmund Spenser",
    "Christopher Marlowe", "Michael Drayton", "William Shakespeare", "Sir Walter Raleigh",
    "William Browne",
  ],
  "17th Century": [
    "John Donne", "Ben Jonson", "George Herbert", "Richard Lovelace", "John Milton",
    "Andrew Marvell", "Henry Vaughan", "Richard Crashaw", "Sir John Suckling",
    "Katherine Philips", "Anne Killigrew", "John Wilmot", "Thomas Flatman",
    "Anne Kingsmill Finch", "Lady Mary Chudleigh", "Edward Taylor",
    "Christopher Smart", "John Dryden", "Matthew Prior", "Jonathan Swift",
    "Isaac Watts", "Anne Bradstreet",
  ],
  "18th Century": [
    "Alexander Pope", "Thomas Gray", "Oliver Goldsmith", "Samuel Johnson",
    "William Cowper", "Philip Freneau", "Hugh Henry Brackenridge", "John Trumbull",
    "Joseph Warton", "Thomas Warton", "William Lisle Bowles", "Thomas Chatterton",
    "Charlotte Smith", "Jupiter Hammon", "Phillis Wheatley", "Major Henry Livingston, Jr.",
    "Robert Burns", "William Blake", "Walter Savage Landor", "Thomas Campbell",
    "James Thomson", "Christopher Smart", "Matthew Prior",
  ],
  "Romantic (1800–1850)": [
    "William Wordsworth", "Samuel Coleridge", "George Gordon, Lord Byron",
    "Percy Bysshe Shelley", "John Keats", "Robert Southey", "Thomas Moore",
    "James Henry Leigh Hunt", "Thomas Hood", "George Meredith", "William Allingham",
    "Eliza Cook", "Sarah Flower Adams", "Letitia Elizabeth Landon",
    "Henry David Thoreau", "Ralph Waldo Emerson", "Henry Wadsworth Longfellow",
    "Edgar Allan Poe", "William Cullen Bryant", "John Greenleaf Whittier",
    "Oliver Wendell Holmes", "Edward Fitzgerald", "Walter Savage Landor",
    "Philip Freneau",
  ],
  "Victorian (1850–1900)": [
    "Alfred Lord Tennyson", "Robert Browning", "Elizabeth Barrett Browning",
    "Emily Bronte", "Charlotte Bronte", "Anne Bronte", "Christina Rossetti",
    "George Eliot", "Matthew Arnold", "Coventry Patmore", "Gerard Manley Hopkins",
    "Algernon Charles Swinburne", "William Morris", "James Thomson",
    "William Ernest Henley", "Robert Louis Stevenson", "Oscar Wilde",
    "Thomas Hardy", "A. E. Housman", "William Barnes", "Charles Kingsley",
    "Sidney Lanier", "Helen Hunt Jackson", "Emma Lazarus", "Paul Laurence Dunbar",
    "James Whitcomb Riley", "Eugene Field", "Ernest Dowson", "Francis Thompson",
    "Mary Elizabeth Coleridge", "Amy Levy", "Jane Austen", "Ann Taylor",
    "Jane Taylor", "John Clare", "Mark Twain", "Adam Lindsay Gordon",
    "Arthur Hugh Clough", "William Topaz McGonagall", "Annie Louisa Walker",
    "Louisa May Alcott", "Julia Ward Howe", "John Dryden", "Edward Lear",
    "Ambrose Bierce", "Charlotte Smith",
  ],
  "Early 20th Century (1900–1945)": [
    "William Butler Yeats", "Rudyard Kipling", "William Vaughn Moody",
    "Stephen Crane", "Alan Seeger", "Edward Thomas", "Rupert Brooke",
    "Wilfred Owen", "John McCrae", "Charles Sorley", "Joyce Kilmer",
    "Robert Frost", "Carl Sandburg", "Edgar Lee Masters", "Edna St. Vincent Millay",
    "E. E. Cummings", "T. S. Eliot", "Ezra Pound", "William Carlos Williams",
    "Wallace Stevens", "Robinson", "Amy Lowell", "Sara Teasdale",
    "Archibald MacLeish", "Langston Hughes", "Claude McKay", "Lewis Carroll",
    "Philip Larkin", "W. H. Auden", "Samuel Johnson",
  ],
  "Mid–Late 20th Century": [
    "W. H. Auden", "Dylan Thomas", "Theodore Roethke", "Philip Larkin",
    "Robinson Jeffers", "Countee Cullen", "Anne Sexton", "Sylvia Plath",
    "Denise Levertov", "Allen Ginsberg", "Frank O'Hara", "Robert Lowell",
    "Gwendolyn Brooks", "Seamus Heaney", "Mary Oliver", "Sharon Olds",
  ],
};

// ── BIOS (all 128 PoetryDB poets) ──
const BIOS = {
  "Adam Lindsay Gordon": "Australian poet (1833–1870) known for vigorous verse about horses, riding, and bush life. A cult figure in Australian literary culture.",
  "Alan Seeger": "American poet (1888–1916) who died in WWI. Best known for I Have a Rendezvous with Death, written in the trenches.",
  "Alexander Pope": "English poet (1688–1744) and master of the heroic couplet. The Rape of the Lock and An Essay on Man defined 18th-century wit and reason.",
  "Algernon Charles Swinburne": "English Victorian poet (1837–1909) known for musical, sensuous verse and classical themes. A controversial figure for his atheism and hedonism.",
  "Ambrose Bierce": "American satirist and writer (1842–c.1914), best known for The Devil's Dictionary. His poetry is sardonic and often darkly comic.",
  "Amy Levy": "English Jewish poet and novelist (1861–1889). An early feminist voice, she wrote A London Plane-Tree before dying by suicide at 27.",
  "Andrew Marvell": "English metaphysical poet (1621–1678). To His Coy Mistress is among the finest seduction poems in English literature.",
  "Ann Taylor": "English poet (1782–1866) who co-wrote Original Poems for Infant Minds with her sister Jane. Best known for the nursery rhyme Twinkle, Twinkle, Little Star.",
  "Anne Bradstreet": "First published poet in the American colonies (1612–1672). Wrote rich verse about faith, family, and domestic life as a Puritan woman.",
  "Anne Bronte": "English novelist and poet (1820–1849), youngest of the Bronte sisters. Her poetry is quietly moving, rooted in faith and personal grief.",
  "Anne Killigrew": "English poet and painter (1660–1685), celebrated after her early death by Dryden's famous ode. Her verse shows remarkable poise and learning.",
  "Anne Kingsmill Finch": "English Restoration poet (1661–1720), one of the first women to write seriously about nature. Wordsworth admired her Nocturnal Reverie.",
  "Annie Louisa Walker": "19th-century English poet known for popular verse in Victorian periodicals. Her work is warm, domestic, and accessible.",
  "Arthur Hugh Clough": "English Victorian poet (1819–1861) known for sceptical, ironic verse and the mock-heroic Amours de Voyage.",
  "Ben Jonson": "English Renaissance playwright and poet (1572–1637). Shakespeare's great contemporary, known for sharp epigrams and the lyric To Celia.",
  "Charles Kingsley": "English Victorian novelist and poet (1819–1875), author of The Water-Babies. His poetry often reflects social concern and Christian idealism.",
  "Charles Sorley": "Scottish WWI poet (1895–1915), killed at 20. His posthumous Marlborough and Other Poems showed remarkable promise.",
  "Charlotte Bronte": "English novelist and poet (1816–1855), author of Jane Eyre. Her poetry is passionate and often autobiographical.",
  "Charlotte Smith": "English poet and novelist (1749–1806). Her Elegiac Sonnets (1784) helped revive the sonnet form and influenced the Romantics.",
  "Christina Rossetti": "Victorian English poet (1830–1894) known for devotional and lyric verse. Goblin Market is a richly allegorical masterpiece.",
  "Christopher Marlowe": "English Renaissance dramatist and poet (1564–1593). Doctor Faustus and the lyric The Passionate Shepherd to His Love cemented his legend.",
  "Christopher Smart": "English poet (1722–1771) known for Jubilate Agno, a visionary poem written during his confinement in an asylum.",
  "Coventry Patmore": "Victorian English poet (1823–1896) known for The Angel in the House, a controversial idealisation of domestic womanhood.",
  "Edgar Allan Poe": "American poet and master of gothic fiction (1809–1849). Known for The Raven and Annabel Lee, poems of grief, beauty, and obsession.",
  "Edmund Spenser": "English Renaissance poet (1552–1599), author of The Faerie Queene. Invented the Spenserian stanza and deeply influenced Milton and Keats.",
  "Edward Fitzgerald": "English poet and translator (1809–1883) best known for his free translation of The Rubaiyat of Omar Khayyam.",
  "Edward Lear": "English artist and poet (1812–1888), master of the nonsense limerick. The Owl and the Pussycat is among the most beloved comic poems.",
  "Edward Taylor": "American colonial poet and minister (1642–1729) whose elaborate metaphysical verse was unpublished until the 20th century.",
  "Edward Thomas": "English poet (1878–1917) killed in WWI. His short career produced some of the finest nature poetry in English, including Adlestrop.",
  "Eliza Cook": "English Victorian poet (1818–1889) widely read in her day, known for accessible and sentimental verse on everyday themes.",
  "Elizabeth Barrett Browning": "Victorian English poet (1806–1861). Sonnets from the Portuguese, including How Do I Love Thee, are among the most celebrated love poems in English.",
  "Emily Bronte": "English novelist and poet (1818–1848), author of Wuthering Heights. Her poems are marked by passion, mysticism, and a fierce inner life.",
  "Emily Dickinson": "Reclusive American poet (1830–1886) who wrote nearly 1,800 poems, most published posthumously. Known for slant rhyme, compressed metaphysics, and dashes.",
  "Emma Lazarus": "American poet (1849–1887) whose sonnet The New Colossus is inscribed on the Statue of Liberty. A passionate advocate for Jewish refugees.",
  "Ernest Dowson": "English Decadent poet (1867–1900) known for the lyric Non Sum Qualis Eram, from which the phrase gone with the wind derives.",
  "Eugene Field": "American poet (1850–1895) known for his children's poetry, especially Wynken, Blynken, and Nod.",
  "Francis Thompson": "English poet (1859–1907) known for the visionary religious ode The Hound of Heaven, tracking God's pursuit of the human soul.",
  "Geoffrey Chaucer": "English poet (c.1343–1400), the 'Father of English Literature'. The Canterbury Tales is a defining work of medieval European literature.",
  "George Eliot": "English novelist (1819–1880), pen name of Mary Ann Evans. Best known for Middlemarch, she also wrote lyrical and reflective poetry.",
  "George Gordon, Lord Byron": "Flamboyant English Romantic poet (1788–1824). Known for Don Juan and She Walks in Beauty; his life was as legendary as his verse.",
  "George Herbert": "English metaphysical poet and clergyman (1593–1633). The Temple is a collection of devotional lyrics of extraordinary ingenuity and tenderness.",
  "George Meredith": "English Victorian novelist and poet (1828–1909). His sonnet sequence Modern Love (1862) is a frank portrait of a failing marriage.",
  "Gerard Manley Hopkins": "English Jesuit priest and poet (1844–1889). Invented sprung rhythm and wrote densely musical verse published only after his death.",
  "Helen Hunt Jackson": "American poet and activist (1830–1885) known for her advocacy for Native American rights and her novel Ramona.",
  "Henry David Thoreau": "American Transcendentalist writer (1817–1862), best known for Walden. His poetry reflects the same love of nature and solitude.",
  "Henry Vaughan": "Welsh metaphysical poet (1621–1695). The Retreat and They Are All Gone into the World of Light show a visionary mysticism.",
  "Henry Wadsworth Longfellow": "The most popular American poet of the 19th century (1807–1882). The Song of Hiawatha and Paul Revere's Ride are enduring works.",
  "Hugh Henry Brackenridge": "American writer and jurist (1748–1816), a leading figure of the early American republic. Better known for prose than poetry.",
  "Isaac Watts": "English minister and hymn writer (1674–1748). O God, Our Help in Ages Past is among the most famous hymns in the English language.",
  "James Henry Leigh Hunt": "English Romantic poet and journalist (1784–1859), friend of Keats and Shelley. Known for the poem Abou Ben Adhem.",
  "James Thomson": "Scottish poet (1700–1748) whose The Seasons was one of the most widely read poems of the 18th century.",
  "James Whitcomb Riley": "American poet (1849–1916) known as the 'Hoosier Poet'. His dialect verse about rural Indiana life made him wildly popular in his day.",
  "Jane Austen": "English novelist (1775–1817), author of Pride and Prejudice. Her small body of verse is playful and wry, much like her letters.",
  "Jane Taylor": "English poet (1783–1824), best known for writing the original poem that became Twinkle, Twinkle, Little Star.",
  "John Clare": "English Romantic poet (1793–1864), known as the 'peasant poet'. Wrote vividly about rural life before mental illness ended his productive years.",
  "John Donne": "English metaphysical poet (1572–1631) known for witty, complex verse fusing intellect and passion. Wrote both erotic love poems and devout religious works.",
  "John Dryden": "English poet and playwright (1631–1700), first Poet Laureate of England. Defined Restoration literary taste with satire and heroic drama.",
  "John Greenleaf Whittier": "American Quaker poet and abolitionist (1807–1892). Snowbound (1866) is a vivid pastoral elegy for a lost rural world.",
  "John Keats": "English Romantic poet (1795–1821) who wrote his greatest works in a single year before dying of tuberculosis at 25. Known for sensuous odes and beauty.",
  "John McCrae": "Canadian poet and soldier (1872–1918) who wrote In Flanders Fields (1915), one of the most famous poems of WWI.",
  "John Milton": "English poet (1608–1674), author of Paradise Lost, one of the greatest epic poems in the English language. Also wrote the elegy Lycidas.",
  "John Trumbull": "American satirical poet (1750–1831), known for M'Fingal, a comic epic mocking Toryism during the American Revolution.",
  "John Wilmot": "2nd Earl of Rochester (1647–1680), English Restoration poet known for wickedly satirical and erotic verse at the court of Charles II.",
  "Jonathan Swift": "Irish satirist and poet (1667–1745), best known for Gulliver's Travels. His verse is biting, comic, and often scatological.",
  "Joseph Warton": "English critic and poet (1722–1800), an early champion of imagination in poetry over reason, anticipating the Romantic movement.",
  "Joyce Kilmer": "American poet (1886–1918) best known for the lyric Trees. Killed in action in WWI at the age of 31.",
  "Julia Ward Howe": "American poet and activist (1819–1910), best known for The Battle Hymn of the Republic. A leading suffragist and abolitionist.",
  "Jupiter Hammon": "African-American poet (1711–c.1806), the first published Black poet in America. His verse fused Evangelical Christianity with appeals for freedom.",
  "Katherine Philips": "English poet (1632–1664), known as 'the Matchless Orinda'. Her poems about female friendship were celebrated in her lifetime.",
  "Lady Mary Chudleigh": "English poet (1656–1710) known for To the Ladies (1703), a feminist poem arguing against the oppressive nature of marriage.",
  "Lewis Carroll": "English author and mathematician (1832–1898). Jabberwocky and The Walrus and the Carpenter are beloved nonsense verse of Victorian literature.",
  "Lord Alfred Tennyson": "Poet Laureate of Victorian England (1809–1892). In Memoriam A.H.H. and The Charge of the Light Brigade are defining works.",
  "Louisa May Alcott": "American novelist and poet (1832–1888), best known for Little Women. Her poetry is warm, domestic, and morally earnest.",
  "Major Henry Livingston, Jr.": "American poet (1748–1828) sometimes credited as the original author of A Visit from St. Nicholas (Twas the Night Before Christmas).",
  "Mark Twain": "American novelist and humorist (1835–1910), best known for Huckleberry Finn. His poems are satirical and often mock sentimental verse.",
  "Mary Elizabeth Coleridge": "English poet and novelist (1861–1907), great-grandniece of S. T. Coleridge. Her verse is strange, compressed, and quietly feminist.",
  "Matthew Arnold": "English Victorian poet and critic (1822–1888). Dover Beach is one of the most famous poems about modern doubt and loss of faith.",
  "Matthew Prior": "English poet and diplomat (1664–1721), known for witty light verse and elegant epigrams in the Restoration and Augustan traditions.",
  "Michael Drayton": "English Renaissance poet (1563–1631) known for his sonnet sequence Idea and the historical poem Poly-Olbion.",
  "Oliver Goldsmith": "Anglo-Irish writer and poet (1728–1774). The Deserted Village (1770) is a moving elegy for a displaced rural community.",
  "Oliver Wendell Holmes": "American poet and physician (1809–1894), known for witty occasional verse and the poem Old Ironsides.",
  "Oscar Wilde": "Irish poet, playwright, and wit (1854–1900). The Ballad of Reading Gaol is his masterpiece in verse, written after his imprisonment.",
  "Paul Laurence Dunbar": "American poet (1872–1906), one of the first Black poets to gain national prominence. Known for dialect verse and poems of racial identity.",
  "Percy Bysshe Shelley": "English Romantic poet (1792–1822) known for Ode to the West Wind and Ozymandias. A radical idealist who drowned at 29.",
  "Philip Freneau": "American poet and journalist (1752–1832), known as the 'Poet of the American Revolution'. His verse championed liberty and democracy.",
  "Phillis Wheatley": "African-American poet (c.1753–1784), the first published African-American woman author. Her Poems on Various Subjects appeared in 1773.",
  "Ralph Waldo Emerson": "American Transcendentalist essayist and poet (1803–1882) who inspired Whitman and Thoreau. Celebrated nature, self-reliance, and the divine in everyday life.",
  "Richard Crashaw": "English metaphysical poet (1612–1649) known for extravagant Catholic devotional verse full of baroque imagery.",
  "Richard Lovelace": "English Cavalier poet (1617–1657) who wrote two of the most quoted poems in English: To Althea, from Prison and To Lucasta, Going to the Wars.",
  "Robert Browning": "Victorian English poet (1812–1889) who invented the dramatic monologue. My Last Duchess is a chilling masterpiece of the form.",
  "Robert Burns": "Scotland's national poet (1759–1796), known for Auld Lang Syne and A Red, Red Rose. Wrote in Scots dialect and celebrated common humanity.",
  "Robert Frost": "American poet (1874–1963), four-time Pulitzer Prize winner. Known for accessible New England settings and deceptively simple poems about nature and choice.",
  "Robert Herrick": "English lyric poet and clergyman (1591–1674). Gather ye rosebuds while ye may (To the Virgins) is one of the most quoted carpe diem poems.",
  "Robert Louis Stevenson": "Scottish novelist and poet (1850–1894), author of Treasure Island and A Child's Garden of Verses.",
  "Robert Southey": "English Romantic poet (1774–1843) and Poet Laureate. Now best remembered for The Story of the Three Bears, which he wrote in prose.",
  "Robinson": "Likely Edwin Arlington Robinson (1869–1935), American poet and three-time Pulitzer Prize winner. Known for dark, ironic portraits of small-town life.",
  "Rupert Brooke": "English WWI poet (1887–1915), famous for The Soldier. Died of sepsis before seeing major combat; became a symbol of idealistic sacrifice.",
  "Samuel Coleridge": "English Romantic poet (1772–1834), co-author with Wordsworth of Lyrical Ballads. Known for The Rime of the Ancient Mariner and Kubla Khan.",
  "Samuel Johnson": "English poet, critic, and lexicographer (1709–1784). His Dictionary of the English Language defined English for a generation.",
  "Sarah Flower Adams": "English poet and hymn writer (1805–1848), best known for the hymn Nearer, My God, to Thee.",
  "Sidney Lanier": "American poet and musician (1842–1881) who explored the relationship between music and poetry in works like The Symphony.",
  "Sir John Suckling": "English Cavalier poet (1609–1641) known for witty, irreverent love poems. Why So Pale and Wan, Fond Lover? is his most famous piece.",
  "Sir Philip Sidney": "English Renaissance poet (1554–1586), author of Astrophil and Stella, the first great English sonnet sequence.",
  "Sir Thomas Wyatt": "English Renaissance poet (1503–1542) who introduced the Petrarchan sonnet form to English poetry.",
  "Sir Walter Raleigh": "English explorer and poet (c.1554–1618), courtier of Elizabeth I. Known for The Nymph's Reply to the Shepherd.",
  "Sir Walter Scott": "Scottish novelist and poet (1771–1832), author of Ivanhoe. His verse romances like The Lady of the Lake were enormously popular.",
  "Stephen Crane": "American novelist and poet (1871–1900), author of The Red Badge of Courage. His spare, ironic verse anticipates modernism.",
  "Thomas Campbell": "Scottish poet (1777–1844), known for patriotic and narrative poems. Ye Mariners of England was widely sung.",
  "Thomas Chatterton": "English poet (1752–1770) who fabricated medieval manuscripts and died by suicide at 17. A Romantic martyr figure.",
  "Thomas Flatman": "English poet and miniature painter (1637–1688), known for elegiac verse and a preoccupation with death.",
  "Thomas Gray": "English poet (1716–1771), best known for Elegy Written in a Country Churchyard, one of the most quoted poems in the English language.",
  "Thomas Hood": "English poet and humorist (1799–1845), known for comic verse and the social protest poem The Song of the Shirt.",
  "Thomas Moore": "Irish poet (1779–1852) and songwriter, best known for The Minstrel Boy and Believe Me, If All Those Endearing Young Charms.",
  "Thomas Warton": "English poet and critic (1728–1790), the first Professor of Poetry at Oxford. An important figure in the transition to Romanticism.",
  "Walt Whitman": "American poet (1819–1892) whose free-verse Leaves of Grass revolutionised poetry. Celebrated democracy, the body, and the American experience.",
  "Walter Savage Landor": "English poet and writer (1775–1864), admired by Dickens and Browning. Known for polished epigrams and imaginary conversations.",
  "Wilfred Owen": "English WWI poet (1893–1918), killed one week before Armistice. Dulce et Decorum Est is the defining anti-war poem in English.",
  "William Allingham": "Irish poet (1824–1889), known for the lyric Up the Airy Mountain and his diaries recording conversations with Victorian literary figures.",
  "William Barnes": "English poet and philologist (1801–1886) who wrote in the Dorset dialect. Hardy admired him and edited his poems.",
  "William Blake": "English poet and printmaker (1757–1827) who made his own illustrated books. A visionary mystic and fierce critic of industrial society.",
  "William Browne": "English pastoral poet (1590–c.1645) known for Britannia's Pastorals. He helped revive the pastoral tradition in English verse.",
  "William Cowper": "English poet (1731–1800) known for The Task, a long poem about rural life, and the hymn God Moves in a Mysterious Way.",
  "William Cullen Bryant": "American Romantic poet (1794–1878), best known for Thanatopsis, a meditation on death written at the age of 17.",
  "William Ernest Henley": "English Victorian poet (1849–1903), best known for Invictus, with its famous lines about being master of my fate.",
  "William Lisle Bowles": "English poet (1762–1850) whose Fourteen Sonnets influenced Coleridge and Southey and helped revive the sonnet form.",
  "William Morris": "English Victorian designer, writer, and poet (1834–1896). A central figure in the Arts and Crafts movement and utopian socialism.",
  "William Shakespeare": "English playwright and poet (1564–1616). His 154 sonnets and poems like Venus and Adonis explore love, time, and beauty.",
  "William Topaz McGonagall": "Scottish poet (1825–1902), famous for spectacularly bad verse. Often cited as the worst poet in English literary history.",
  "William Vaughn Moody": "American poet and playwright (1869–1910) known for verse questioning American imperialism and celebrating democratic ideals.",
  "William Wordsworth": "English Romantic poet (1770–1850) and co-author of Lyrical Ballads with Coleridge. Celebrated nature, childhood, and ordinary rural life.",
  "W. H. Auden": "Anglo-American poet (1907–1973) known for intellectual range and technical mastery. Musée des Beaux Arts is among the finest poems of the 20th century.",
  "T. S. Eliot": "Anglo-American modernist poet and Nobel laureate (1888–1965). The Waste Land (1922) transformed modern poetry with its fragmented, allusive style.",
  "Ezra Pound": "American modernist poet (1885–1972) who championed imagism and influenced nearly every major 20th-century poet. Author of the monumental Cantos.",
  "Wallace Stevens": "American modernist poet (1879–1955) and insurance executive. His work explores imagination, reality, and beauty with philosophical depth.",
  "William Carlos Williams": "American poet (1883–1963) known for the imagist credo 'no ideas but in things'. Wrote The Red Wheelbarrow and Spring and All.",
  "William Butler Yeats": "Irish poet and Nobel laureate (1865–1939). A central figure of 20th-century literature, known for mystical symbolism and Irish mythology.",
  "Rudyard Kipling": "English author born in India (1865–1936), known for If— and The Jungle Book. First English-language writer to win the Nobel Prize (1907).",
  "A. E. Housman": "English classical scholar and poet (1859–1936). A Shropshire Lad (1896) is a cycle of elegies mourning youth, beauty, and rural England.",
  "Stephen Crane": "American novelist and poet (1871–1900). His spare, ironic verse anticipates modernism; his prose The Red Badge of Courage defined realist war writing.",
  "Robinson Jeffers": "American poet (1887–1962) of the California coast. Known for his philosophy of 'inhumanism' and stark, ecological verse.",
  "Archibald MacLeish": "American poet (1892–1982) who wrote Ars Poetica, arguing a poem should not mean but be. Three-time Pulitzer Prize winner.",
  "Carl Sandburg": "American poet (1878–1967) of the people, known for Chicago. Won three Pulitzer Prizes and celebrated industrial America and working-class life.",
  "Edna St. Vincent Millay": "American poet (1892–1950) and first woman to win the Pulitzer Prize for Poetry (1923). Known for her sonnets and fiercely independent life.",
  "Robert Frost": "American poet (1874–1963), four-time Pulitzer Prize winner. Known for accessible New England settings and poems like The Road Not Taken.",
  "Lewis Carroll": "English author and mathematician (1832–1898). Jabberwocky and The Walrus and the Carpenter are beloved nonsense verse of Victorian literature.",
  "Ralph Waldo Emerson": "American Transcendentalist (1803–1882) who inspired Whitman and Thoreau. Celebrated nature, self-reliance, and the divine in everyday life.",
  "Edgar Allan Poe": "American poet and master of gothic fiction (1809–1849). Known for The Raven and Annabel Lee, poems of grief, beauty, and obsession.",
  "Emily Bronte": "English novelist and poet (1818–1848), author of Wuthering Heights. Her poems are marked by passion, mysticism, and a fierce inner life.",
  "Paul Laurence Dunbar": "American poet (1872–1906), one of the first Black poets to gain national prominence. Known for dialect verse and poems of racial identity.",
  "Rupert Brooke": "English WWI poet (1887–1915), famous for The Soldier. Died before seeing major combat; became a symbol of idealistic sacrifice.",
  "Edward Thomas": "English poet (1878–1917) killed in WWI. His short career produced some of the finest nature poetry in English, including Adlestrop.",
};

// ── TILE THEMES ──
const THEMES = {
  bw: {
    label: "B&W",
    getTileStyle: () => {
      const inv = Math.random() < 0.18;
      return { className: inv ? 'tile inv' : 'tile', style: {} };
    }
  },
  kitschy: {
    label: "Kitschy",
    colors: [
      { bg: '#e8433a', color: '#fff' }, { bg: '#2d6be4', color: '#fff' },
      { bg: '#f5c518', color: '#111' }, { bg: '#2ab573', color: '#fff' },
      { bg: '#f07d2a', color: '#fff' }, { bg: '#e84393', color: '#fff' },
      { bg: '#7c4de8', color: '#fff' }, { bg: '#1ab5b5', color: '#fff' },
      { bg: '#fff', color: '#111' },
    ],
    getTileStyle: function() {
      const c = this.colors[Math.floor(Math.random() * this.colors.length)];
      return { className: 'tile', style: { background: c.bg, color: c.color, borderColor: 'rgba(0,0,0,0.15)', boxShadow: '1.5px 1.5px 0 rgba(0,0,0,0.2)' } };
    }
  },
  pastel: {
    label: "Pastel",
    colors: [
      { bg: '#ffd6d6', color: '#7a3333' }, { bg: '#d6e8ff', color: '#2a4a7a' },
      { bg: '#fff4cc', color: '#7a6000' }, { bg: '#d6f5e3', color: '#1a5c38' },
      { bg: '#f5d6f5', color: '#5c1a7a' }, { bg: '#ffe8d6', color: '#7a3a00' },
      { bg: '#d6f0f5', color: '#0a4a5c' }, { bg: '#f5f5d6', color: '#4a4a00' },
    ],
    getTileStyle: function() {
      const c = this.colors[Math.floor(Math.random() * this.colors.length)];
      return { className: 'tile', style: { background: c.bg, color: c.color, borderColor: c.color + '55', boxShadow: `1.5px 1.5px 0 ${c.color}33` } };
    }
  },
  dark: {
    label: "Dark",
    colors: [
      { bg: '#1a1a2e', color: '#e0e0ff' }, { bg: '#2d1b1b', color: '#ffd0d0' },
      { bg: '#1b2d1b', color: '#d0ffd0' }, { bg: '#2d2d1b', color: '#ffffd0' },
      { bg: '#2d1b2d', color: '#ffd0ff' }, { bg: '#111', color: '#e0c97f' },
      { bg: '#1b1b2d', color: '#c0c0ff' },
    ],
    getTileStyle: function() {
      const c = this.colors[Math.floor(Math.random() * this.colors.length)];
      return { className: 'tile', style: { background: c.bg, color: c.color, borderColor: c.color + '44', boxShadow: `1.5px 1.5px 0 ${c.color}33` } };
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
  buildHeaderExtras();

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
function buildHeaderExtras() {
  const header = document.querySelector('header');

  const potd = document.createElement('button');
  potd.className = 'header-btn';
  potd.textContent = 'poet of the day';
  potd.onclick = showPoetOfTheDay;

  const addWord = document.createElement('button');
  addWord.className = 'header-btn';
  addWord.textContent = '+ add word';
  addWord.onclick = () => {
    const word = prompt('Add a word to the fridge:');
    if (word && word.trim()) addCustomTile(word.trim());
  };

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
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === key));
  document.body.dataset.theme = key;
}

// ── POET OF THE DAY ──
async function showPoetOfTheDay() {
  if (!allAuthors.length) return;
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const idx = seed % allAuthors.length;
  const name = allAuthors[idx];

  activePoet = name;
  renderSidebar();

  if (!poetsData[name]) await loadPoetPoems(name);
  if (poetsData[name] && poetsData[name].length > 0) {
    const pmi = seed % poetsData[name].length;
    showPoem(name, pmi);
    document.getElementById('poetList').querySelector('.poet-btn.active')
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// ── ERA LOOKUP ──
function getEra(name) {
  for (const [era, poets] of Object.entries(ERAS)) {
    if (poets.includes(name)) return era;
  }
  // Fallback: try to determine by birth year from bio
  return 'Other';
}

// ── SIDEBAR ──
function renderSidebar() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const list = document.getElementById('poetList');
  list.innerHTML = '';

  const filtered = allAuthors.filter(name => !q || name.toLowerCase().includes(q));

  if (filtered.length === 0) {
    list.innerHTML = '<div class="loading-poets">no poets found</div>';
    return;
  }

  if (q) {
    filtered.forEach(name => renderPoetEntry(list, name));
  } else {
    const grouped = {};
    filtered.forEach(name => {
      const era = getEra(name);
      if (!grouped[era]) grouped[era] = [];
      grouped[era].push(name);
    });

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
  pb.appendChild(nameSpan);

  if (BIOS[name]) {
    const infoBtn = document.createElement('span');
    infoBtn.className = 'bio-dot';
    infoBtn.textContent = 'i';
    infoBtn.onclick = (e) => { e.stopPropagation(); showTooltip(e, BIOS[name]); };
    pb.appendChild(infoBtn);
  }

  const chevron = document.createElement('span');
  chevron.className = 'chevron';
  chevron.innerHTML = activePoet === name ? '&#9650;' : '&#9660;';
  pb.appendChild(chevron);
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

function hideTooltip() {
  if (tooltipEl) { tooltipEl.remove(); tooltipEl = null; }
}

// ── TOGGLE / LOAD POET ──
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
    poetsData[name] = Array.isArray(data) && data.length > 0
      ? data.sort((a, b) => a.title.localeCompare(b.title))
      : [];
  } catch (e) { poetsData[name] = []; }

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

// ── FRIDGE ──
const STOPWORDS = new Set('the a an and or but in on at to for of with is it its that this as by from was are be been have has had not they their them he she we you i me my his her our your into than then when if up out so do did no nor yet all each more most other such what which who whom how about above after again against along already also always among any away back because before between can come could down during ever every few first get give go good great here him just know like little long look make many may might much must never now old once only over own part place put say see seem should since some still take those though through time too under until upon us very want way well were while will without would'.split(' '));

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
  const { className, style } = THEMES[currentTheme].getTileStyle();
  const tile = document.createElement('div');
  tile.className = className;
  tile.textContent = word;
  Object.assign(tile.style, style);
  const fridge = document.getElementById('fridge');
  tile.style.transform = `rotate(${(Math.random() - 0.5) * 5}deg)`;
  tile.style.left = (12 + Math.random() * Math.max(0, fridge.offsetWidth - 130)) + 'px';
  tile.style.top  = (12 + Math.random() * Math.max(0, fridge.offsetHeight - 36)) + 'px';
  tile.addEventListener('mousedown', tileDown);
  tile.addEventListener('touchstart', tileTouchDown, { passive: false });
  return tile;
}

function throwOnFridge() {
  if (!currentLines.length) return;
  document.getElementById('fridgeMsg').style.display = 'none';
  const fridge = document.getElementById('fridge');
  extractWords(currentLines).forEach(word => fridge.appendChild(makeTile(word)));
}

function addCustomTile(word) {
  document.getElementById('fridgeMsg').style.display = 'none';
  document.getElementById('fridge').appendChild(makeTile(word));
}

function clearFridge() {
  document.getElementById('fridge').querySelectorAll('.tile').forEach(t => t.remove());
  document.getElementById('fridgeMsg').style.display = '';
}

// ── DRAG ──
function tileDown(e) {
  e.preventDefault(); draggingTile = e.currentTarget; draggingTile.classList.add('dragging');
  const r = draggingTile.getBoundingClientRect();
  dragOX = e.clientX - r.left; dragOY = e.clientY - r.top;
  document.addEventListener('mousemove', tileMove); document.addEventListener('mouseup', tileUp);
}
function tileMove(e) { if (draggingTile) move(e.clientX, e.clientY); }
function tileUp() {
  if (!draggingTile) return;
  draggingTile.classList.remove('dragging'); draggingTile = null;
  document.removeEventListener('mousemove', tileMove); document.removeEventListener('mouseup', tileUp);
}
function tileTouchDown(e) {
  e.preventDefault(); draggingTile = e.currentTarget; draggingTile.classList.add('dragging');
  const t = e.touches[0], r = draggingTile.getBoundingClientRect();
  dragOX = t.clientX - r.left; dragOY = t.clientY - r.top;
  document.addEventListener('touchmove', tileTouchMove, { passive: false });
  document.addEventListener('touchend', tileTouchUp);
}
function tileTouchMove(e) { e.preventDefault(); if (draggingTile) { const t = e.touches[0]; move(t.clientX, t.clientY); } }
function tileTouchUp() {
  if (!draggingTile) return;
  draggingTile.classList.remove('dragging'); draggingTile = null;
  document.removeEventListener('touchmove', tileTouchMove); document.removeEventListener('touchend', tileTouchUp);
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
  reader.style.height = Math.max(80, Math.min(resH + (e.clientY - resY), main.offsetHeight - handle.offsetHeight - 80)) + 'px';
});
document.addEventListener('mouseup', () => {
  if (!resizing) return;
  resizing = false; document.body.style.cursor = ''; document.body.style.userSelect = '';
});

init();
