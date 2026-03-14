(function () {
  if (window.__cliffsLandingReady) return;
  window.__cliffsLandingReady = true;

  const THEME_KEY = "cliffs-theme";
  const brand = window.__CLIFFS_BRAND || {};

  const FALLBACK_DATA = {
    center: {
      name: brand.fullName || "Cliffs HALLAYM platformasi",
      brandName: brand.name || "Cliffs HALLAYM",
      phone: brand.phone || "+998 97 679 10 99",
      address: brand.address || "Qarshi shahri, QarDU eski darvozasi yonida",
      landmark: brand.landmark || "Mo'ljal: eski darvoza hududi, aniq lokatsiya telefon orqali yuboriladi",
      mapQuery: "Qarshi shahri QarDU eski darvozasi yonida Cliffs HALLAYM o'quv markazi",
      workHours: brand.workHours || [
        "Dushanba - Shanba: 08:30 - 20:00",
        "Yakshanba: maslahat va qabul kuni"
      ],
      heroTitle: "Qarshida farzandlar va yoshlar uchun tartibli, kuchli va zamonaviy o'qish muhiti.",
      headline: "Farzandlar, abituriyentlar va yangi kasb o'rganayotgan yoshlar uchun natijaga yo'naltirilgan markaz.",
      summary: "Cliffs HALLAYM markazida guruhlar darajaga qarab shakllanadi, darslar muntazam nazorat qilinadi va ota-ona yoki o'quvchi bilan aloqa uzilmaydi.",
      extended: "Darslar davomida mavzu tushuntirish, amaliy mashq, uyga vazifa, test va mentor izohi bir-biriga bog'langan holda olib boriladi.",
      stats: [
        { value: "14+", label: "asosiy yo'nalish" },
        { value: "2", label: "o'qish formati" },
        { value: "08:30-20:00", label: "kundalik ish vaqti" },
        { value: "1", label: "yagona markaz tizimi" }
      ]
    },
    heroBullets: [
      "Offline va online guruhlar",
      "Boshlang'ichdan chuqurroq tayyorlovgacha bo'lgan oqimlar",
      "Mentor kuzatuvi, test va topshiriq nazorati muntazam olib boriladi",
      "Telefon orqali qabul, yo'naltirish va guruh tanlash tezda amalga oshiriladi"
    ],
    features: [
      {
        tag: "Qabul",
        title: "Darajaga qarab yo'naltirish",
        text: "Yangi kelgan o'quvchi bilan qisqa suhbat qilinadi, mavjud darajasi aniqlanadi va vaqtiga mos guruh tavsiya etiladi.",
        note: "Birinchi qadamda chalkashlik qolmaydi."
      },
      {
        tag: "Nazorat",
        title: "Dars jarayoni muntazam kuzatiladi",
        text: "Uy vazifasi, kichik testlar va mentor izohlari orqali o'quvchi qayerda kuchli yoki qayerda yordamga muhtojligi ko'rinib boradi.",
        note: "Natija tasodifga tashlab qo'yilmaydi."
      },
      {
        tag: "Muhit",
        title: "O'quvchi o'zini erkin his qiladigan atmosfera",
        text: "Suhbat, speaking, loyiha va amaliy mashg'ulotlar oddiy tinglab o'tirish emas, faol qatnashish tamoyili bilan olib boriladi.",
        note: "Kichik guruh formatida ishlash qulay."
      },
      {
        tag: "Vaqt",
        title: "Turli kun tartibiga mos guruhlar",
        text: "Maktab, universitet yoki ish bilan birga o'qish qulay bo'lishi uchun ertalabgi, kunduzgi, kechki offline guruhlar va online live variantlar mavjud.",
        note: "Har kim o'z jadvaliga mos variant topadi."
      },
      {
        tag: "Aloqa",
        title: "Telefon va qabul bo'yicha tezkor javob",
        text: "Ro'yxatdan o'tish, guruh so'rash, dars vaqti yoki manzil bo'yicha savollar uchun qabul bo'limi telefon orqali yo'naltiradi.",
        note: "Kelishdan oldin hammasini bilib olish mumkin."
      },
      {
        tag: "Natija",
        title: "Keyingi bosqich aniq ko'rsatiladi",
        text: "Modul yakunida qaysi mavzu mustahkam bo'lgani, nimalarni takrorlash kerakligi va qaysi guruhga o'tish maqsadga muvofiqligi aytiladi.",
        note: "O'qish jarayoni izchil davom etadi."
      }
    ],
    journey: [
      {
        title: "1. Qabul va suhbat",
        text: "O'quvchi yoki ota-ona bilan qisqa suhbat o'tkaziladi, kerakli yo'nalish va maqsad aniqlab olinadi."
      },
      {
        title: "2. Daraja va guruh tanlash",
        text: "Boshlang'ich yoki davom ettiruvchi guruh tanlanadi. Jadvalga mos offline yoki online vaqt birgalikda belgilanadi."
      },
      {
        title: "3. Dars va amaliyot",
        text: "Har bir dars mavzu, misol, mustaqil bajarish va savol-javob bilan o'tadi. Kerakli joylarda speaking yoki amaliy blok qo'shiladi."
      },
      {
        title: "4. Vazifa va nazorat",
        text: "Uy vazifasi, kichik test yoki amaliy topshiriq orqali mavzu qay darajada o'zlashtirilgani ko'rib boriladi."
      },
      {
        title: "5. Natija va keyingi bosqich",
        text: "O'quvchi kuchli tomonlari va ishlash kerak bo'lgan mavzular bo'yicha tavsiya oladi, keyingi modulga yo'naltiriladi."
      }
    ],
    teachers: [
      {
        name: "Web development mentori",
        role: "Frontend va sayt tuzish yo'nalishi",
        experience: "Portfolio va amaliy loyiha asosida dars",
        focus: "HTML, CSS, JavaScript, React va tayyor loyiha yig'ish jarayoniga urg'u beradi.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Backend mentori",
        role: "Node.js va server tomoni",
        experience: "API, ma'lumotlar bazasi va real loyiha misollari bilan ishlaydi",
        focus: "Node.js, Express, MongoDB va deploy jarayonini sodda va tushunarli yo'l bilan olib boradi.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "IELTS va English mentori",
        role: "General English, speaking, IELTS",
        experience: "Speaking va writing bo'yicha muntazam izoh beradi",
        focus: "Grammar, speaking club, mock exam va individual feedback bilan natijaga ishlaydi.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Robototexnika laboratoriya mentori",
        role: "Arduino va konstruktor darslari",
        experience: "Qo'l bilan yig'ish va sinab ko'rish asosidagi mashg'ulotlar",
        focus: "Sensor, motor, smart loyiha va jamoaviy ishlashga bosqichma-bosqich o'rgatadi.",
        image: "https://images.unsplash.com/photo-1581091215367-59ab6dcef10c?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Matematika foundation mentori",
        role: "Abituriyent va mantiqiy fikrlash",
        experience: "Nazariya va masala yechishni birga olib boradi",
        focus: "Mavzuni tushuntirish, ko'p ishlatiladigan usullar va individual kamchiliklarni yopishga urg'u beradi.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Dizayn va kontent mentori",
        role: "Grafik dizayn va SMM yo'nalishi",
        experience: "Figma, vizual material va kontent rejasi bilan ishlaydi",
        focus: "Banner, post, maket va reklama materiallarini real topshiriqlar orqali tayyorlatadi.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
      }
    ],
    gallery: [
      {
        title: "Qabul va maslahat zonasi",
        text: "Yangi kelganlar uchun suhbat, yo'naltirish va guruh tanlash shu yerda boshlanadi.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Amaliy dars muhiti",
        text: "Tushuntirishdan keyin o'quvchining o'zi bajarib ko'rishi markaz darslarida muhim o'rin tutadi.",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Robototexnika va texnik mashg'ulotlar",
        text: "Bolalar va o'smirlar uchun qo'l bilan yig'ish, sinash va ko'rsatish usuli qo'llaniladi.",
        image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Speaking va intensiv guruhlar",
        text: "Til darslarida gapirish, eshitish va tez-tez nazoratga alohida e'tibor beriladi.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Mentor bilan yaqin ishlash",
        text: "Savol-javob, tekshirish va izoh berish jarayoni o'quvchiga yaqin formatda olib boriladi.",
        image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Jamoaviy loyiha va mashg'ulotlar",
        text: "Ba'zi yo'nalishlarda kichik loyiha, juftlikda ishlash va guruh mashqlari bilan dars mustahkamlanadi.",
        image: "https://images.unsplash.com/photo-1522202222206-b750f9157f63?auto=format&fit=crop&w=1400&q=80"
      }
    ],
    reviews: [
      {
        author: "Ota-ona fikri",
        text: "Farzandim qaysi mavzuda ortda qolayotganini yashirib o'tirishmadi, aniq aytishdi va qanday yopish kerakligini ham ko'rsatishdi."
      },
      {
        author: "Abituriyent fikri",
        text: "Darslar quruq gap bo'lmaydi, har hafta natija so'raladi. Shu jihati menga tartib berdi."
      },
      {
        author: "Kasb o'rganuvchi talaba",
        text: "Web yo'nalishida amaliy topshiriq ko'p bo'lgani uchun men faqat eshitib emas, bajarib o'rgandim."
      },
      {
        author: "English guruhidagi o'quvchi",
        text: "Speaking va mock darslar menga foyda berdi. Xatolarimni alohida yozib berishgani yaxshi bo'ldi."
      },
      {
        author: "Robototexnika to'garagi ota-onasi",
        text: "Bolam darsdan keyin uyga kelib nima yig'ganini va qanday ishlatganini ko'rsatib beradi. Qiziqishi ancha oshdi."
      }
    ],
    faq: [
      {
        q: "Kimlar uchun mos?",
        a: "Boshlang'ich darajadagi o'quvchilar, abituriyentlar, talaba-yoshlar va yangi kasb o'rganmoqchi bo'lganlar uchun mos guruhlar mavjud."
      },
      {
        q: "Darslar qanday formatda bo'ladi?",
        a: "Darslar offline va online formatda bo'ladi. Vaqt bo'yicha mos guruh tanlanadi."
      },
      {
        q: "Qabulga oldindan yozilish kerakmi?",
        a: "Ha, telefon orqali bog'lanib kelish vaqti hamda mos yo'nalishni aniqlab olish tavsiya etiladi."
      },
      {
        q: "Nazorat qanday olib boriladi?",
        a: "Kichik testlar, uy vazifasi, amaliy topshiriq va mentor izohlari orqali o'zlashtirish doimiy kuzatiladi."
      },
      {
        q: "Ota-onaga ma'lumot beriladimi?",
        a: "Kerak bo'lganda o'quvchi qatnashuvi, natijasi va tavsiyalar bo'yicha ota-ona bilan aloqaga chiqiladi."
      }
    ],
    catalog: {
      studyTypes: brand.studyTypes || ["Offline", "Online"],
      groups: brand.groups || {
        Offline: ["Morning 08:30", "Day 10:30", "Afternoon 14:00", "Evening 18:30"],
        Online: ["Online Live 09:00", "Online Live 15:00", "Online Evening 20:00"]
      },
      directions: (brand.directions || []).map(function (item) {
        return {
          name: item.name,
          description: item.name + " yo'nalishi bo'yicha bosqichli va amaliy darslar.",
          audience: "Boshlovchi va rivojlanmoqchi bo'lgan o'quvchilar",
          duration: "2-6 oy",
          programs: item.programs || []
        };
      })
    }
  };

  function $(selector) {
    return document.querySelector(selector);
  }

  function toArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function text(value, fallback) {
    const safe = String(value || "").trim();
    return safe || fallback || "";
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      }[char];
    });
  }

  function phoneHref(value) {
    return "tel:" + String(value || "").replace(/[^\d+]/g, "");
  }

  function normalizeData(raw) {
    const next = raw && typeof raw === "object" ? raw : {};
    const center = Object.assign({}, FALLBACK_DATA.center, next.center || {});
    const catalog = Object.assign({}, FALLBACK_DATA.catalog, next.catalog || {});

    catalog.studyTypes = toArray(next.catalog && next.catalog.studyTypes).length
      ? next.catalog.studyTypes
      : FALLBACK_DATA.catalog.studyTypes;
    catalog.groups = next.catalog && next.catalog.groups && typeof next.catalog.groups === "object"
      ? next.catalog.groups
      : FALLBACK_DATA.catalog.groups;
    catalog.directions = toArray(next.catalog && next.catalog.directions).length
      ? next.catalog.directions
      : FALLBACK_DATA.catalog.directions;
    center.stats = toArray(next.center && next.center.stats).length
      ? next.center.stats
      : FALLBACK_DATA.center.stats;
    center.workHours = toArray(next.center && next.center.workHours).length
      ? next.center.workHours
      : FALLBACK_DATA.center.workHours;

    return {
      center: center,
      heroBullets: toArray(next.heroBullets).length ? next.heroBullets : FALLBACK_DATA.heroBullets,
      features: toArray(next.features).length ? next.features : FALLBACK_DATA.features,
      journey: toArray(next.journey).length ? next.journey : FALLBACK_DATA.journey,
      teachers: toArray(next.teachers).length ? next.teachers : FALLBACK_DATA.teachers,
      gallery: toArray(next.gallery).length ? next.gallery : FALLBACK_DATA.gallery,
      reviews: toArray(next.reviews).length ? next.reviews : FALLBACK_DATA.reviews,
      faq: toArray(next.faq).length ? next.faq : FALLBACK_DATA.faq,
      catalog: catalog
    };
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

  function updateThemeToggle(theme) {
    const button = $("#themeToggle");
    if (!button) return;
    const dark = theme === "dark";
    button.textContent = dark ? "Kunduzgi ko'rinish" : "Tungi ko'rinish";
    button.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  function setTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.dataset.theme = next;
    updateThemeToggle(next);
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch (_) {}
  }

  function initTheme() {
    const button = $("#themeToggle");
    setTheme(getPreferredTheme());
    if (!button || button.dataset.bound === "1") return;
    button.dataset.bound = "1";
    button.addEventListener("click", function () {
      const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
      setTheme(next);
    });
  }

  function setContent(selector, value) {
    const node = $(selector);
    if (node) node.textContent = value;
  }

  function setLink(selector, href, label) {
    const node = $(selector);
    if (!node) return;
    node.href = href;
    if (label) node.textContent = label;
  }

  function renderStats(stats) {
    const root = $("#statsRow");
    if (!root) return;
    root.innerHTML = toArray(stats).map(function (item) {
      return [
        '<div class="stat-card">',
        "<strong>" + escapeHtml(text(item && item.value, "")) + "</strong>",
        "<span>" + escapeHtml(text(item && item.label, "")) + "</span>",
        "</div>"
      ].join("");
    }).join("");
  }

  function renderBullets(items) {
    const root = $("#heroBullets");
    if (!root) return;
    root.innerHTML = toArray(items).map(function (item) {
      return '<div class="bullet">' + escapeHtml(text(item, "")) + "</div>";
    }).join("");
  }

  function renderMosaic(gallery) {
    const root = $("#heroMosaic");
    if (!root) return;
    const items = toArray(gallery).slice(0, 3);
    root.innerHTML = items.map(function (item) {
      return [
        '<article class="mosaic-card">',
        '<img src="' + escapeHtml(text(item && item.image, "")) + '" alt="' + escapeHtml(text(item && item.title, "Cliffs HALLAYM")) + '" loading="lazy" />',
        '<div class="mosaic-copy">',
        "<strong>" + escapeHtml(text(item && item.title, "")) + "</strong>",
        "<span>" + escapeHtml(text(item && item.text, "")) + "</span>",
        "</div>",
        "</article>"
      ].join("");
    }).join("");
  }

  function describeStudyType(name) {
    const map = {
      Offline: "Sinfxona darslari, mentor bilan yuzma-yuz ishlash va muntazam nazorat.",
      Online: "Masofadan turib jonli dars va topshiriqlar bilan qatnashish imkoni."
    };
    return map[name] || "Markaz jadvaliga moslashgan o'qish formati.";
  }

  function renderWorkFormats(center, studyTypes) {
    const root = $("#workFormats");
    if (!root) return;
    const types = toArray(studyTypes).slice(0, 5).map(function (item) {
      return {
        title: item,
        text: describeStudyType(item)
      };
    });
    const extras = [
      {
        title: "Qabul va maslahat",
        text: "Birinchi suhbat, yo'naltirish va guruh tanlash telefon yoki markazning qabul bo'limi orqali amalga oshiriladi."
      },
      {
        title: "Ish vaqti",
        text: toArray(center && center.workHours).join(" | ")
      }
    ];
    const cards = types.concat(extras);
    root.innerHTML = cards.map(function (item) {
      return [
        '<div class="schedule-item">',
        "<strong>" + escapeHtml(text(item.title, "")) + "</strong>",
        "<span>" + escapeHtml(text(item.text, "")) + "</span>",
        "</div>"
      ].join("");
    }).join("");
  }

  function renderFeatures(items) {
    const root = $("#featureGrid");
    if (!root) return;
    root.innerHTML = toArray(items).map(function (item) {
      return [
        '<article class="feature-card">',
        "<small>" + escapeHtml(text(item && item.tag, "Cliffs HALLAYM")) + "</small>",
        "<h3>" + escapeHtml(text(item && item.title, "")) + "</h3>",
        "<p>" + escapeHtml(text(item && item.text, "")) + "</p>",
        "<span>" + escapeHtml(text(item && item.note, "")) + "</span>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderGallery(gallery) {
    const mainRoot = $("#galleryMain");
    const sideRoot = $("#gallerySide");
    if (!mainRoot || !sideRoot) return;
    const items = toArray(gallery);
    const mainItem = items[3] || items[0];
    const sideItems = items.slice(4, 7).length ? items.slice(4, 7) : items.slice(1, 4);

    if (mainItem) {
      mainRoot.innerHTML = [
        '<img src="' + escapeHtml(text(mainItem.image, "")) + '" alt="' + escapeHtml(text(mainItem.title, "Cliffs HALLAYM")) + '" loading="lazy" />',
        '<div class="gallery-main-copy">',
        "<h3>" + escapeHtml(text(mainItem.title, "")) + "</h3>",
        "<p>" + escapeHtml(text(mainItem.text, "")) + "</p>",
        "</div>"
      ].join("");
    }

    sideRoot.innerHTML = sideItems.map(function (item) {
      return [
        '<article class="gallery-mini">',
        '<img src="' + escapeHtml(text(item && item.image, "")) + '" alt="' + escapeHtml(text(item && item.title, "Cliffs HALLAYM")) + '" loading="lazy" />',
        '<div class="gallery-mini-copy">',
        "<h3>" + escapeHtml(text(item && item.title, "")) + "</h3>",
        "<p>" + escapeHtml(text(item && item.text, "")) + "</p>",
        "</div>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderPrograms(directions) {
    const root = $("#programGrid");
    if (!root) return;
    root.innerHTML = toArray(directions).map(function (item) {
      const programs = toArray(item && item.programs).slice(0, 4).map(function (program) {
        return "<li>" + escapeHtml(text(program, "")) + "</li>";
      }).join("");
      return [
        '<article class="program-card">',
        "<h3>" + escapeHtml(text(item && item.name, "")) + "</h3>",
        "<p>" + escapeHtml(text(item && item.description, "")) + "</p>",
        '<div class="program-meta">',
        '<span class="meta-chip">' + escapeHtml(text(item && item.audience, "Har xil daraja")) + "</span>",
        '<span class="meta-chip">' + escapeHtml(text(item && item.duration, "2-6 oy")) + "</span>",
        "</div>",
        '<ul class="program-list">' + programs + "</ul>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderTeachers(teachers) {
    const root = $("#mentorGrid");
    if (!root) return;
    root.innerHTML = toArray(teachers).map(function (item) {
      return [
        '<article class="mentor-card">',
        '<div class="mentor-photo">',
        '<img src="' + escapeHtml(text(item && item.image, "")) + '" alt="' + escapeHtml(text(item && item.name, "Mentor")) + '" loading="lazy" />',
        "</div>",
        '<div class="mentor-copy">',
        "<h3>" + escapeHtml(text(item && item.name, "")) + "</h3>",
        '<div class="mentor-role">' + escapeHtml(text(item && item.role, "")) + "</div>",
        '<div class="mentor-focus">' + escapeHtml(text(item && item.experience, "")) + "</div>",
        '<div class="mentor-focus">' + escapeHtml(text(item && item.focus, "")) + "</div>",
        "</div>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderJourney(items) {
    const root = $("#processGrid");
    if (!root) return;
    root.innerHTML = toArray(items).map(function (item) {
      return [
        '<article class="process-card">',
        "<strong>" + escapeHtml(text(item && item.title, "")) + "</strong>",
        "<p>" + escapeHtml(text(item && item.text, "")) + "</p>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderReviews(items) {
    const root = $("#reviewGrid");
    if (!root) return;
    root.innerHTML = toArray(items).map(function (item) {
      return [
        '<article class="review-card">',
        "<p>" + escapeHtml(text(item && item.text, "")) + "</p>",
        "<strong>" + escapeHtml(text(item && item.author, "")) + "</strong>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderFaq(items) {
    const root = $("#faqGrid");
    if (!root) return;
    root.innerHTML = toArray(items).map(function (item, index) {
      return [
        '<details class="faq-item"' + (index === 0 ? " open" : "") + ">",
        "<summary>" + escapeHtml(text(item && item.q, "")) + "</summary>",
        "<p>" + escapeHtml(text(item && item.a, "")) + "</p>",
        "</details>"
      ].join("");
    }).join("");
  }

  function fillCenter(center) {
    const phone = text(center.phone, FALLBACK_DATA.center.phone);
    const address = text(center.address, FALLBACK_DATA.center.address);
    const landmark = text(center.landmark, FALLBACK_DATA.center.landmark);
    const hours = toArray(center.workHours).join(" | ");
    const summary = text(center.summary, FALLBACK_DATA.center.summary);
    const extended = text(center.extended, FALLBACK_DATA.center.extended);
    const title = text(center.heroTitle || center.headline, FALLBACK_DATA.center.heroTitle);
    const mapQuery = text(center.mapQuery, FALLBACK_DATA.center.mapQuery);

    setContent("#heroTitle", title);
    setContent("#heroText", text(center.headline, summary));
    setLink("#heroPhone", phoneHref(phone), phone);
    setContent("#topPhone", phone);
    setContent("#topAddress", address);
    setContent("#topLandmark", landmark);
    setContent("#centerSummary", [summary, extended].filter(Boolean).join(" "));
    setContent("#contactPhone", phone);
    setContent("#contactAddress", address);
    setContent("#contactLandmark", landmark);
    setContent("#contactHours", hours);
    setLink("#contactCall", phoneHref(phone));

    const mapFrame = $("#mapFrame");
    if (mapFrame) {
      mapFrame.src = "https://www.google.com/maps?q=" + encodeURIComponent(mapQuery) + "&output=embed";
    }
  }

  async function loadData() {
    try {
      const response = await fetch("/data/cliffs-center.json", {
        cache: "no-store",
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("Failed to load center data");
      const json = await response.json();
      return normalizeData(json);
    } catch (error) {
      console.warn("Landing data fallback ishladi:", error && error.message ? error.message : error);
      return normalizeData(FALLBACK_DATA);
    }
  }

  async function boot() {
    initTheme();
    const data = await loadData();
    fillCenter(data.center);
    renderBullets(data.heroBullets);
    renderStats(data.center.stats);
    renderMosaic(data.gallery);
    renderWorkFormats(data.center, data.catalog.studyTypes);
    renderFeatures(data.features);
    renderGallery(data.gallery);
    renderPrograms(data.catalog.directions);
    renderTeachers(data.teachers);
    renderJourney(data.journey);
    renderReviews(data.reviews);
    renderFaq(data.faq);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
