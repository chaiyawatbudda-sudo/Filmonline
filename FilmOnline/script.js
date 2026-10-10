/* FilmOnline: ตัวอย่างข้อมูลทั้งหมดเป็นข้อมูลสาธิต ไม่มีสถิติผู้ชมปลอม */

// ข้อมูลวิดีโอทั้งหมดอยู่ใน Array of Objects เพื่อให้แก้ไขและเพิ่มเรื่องได้ง่าย
const videos = [
  {
    id: 'Space',
    title: 'Space',
    category: 'Adventure',
    duration: '8 min',
    minutes: 8,
    year: 2025,
    description:
      'เดินทางผจญภัยในอวกาศกับผองเพื่อน',
    poster:
      'assets/posters/space.jpg',
    hero: 'assets/posters/spacehero.jpg',
    video: 'assets/videos/space.mp4',
    tags: ['ผ่อนคลาย', 'สร้างแรงบันดาลใจ', 'Adventure'],
    moods: ['relax', 'inspire'],
  },
  {
    id: 'คู่เกย์คิมกัส รัก4เศร้า',
    title: 'คู่เกย์คิมกัส รัก4เศร้า',
    category: 'Comedy',
    duration: '10 min',
    minutes: 10,
    year: 2025,
    description:
      'เรื่องราวของเกย์ต่างห้องที่รักกันไปมาแบบซับซ้อน4คน',
    poster:
      'assets/posters/gay.jpg',
    hero: 'assets/posters/gayhero.jpg',
    video: 'assets/videos/gay68.mp4',
    tags: ['หัวเราะ', 'ผ่อนคลาย'],
    moods: ['laugh', 'relax'],
  },
  {
    id: 'อั๋น คน เหล็ก',
    title: 'อั๋น คน เหล็ก',
    category: 'Action',
    duration: '3 min',
    minutes: 3,
    year: 2024,
    description:
      'การไล่ล่าผ่านถนนเมืองยามค่ำคืน เมื่อทุกวินาทีมีความหมาย และการตัดสินใจครั้งเดียวเปลี่ยนทุกอย่าง',
    poster:
      'assets/posters/aun.jpg',
    hero: 'assets/posters/aunhero.jpg',
    video: 'assets/videos/kon.mp4',
    tags: ['ตื่นเต้น'],
    moods: ['thrill'],
  },
  {
    id: 'after-rain',
    title: 'After the Rain',
    category: 'Lifestyle',
    duration: '15 min',
    minutes: 15,
    year: 2025,
    description:
      'เช้าวันใหม่ในเมืองเล็ก ๆ ผ่านสายตาของคนทำงานที่ค้นพบความสุขจากรายละเอียดธรรมดา',
    poster:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
    hero: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=85',
    video: '',
    tags: ['ผ่อนคลาย', 'สร้างแรงบันดาลใจ'],
    moods: ['relax', 'inspire'],
  },
  {
    id: 'the-last-trail',
    title: 'The Last Trail',
    category: 'Adventure',
    duration: '26 min',
    minutes: 26,
    year: 2024,
    description:
      'บันทึกเส้นทางเดินป่าที่ไม่คุ้นเคย ภาพธรรมชาติและการเดินทางที่พาเราออกไปไกลจากเสียงรบกวน',
    poster:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85',
    hero: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85',
    video: '',
    tags: ['ผ่อนคลาย', 'ตื่นเต้น', 'สร้างแรงบันดาลใจ'],
    moods: ['relax', 'thrill', 'inspire'],
  },
  {
    id: 'room-9',
    title: 'Room No. 9',
    category: 'Horror',
    duration: '17 min',
    minutes: 17,
    year: 2024,
    description:
      'เสียงเคาะประตูตอนตีสามกับห้องที่ไม่มีอยู่ในแผนผัง เรื่องสั้นชวนขนลุกสำหรับค่ำคืนเงียบ ๆ',
    poster:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
    hero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=85',
    video: '',
    tags: ['ตื่นเต้น'],
    moods: ['thrill'],
  },
  {
    id: 'small-steps',
    title: 'Small Steps',
    category: 'Short Films',
    duration: '9 min',
    minutes: 9,
    year: 2025,
    description:
      'ภาพยนตร์สั้นว่าด้วยการเริ่มต้นใหม่ ความกล้าที่ไม่จำเป็นต้องยิ่งใหญ่ และก้าวเล็ก ๆ ที่พาเราไปต่อ',
    poster:
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85',
    hero: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=85',
    video: '',
    tags: ['ผ่อนคลาย', 'สร้างแรงบันดาลใจ'],
    moods: ['relax', 'inspire'],
  },
  {
    id: 'weekend-table',
    title: 'The Weekend Table',
    category: 'Lifestyle',
    duration: '14 min',
    minutes: 14,
    year: 2025,
    description:
      'ทำอาหารง่าย ๆ กับเพื่อนในบ่ายวันหยุด เรื่องราวของรสชาติ ความทรงจำ และการใช้เวลาด้วยกัน',
    poster:
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=85',
    hero: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=85',
    video: '',
    tags: ['หัวเราะ', 'ผ่อนคลาย'],
    moods: ['laugh', 'relax'],
  },
];

