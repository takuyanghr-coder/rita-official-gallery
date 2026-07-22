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
    links: {}
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
    links: {}
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
    links: {}
  }
];

const cover = (album, index, large = false) => `
  <button class="cover-button${large ? " cover-large" : ""}" data-album-id="${album.id}" aria-label="${album.title} の詳細を見る">
    <span class="cover-art art-${album.accent} has-image" style="background-image:url('${album.art}')"><i>${index + 1}</i><b>${album.title}</b></span>
    ${large ? "" : `<span class="hover-title">${album.title}</span>`}
  </button>`;

const latest = albums[albums.length - 1];
document.getElementById("latest-display").innerHTML = `
  ${cover(latest, 0, true)}
  <div class="latest-copy">
    <p class="artist">${latest.artist}</p><h3>${latest.title}</h3>
    <p class="release">RELEASE · ${latest.release}</p>
    <p class="story-lead">${latest.story.join(" ")}</p>
    <button class="text-link" data-album-id="${latest.id}">View the artwork <span>↗</span></button>
  </div>`;

document.getElementById("collection-count").textContent = String(albums.length).padStart(2, "0") + " WORKS";
document.getElementById("album-grid").innerHTML = albums.map((album, index) => `
  <article class="album-card" data-artist="${album.artist}">
    ${cover(album, index)}
    <p>${album.artist}</p><h3>${album.title}</h3><time>${album.albumNumber}${album.albumNumber === 1 ? "ST" : album.albumNumber === 2 ? "ND" : "RD"} ALBUM</time>
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
  const ordinal = album.albumNumber + (album.albumNumber === 1 ? "ST" : album.albumNumber === 2 ? "ND" : "RD") + " ALBUM · ";
  fields.release.textContent = ordinal + "RELEASE · " + album.release;
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
