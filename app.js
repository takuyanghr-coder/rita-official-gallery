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
  },
  {
    id: "enmusubi",
    artist: "越黒リタ",
    title: "艶結ビ",
    albumNumber: 8,
    release: "2026.03.14",
    story: [
      "甘美な糸が絡み合い、冷たい楽園に逃げ場のない夢を結ぶ。",
      "見えない首輪と拒絶の距離を描く、官能的で危うい六つの告白。"
    ],
    tracks: ["官能堪能", "冷たい楽園。", "都合のいい夢", "甘い拘束", "見えない首輪", "拒絶の距離"],
    art: "covers/enmusubi.jpg",
    accent: "crimson",
    links: commonListenLinks
  },
  {
    id: "nocturnal-rite",
    artist: "越黒リタ",
    title: "Nocturnal Rite",
    albumNumber: 9,
    release: "2026.03.20",
    story: [
      "闇を纏う夜、骸の祝杯とともに禁じられた儀式が始まる。",
      "棺と王冠、蛇と蝙蝠が導く、背徳のための六つの典礼。"
    ],
    tracks: ["闇を着る", "骸の祝杯", "夜を選ぶ蝙蝠", "蛇が眠る場所", "棺と王冠", "背徳のロザリオ"],
    art: "covers/nocturnal-rite.jpg",
    accent: "blue",
    links: commonListenLinks
  },
  {
    id: "nachtgarten",
    artist: "越黒リタ",
    title: "Nachtgarten",
    albumNumber: 10,
    release: "2026.04.16",
    story: [
      "青い月の庭で、硝子の果実と夜に愛された蝶が目を覚ます。",
      "深淵に咲く花と残香を辿る、静謐な六つの幻想。"
    ],
    tracks: ["ガラスの果実", "深淵に咲く花", "夜に愛された蝶", "青薔薇の花弁", "誘いの縁", "夜の残香"],
    art: "covers/nachtgarten.jpg",
    accent: "blue",
    links: commonListenLinks
  },
  {
    id: "aeternitas",
    artist: "越黒リタ",
    title: "Aeternitas",
    albumNumber: 11,
    release: "2026.04.25",
    story: [
      "沈黙が続く限り、意識は境界を溶かし永遠の海を漂う。",
      "悪夢にも満たない静けさの先で、果てのない夜を見つめる六篇。"
    ],
    tracks: ["悪夢未満", "沈黙が続く限り", "境界融解", "意識の海", "在り続ける場所", "果てのない夜へ"],
    art: "covers/aeternitas.jpg",
    accent: "blue",
    links: commonListenLinks
  },
  {
    id: "vitia",
    artist: "越黒リタ",
    title: "ViTiA",
    albumNumber: 12,
    release: "2026.05.16",
    story: [
      "七つの罪が杯を満たし、冷たい欲望が古い聖堂を巡る。",
      "傲慢、強欲、暴食、怠惰――悪徳の名を冠した六つの肖像。"
    ],
    tracks: ["Lucifer Pride", "Cold Satan", "Asmodeus Pulse", "Mammon Weight", "Beelzebub Overdose", "Belphegor Stasis"],
    art: "covers/vitia.jpg",
    accent: "purple",
    links: commonListenLinks
  },
  {
    id: "silent-sovereign",
    artist: "越黒リタ",
    title: "Silent Sovereign",
    albumNumber: 13,
    release: "2026.05.30",
    story: [
      "静かな支配者はカードを伏せ、罪と虚像を賭場へ並べる。",
      "沈黙の多数派を従え、冷たい輝きで勝負を制する六つの駆け引き。"
    ],
    tracks: ["FIRST SIN", "False Embrace", "Silent Majority", "Cold Brilliance", "Quiet Authority", "Out of the Deck"],
    art: "covers/silent-sovereign.jpg",
    accent: "amber",
    links: commonListenLinks
  },
  {
    id: "black-coronation",
    artist: "越黒リタ",
    title: "Black Coronation",
    albumNumber: 14,
    release: "2026.06.06",
    story: [
      "硝子の聖域が軋み、神を拒む玉座に黒い王冠が掲げられる。",
      "均衡のひびから創造の裏側を覗く、戴冠のための六つの宣言。"
    ],
    tracks: ["存在圧", "硝子の聖域", "均衡のひび", "創造の裏側", "神を拒む玉座", "黒の戴冠"],
    art: "covers/black-coronation.jpg",
    accent: "crimson",
    links: commonListenLinks
  },
  {
    id: "cathedral-of-masks",
    artist: "越黒リタ",
    title: "Cathedral of Masks",
    albumNumber: 15,
    release: "2026.06.20",
    story: [
      "仮面の聖堂に、微笑のヴェールと恩寵の歌が満ちてゆく。",
      "純白の策略と退廃が交わる、沈黙の核心へ捧げる六つの聖歌。"
    ],
    tracks: ["微笑のヴェール", "恩寵のアリア", "純白のストラテジー", "退廃のセレナーデ", "沈黙のグラヴィティ", "ホロウ・コア"],
    art: "covers/cathedral-of-masks.jpg",
    accent: "amber",
    links: commonListenLinks
  },
  {
    id: "crown-of-jewel",
    artist: "越黒リタ",
    title: "Crown of Jewel",
    albumNumber: 16,
    release: "2026.07.03",
    story: [
      "砕け散る光の中で、六色の宝石がひとつの王冠を形づくる。",
      "深淵の蒼、夢見る紫、虚無の黒までを巡る煌めきの組曲。"
    ],
    tracks: ["Diamond Edge", "Ruby Heart", "Abyss Sapphire", "Emerald Eye", "Amethyst Dream", "Onyx Void"],
    art: "covers/crown-of-jewel.jpg",
    accent: "purple",
    links: commonListenLinks
  },
  {
    id: "lune-noire",
    artist: "越黒リタ",
    title: "Lune Noire",
    albumNumber: 17,
    release: "2026.07.17",
    story: [
      "黒い月が昇るとき、ふたつの蝕と深紅の本能が重なり合う。",
      "蒼い誘惑と静かな不在を抱く、月夜のための六つの夢。"
    ],
    tracks: ["Crescent Desire", "Dual Eclipse", "Lunar Ecstasy", "Azure Temptation", "Crimson Instinct", "Silent Absence"],
    art: "covers/lune-noire.jpg",
    accent: "blue",
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