const categories = ['All', 'Action', 'Comedy', 'Adventure', 'Horror', 'Lifestyle', 'Short Films'];
const moods = [
  { id: 'laugh', label: 'อยากหัวเราะ', icon: '☻' },
  { id: 'relax', label: 'อยากผ่อนคลาย', icon: '☾' },
  { id: 'thrill', label: 'อยากตื่นเต้น', icon: '✦' },
  { id: 'inspire', label: 'อยากได้แรงบันดาลใจ', icon: '✧' },
];
const STORAGE = {
  favorites: 'filmonline-favorites-v1',
  progress: 'filmonline-progress-v1',
};
const state = { category: 'All', query: '', mood: null, heroIndex: 0 };
const HERO_INTERVAL_MS = 8000;
const $ = (selector) => document.querySelector(selector);
const grid = $('#movie-grid');
let toastTimer;
let heroTimer;

// อ่าน localStorage อย่างปลอดภัย เผื่อข้อมูลเสียหรือปิดการใช้งานพื้นที่เก็บข้อมูล
function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch (error) {
    console.warn(`อ่าน ${key} ไม่สำเร็จ`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    showToast('บันทึกข้อมูลในอุปกรณ์นี้ไม่สำเร็จ');
    return false;
  }
}

function favorites() {
  const value = readStorage(STORAGE.favorites, []);
  return Array.isArray(value) ? value.filter((id) => typeof id === 'string') : [];
}

function progressData() {
  const value = readStorage(STORAGE.progress, {});
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

function safeText(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
}

function showToast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('show'), 2400);
}

function findVideo(id) {
  return videos.find((video) => video.id === id);
}

// ---------- แสดงรายการและตัวกรอง ----------
function renderCategories() {
  const root = $('#category-chips');
  root.innerHTML = categories
    .map((category) => `
      <button class="chip ${state.category === category ? 'selected' : ''}"
        data-category="${safeText(category)}"
        aria-pressed="${state.category === category}">
        ${safeText(category)}
      </button>`)
    .join('');
}

function filteredVideos() {
  const words = state.query.trim().toLocaleLowerCase();

  return videos.filter((video) => {
    const matchesCategory = state.category === 'All' || video.category === state.category;
    const searchableText = `${video.title} ${video.description} ${video.category} ${video.tags.join(' ')}`;
    const matchesQuery = !words || searchableText.toLocaleLowerCase().includes(words);

    return matchesCategory && matchesQuery;
  });
}

function cardMarkup(video) {
  const saved = favorites().includes(video.id);

  return `
    <article class="movie-card" tabindex="0" role="button"
      aria-label="รายละเอียด ${safeText(video.title)}" data-open="${video.id}">
      <div class="poster-wrap">
        <img src="${safeText(video.poster)}" alt="โปสเตอร์ ${safeText(video.title)}"
          loading="lazy" data-image-fallback>
        <div class="card-topline">
          <span class="card-tag">${safeText(video.category.toUpperCase())}</span>
          <button class="favorite-button ${saved ? 'saved' : ''}"
            data-favorite="${video.id}"
            aria-label="${saved ? 'นำออกจาก' : 'เพิ่มใน'}รายการโปรด"
            aria-pressed="${saved}">${saved ? '♥' : '♡'}</button>
        </div>
        <span class="card-play" aria-hidden="true">▶</span>
      </div>
      <div class="card-caption">
        <div>
          <h3>${safeText(video.title)}</h3>
          <p>${video.year} · ${safeText(video.category)}</p>
        </div>
        <span class="card-duration">${safeText(video.duration)}</span>
      </div>
    </article>`;
}

