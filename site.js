// ═══════════════════════════════════════
//  窩在焙裡 — site.js
//  品牌首頁專用腳本（與 planner.js 分開）
// ═══════════════════════════════════════

// ── 預設精選照片（未設定時顯示此清單）────
// 可以用 photo-select.html 工具自由選擇要顯示的照片
const FEATURED_PHOTOS = [
  "咖啡廳照片/裝潢/S__25042946.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_1.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_2.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_3.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_4.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_5.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_8.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_9.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_17.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_18.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_23.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_24.jpg",
  "咖啡廳照片/餐點/S__25034755_0.jpg",
  "咖啡廳照片/餐點/S__25034756_0.jpg",
  "咖啡廳照片/餐點/S__25034757_0.jpg",
  "咖啡廳照片/餐點/S__25034758_0.jpg",
  "咖啡廳照片/餐點/S__25034759_0.jpg",
  "咖啡廳照片/餐點/S__25034760_0.jpg",
  "咖啡廳照片/餐點/S__25034761_0.jpg",
  "咖啡廳照片/餐點/S__25034762_0.jpg",
  "咖啡廳照片/餐點/S__25034763_0.jpg",
];

// ── 讀取 photo-select.html 的自訂選擇 ───
function getActivePhotos() {
  try {
    const raw = localStorage.getItem("wob_featured_photos");
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr) && arr.length > 0) return arr;
    }
  } catch (e) {}
  return FEATURED_PHOTOS;
}

// ── Photo Library ──────────────────────
// 裝潢：取前 27 張（跳過少數純施工材料照）
const renovationPhotos = [
  "咖啡廳照片/裝潢/S__25042946.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_1.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_2.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_3.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_4.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_5.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_6.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_7.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_8.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_9.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_10.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_11.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_12.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_13.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_14.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_15.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_16.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_17.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_18.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_19.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_20.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_21.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_22.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_23.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_24.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_25.jpg",
  "咖啡廳照片/裝潢/LINE_ALBUM_20260404現場照片_260423_26.jpg",
];

// 餐點：全部 9 張
const foodPhotos = [
  "咖啡廳照片/餐點/S__25034755_0.jpg",
  "咖啡廳照片/餐點/S__25034756_0.jpg",
  "咖啡廳照片/餐點/S__25034757_0.jpg",
  "咖啡廳照片/餐點/S__25034758_0.jpg",
  "咖啡廳照片/餐點/S__25034759_0.jpg",
  "咖啡廳照片/餐點/S__25034760_0.jpg",
  "咖啡廳照片/餐點/S__25034761_0.jpg",
  "咖啡廳照片/餐點/S__25034762_0.jpg",
  "咖啡廳照片/餐點/S__25034763_0.jpg",
];

const allPhotos = [...renovationPhotos, ...foodPhotos];

// ── Helpers ────────────────────────────
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  }[c]));
}

function detectCategory(path) {
  return path.includes("/裝潢/") ? "裝潢" : "餐點";
}

// ── Gallery ────────────────────────────
let activeFilter = "all";
const galleryGrid = document.getElementById("gallery-grid");

function buildCard(path) {
  const cat = detectCategory(path);
  const card = document.createElement("article");
  card.className = "gallery-card";
  card.dataset.cat = cat;

  const img = document.createElement("img");
  img.src = encodeURI(path);
  img.alt = `${cat}照片`;
  img.loading = "lazy";
  img.decoding = "async";

  const copy = document.createElement("div");
  copy.className = "gallery-copy";
  copy.innerHTML = `<span class="card-tag">${escapeHtml(cat)}</span>`;

  card.appendChild(img);
  card.appendChild(copy);
  return card;
}

function renderGallery(filter = "all") {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = "";
  const active = getActivePhotos();
  const photos = filter === "all"
    ? active
    : active.filter(p => detectCategory(p) === filter);

  photos.forEach(path => {
    galleryGrid.appendChild(buildCard(path));
  });

  // Re-observe new cards
  document.querySelectorAll(".gallery-card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    revealObserver.observe(el);
  });
}

// ── Filter buttons ──────────────────────
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderGallery(activeFilter);
  });
});

// ── IntersectionObserver (reveal) ───────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      // Gallery card
      if (el.classList.contains("gallery-card")) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        revealObserver.unobserve(el);
      } else {
        el.classList.add("visible");
        revealObserver.unobserve(el);
      }
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(el => {
  revealObserver.observe(el);
});

// ── Sticky topbar scroll effect ─────────
const topbar = document.getElementById("topbar");
if (topbar) {
  window.addEventListener("scroll", () => {
    topbar.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
}

// ── Init gallery ────────────────────────
renderGallery();
