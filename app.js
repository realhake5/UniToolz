const categories = [
  { name: "All", icon: "fa-border-all" }, { name: "Watch", icon: "fa-film" }, { name: "Software", icon: "fa-laptop-code" }, { name: "Sports", icon: "fa-futbol" },
  { name: "Play", icon: "fa-gamepad" }, { name: "Fun", icon: "fa-wand-magic-sparkles" }, { name: "Extension", icon: "fa-puzzle-piece" }, { name: "AI", icon: "fa-brain" }, { name: "Valtaris", icon: "fa-crown" }
];

const updateLogs = [
  { date: "08 Aug 2026", title: "Update log added", description: "Use the bell in the top-right corner to see the latest UniToolz changes.", icon: "fa-bell" },
  { date: "08 Aug 2026", title: "Collection refreshed", description: "Added more tools, streaming sites, games, and useful web finds to the library.", icon: "fa-layer-group" },
  { date: "08 Aug 2026", title: "New design", description: "The library has been redesigned for a cleaner, more modern look.", icon: "fa-paintbrush" },
  { date: "08 Aug 2026", title: "New feature added", description: "Introducing the ability to filter items by category.", icon: "fa-filter" },
  { date: "08 Aug 2026", title: "More Stuff", description: "added so many shit that i forgot what did i add", icon: "fa-search" },
];

const libraryItems = [
  ["Netmirror", "Watch", "High-quality movies and web series in one place.", "Watch now", "https://netmirror.gg"],
  ["SteamRip", "Play", "Discover and play a broad selection of PC games.", "Play now", "https://steamrip.com"],
  ["Froststrap", "Software", "A community Roblox bootstrapper focused on a faster launch experience.", "Download", "https://github.com"],
  ["Vanced", "Watch", "A familiar video experience with extra playback controls.", "Visit site", "https://vanced-official.com"],
  ["SKLauncher", "Software", "A lightweight launcher for Minecraft.", "Download", "https://skmedix.pl"],
  ["Ninite", "Software", "Install and update several everyday programs in one go.", "Visit site", "https://ninite.com"],
  ["MSI Afterburner", "Software", "Monitor and tune compatible graphics hardware. Change settings carefully.", "Visit site", "https://msi.com"],
  ["MuMu Player", "Software", "A lightweight Android emulator for desktop.", "Download", "https://mumuplayer.com"],
  ["SquidServers", "Software", "Host a Minecraft server with simple setup options.", "Visit site", "https://squidservers.com"],
  ["Turbo AI", "AI", "Create study notes, flashcards, and learning materials.", "Visit site", "https://turbo.ai"],
  ["Quenq", "Fun", "A playful website with browser games and surprises to share.", "Visit site", "https://quenq.com"],
  ["Software Development Toolkit", "Software", "A bundled toolkit to help set up common development software.", "Download", "https://www.mediafire.com/file/fj4kdptc28qwr0d/Software_dev_toolkit_-_unitools.zip/file"],
  ["CheezyPizza", "Software", "A peer-to-peer file transfer website.", "Visit site", "https://www.cheezypizza.in/"],
  ["AdBlock for YouTube", "Extension", "A browser extension intended to reduce YouTube advertising.", "Get extension", "https://chromewebstore.google.com/detail/adblock-for-youtube/cmedhionkhpnakcndndgjdbohmhepckk"],
  ["Streamex", "Watch", "High-quality movies and web series in one place.", "Watch now", "https://streamex.net"],
  ["HDGhar TV", "Watch", "A destination for movies and web series.", "Watch now", "https://hdghartv.com.pk"],
  ["Flixer", "Watch", "Stream movies and web series online.", "Watch now", "https://flixer.gd/"],
  ["MapleTV", "Watch", "A destination for movies and web series.", "Watch now", "https://mapple.rip"],
  ["StreamRip", "Watch", "A destination for movies and web series.", "Watch now", "https://streamrip.fun/"],
  ["MojoLauncher", "Software", "Play Minecraft Java Edition on compatible phones.", "Download", "https://github.com/mojolauncher/mojolauncher/releases"],
  ["PojavLauncher", "Software", "A launcher for playing Minecraft Java Edition on Android and iOS.", "Download", "https://pojavlauncher.net/"],
  ["Useful YouTube Playlist", "Watch", "A playlist of tutorials and explainers.", "Watch", "https://www.youtube.com/playlist?list=PLeqQwVXN9vxE"],
  ["Valtaris", "Valtaris", "The official Valtaris website. Join the community.", "Visit site", "https://realhake5.github.io/Valtaris"],
  ["Global Countdown", "Fun", "A countdown website with an end-of-the-world theme.", "Visit site", "https://realhake5.github.io/Global-Countdown"],
  ["1TUBE", "Watch", "Stream your favourite movies in one place.", "Watch now", "https://1tube.org"],
  ["Dulo", "Watch", "A High-Quality video streaming platform.", "Visit site", "https://dulo.cx"],
  ["Acedly", "AI", "A Studying app yeah studying.", "Visit site", "https://app.acedly.co"],
  ["Cinevo", "Watch", "A High-Quality video streaming platform. & play games.", "Visit site", "https://cinevo.nl/"],
  ["cinezone1", "Watch", "Watch movies and web series.", "Visit site", "https://cinezo.gd"],
  ["cinezone2", "Watch", "Watch movies and web series.", "Visit site", "https://cinezo.org"],
  ["arrowtv", "Watch", "Watch movies and web series. yea thats it", "Visit site", "https://arrowtv.net"],
  ["cinehd", "Watch", "Watch movies and web series.", "Visit site", "https://cinehd.app/home"],
  ["Goated", "Watch", "Watch movies and web series.", "Visit site", "https://goated.cx"],
  ["Nepu", "Watch", "Watch movies and web series.", "Visit site", "https://nepu.to"],
  ["ankergames", "Play", "Play games online.", "Visit site", "https://ankergames.net"],
  ["Filmex", "Watch", "Watch movies and web series.", "Visit site", "https://filmex.to"],
  ["bcine", "Watch", "Watch movies and web series.", "Visit site", "https://bcine.ru"],
  ["MyFlixer", "Watch", "Watch movies and web series.", "Visit site", "https://myflixerfree.net/home"],
  ["Vidflix", "Watch", "Watch movies and web series.", "Visit site", "https://vidflix.live/"],
  ["boredflix", "Watch", "Watch movies and web series.", "Visit site", "https://boredflix.tv/"],
  ["Bingr", "Watch", "Watch movies and web series.", "Visit site", "https://bingr.one/home"],
  ["cineby", "Watch", "Watch movies and web series.", "Visit site", "https://www.cineby.at/"],
  ["cinevaro", "Watch", "Watch movies and web series.", "Visit site", "https://cinevaro.app/"],
  ["NoveHD", "Watch", "High-quality video streaming platform.", "Visit site", "https://novehd.cc/"],
  ["fluxtv", "Watch", "High-quality video streaming platform.", "Visit site", "https://fluxtv.cc/"],
  ["cinebest", "Watch", "High-quality video streaming platform.", "Visit site", "https://cinebest.net/"],
  ["skyflix", "Watch", "High-quality video streaming platform.", "Visit site", "https://skyflix.to/"],
  ["cinejoy", "Watch", "High-quality video streaming platform.", "Visit site", "https://cinejoy.to/"],
  ["rd9sports", "Sports", "Watch live sports events and highlights.", "Visit site", "https://rd9sports.com/"],
  
].map(([title, type, description, buttonText, link]) => ({ title, type, description, buttonText, link }));