function attachImageFallbacks(root) {
  root.querySelectorAll('[data-image-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
      image.removeAttribute('src');
      image.alt = 'ภาพปกไม่พร้อมใช้งาน';
      image.parentElement.style.background = 'linear-gradient(145deg,#401a22,#151114 65%,#0b0a0c)';
    }, { once: true });
  });
}

function renderMovies() {
  const found = filteredVideos();
  grid.innerHTML = found.map(cardMarkup).join('');
  $('#result-note').textContent = state.query || state.category !== 'All'
    ? `พบ ${found.length} เรื่อง`
    : `${found.length} เรื่อง · คัดสรรเพื่อการรับชม`;
  $('#empty-state').hidden = found.length > 0;
  $('#clear-filters').hidden = state.category === 'All' && !state.query;
  attachImageFallbacks(grid);
  renderList();
}

function renderList() {
  const saved = favorites().map(findVideo).filter(Boolean);
  $('#list-grid').innerHTML = saved.map(cardMarkup).join('');
  $('#list-count').textContent = `${saved.length} TITLES`;
  $('#list-empty').hidden = saved.length > 0;
  attachImageFallbacks($('#list-grid'));
}

function toggleFavorite(id) {
  let items = favorites();

  if (items.includes(id)) {
    items = items.filter((item) => item !== id);
    showToast('นำออกจาก My List แล้ว');
  } else {
    items.push(id);
    showToast('เพิ่มลง My List แล้ว');
  }

  writeStorage(STORAGE.favorites, items);
  renderMovies();
}

// ---------- Hero และ MoodMatch ----------
function renderHero() {
  const video = videos[state.heroIndex % videos.length];
  $('#hero-title').innerHTML = safeText(video.title).replace(' ', '<br>');
  $('#hero-description').textContent = video.description;
  $('#hero-category').textContent = video.category;
  $('#hero-duration').textContent = video.duration;
  $('#hero-number').textContent = String(state.heroIndex + 1).padStart(2, '0');

  const image = $('#hero-image');
  image.style.opacity = '0';
  image.onload = () => {
    $('#hero').style.background = '';
    image.style.opacity = '0.83';
  };
  image.onerror = () => {
    image.removeAttribute('src');
    $('#hero').style.background = 'radial-gradient(ellipse at 72% 25%,#55232b,#181316 58%,#0b0a0c)';
  };
  image.src = video.hero;

  $('#hero-watch').onclick = () => openPlayer(video.id, 0);
  $('#hero-info').onclick = () => openDetails(video.id);
}

function showNextHero() {
  state.heroIndex = (state.heroIndex + 1) % videos.length;
  renderHero();
  restartHeroTimer();
}

function restartHeroTimer() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => {
    if (document.hidden || $('#detail-dialog').open || $('#player-dialog').open) return;
    state.heroIndex = (state.heroIndex + 1) % videos.length;
    renderHero();
  }, HERO_INTERVAL_MS);
}

function renderMoods() {
  $('#mood-options').innerHTML = moods
    .map((mood) => `
      <button class="mood-button ${state.mood === mood.id ? 'active' : ''}"
        data-mood="${mood.id}" aria-pressed="${state.mood === mood.id}">
        ${mood.icon} &nbsp;${mood.label}
      </button>`)
    .join('');
}

function chooseMood(id) {
  state.mood = state.mood === id ? null : id;
  renderMoods();

  const result = $('#mood-results');
  if (!state.mood) {
    result.textContent = '';
    return;
  }

  const matches = videos.filter((video) => video.moods.includes(state.mood));
  result.textContent = matches.length
    ? `เข้ากับอารมณ์นี้: ${matches.map((video) => video.title).join(' · ')}`
    : 'ยังไม่มีเรื่องที่ตรงกับอารมณ์นี้';
}

