const commonListenLinks = {
  spotify: "https://open.spotify.com/artist/24ZhFNgFRKfS19yAisfM0Q",
  apple: "https://music.apple.com/jp/artist/%E8%B6%8A%E9%BB%92%E3%83%AA%E3%82%BF/1852020293",
  amazon: "https://music.amazon.com/artists/B0G48Q368M"
};

const albums = [
  {
    id: "velvet-dominion",
    artist: "越黒リタ",
    title: "Velvet Dominion",
    albumNumber: 1,
    release: "2025.12.13",
    story: [
      "深紅の宴が幕を開け、柔らかな支配が夜を包む。",
      "薔薇と毒、祈りと欲望が交差する、女王のための六つの夜想曲。"
    ],
    tracks: ["Queen of the Velvet Night", "Nocturne Marionette", "Ðesire", "Sanctus Ruina", "Venomous Rose", "Crimson Banquet"],
    art: "covers/velvet-dominion.png",
    accent: "crimson",
    links: commonListenLinks
  },
  {
    id: "lunar-eclat",
    artist: "越黒リタ",
    title: "Lunar Éclat",
    albumNumber: 2,
    release: "2025.12.13",
    story: [
      "月光に照らされた鏡が、忘れられた記憶を映し出す。",
      "深紅の林檎、黒い優雅さ、甘美な忘却――夜の底で交錯する、美しくも危うい六つの物語。"
    ],
    tracks: ["Mirror Elegy", "Alice in the Abyss", "Shadowed Apple", "Noir Élégance", "Noble Masquerade", "Scarlet Nepenthe"],
    art: "covers/lunar-eclat.jpg",
    accent: "blue",
    links: commonListenLinks
  },
  {
    id: "luminous-ruin",
    artist: "越黒リタ",
    title: "Luminous Ruin",
    albumNumber: 3,
    release: "2025.12.13",
    story: [
      "崩れ落ちた楽園に、機械仕掛けの祈りが響く。",
      "夢を喰らう影と、名前を失った少女。滅びの残骸は月光を受け、静かに美しく輝き始める。"
    ],
    tracks: ["Ornament of Ruin", "R", "Mechanical Prayer", "Dream Eater", "Veiled Eden", "Nameless Alice"],
    art: "covers/luminous-ruin.jpg",
    accent: "blue",
    links: commonListenLinks
  },
  {
    id: "oboromiyabi",
    artist: "越黒リタ",
    title: "朧雅",
    albumNumber: 4,
    release: "2026.01.01",
    story: [
      "朧月の下、消えかけた灯と葬送の桜が静かに揺れる。",
      "妖しく紅を纏う六つの情景が、墨染めの夜へと影を寄せる。"
    ],
    tracks: ["幻火", "葬桜", "夜纏", "妖紅", "墨染", "影寄"],
    art: "covers/oboromiyabi.jpg",
    accent: "amber",
    links: commonListenLinks
  },
  {
    id: "sugar-deception",
    artist: "越黒リタ",
    title: "$ugar Ðeception",
    albumNumber: 5,
    release: "2026.01.11",
    story: [
      "甘い微笑みの裏側で、罠と毒がきらめくステージ。",
      "愛される姿を演じながら、本当のわたしを組み立てていく六つの告白。"
    ],
    tracks: ["ファンサ×罠", "ポイズン★アイドル", "†冥土カフェ†", "月灯シンデレラ♪", "依存レッテル◆", "わたしのつくりかた"],
    art: "covers/sugar-deception.jpg",
    accent: "crimson",
    links: commonListenLinks
  },
  {
    id: "fractured-order",
    artist: "越黒リタ",
    title: "Fractured Order",
    albumNumber: 6,
    release: "2026.02.14",
    story: [
      "砕けた秩序の向こうで、鎖に閉ざされた意識が目を覚ます。",
      "甘い毒と深淵の舞踏が、崩壊そのものの輪郭を描き出す。"
    ],
    tracks: ["Broken Awakening", "Abyssal Dance", "Sweet Venom", "Bloodstained Chain", "Black Labyrinth", "The Shape of Collapse"],
    art: "covers/fractured-order.jpg",
    accent: "crimson",
    links: commonListenLinks
  },
  {
    id: "midnight-sirens",
    artist: "越黒リタ",
    title: "Midnight Sirens",
    albumNumber: 7,
    release: "2026.02.22",
    story: [
      "真夜中の月明かりに、堕ちた歌姫たちの誘惑が響く。",
      "罪と誇り、甘い囁きの果てで、選択の重さを問う六つの夜曲。"
    ],
    tracks: ["The Fallen", "Darkness Diva", "Pride of Night", "Sweet Sin Fairy", "Whisper of Temptation", "Weight of Choice"],
    art: "covers/midnight-sirens.jpg",
    accent: "purple",
    links: commonListenLinks
  }
];

// Galleryは新しいアルバムから表示します。
albums.sort((a, b) => b.albumNumber - a.albumNumber);

const cover = (album, index, large = false) => `
  <button class="cover-button${large ? " cover-large" : ""}" data-album-id="${album.id}" aria-label="${album.title} の詳細を見る">
    <span class="cover-art art-${album.accent} has-image" style="background-image:url('${album.art}')"><i>${index + 1}</i><b>${album.title}</b></span>
    ${large ? "" : `<span class="hover-title">${album.title}</span>`}
  </button>`;

