(function () {
  if (window.__cliffsBrandingReady) return;
  window.__cliffsBrandingReady = true;

  const BRAND = {
    name: "Cliffs HALLAYM",
    fullName: "Cliffs HALLAYM platformasi",
    phone: "+998 97 679 10 99",
    shortPhone: "+998 97 679 10 99",
    address: "Qarshi shahri, QarDU eski darvozasi yonida",
    landmark: "Mo'ljal: eski darvoza hududi, aniq lokatsiya telefon orqali yuboriladi",
    workHours: [
      "Dushanba - Shanba: 08:30 - 20:00",
      "Yakshanba: maslahat va qabul kuni"
    ],
    directions: [
      {
        name: "Dasturlash Foundation",
        programs: ["Scratch", "Python Start", "Kompyuter savodxonligi", "Algoritm asoslari"]
      },
      {
        name: "Frontend va Web Development",
        programs: ["HTML & CSS", "JavaScript", "React", "Portfolio va freelancing"]
      },
      {
        name: "Backend va Node.js",
        programs: ["Node.js", "Express", "MongoDB", "API va deploy"]
      },
      {
        name: "Python va Sun'iy Intellekt",
        programs: ["Python Pro", "Data Science", "Machine Learning", "AI tools"]
      },
      {
        name: "Robototexnika va Arduino",
        programs: ["Arduino", "Sensor va avtomatika", "LEGO Robotics", "Smart project"]
      },
      {
        name: "Grafik Dizayn",
        programs: ["Photoshop", "Illustrator", "Figma", "Motion basics"]
      },
      {
        name: "SMM va Kontent Marketing",
        programs: ["SMM Strategiya", "Target", "Kontent Plan", "Shaxsiy brend"]
      },
      {
        name: "Ingliz tili",
        programs: ["General English", "Speaking Club", "Grammar Pro", "Kids English"]
      },
      {
        name: "IELTS va CEFR",
        programs: ["IELTS Foundation", "IELTS Intensive", "CEFR B1-B2", "Mock exam"]
      },
      {
        name: "Rus tili",
        programs: ["Beginner", "Grammar", "Speaking", "Academic Russian"]
      },
      {
        name: "Arab tili",
        programs: ["Alifbo", "Nahv", "Muloqot", "Matn bilan ishlash"]
      },
      {
        name: "Matematika va Mantiq",
        programs: ["Abituriyent matematika", "Olimpiada", "Mental math", "Mantiqiy fikrlash"]
      },
      {
        name: "Fizika va Kimyo",
        programs: ["Abituriyent fizika", "Laboratoriya mashg'ulotlari", "Kimyo foundation", "Masala yechish"]
      },
      {
        name: "Kids Coding va IT Junior",
        programs: ["Scratch Kids", "Robotics Kids", "Digital Literacy", "Creative Tech"]
      }
    ],
    studyTypes: ["Offline", "Online", "Hybrid", "Intensiv", "Individual", "Weekend"],
    groups: {
      Offline: ["Morning 08:30", "Day 10:30", "Afternoon 14:00", "Evening 18:30"],
      Online: ["Online Live 09:00", "Online Live 15:00", "Online Evening 20:00"],
      Hybrid: ["Hybrid Flex A", "Hybrid Flex B"],
      Intensiv: ["Intensiv 5 kun", "Intensiv 8 hafta"],
      Individual: ["Personal Mentor"],
      Weekend: ["Saturday Group", "Sunday Group"]
    }
  };
  window.__CLIFFS_BRAND = BRAND;
  const THEME_KEY = "cliffs-theme";

  const PATH = (window.location.pathname || "").toLowerCase();
  const IS_INDEX = /\/(index|index71|index77|index0112)?\.html$/.test(PATH) || PATH === "/";
  const IS_LOGIN = PATH.includes("login");
  const IS_REGISTER = PATH.includes("register");
  const IS_DASH = PATH.includes("dashboard");
  const IS_COURSE = PATH.includes("course");
  const IS_TEST = PATH.includes("test");

  function injectBrandStyles() {
    if (!document.querySelector('link[href="/cliffs-branding.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/cliffs-branding.css";
      document.head.appendChild(link);
    }
    if (!document.getElementById("cliffs-branding-override")) {
      const style = document.createElement("style");
      style.id = "cliffs-branding-override";
      style.textContent = `
        body.cliffs-branding #schatAssistantBtn {
          background: linear-gradient(135deg, #111111, #ff7a00) !important;
          border-color: rgba(255,122,0,.26) !important;
          color: #fff4ea !important;
        }
        body.cliffs-branding #schatAssistantPanel {
          background: linear-gradient(180deg, rgba(10,10,10,.95), rgba(31,22,16,.94)) !important;
          border-color: rgba(255,122,0,.18) !important;
        }
        body.cliffs-branding .schatATab.active,
        body.cliffs-branding .schatABtn.primary {
          background: linear-gradient(135deg, #ff9a39, #ff7a00) !important;
          color: #fff6ee !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  function getPreferredTheme() {
    try {
      const saved = window.localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (_) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme() {
    const theme = getPreferredTheme();
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
  }

  function normalizeMojibake(value) {
    return String(value || "")
      .replace(/вЂ”/g, " - ")
      .replace(/вЂ|вЂ™/g, "'")
      .replace(/вЂњ|вЂќ/g, '"')
      .replace(/вЂ¦/g, "...")
      .replace(/â€”/g, " - ")
      .replace(/â€™/g, "'")
      .replace(/â€œ|â€/g, '"')
      .replace(/рџЊ“/g, "")
      .replace(/рџ‘‰/g, "");
  }

  function replaceBrandStrings(value) {
    let text = normalizeMojibake(value);
    const replacements = [
      [/HALLAYM\s*edu/gi, BRAND.fullName],
      [/QDTU\s*LMS/gi, BRAND.fullName],
      [/Qarshi Davlat Texnika Universiteti/gi, BRAND.fullName],
      [/Qarshi Davlat Universiteti/gi, BRAND.fullName],
      [/Samarqand Davlat Universiteti/gi, BRAND.fullName],
      [/Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti \(TATU\)/gi, BRAND.fullName],
      [/Teacher Dashboard/gi, "Mentor paneli"],
      [/Student Dashboard/gi, "O'quvchi paneli"],
      [/Teacher Register/gi, "Mentor ro'yxati"],
      [/Kurslar katalogi/gi, "Cliffs HALLAYM yo'nalishlari"],
      [/Campus Signal/gi, "Cliffs Alert"],
      [/Universitetni tanlang/gi, "Markazni tanlang"],
      [/Fakultetni tanlang/gi, "Yo'nalishni tanlang"],
      [/Fakultet \(barchasi\)/gi, "Yo'nalish (barchasi)"],
      [/Fakultet/gi, "Yo'nalish"],
      [/\bfaculty\b/gi, "direction"],
      [/O'quv turini tanlang/gi, "Formatni tanlang"],
      [/O'quv guruhini tanlang/gi, "Guruh yoki vaqtni tanlang"],
      [/\bUniversity\b/gi, "Center"],
      [/\buniversity\b/gi, "center"]
    ];
    replacements.forEach(([pattern, next]) => {
      text = text.replace(pattern, next);
    });
    return text;
  }

  function patchFetchCatalogs() {
    if (window.__cliffsFetchPatched || typeof window.fetch !== "function") return;
    window.__cliffsFetchPatched = true;
    const nativeFetch = window.fetch.bind(window);

    function jsonResponse(payload) {
      return Promise.resolve(new Response(JSON.stringify(payload), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }));
    }

    function getPrograms(faculty) {
      return BRAND.directions
        .filter((item) => !faculty || item.name === faculty)
        .flatMap((item, index) =>
          item.programs.map((program, inner) => ({
            code: `CH-${String(index + 1).padStart(2, "0")}${String(inner + 1).padStart(2, "0")}`,
            name: program,
            faculty: item.name
          }))
        );
    }

    window.fetch = function (resource, init) {
      const urlValue = typeof resource === "string" ? resource : (resource && resource.url) || "";
      let url;
      try {
        url = new URL(urlValue, window.location.origin);
      } catch (_) {
        return nativeFetch(resource, init);
      }

      if (url.pathname === "/api/catalog/universities") {
        return jsonResponse({ success: true, universities: [{ name: BRAND.fullName }] });
      }

      if (url.pathname === "/api/catalog/faculties") {
        return jsonResponse({ success: true, faculties: BRAND.directions.map((item) => item.name) });
      }

      if (url.pathname === "/api/catalog/study-types") {
        const faculty = url.searchParams.get("faculty") || "";
        return jsonResponse({
          success: true,
          studyTypes: BRAND.studyTypes.map((name) => ({ _id: name, name, faculty }))
        });
      }

      if (url.pathname === "/api/catalog/study-groups") {
        const faculty = url.searchParams.get("faculty") || "";
        const studyType = url.searchParams.get("studyType") || BRAND.studyTypes[0];
        const list = BRAND.groups[studyType] || [];
        return jsonResponse({
          success: true,
          studyGroups: list.map((name) => ({ _id: `${studyType}-${name}`, name, faculty, studyType }))
        });
      }

      if (url.pathname === "/api/catalog/programs") {
        const faculty = url.searchParams.get("faculty") || "";
        return jsonResponse({ success: true, programs: getPrograms(faculty) });
      }

      return nativeFetch(resource, init);
    };
  }

  function renderLogo() {
    return `
      <span class="cliffs-brand-logo" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M21 69.5C14.7 63.2 11 54.5 11 44.9C11 26.6 25.9 12 44.1 12C56.3 12 67.2 18.5 73 28.1" stroke="#090909" stroke-width="10" stroke-linecap="round"/>
          <path d="M72 72C65.8 77.2 57.8 80.3 49 80.3" stroke="#090909" stroke-width="10" stroke-linecap="round"/>
          <path d="M38 24C50 24 59.7 33.7 59.7 45.7" stroke="#ff7a00" stroke-width="10" stroke-linecap="round"/>
          <path d="M38 24V78" stroke="#ff7a00" stroke-width="10" stroke-linecap="round"/>
          <path d="M38 49H61" stroke="#ff7a00" stroke-width="10" stroke-linecap="round"/>
        </svg>
      </span>
    `;
  }

  function setBodyClasses() {
    document.documentElement.classList.add("cliffs-theme");
    if (document.body) {
      document.body.classList.add("cliffs-branding");
      document.body.classList.add("uni-theme-body");
      document.body.dataset.brand = "cliffs-hallaym";
    }
  }

  function applyMeta() {
    const map = [
      { hit: IS_INDEX, title: `${BRAND.name} | Zamonaviy o'quv markaz`, desc: "Cliffs HALLAYM o'quv markazi: manzil, qabul, mentorlar, yo'nalishlar va dars jarayoni haqidagi to'liq ma'lumot." },
      { hit: IS_LOGIN, title: `Kirish | ${BRAND.name}`, desc: `${BRAND.name} platformasiga xavfsiz kirish.` },
      { hit: IS_REGISTER, title: `Ro'yxatdan o'tish | ${BRAND.name}`, desc: `${BRAND.name} yo'nalishlariga tezkor ro'yxatdan o'ting.` },
      { hit: IS_DASH, title: `${BRAND.name} paneli`, desc: `${BRAND.name} markazidagi kundalik dars va nazorat jarayonlari uchun boshqaruv paneli.` },
      { hit: IS_COURSE, title: `Yo'nalishlar | ${BRAND.name}`, desc: `${BRAND.name} markazining kurs yo'nalishlari, dars bloklari va o'quv jarayonlari.` },
      { hit: IS_TEST, title: `Testlar | ${BRAND.name}`, desc: `${BRAND.name} markazidagi diagnostika va yakuniy nazorat testlari.` }
    ];
    const active = map.find((item) => item.hit) || map[0];
    document.title = active.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = active.desc;
  }

  function updateHomeAnchors() {
    const anchors = Array.from(document.querySelectorAll('header a[href="/index.html"], header a[href="/"]'));
    anchors.slice(0, 2).forEach((anchor) => {
      if (anchor.dataset.cliffsBranded === "1") return;
      anchor.dataset.cliffsBranded = "1";
      anchor.classList.add("cliffs-brand-anchor");
      anchor.innerHTML = `
        ${renderLogo()}
        <span class="cliffs-brand-copy">
          <span class="cliffs-brand-kicker">Orange Black Edition</span>
          <span class="cliffs-brand-title">${BRAND.name}</span>
        </span>
      `;
    });
  }

  function updateFooter() {
    Array.from(document.querySelectorAll("footer")).forEach((footer) => {
      footer.innerHTML = `${BRAND.fullName} · Barcha yo'nalishlar bir platformada · Aloqa: <a href="tel:${BRAND.phone.replace(/\s+/g, "")}">${BRAND.phone}</a>`;
    });
  }

  function refreshFooterText() {
    Array.from(document.querySelectorAll("footer")).forEach((footer) => {
      footer.innerHTML = `${BRAND.fullName} · Qarshi shahri · Aloqa: <a href="tel:${BRAND.phone.replace(/\s+/g, "")}">${BRAND.phone}</a>`;
    });
  }

  function ensureContactStrip() {
    if (IS_INDEX) return;
    if (document.getElementById("cliffs-contact-strip")) return;
    const header = document.querySelector("body > header, header");
    if (!header || !header.parentNode) return;

    const wrap = document.createElement("div");
    wrap.id = "cliffs-contact-strip";
    wrap.className = "cliffs-contact-strip";
    wrap.innerHTML = `
      <div class="cliffs-contact-shell">
        <div class="cliffs-contact-copy">
          <span class="cliffs-contact-chip"><strong>${BRAND.name}</strong></span>
          <span class="cliffs-contact-chip">Telefon: <strong>${BRAND.shortPhone}</strong></span>
          <span class="cliffs-contact-chip">Yo'nalishlar: 14+</span>
        </div>
        <div class="cliffs-contact-actions">
          <a href="tel:${BRAND.phone.replace(/\s+/g, "")}">Qo'ng'iroq qilish</a>
        </div>
      </div>
    `;
    header.insertAdjacentElement("afterend", wrap);
  }

  function ensureFloatingCall() {
    if (document.getElementById("cliffs-floating-call")) return;
    const a = document.createElement("a");
    a.id = "cliffs-floating-call";
    a.className = "cliffs-floating-call";
    a.href = `tel:${BRAND.phone.replace(/\s+/g, "")}`;
    a.innerHTML = `
      <span class="cliffs-mini-dot" aria-hidden="true"></span>
      <span>
        <strong>Cliffs Call</strong>
        <span>${BRAND.shortPhone}</span>
      </span>
    `;
    document.body.appendChild(a);
  }

  function ensureSummaryCard() {
    if (IS_INDEX || IS_LOGIN || IS_REGISTER) return;
    if (document.getElementById("cliffs-summary-shell")) return;
    const host = document.querySelector("main .container, body > .container, main, .container");
    if (!host) return;
    const wrap = document.createElement("div");
    wrap.id = "cliffs-summary-shell";
    wrap.className = "cliffs-summary-shell";
    wrap.innerHTML = `
      <div class="cliffs-summary-card">
        <div class="cliffs-summary-kicker">Cliffs HALLAYM</div>
        <div class="cliffs-summary-title">${IS_DASH ? "Kundalik boshqaruv" : "Markaz haqida asosiy ma'lumot"} uchun yagona panel</div>
        <div class="cliffs-summary-text">
          Qabul, guruhlar, yo'nalishlar, nazorat va aloqa ma'lumotlari bir joyda ko'rinishi uchun sahifalar Cliffs HALLAYM uslubiga moslandi.
        </div>
        <div class="cliffs-summary-stats">
          <div class="cliffs-stat"><strong>14+</strong><span>Asosiy yo'nalish</span></div>
          <div class="cliffs-stat"><strong>Online/Offline</strong><span>Har xil formatdagi guruhlar</span></div>
          <div class="cliffs-stat"><strong>${BRAND.shortPhone}</strong><span>Tezkor aloqa markazi</span></div>
        </div>
        <div class="cliffs-direction-grid">
          ${BRAND.directions.slice(0, 8).map((item) => `<span class="cliffs-tag">${item.name}</span>`).join("")}
        </div>
      </div>
    `;
    host.insertAdjacentElement("afterbegin", wrap);
  }

  function updateTextNodes(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node || !node.parentElement) return NodeFilter.FILTER_REJECT;
        const tag = node.parentElement.tagName;
        if (/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|CODE|PRE)$/i.test(tag)) return NodeFilter.FILTER_REJECT;
        const value = node.nodeValue || "";
        if (!value.trim()) return NodeFilter.FILTER_REJECT;
        if (!/(hallaym|qdtu|universitet|university|faculty|student dashboard|teacher dashboard|campus|вЂ|â€|teacher register|kurslar katalogi)/i.test(value)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const edits = [];
    while (walker.nextNode()) edits.push(walker.currentNode);
    edits.forEach((node) => {
      const next = replaceBrandStrings(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    });
  }

  function updateAttributes() {
    Array.from(document.querySelectorAll("[placeholder], [title], option")).forEach((el) => {
      if (el.hasAttribute("placeholder")) {
        el.setAttribute("placeholder", replaceBrandStrings(el.getAttribute("placeholder")));
      }
      if (el.hasAttribute("title")) {
        el.setAttribute("title", replaceBrandStrings(el.getAttribute("title")));
      }
      if (el.tagName === "OPTION") {
        const next = replaceBrandStrings(el.textContent);
        if (next !== el.textContent) el.textContent = next;
      }
    });
  }

  function setSelectOptions(select, items, placeholder, keepEmpty) {
    if (!select) return;
    const current = select.value;
    const expected = items.join("||");
    if (select.dataset.cliffsOptions === expected && (!placeholder || select.options[0])) return;

    const parts = [];
    if (placeholder !== null) {
      parts.push(`<option value="">${placeholder || ""}</option>`);
    }
    items.forEach((item) => {
      parts.push(`<option value="${item.replace(/"/g, "&quot;")}">${item}</option>`);
    });
    select.innerHTML = parts.join("");
    select.dataset.cliffsOptions = expected;
    if (keepEmpty) {
      select.value = "";
    } else if (items.includes(current)) {
      select.value = current;
    } else if (items.length) {
      select.value = items[0];
    }
  }

  function updateFormLabels() {
    const labelFixes = [
      ["universitySelect", "Markaz"],
      ["facultySelect", "Yo'nalish"],
      ["studyTypeSelect", "Ta'lim formati"],
      ["studyGroupSelect", "Guruh yoki vaqt"],
      ["c_faculty", "Yo'nalish"],
      ["facultyFilter", "Yo'nalish"],
      ["t_faculty", "Yo'nalish"]
    ];

    labelFixes.forEach(([id, title]) => {
      const field = document.getElementById(id);
      if (!field) return;
      const prev = field.previousElementSibling;
      if (prev && /^(DIV|LABEL|SPAN)$/i.test(prev.tagName)) {
        prev.textContent = title;
      }
    });
  }

  function applyCatalogFields() {
    const directions = BRAND.directions.map((item) => item.name);
    setSelectOptions(document.getElementById("universitySelect"), [BRAND.fullName], "Markazni tanlang", false);
    setSelectOptions(document.getElementById("facultySelect"), directions, "Yo'nalishni tanlang", true);
    setSelectOptions(document.getElementById("studyTypeSelect"), BRAND.studyTypes, "Formatni tanlang", true);

    const studyType = document.getElementById("studyTypeSelect");
    const groups = BRAND.groups[(studyType && studyType.value) || BRAND.studyTypes[0]] || [];
    setSelectOptions(document.getElementById("studyGroupSelect"), groups, "Guruh yoki vaqtni tanlang", true);
    setSelectOptions(document.getElementById("c_faculty"), directions, null, false);
    setSelectOptions(document.getElementById("t_faculty"), directions, null, false);

    const facultyFilter = document.getElementById("facultyFilter");
    if (facultyFilter) {
      const current = facultyFilter.value;
      facultyFilter.innerHTML = ['<option value="">Yo\'nalish (barchasi)</option>']
        .concat(directions.map((item) => `<option value="${item.replace(/"/g, "&quot;")}">${item}</option>`))
        .join("");
      if (current && directions.includes(current)) facultyFilter.value = current;
    }
  }

  function bindCatalogDependents() {
    const studyType = document.getElementById("studyTypeSelect");
    const studyGroup = document.getElementById("studyGroupSelect");
    if (studyType && studyGroup && !studyType.dataset.cliffsBound) {
      studyType.dataset.cliffsBound = "1";
      studyType.addEventListener("change", function () {
        setSelectOptions(studyGroup, BRAND.groups[studyType.value] || [], "Guruh yoki vaqtni tanlang", true);
      });
    }
  }

  function patchStandaloneTexts() {
    ["contextLine", "joinHint", "c_materialHint", "roleBadge"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = replaceBrandStrings(el.textContent);
    });
  }

  function applyBrandingPass(root) {
    updateTextNodes(root || document.body);
    updateAttributes();
    updateHomeAnchors();
    updateFooter();
    refreshFooterText();
    updateFormLabels();
    applyCatalogFields();
    bindCatalogDependents();
    patchStandaloneTexts();
  }

  function initMutationWatcher() {
    if (!document.body || window.__cliffsObserverReady) return;
    window.__cliffsObserverReady = true;
    let timer = null;
    const observer = new MutationObserver(() => {
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => applyBrandingPass(document.body), 140);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function boot() {
    applyTheme();
    injectBrandStyles();
    patchFetchCatalogs();
    setBodyClasses();
    applyMeta();
    ensureContactStrip();
    ensureSummaryCard();
    ensureFloatingCall();
    applyBrandingPass(document.body);
    initMutationWatcher();
    window.setTimeout(() => applyBrandingPass(document.body), 350);
    window.setTimeout(() => applyBrandingPass(document.body), 1200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