// ---------- Continue Watching ----------
function renderContinue() {
  const records = progressData();
  const resumable = Object.entries(records)
    .map(([id, data]) => ({ video: findVideo(id), data }))
    .filter((item) => item.video
      && item.data
      && Number(item.data.currentTime) > 2
      && Number.isFinite(Number(item.data.currentTime)))
    .sort((a, b) => Number(b.data.updatedAt || 0) - Number(a.data.updatedAt || 0));

  const section = $('#continue-section');
  section.hidden = !resumable.length;
  $('#continue-grid').innerHTML = resumable.map(({ video, data }) => {
    const duration = Math.max(Number(data.duration) || video.minutes * 60, 1);
    const percent = Math.min(100, Math.max(0, Number(data.currentTime) / duration * 100));

    return `
      <article class="continue-card" tabindex="0" role="button" data-resume="${video.id}">
        <img src="${safeText(video.poster)}" alt="" data-image-fallback>
        <div>
          <h3>${safeText(video.title)}</h3>
          <p>รับชมต่อ · เหลือประมาณ ${formatTime(Math.max(0, duration - Number(data.currentTime)))}</p>
          <div class="progress-track"><span style="width:${percent}%"></span></div>
        </div>
      </article>`;
  }).join('');

  attachImageFallbacks($('#continue-grid'));
}

function formatTime(seconds) {
  const value = Math.max(0, Math.floor(seconds));
  return value >= 3600
    ? `${Math.floor(value / 3600)} ชม. ${Math.floor(value % 3600 / 60)} นาที`
    : `${Math.ceil(value / 60)} นาที`;
}

// ---------- หน้ารายละเอียดและเครื่องเล่น ----------
function openDetails(id) {
  const video = findVideo(id);
  if (!video) return;

  const saved = favorites().includes(id);
  $('#detail-content').innerHTML = `
    <div class="detail-visual">
      <img src="${safeText(video.hero)}" alt="ภาพประกอบ ${safeText(video.title)}" data-image-fallback>
    </div>
    <div class="detail-copy">
      <p class="eyebrow muted">FILMONLINE SELECTION</p>
      <h2>${safeText(video.title)}</h2>
      <div class="detail-meta">
        <span>${safeText(video.category)}</span><span>·</span>
        <span>${safeText(video.duration)}</span><span>·</span><span>${video.year}</span>
      </div>
      <p>${safeText(video.description)}</p>
      <div class="detail-actions">
        <button class="button button-primary" data-detail-play="${id}">▶ &nbsp;เล่นวิดีโอ</button>
        <button class="button button-ghost" data-favorite="${id}" aria-pressed="${saved}">
          ${saved ? '♥ นำออกจาก My List' : '♡ เพิ่มใน My List'}
        </button>
      </div>
    </div>`;

  attachImageFallbacks($('#detail-content'));
  $('#detail-dialog').showModal();
}

function openPlayer(id, startAt = 0) {
  const video = findVideo(id);
  if (!video) return;

  const player = $('#video-player');
  const fallback = $('#player-fallback');
  $('#player-title').textContent = video.title;
  $('#player-status').textContent = '';
  player.pause();
  player.removeAttribute('src');
  player.load();
  fallback.hidden = Boolean(video.video);
  player.hidden = !video.video;
  $('#player-dialog').showModal();

  if (!video.video) {
    $('#player-status').textContent = 'ไฟล์วิดีโอยังไม่ได้ตั้งค่าใน script.js';
    return;
  }

  player.src = video.video;
  player.load();
  player.addEventListener('loadedmetadata', () => {
    if (startAt > 0 && Number.isFinite(player.duration)) {
      player.currentTime = Math.min(startAt, Math.max(0, player.duration - 1));
    }
    player.play().catch(() => {
      $('#player-status').textContent = 'กดปุ่มเล่นบนเครื่องเล่นเพื่อเริ่มวิดีโอ';
    });
  }, { once: true });
  player.addEventListener('error', () => {
    $('#player-status').textContent = 'ไม่สามารถโหลดไฟล์วิดีโอได้ ตรวจสอบเส้นทางไฟล์ใน script.js';
    fallback.hidden = false;
    player.hidden = true;
  }, { once: true });
}