const latest = albums[0];
document.getElementById("latest-display").innerHTML = `
  ${cover(latest, 0, true)}
  <div class="latest-copy">
    <p class="artist">${latest.artist}</p><h3>${latest.title}</h3>
    <p class="release">RELEASE · ${latest.release}</p>
    <p class="story-lead">${latest.story.join(" ")}</p>
    <button class="text-link" data-album-id="${latest.id}">View the artwork <span>↗</span></button>
  </div>`;

document.getElementById("collection-count").textContent = String(albums.length).padStart(2, "0") + " WORKS";
const ordinal = number => number + (number === 1 ? "ST" : number === 2 ? "ND" : number === 3 ? "RD" : "TH");
document.getElementById("album-grid").innerHTML = albums.map((album, index) => `
  <article class="album-card" data-artist="${album.artist}">
    ${cover(album, index)}
    <p>${album.artist}</p><h3>${album.title}</h3><time>${ordinal(album.albumNumber)} ALBUM</time>
  </article>`).join("");

const modal = document.getElementById("album-modal");
const panel = modal.querySelector(".modal-panel");
const art = document.getElementById("modal-art");
let currentIndex = 0;
let lastFocus = null;
const fields = {
  artist: document.getElementById("modal-artist"), title: document.getElementById("modal-title"),
  release: document.getElementById("modal-release"), story: document.getElementById("modal-story"),
  tracks: document.getElementById("modal-tracks"), links: document.getElementById("modal-links"),
  number: document.getElementById("modal-number"), coverTitle: document.getElementById("modal-cover-title"),
  position: document.getElementById("modal-position")
};

function renderModal(index) {
  currentIndex = (index + albums.length) % albums.length;
  const album = albums[currentIndex];
  fields.artist.textContent = album.artist;
  fields.title.textContent = album.title;
  fields.release.textContent = ordinal(album.albumNumber) + " ALBUM · RELEASE · " + album.release;
  fields.number.textContent = String(currentIndex + 1).padStart(2, "0");
  fields.coverTitle.textContent = album.title;
  fields.position.textContent = String(currentIndex + 1).padStart(2, "0") + " / " + String(albums.length).padStart(2, "0");
  fields.story.replaceChildren(...album.story.map(line => { const p = document.createElement("p"); p.textContent = line; return p; }));
  fields.tracks.replaceChildren(...album.tracks.map((track, i) => { const li = document.createElement("li"); li.innerHTML = `<span>${String(i + 1).padStart(2, "0")}</span><b></b>`; li.querySelector("b").textContent = track; return li; }));
  fields.links.replaceChildren();
  const labels = {spotify:"Spotify", apple:"Apple Music", youtube:"YouTube Music", amazon:"Amazon Music", xfd:"XFD"};
  Object.entries(labels).forEach(([key, label]) => {
    if (!album.links[key]) return;
    const a = document.createElement("a"); a.href = album.links[key]; a.target = "_blank"; a.rel = "noreferrer"; a.textContent = label; a.insertAdjacentHTML("beforeend", "<span>↗</span>"); fields.links.appendChild(a);
  });
  if (!fields.links.children.length) { const p = document.createElement("p"); p.className = "links-pending"; p.textContent = "Streaming links coming soon."; fields.links.appendChild(p); }
  art.className = `cover-art art-${album.accent} has-image`;
  art.style.backgroundImage = `url('${album.art}')`;
  document.querySelector("#modal-prev b").textContent = albums[(currentIndex - 1 + albums.length) % albums.length].title;
  document.querySelector("#modal-next b").textContent = albums[(currentIndex + 1) % albums.length].title;
}

function openModal(id) {
  const index = albums.findIndex(album => album.id === id); if (index < 0) return;
  lastFocus = document.activeElement; renderModal(index); modal.hidden = false;
  requestAnimationFrame(() => { modal.classList.add("open"); panel.scrollTop = 0; modal.querySelector(".modal-close").focus(); });
  document.body.classList.add("modal-open");
}
function closeModal() {
  modal.classList.remove("open"); document.body.classList.remove("modal-open");
  setTimeout(() => { modal.hidden = true; if (lastFocus) lastFocus.focus(); }, 350);
}

document.querySelectorAll("[data-album-id]").forEach(button => button.addEventListener("click", () => openModal(button.dataset.albumId)));
document.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeModal));
document.getElementById("modal-prev").addEventListener("click", () => renderModal(currentIndex - 1));
document.getElementById("modal-next").addEventListener("click", () => renderModal(currentIndex + 1));
document.addEventListener("keydown", event => {
  if (modal.hidden) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") renderModal(currentIndex - 1);
  if (event.key === "ArrowRight") renderModal(currentIndex + 1);
});
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => { const active = item === button; item.classList.toggle("active", active); item.setAttribute("aria-selected", String(active)); });
  document.querySelectorAll(".album-card").forEach(card => { card.hidden = button.dataset.filter !== "all" && card.dataset.artist !== button.dataset.filter; });
}));