const grid = document.querySelector("#library-grid");
const searchBox = document.querySelector("#search-box");
const categoryContainer = document.querySelector("#category-container");
const count = document.querySelector("#result-count");
const clearSearch = document.querySelector("#clear-search");
const activeFilter = document.querySelector("#active-filter");
const filterLabel = document.querySelector("#filter-label");
const updates = document.querySelector("#updates");
const updatesTrigger = document.querySelector("#updates-trigger");
const updatesPanel = document.querySelector("#updates-panel");
const updatesList = document.querySelector("#updates-list");
const updatesCount = document.querySelector("#updates-count");
const updatesBadge = document.querySelector("#updates-badge");
let selectedCategory = "All";

function readFiltersFromUrl() {
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  selectedCategory = categories.some(({ name }) => name === category) ? category : "All";
  searchBox.value = params.get("q") || "";
}

readFiltersFromUrl();

function domainFor(url) { try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return "External link"; } }
function updateUrl() {
  const params = new URLSearchParams();
  if (selectedCategory !== "All") params.set("category", selectedCategory);
  if (searchBox.value.trim()) params.set("q", searchBox.value.trim());
  try {
    history.replaceState(null, "", `${location.pathname}${params.size ? `?${params}` : ""}`);
  } catch {
    // Some embedded or privacy-restricted browsers do not allow history updates.
  }
}
function renderCategories() {
  categoryContainer.replaceChildren(...categories.map(({ name, icon }) => {
    const button = document.createElement("button");
    button.className = "category"; button.type = "button"; button.setAttribute("aria-pressed", String(name === selectedCategory));
    button.innerHTML = `<i class="fa-solid ${icon}" aria-hidden="true"></i>${name}`;
    button.addEventListener("click", () => { selectedCategory = name; render(); });
    return button;
  }));
}
function render() {
  const query = searchBox.value.trim().toLowerCase();
  const results = libraryItems.filter((item) => (selectedCategory === "All" || item.type === selectedCategory) && [item.title, item.type, item.description].some((value) => value.toLowerCase().includes(query)));
  renderCategories(); updateUrl(); clearSearch.hidden = !query;
  count.textContent = `${results.length} ${results.length === 1 ? "tool" : "tools"} found`;
  const labels = [selectedCategory !== "All" ? selectedCategory : "", query ? `matching “${searchBox.value.trim()}”` : ""].filter(Boolean);
  activeFilter.hidden = labels.length === 0; filterLabel.textContent = labels.length ? `Showing ${labels.join(" · ")}` : "";
  if (!results.length) { grid.innerHTML = `<div class="empty-state"><i class="fa-solid fa-satellite-dish"></i><h3>No tools found</h3><p>Try a different search term or reset your filters.</p></div>`; return; }
  grid.replaceChildren(...results.map((item) => createCard(item)));
}
function createCard(item) {
  const card = document.createElement("article"); card.className = "card";
  const safeLink = item.link.startsWith("https://") ? item.link : "#";
  card.innerHTML = `<div class="card-top"><span class="badge"><i class="fa-solid ${categories.find((category) => category.name === item.type)?.icon || "fa-link"}" aria-hidden="true"></i>${item.type}</span><span class="domain" title="${domainFor(safeLink)}">${domainFor(safeLink)}</span></div><h3>${item.title}</h3><p>${item.description}</p><a class="btn" href="${safeLink}" target="_blank" rel="noopener noreferrer">${item.buttonText}<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`;
  return card;
}