function saveProgress() {
  const player = $('#video-player');
  if (!player.src || !Number.isFinite(player.currentTime) || player.currentTime < 1) return;

  const title = $('#player-title').textContent;
  const video = videos.find((item) => item.title === title);
  if (!video) return;

  const records = progressData();
  if (player.ended) {
    delete records[video.id];
  } else {
    records[video.id] = {
      currentTime: player.currentTime,
      duration: Number.isFinite(player.duration) ? player.duration : video.minutes * 60,
      updatedAt: Date.now(),
    };
  }

  writeStorage(STORAGE.progress, records);
  renderContinue();
}

// ---------- Event Listeners ----------
document.addEventListener('click', (event) => {
  const favorite = event.target.closest('[data-favorite]');
  if (favorite) {
    event.stopPropagation();
    toggleFavorite(favorite.dataset.favorite);
    if ($('#detail-dialog').open) openDetails(favorite.dataset.favorite);
    return;
  }

  const category = event.target.closest('[data-category]');
  if (category) {
    state.category = category.dataset.category;
    renderCategories();
    renderMovies();
    return;
  }

  const mood = event.target.closest('[data-mood]');
  if (mood) {
    chooseMood(mood.dataset.mood);
    return;
  }

  const play = event.target.closest('[data-detail-play]');
  if (play) {
    const id = play.dataset.detailPlay;
    $('#detail-dialog').close();
    openPlayer(id);
    return;
  }

  const open = event.target.closest('[data-open]');
  if (open) {
    openDetails(open.dataset.open);
    return;
  }

  const resume = event.target.closest('[data-resume]');
  if (resume) {
    const data = progressData()[resume.dataset.resume];
    openPlayer(resume.dataset.resume, Number(data?.currentTime) || 0);
    return;
  }

  if (event.target.closest('[data-close]')) {
    event.target.closest('dialog').close();
  }
});

document.addEventListener('keydown', (event) => {
  const card = event.target.closest('[data-open], [data-resume]');
  if (card && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    card.click();
  }

  if (event.key === 'Escape') {
    $('#main-nav').classList.remove('open');
    $('#menu-toggle').setAttribute('aria-expanded', 'false');
  }
});

$('#search-input').addEventListener('input', (event) => {
  state.query = event.target.value;
  renderMovies();
});

$('#clear-filters').addEventListener('click', () => {
  state.query = '';
  state.category = 'All';
  $('#search-input').value = '';
  renderCategories();
  renderMovies();
});

$('#reset-search').addEventListener('click', () => $('#clear-filters').click());

$('#random-pick').addEventListener('click', () => {
  const choices = filteredVideos();
  if (!choices.length) {
    showToast('ไม่มีวิดีโอให้สุ่มในผลลัพธ์นี้');
    return;
  }

  const video = choices[Math.floor(Math.random() * choices.length)];
  openDetails(video.id);
});

$('#hero-next').addEventListener('click', showNextHero);

$('#menu-toggle').addEventListener('click', () => {
  const nav = $('#main-nav');
  const open = nav.classList.toggle('open');
  $('#menu-toggle').setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    $('#main-nav').classList.remove('open');
    $('#menu-toggle').setAttribute('aria-expanded', 'false');
  });
});

$('#video-player').addEventListener('timeupdate', saveProgress);
$('#video-player').addEventListener('pause', saveProgress);
$('#video-player').addEventListener('ended', saveProgress);

['detail-dialog', 'player-dialog'].forEach((id) => {
  document.getElementById(id).addEventListener('click', (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  });
});

$('#player-dialog').addEventListener('close', () => {
  $('#video-player').pause();
  saveProgress();
});

$('#search-input').addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.target.value = '';
    state.query = '';
    renderMovies();
    event.target.blur();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    $('#search-input').focus();
  }
});

function markActiveNav() {
  const hash = location.hash.slice(1) || 'home';
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.nav === hash);
  });
}

window.addEventListener('hashchange', markActiveNav);

// เริ่มต้นแสดงข้อมูลครั้งแรก
renderCategories();
renderHero();
renderMoods();
renderMovies();
renderContinue();
markActiveNav();
restartHeroTimer();
