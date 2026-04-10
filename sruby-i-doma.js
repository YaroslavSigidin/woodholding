(() => {
  const root = document.getElementById("page-root");

  if (!root) {
    return;
  }

  const defaultContent = {
    meta: {
      pageTitle: "Срубы и дома — WOODHOLDING",
      description:
        "URALPINEHOUSE — направление WOODHOLDING по срубам, домам, баням и гостевым пространствам из уральского леса. 30 лет работы с деревом, 200+ проектов, работа по всей России.",
    },
    header: {
      ariaLabel: "WOODHOLDING",
      navLabel: "Основная навигация",
      menuLabel: "Открыть навигацию",
      nav: [
        { href: "./index.html", label: "Главная" },
        { href: "./sruby-i-doma.html", label: "Срубы и дома" },
        { href: "./okna-i-dveri.html", label: "Окна и двери" },
        { href: "./pilomaterialy.html", label: "Пиломатериалы" },
        { href: "./mebel-i-interer.html", label: "Мебель и интерьер" },
      ],
      cta: { href: "./index.html#contact", label: "Связаться" },
    },
    hero: {
      title: "СРУБЫ И ДОМА",
      text:
        "Проектируем и строим частные дома, бани и гостевые пространства из дерева, от архитектурной идеи и подготовки материала до монтажа, остекления и чистовой интеграции.",
      extra: "От сруба и фасада до остекления и чистовой интеграции.",
      note: "30 лет работы с древесиной полного цикла",
      cta: { href: "./index.html#contact", label: "Обсудить проект" },
      media: {
        src: "./srubs.png",
        alt: "Сруб в сосновом лесу",
      },
    },
    gallery: {
      eyebrow: "Галерея объектов",
      title: "Реализованные проекты",
      text:
        "Несколько ракурсов, чтобы увидеть посадку в лесу, фасады, интерьер и детали без лишней постановки.",
      slides: [
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-339.jpg",
          alt: "Сруб и дом, кадр 01",
          label: "Кадр 01",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-151.jpg",
          alt: "Сруб и дом, кадр 02",
          label: "Кадр 02",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-159.jpg",
          alt: "Сруб и дом, кадр 03",
          label: "Кадр 03",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-162.jpg",
          alt: "Сруб и дом, кадр 04",
          label: "Кадр 04",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-163.jpg",
          alt: "Сруб и дом, кадр 05",
          label: "Кадр 05",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-164.jpg",
          alt: "Сруб и дом, кадр 06",
          label: "Кадр 06",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-180.jpg",
          alt: "Сруб и дом, кадр 07",
          label: "Кадр 07",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-203.jpg",
          alt: "Сруб и дом, кадр 08",
          label: "Кадр 08",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-204.jpg",
          alt: "Сруб и дом, кадр 09",
          label: "Кадр 09",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-237.jpg",
          alt: "Сруб и дом, кадр 10",
          label: "Кадр 10",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-250.jpg",
          alt: "Сруб и дом, кадр 11",
          label: "Кадр 11",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-251.jpg",
          alt: "Сруб и дом, кадр 12",
          label: "Кадр 12",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-252.jpg",
          alt: "Сруб и дом, кадр 13",
          label: "Кадр 13",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-253.jpg",
          alt: "Сруб и дом, кадр 14",
          label: "Кадр 14",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-255.jpg",
          alt: "Сруб и дом, кадр 15",
          label: "Кадр 15",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-258.jpg",
          alt: "Сруб и дом, кадр 16",
          label: "Кадр 16",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-261.jpg",
          alt: "Сруб и дом, кадр 17",
          label: "Кадр 17",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-263.jpg",
          alt: "Сруб и дом, кадр 18",
          label: "Кадр 18",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-268.jpg",
          alt: "Сруб и дом, кадр 19",
          label: "Кадр 19",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-310.jpg",
          alt: "Сруб и дом, кадр 20",
          label: "Кадр 20",
        },
        {
          src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-341.jpg",
          alt: "Сруб и дом, кадр 21",
          label: "Кадр 21",
        },
      ],
    },
    benefits: {
      eyebrow: "1. Преимущества",
      title: "Преимущества",
      text:
        "Наши дома и срубы проектируются так, чтобы в них было комфортно жить, удобно пользоваться пространством и легко получать предсказуемый результат на каждом этапе.",
      cards: [
        {
          title: "Комфорт",
          text:
            "Теплая атмосфера дерева, продуманная посадка на участке и ощущение спокойного, цельного пространства в повседневной жизни.",
        },
        {
          title: "Удобство",
          text:
            "Логичная планировка, понятные сценарии движения и решения, которые делают дом удобным для жизни, отдыха и приёма гостей.",
        },
        {
          title: "Качественные материалы",
          text:
            "Отбираем древесину и комплектующие с акцентом на надежность, долговечность и аккуратный результат в эксплуатации.",
        },
        {
          title: "Уникальная система",
          text:
            "Дом, сруб, материалы, остекление и детали собираются в единую систему, чтобы результат был цельным и управляемым.",
        },
      ],
    },
    benefitsLegacy: {
      eyebrow: "1. Ключевая выгода",
      title: "Не просто строительство дома, а единая система реализации",
      text:
        "URALPINEHOUSE — это направление WOODHOLDING, в котором строительство сруба или деревянного дома не существует отдельно от материала, остекления, архитектуры и будущего интерьера. Для клиента это означает более цельный процесс, меньше разрывов между этапами и более предсказуемый результат.",
      cards: [
        {
          title: "Один контур ответственности",
          text:
            "Проект не распадается между разными подрядчиками. Основные решения собираются в одной логике, без постоянных конфликтов на стыках этапов.",
        },
        {
          title: "Контроль материала",
          text:
            "Работа с деревом начинается не на этапе монтажа, а намного раньше — с понимания материала, его подготовки и роли в будущем объекте.",
        },
        {
          title: "Согласованность решений",
          text:
            "Архитектура, производство, остекление и интерьер могут развиваться как единая система, а не как набор несвязанных задач.",
        },
        {
          title: "Путь к проекту под ключ",
          text:
            "Клиент может начать только с дома или бани, а затем при необходимости расширить проект в рамках холдинга без потери общей логики.",
        },
      ],
    },
    stats: {
      eyebrow: "2. Опыт",
      title: "WOODHOLDING: опыт, подтверждённый практикой",
      text:
        "WOODHOLDING вырос из многолетней работы с деревом в полноценную экосистему реализации частных пространств.",
      items: [
        { value: "30 лет", label: "работы с деревом" },
        { value: "200+", label: "проектов" },
        { value: "30 000 м³", label: "древесины обработано" },
        { value: "10 000 м²", label: "жилых домов и бань" },
        { value: "1500 м²", label: "остеклено" },
      ],
    },
    build: {
      eyebrow: "3. Что мы строим",
      title: "Какие объекты мы реализуем",
      text:
        "Строим частные объекты, где важны не только внешний вид, но и качество материала, логика сборки и долговечность результата.",
      cards: [
        {
          title: "Частные дома",
          text:
            "Дома для постоянного проживания и загородные резиденции, в которых дерево становится основой архитектуры, атмосферы и качества жизни.",
        },
        {
          title: "Бани и банные комплексы",
          text:
            "От отдельных бань до полноценных комплексов с террасами, комнатами отдыха и дополнительными функциональными зонами.",
        },
        {
          title: "Гостевые дома",
          text:
            "Отдельные жилые объекты на участке, которые продолжают архитектурную логику основной резиденции и расширяют сценарии использования пространства.",
        },
        {
          title: "Комплексные загородные проекты",
          text:
            "Если задача выходит за рамки только строительства, проект можно расширить за счёт окон, дверей, пиломатериалов, мебели и интерьера внутри системы WOODHOLDING.",
        },
      ],
    },
    reasons: {
      eyebrow: "4. Почему нас выбирают",
      title: "Почему выбирают WOODHOLDING",
      items: [
        {
          title: "Уральский лес и глубокое понимание материала",
          text:
            "Мы опираемся на многолетнюю практику работы с древесиной и воспринимаем дерево не как декоративный материал, а как основу долгосрочного архитектурного результата.",
        },
        {
          title: "Полный цикл без лишних посредников",
          text:
            "Проектирование, производство, комплектация и монтаж собираются в последовательную систему, где решения не теряются между этапами.",
        },
        {
          title: "Точность важна не только визуально",
          text:
            "Контроль геометрии, качества подготовки и согласованности деталей влияет не только на эстетику, но и на эксплуатацию дома в будущем.",
        },
        {
          title: "Можно начать с одного этапа",
          text:
            "Клиент не обязан заказывать всё сразу. Можно зайти только на строительство дома или бани, а затем масштабировать проект по мере необходимости.",
        },
        {
          title: "Холдинг усиливает итоговый результат",
          text:
            "Когда окна, материалы и интерьер можно подключить внутри одной системы, объект собирается спокойнее, чище и логичнее.",
        },
      ],
    },
    holding: {
      eyebrow: "5. Этапы проекта",
      title: "Разработка проекта строится в четыре последовательных этапа",
      text:
        "Мы ведём проект по понятной последовательности: собираем вводные, формируем концепцию, готовим рабочие материалы и передаём решение в реализацию без потери логики и качества.",
      note: "Этапы могут идти быстрее или дольше в зависимости от масштаба задачи, но порядок работы остается одинаковым.",
      cards: [
        {
          title: "1. Бриф и вводные",
          text:
            "Собираем цели проекта, состав объекта, особенности участка, референсы и ключевые ограничения, чтобы зафиксировать точную задачу.",
        },
        {
          title: "2. Концепция и эскиз",
          text:
            "Формируем общую архитектурную идею, посадку на участке, основные объемы и сценарии использования будущего дома или комплекса.",
        },
        {
          title: "3. Проектная документация",
          text:
            "Разрабатываем планы, узлы, спецификации и технические решения, чтобы проект был согласованным и готовым к следующему шагу.",
        },
        {
          title: "4. Передача в реализацию",
          text:
            "Согласуем итоговый пакет, уточняем состав работ и передаем решение в производство или строительство без разрывов в логике проекта.",
        },
      ],
    },
    faq: {
      eyebrow: "6. FAQ",
      title: "Вопросы, которые возникают перед стартом",
      items: [
        {
          question: "С чего начинается работа?",
          answer:
            "Достаточно кратко описать задачу: какой объект вы планируете, где находится участок, на каком этапе вы сейчас и что уже подготовлено. После этого можно перейти к первичной консультации и предварительной оценке.",
        },
        {
          question: "Можно ли обратиться только за строительством дома или бани?",
          answer:
            "Да. URALPINEHOUSE должен продаваться как самостоятельное направление. При этом, если проект потребует дальнейшего развития, его можно расширить за счёт других направлений WOODHOLDING.",
        },
        {
          question: "Обязательно ли сразу заказывать окна, материалы и интерьер?",
          answer:
            "Нет. В этом и преимущество системы: вы можете стартовать только с базовой задачи, а остальные направления подключать по мере развития проекта.",
        },
        {
          question: "Подходят ли вам индивидуальные частные проекты?",
          answer:
            "Да. Акцент страницы должен быть на частных домах, банях, гостевых домах и загородных объектах, где важны архитектура, качество исполнения и согласованность решений.",
        },
        {
          question: "В чём разница между вами и обычным подрядчиком по срубам?",
          answer:
            "Разница в системности. Мы рассматриваем дом не как изолированный объект, а как часть общего проекта, где важны материал, архитектура, остекление, детали и итоговая целостность результата.",
        },
        {
          question: "Зачем клиенту холдинг, если нужен только дом?",
          answer:
            "Даже если на старте нужен только дом, клиент получает преимущество в виде более согласованного процесса и возможности безболезненно развивать проект дальше в рамках одной системы.",
        },
      ],
    },
    directions: {
      eyebrow: "7. Направления WOODHOLDING",
      title: "Другие направления WOODHOLDING",
      text:
        "Если проект выходит за рамки строительства, его можно развивать дальше — в той же системе качества, координации и визуальной логики.",
      cards: [
        {
          title: "Окна и двери",
          text:
            "Тёплое деревянное остекление, согласованное с архитектурой дома.",
          href: "./okna-i-dveri.html",
        },
        {
          title: "Пиломатериалы",
          text:
            "Материалы собственного производства для строительных и отделочных задач.",
          href: "./pilomaterialy.html",
        },
        {
          title: "Мебель и интерьер",
          text:
            "Решения из массива, продолжающие характер пространства.",
          href: "./mebel-i-interer.html",
        },
      ],
    },
    footer: {
      brandLines: ["WOOD", "HOLDING"],
      socialLabel: "Социальные сети",
      navigationLabel: "Навигация",
      informationLabel: "Информация",
      copy:
        "Экосистема премиум-брендов из дерева: архитектура, остекление, материалы, мебель и интерьер в единой системе реализации частных пространств.",
      social: [
        { label: "Telegram", href: "./index.html#contact" },
        { label: "Instagram", href: "./index.html#contact" },
        { label: "YouTube", href: "./index.html#contact" },
      ],
      navigation: [
        { label: "Преимущества", href: "#benefits" },
        { label: "Объекты", href: "#build" },
        { label: "FAQ", href: "#faq" },
      ],
      information: [
        { label: "Обсудить проект", href: "./index.html#contact" },
        { label: "Предварительная оценка", href: "./index.html#contact" },
        { label: "Другие направления", href: "#other-directions" },
        { label: "Наверх", href: "#top" },
      ],
      legal: [
        "© WOODHOLDING, 2026",
        "Свердловская область. Работаем по всей России.",
      ],
    },
    stickyCta: {
      ariaLabel: "Быстрые действия",
      primary: { href: "./index.html#contact", label: "Получить оценку" },
      secondary: { href: "./index.html#contact", label: "Обсудить проект" },
    },
  };

  const content = {
    ...defaultContent,
    ...(window.__LANDING_PAGE_CONTENT__ || {}),
  };
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const renderHeroCta = (cta) => `
    <a class="hero-cta" href="${escapeHtml(cta.href)}" aria-label="${escapeHtml(cta.label)}">
      <span class="hero-cta__label">${escapeHtml(cta.label)}</span>
      <span class="hero-cta__icon" aria-hidden="true">
        <svg
          class="hero-cta__arrow"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M7 17L17 7" />
          <path d="M10 7H17V14" />
        </svg>
      </span>
    </a>
  `;

  const renderHeader = () => `
    <header class="site-header">
      <div class="container">
        <div class="header-inner">
          <a class="brand" href="./index.html" aria-label="${escapeHtml(content.header.ariaLabel)}">
            <span class="brand-logo-full" aria-hidden="true"></span>
          </a>
          <nav class="site-nav" id="site-nav" aria-label="${escapeHtml(content.header.navLabel)}">
            ${content.header.nav
              .map(
                (item) =>
                  `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`
              )
              .join("")}
          </nav>
          <a class="header-contact" href="${escapeHtml(content.header.cta.href)}">${escapeHtml(content.header.cta.label)}</a>
          <button
            class="nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="site-nav"
            aria-label="${escapeHtml(content.header.menuLabel)}"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;

  const renderHero = () => `
    <section class="section hero" id="hero" aria-labelledby="hero-title">
      <div class="hero-media-wrap">
        <img
          class="hero-media"
          src="${escapeHtml(content.hero.media.src)}"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
        />
      </div>
      <div class="container">
        <div class="hero-grid">
          <div class="section-intro hero-copy" data-reveal>
            <h1 id="hero-title">${escapeHtml(content.hero.title)}</h1>
            <p class="hero-subtitle">${escapeHtml(content.hero.text)}</p>
            <p class="hero-extra">${escapeHtml(content.hero.extra)}</p>
            <div class="hero-actions">
              ${renderHeroCta(content.hero.cta)}
            </div>
          </div>
          <div class="hero-aside" data-reveal>
            <p class="hero-note">${escapeHtml(content.hero.note)}</p>
          </div>
        </div>
      </div>
    </section>
  `;

  const renderGallery = (gallery) => {
    if (!gallery || !Array.isArray(gallery.slides) || gallery.slides.length === 0) {
      return "";
    }

    return `
      <section class="section gallery" id="gallery">
        <div class="container">
          ${renderStackedSectionHeading(gallery.eyebrow, gallery.title, gallery.text)}
          <div class="gallery-slider">
            <div class="gallery-slider__viewport">
              <button
                type="button"
                class="gallery-slider__nav gallery-slider__nav--prev"
                data-slide-nav="prev"
                aria-label="Предыдущий слайд"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M15 6L9 12L15 18" />
                </svg>
              </button>
              <div class="gallery-slider__track" aria-label="${escapeHtml(gallery.title)}">
                ${gallery.slides
                  .map(
                    (slide, index) => `
                      <article
                        class="gallery-slider__slide"
                        id="gallery-slide-${index}"
                        data-slide-index="${index}"
                      >
                        <img
                          src="${escapeHtml(slide.src)}"
                          alt="${escapeHtml(slide.alt)}"
                          loading="${index === 0 ? "eager" : "lazy"}"
                          decoding="async"
                        />
                        <div class="gallery-slider__caption">
                          <span class="gallery-slider__index">${String(index + 1).padStart(2, "0")}</span>
                          <p class="gallery-slider__label">${escapeHtml(slide.label)}</p>
                        </div>
                      </article>
                    `
                  )
                  .join("")}
              </div>
              <button
                type="button"
                class="gallery-slider__nav gallery-slider__nav--next"
                data-slide-nav="next"
                aria-label="Следующий слайд"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M9 6L15 12L9 18" />
                </svg>
              </button>
            </div>
            <div class="gallery-slider__thumbs" aria-label="Переключение слайдов">
              ${gallery.slides
                .map(
                  (slide, index) => `
                    <button
                      type="button"
                      class="gallery-slider__thumb${index === 0 ? " is-active" : ""}"
                      data-slide-target="${index}"
                      aria-controls="gallery-slide-${index}"
                      aria-pressed="${index === 0 ? "true" : "false"}"
                      aria-label="Показать слайд ${String(index + 1).padStart(2, "0")}: ${escapeHtml(slide.label)}"
                    >
                      <span class="gallery-slider__thumb-media" aria-hidden="true">
                        <img
                          src="${escapeHtml(slide.src)}"
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    </button>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  };

  const renderFeaturePhoto = (photo) => {
    if (!photo?.src) {
      return "";
    }

    return `
      <section class="feature-photo" aria-label="Фотография проекта">
        <div class="container">
          <figure class="feature-photo__frame" data-reveal>
            <img
              src="${escapeHtml(photo.src)}"
              alt="${escapeHtml(photo.alt || "")}"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>
    `;
  };

  const featurePhotos = Array.isArray(content.featurePhotos) ? content.featurePhotos : [];
  const gallerySlides = Array.isArray(content.gallery?.slides) ? content.gallery.slides : [];
  const derivedFeaturePhotos = gallerySlides.length
    ? [
        gallerySlides[5] ?? gallerySlides[0],
        gallerySlides[14] ?? gallerySlides.at(-1) ?? gallerySlides[0],
      ]
        .filter(Boolean)
        .map((slide) => ({
          src: slide.src,
          alt: slide.alt,
        }))
    : [];
  const getFeaturePhoto = (index) =>
    featurePhotos[index] ||
    derivedFeaturePhotos[index] ||
    featurePhotos[0] ||
    derivedFeaturePhotos[0] ||
    content.featurePhoto ||
    null;

  const directionCoverMap = {
    "./sruby-i-doma.html": {
      src: "./HOMES/izbrannoe_web_2026-04-09%20(3)/rebtcova-151.jpg",
      position: "center 58%",
    },
    "./okna-i-dveri.html": {
      src: "./WINDOWS/izbrannoe_web_2026-04-09/rebtcova-73.jpg",
      position: "center 42%",
    },
    "./pilomaterialy.html": {
      src: "./LAMBER/izbrannoe_web_2026-04-09%20(2)/rebtcova-141.jpg",
      position: "center 54%",
    },
    "./mebel-i-interer.html": {
      src: "./TABLE/izbrannoe_web_2026-04-09%20(4)/rebtcova-271.jpg",
      position: "center 52%",
    },
  };

  const getDirectionCover = (card) => {
    if (card.coverSrc) {
      return {
        src: card.coverSrc,
        position: card.coverPosition || "center",
      };
    }

    return directionCoverMap[card.href] || null;
  };

  const renderCards = (cards) =>
    cards
      .map((card, index) => {
        return `
          <article class="direction-card" data-reveal>
            <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.text)}</p>
          </article>
        `;
      })
      .join("");

  const renderBenefitsSection = (sectionId, sectionContent) => `
    <section class="section benefits" id="${escapeHtml(sectionId)}">
      <div class="container">
        ${renderStackedSectionHeading(sectionContent.eyebrow, sectionContent.title, sectionContent.text)}
        <div class="directions-grid">
          ${renderCards(sectionContent.cards)}
        </div>
      </div>
    </section>
  `;

  const renderStats = (items) =>
    items
      .map(
        (item) => `
          <article class="metric-item" data-reveal>
            <strong>${escapeHtml(item.value)}</strong>
            <p>${escapeHtml(item.label)}</p>
          </article>
        `
      )
      .join("");

  const renderTitleFrame = (title) => `
    <div class="section-title-frame">
      <h2>${escapeHtml(title)}</h2>
    </div>
  `;

  const renderSectionHeading = (eyebrow, title, text) => `
    <div class="section-heading" data-reveal>
      <div class="section-intro">
        <p class="eyebrow eyebrow--number">${escapeHtml(eyebrow)}</p>
        ${renderTitleFrame(title)}
      </div>
      <p class="section-copy">${escapeHtml(text)}</p>
    </div>
  `;

  const renderStackedSectionHeading = (eyebrow, title, text) => `
    <div class="section-heading section-heading--stacked" data-reveal>
      <div class="section-intro">
        <p class="eyebrow eyebrow--number">${escapeHtml(eyebrow)}</p>
        ${renderTitleFrame(title)}
        <p class="section-copy">${escapeHtml(text)}</p>
      </div>
    </div>
  `;

  const renderWhyItems = (items) =>
    items
      .map(
        (item) => `
          <article class="why-item" data-reveal>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="why-item__copy">${escapeHtml(item.text)}</p>
          </article>
        `
      )
      .join("");

  const renderFaq = (items) =>
    items
      .map(
        (item, index) => `
          <details data-reveal>
            <summary>
              <span class="faq-index">${String(index + 1).padStart(2, "0")}</span>
              <span class="faq-question">${escapeHtml(item.question)}</span>
            </summary>
            <div class="faq-answer">
              <p>${escapeHtml(item.answer)}</p>
            </div>
          </details>
        `
      )
      .join("");

  const renderHoldingCards = (cards) =>
    cards
      .map(
        (card, index) => `
          <article class="direction-card" data-reveal>
            <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.text)}</p>
          </article>
        `
      )
      .join("");

  const renderFooter = () => `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-shell">
          <div class="footer-grid">
            <div class="footer-brand-block">
              <a class="footer-brand" href="#top" aria-label="${escapeHtml(content.header.ariaLabel)}">
                <span class="brand-mark footer-brand-mark" aria-hidden="true"></span>
                <span class="brand-type footer-brand-type">${content.footer.brandLines
                  .map((line) => escapeHtml(line))
                  .join("<br />")}</span>
              </a>
              <p class="footer-copy">${escapeHtml(content.footer.copy)}</p>
              <div class="footer-social" aria-label="${escapeHtml(content.footer.socialLabel)}">
                ${content.footer.social
                  .map(
                    (item) =>
                      `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`
                  )
                  .join("")}
              </div>
            </div>

            <div class="footer-column">
              <span class="footer-label">${escapeHtml(content.footer.navigationLabel)}</span>
              ${content.footer.navigation
                .map(
                  (item) =>
                    `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`
                )
                .join("")}
            </div>

            <div class="footer-column">
              <span class="footer-label">${escapeHtml(content.footer.informationLabel)}</span>
              ${content.footer.information
                .map(
                  (item) =>
                    `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`
                )
                .join("")}
            </div>
          </div>

          <div class="footer-legal">
            ${content.footer.legal.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
          </div>
        </div>
      </div>
    </footer>
  `;

  const renderStickyCta = () => `
    <div class="sticky-cta" aria-label="${escapeHtml(content.stickyCta.ariaLabel)}">
      <a class="button button-primary sticky-cta__primary" href="${escapeHtml(content.stickyCta.primary.href)}">
        ${escapeHtml(content.stickyCta.primary.label)}
      </a>
      <a class="button button-secondary sticky-cta__secondary" href="${escapeHtml(content.stickyCta.secondary.href)}">
        ${escapeHtml(content.stickyCta.secondary.label)}
      </a>
    </div>
  `;

  root.innerHTML = `
    <div class="site-shell">
      ${renderHeader()}
      <main id="top">
        ${renderHero()}
        ${renderBenefitsSection("benefits", content.benefits)}
        ${renderGallery(content.gallery)}
        ${renderBenefitsSection("benefits-copy", content.benefitsLegacy)}
        ${renderFeaturePhoto(getFeaturePhoto(0))}

        <section class="section stats" id="stats">
          <div class="container">
            ${renderSectionHeading(content.stats.eyebrow, content.stats.title, content.stats.text)}
            <div class="metrics-grid metrics-grid--five">
              ${renderStats(content.stats.items)}
            </div>
          </div>
        </section>

        <section class="section build" id="build">
          <div class="container">
            ${renderSectionHeading(content.build.eyebrow, content.build.title, content.build.text)}
            <div class="build-cards-grid">
              ${renderCards(content.build.cards)}
            </div>
          </div>
        </section>
        ${renderFeaturePhoto(getFeaturePhoto(1))}

        <section class="section reasons" id="why">
          <div class="container">
            <div class="why-grid">
              <div class="section-intro" data-reveal>
                <p class="eyebrow eyebrow--number">${escapeHtml(content.reasons.eyebrow)}</p>
                ${renderTitleFrame(content.reasons.title)}
              </div>
              <div class="why-list">
                ${renderWhyItems(content.reasons.items)}
              </div>
            </div>
          </div>
        </section>

        <section class="section holding" id="holding">
          <div class="container">
            ${renderStackedSectionHeading(content.holding.eyebrow, content.holding.title, content.holding.text)}
            <div class="directions-grid holding-grid">
              ${renderHoldingCards(content.holding.cards)}
            </div>
            <p class="holding-note" data-reveal>${escapeHtml(content.holding.note)}</p>
          </div>
        </section>

        <section class="section faq" id="faq">
          <div class="container">
            <div class="section-heading" data-reveal>
              <div class="section-intro">
                <p class="eyebrow eyebrow--number">${escapeHtml(content.faq.eyebrow)}</p>
                ${renderTitleFrame(content.faq.title)}
              </div>
            </div>
            <div class="faq-list">
              ${renderFaq(content.faq.items)}
            </div>
          </div>
        </section>

        <section class="section directions" id="other-directions">
          <div class="container">
            ${renderSectionHeading(content.directions.eyebrow, content.directions.title, content.directions.text)}
            <div class="directions-grid other-directions-grid">
              ${content.directions.cards
                .map((card, index) => {
                  const cover = getDirectionCover(card);

                  return `
                    <a
                      class="direction-card direction-card--link${cover ? " direction-card--covered" : ""}"
                      data-reveal
                      href="${escapeHtml(card.href)}"
                    >
                      ${
                        cover
                          ? `
                            <span class="direction-card__cover" aria-hidden="true">
                              <img
                                src="${escapeHtml(cover.src)}"
                                alt=""
                                loading="lazy"
                                decoding="async"
                                style="object-position: ${escapeHtml(cover.position || "center")};"
                              />
                            </span>
                          `
                          : ""
                      }
                      <div class="direction-card__content">
                        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
                        <h3>${escapeHtml(card.title)}</h3>
                        <p>${escapeHtml(card.text)}</p>
                      </div>
                    </a>
                  `
                })
                .join("")}
            </div>
          </div>
        </section>
      </main>
      ${renderFooter()}
    </div>
    ${renderStickyCta()}
  `;

  const gallerySlider = document.querySelector(".gallery-slider");

  if (gallerySlider) {
    const prevButton = gallerySlider.querySelector("[data-slide-nav='prev']");
    const nextButton = gallerySlider.querySelector("[data-slide-nav='next']");
    const track = gallerySlider.querySelector(".gallery-slider__track");
    const thumbsTrack = gallerySlider.querySelector(".gallery-slider__thumbs");
    const realSlides = [...gallerySlider.querySelectorAll(".gallery-slider__slide")];
    const thumbs = [...gallerySlider.querySelectorAll(".gallery-slider__thumb")];

    if (track && realSlides.length && thumbs.length) {
      let activeIndex = 0;
      const isSingleSlide = realSlides.length === 1;
      let renderedSlides = [...realSlides];
      let renderedIndex = 0;
      let settleTimer = null;
      let resizeTimer = null;
      let isJumping = false;

      const syncActiveThumb = (index) => {
        const activeThumb = thumbs[index];

        if (!thumbsTrack || !activeThumb) {
          return;
        }

        const desiredScrollLeft =
          activeThumb.offsetLeft - (thumbsTrack.clientWidth - activeThumb.offsetWidth) / 2;
        const maxScrollLeft = Math.max(
          thumbsTrack.scrollWidth - thumbsTrack.clientWidth,
          0
        );

        thumbsTrack.scrollTo({
          left: Math.max(0, Math.min(desiredScrollLeft, maxScrollLeft)),
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      };

      const setActiveIndex = (index) => {
        activeIndex = index;

        renderedSlides.forEach((slide) => {
          const slideIndex = Number(slide.dataset.slideIndex ?? -1);
          slide.classList.toggle("is-active", slideIndex === index);
        });

        thumbs.forEach((thumb, thumbIndex) => {
          const isActive = thumbIndex === index;
          thumb.classList.toggle("is-active", isActive);
          thumb.setAttribute("aria-pressed", String(isActive));
        });

        syncActiveThumb(index);

        if (prevButton) {
          prevButton.disabled = isSingleSlide;
          prevButton.setAttribute("aria-disabled", String(isSingleSlide));
        }

        if (nextButton) {
          nextButton.disabled = isSingleSlide;
          nextButton.setAttribute("aria-disabled", String(isSingleSlide));
        }
      };

      const prepareClone = (slide) => {
        const clone = slide.cloneNode(true);
        clone.classList.add("gallery-slider__slide--clone");
        clone.removeAttribute("id");
        clone.setAttribute("aria-hidden", "true");
        clone.setAttribute("tabindex", "-1");
        return clone;
      };

      if (!isSingleSlide) {
        track.insertBefore(
          prepareClone(realSlides[realSlides.length - 1]),
          track.firstChild
        );
        track.appendChild(prepareClone(realSlides[0]));
        renderedSlides = [...track.querySelectorAll(".gallery-slider__slide")];
        renderedIndex = 1;
      }

      const getNearestRenderedIndex = () =>
        renderedSlides.reduce(
          (closestIndex, slide, index) => {
            const distance = Math.abs(slide.offsetLeft - track.scrollLeft);

            if (distance < closestIndex.distance) {
              return { index, distance };
            }

            return closestIndex;
          },
          { index: 0, distance: Number.POSITIVE_INFINITY }
        ).index;

      const realIndexFromRendered = (index) => {
        if (isSingleSlide) {
          return 0;
        }

        if (index <= 0) {
          return realSlides.length - 1;
        }

        if (index >= renderedSlides.length - 1) {
          return 0;
        }

        return index - 1;
      };

      const jumpToRenderedIndex = (index) => {
        const slide = renderedSlides[index];

        if (!slide) {
          return;
        }

        isJumping = true;
        renderedIndex = index;
        track.scrollTo({
          left: slide.offsetLeft,
          behavior: "auto",
        });

        requestAnimationFrame(() => {
          isJumping = false;
        });
      };

      const settleRenderedIndex = () => {
        const nearestIndex = getNearestRenderedIndex();

        if (!isSingleSlide && nearestIndex === 0) {
          setActiveIndex(realSlides.length - 1);
          jumpToRenderedIndex(realSlides.length);
          return;
        }

        if (!isSingleSlide && nearestIndex === renderedSlides.length - 1) {
          setActiveIndex(0);
          jumpToRenderedIndex(1);
          return;
        }

        renderedIndex = nearestIndex;
        setActiveIndex(realIndexFromRendered(nearestIndex));
      };

      const scheduleSettle = () => {
        window.clearTimeout(settleTimer);
        settleTimer = window.setTimeout(settleRenderedIndex, 130);
      };

      const goToRenderedIndex = (index, behavior = "smooth") => {
        const slide = renderedSlides[index];

        if (!slide) {
          return;
        }

        renderedIndex = index;
        track.scrollTo({
          left: slide.offsetLeft,
          behavior,
        });

        if (behavior === "auto") {
          settleRenderedIndex();
        }
      };

      if (prevButton) {
        prevButton.addEventListener("click", () => {
          if (isSingleSlide) {
            return;
          }

          goToRenderedIndex(
            renderedIndex - 1,
            prefersReducedMotion ? "auto" : "smooth"
          );
        });
      }

      if (nextButton) {
        nextButton.addEventListener("click", () => {
          if (isSingleSlide) {
            return;
          }

          goToRenderedIndex(
            renderedIndex + 1,
            prefersReducedMotion ? "auto" : "smooth"
          );
        });
      }

      thumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
          goToRenderedIndex(
            isSingleSlide ? 0 : index + 1,
            prefersReducedMotion ? "auto" : "smooth"
          );
        });
      });

      track.addEventListener(
        "scroll",
        () => {
          if (isJumping) {
            return;
          }

          const nearestIndex = getNearestRenderedIndex();
          const previewRealIndex = realIndexFromRendered(nearestIndex);

          if (previewRealIndex !== activeIndex) {
            setActiveIndex(previewRealIndex);
          }

          scheduleSettle();
        },
        { passive: true }
      );

      if ("onscrollend" in track) {
        track.addEventListener("scrollend", settleRenderedIndex);
      }

      window.addEventListener("resize", () => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          jumpToRenderedIndex(renderedIndex);
          settleRenderedIndex();
        }, 120);
      });

      if (isSingleSlide) {
        renderedIndex = 0;
      }

      jumpToRenderedIndex(renderedIndex);
      setActiveIndex(activeIndex);
    }
  }

  document.title = content.meta.pageTitle;
  const metaDescription = document.querySelector('meta[name="description"]');

  if (metaDescription) {
    metaDescription.setAttribute("content", content.meta.description);
  }
})();