function renderUpdates() {
  updatesCount.textContent = `${updateLogs.length} ${updateLogs.length === 1 ? "update" : "updates"}`;
  updatesBadge.textContent = updateLogs.length > 9 ? "9+" : updateLogs.length;
  updatesBadge.hidden = updateLogs.length === 0;
  if (!updateLogs.length) {
    updatesList.innerHTML = `<div class="updates-empty"><i class="fa-regular fa-face-smile" aria-hidden="true"></i><p>You're all caught up.</p></div>`;
    return;
  }
  updatesList.replaceChildren(...updateLogs.map(({ date, title, description, icon = "fa-circle-info" }) => {
    const entry = document.createElement("article");
    entry.className = "update-entry";
    entry.innerHTML = `<div class="update-marker"><i class="fa-solid ${icon}" aria-hidden="true"></i></div><div><p class="update-date">${date}</p><h3>${title}</h3><p>${description}</p></div>`;
    return entry;
  }));
}

function setUpdatesOpen(isOpen) {
  updatesPanel.hidden = !isOpen;
  updatesTrigger.setAttribute("aria-expanded", String(isOpen));
}

updatesTrigger.addEventListener("click", () => setUpdatesOpen(updatesPanel.hidden));
document.addEventListener("click", (event) => {
  if (!updates.contains(event.target)) setUpdatesOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !updatesPanel.hidden) {
    setUpdatesOpen(false);
    updatesTrigger.focus();
  }
});
renderUpdates();

searchBox.addEventListener("input", render);
clearSearch.addEventListener("click", () => { searchBox.value = ""; searchBox.focus(); render(); });
document.querySelector("#reset-filters").addEventListener("click", () => { selectedCategory = "All"; searchBox.value = ""; render(); });
window.addEventListener?.("popstate", () => { readFiltersFromUrl(); render(); });

const toast = document.querySelector("#toast"); let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2500); }

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const fallback = document.createElement("textarea");
  fallback.value = text;
  fallback.setAttribute("readonly", "");
  fallback.style.position = "fixed";
  fallback.style.opacity = "0";
  document.body.append(fallback);
  fallback.select();
  const copied = document.execCommand?.("copy");
  fallback.remove();
  if (!copied) throw new Error("Clipboard access is unavailable");
}

document.querySelector("#share-btn").addEventListener("click", async () => {
  const shareData = { title: document.title, text: "Explore UniToolz — a curated library of software, media, games, and more.", url: location.href };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await copyText(location.href);
      showToast("Link copied to your clipboard.");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("Unable to share this page right now.");
  }
});

const visitsKey = "unitoolz-local-visits";
const viewCount = document.querySelector("#view-count");
try {
  const storedVisits = Number.parseInt(localStorage.getItem(visitsKey), 10);
  const visits = (Number.isSafeInteger(storedVisits) && storedVisits >= 0 ? storedVisits : 0) + 1;
  localStorage.setItem(visitsKey, String(visits));
  viewCount.textContent = visits.toLocaleString();
} catch {
  viewCount.textContent = "—";
  viewCount.parentElement.title = "Visit counting is unavailable in this browser";
}

const stars = document.querySelector("#star-container");
if (!(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false)) {
  for (let i = 0; i < 110; i += 1) { const star = document.createElement("i"); star.className = "star"; star.style.left = `${Math.random() * 100}%`; star.style.top = `${Math.random() * 100}%`; star.style.setProperty("--size", `${Math.random() * 2.5 + .5}px`); star.style.setProperty("--opacity", Math.random() * .7 + .15); star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`); stars.append(star); }
  const glow = document.querySelector("#cursor-glow"); document.addEventListener("pointermove", (event) => { glow.style.opacity = "1"; glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }); document.addEventListener("pointerleave", () => { glow.style.opacity = "0"; });
}
render();
