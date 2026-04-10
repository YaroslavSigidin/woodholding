#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const rootDir = process.cwd();

const site = {
  name: "WOODHOLDING",
  language: "ru-RU",
  url: "https://yaroslavsigidin.github.io/woodholding",
  themeColor: "#171310",
  description:
    "WOODHOLDING объединяет архитектуру, деревянные дома, окна и двери, пиломатериалы и интерьер в единой системе реализации частных пространств.",
  logoPath: "./logo.png",
  ogImagePath: "./og-image.jpg",
};

const pages = [
  {
    file: "index.html",
    slug: "",
    title:
      "WOODHOLDING: деревянные дома, окна, пиломатериалы и интерьер в одной системе",
    description:
      "WOODHOLDING проектирует и реализует частные пространства из дерева: срубы и дома, окна и двери, пиломатериалы, мебель и интерьер. Работаем по всей России.",
    keywords: [
      "WOODHOLDING",
      "деревянные дома",
      "срубы",
      "дома из дерева",
      "деревянные окна",
      "деревянные двери",
      "пиломатериалы",
      "мебель из массива",
      "интерьер из дерева",
      "строительство домов из дерева",
    ],
  },
  {
    file: "sruby-i-doma.html",
    slug: "sruby-i-doma.html",
    rendererJs: "sruby-i-doma.js",
    scripts: ["./sruby-i-doma.js", "./script.js"],
    bodyClass: "page-sruby-i-doma",
    serviceName: "Срубы и дома",
    title:
      "Срубы и дома из дерева под проект в России | WOODHOLDING",
    description:
      "WOODHOLDING проектирует и строит срубы, деревянные дома, бани и гостевые дома из уральской древесины. Полный цикл: архитектура, материал, остекление и монтаж.",
    keywords: [
      "срубы и дома",
      "деревянные дома",
      "строительство бань",
      "гостевые дома из дерева",
      "уральская древесина",
      "дом из дерева под ключ",
      "строительство частных домов",
    ],
    preloadImage: "./srubs.png",
    ogImagePath: "./srubs.png",
    ogImageAlt: "Деревянный сруб и дом WOODHOLDING",
  },
  {
    file: "okna-i-dveri.html",
    slug: "okna-i-dveri.html",
    configJs: "okna-i-dveri.js",
    rendererJs: "sruby-i-doma.js",
    scripts: ["./okna-i-dveri.js", "./sruby-i-doma.js", "./script.js"],
    bodyClass: "page-sruby-i-doma",
    serviceName: "Окна и двери",
    title:
      "Деревянные окна и двери для частных домов | WOODHOLDING",
    description:
      "WOODHOLDING проектирует, производит и интегрирует деревянные окна, двери, входные группы и теплое остекление для частных домов, бань и загородных объектов.",
    keywords: [
      "деревянные окна",
      "деревянные двери",
      "входные группы из дерева",
      "теплое остекление",
      "окна для загородного дома",
      "двери для частного дома",
    ],
    preloadImage: "./windows.png",
    ogImagePath: "./windows.png",
    ogImageAlt: "Деревянные окна загородного дома WOODHOLDING",
  },
  {
    file: "pilomaterialy.html",
    slug: "pilomaterialy.html",
    configJs: "pilomaterialy.js",
    rendererJs: "sruby-i-doma.js",
    scripts: ["./pilomaterialy.js", "./sruby-i-doma.js", "./script.js"],
    bodyClass: "page-sruby-i-doma",
    serviceName: "Пиломатериалы",
    title:
      "Пиломатериалы для строительства и отделки | WOODHOLDING",
    description:
      "WOODHOLDING производит пиломатериалы для строительных и отделочных задач: доску, брус, погонаж и заготовки с контролем геометрии, влажности и подготовки под проект.",
    keywords: [
      "пиломатериалы",
      "доска и брус",
      "погонаж",
      "материалы из дерева",
      "деревообработка",
      "пиломатериалы для отделки",
    ],
    preloadImage: "./pilomater.png",
    ogImagePath: "./pilomater.png",
    ogImageAlt: "Пиломатериалы WOODHOLDING",
  },
  {
    file: "mebel-i-interer.html",
    slug: "mebel-i-interer.html",
    configJs: "mebel-i-interer.js",
    rendererJs: "sruby-i-doma.js",
    scripts: ["./mebel-i-interer.js", "./sruby-i-doma.js", "./script.js"],
    bodyClass: "page-sruby-i-doma",
    serviceName: "Мебель и интерьер",
    title:
      "Мебель из массива и интерьерные решения | WOODHOLDING",
    description:
      "WOODHOLDING проектирует и реализует мебель из массива, отделку и интерьерные решения для частных домов и загородных пространств. От концепции до чистовой интеграции.",
    keywords: [
      "мебель из массива",
      "интерьер из дерева",
      "авторская мебель",
      "деревянная отделка",
      "мебель для загородного дома",
      "интерьерные решения",
    ],
    preloadImage: "./interier.png",
    ogImagePath: "./interier.png",
    ogImageAlt: "Интерьер с мебелью из массива WOODHOLDING",
  },
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const makeAbsoluteUrl = (relativePath) => {
  if (!relativePath) {
    return `${site.url}/`;
  }

  if (/^https?:\/\//.test(relativePath)) {
    return relativePath;
  }

  const normalized = relativePath.replace(/^\.\//, "");
  return `${site.url}/${normalized}`;
};

const stripTags = (value) =>
  String(value)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const extractFaqItems = (html) => {
  const items = [];
  const matches = html.matchAll(
    /<details[\s\S]*?<span class="faq-question">([\s\S]*?)<\/span>[\s\S]*?<div class="faq-answer">[\s\S]*?<p>([\s\S]*?)<\/p>/g
  );

  for (const match of matches) {
    const question = stripTags(match[1]);
    const answer = stripTags(match[2]);

    if (question && answer) {
      items.push({ question, answer });
    }
  }

  return items;
};

const findFirstMatch = (html, pattern) => {
  const match = html.match(pattern);
  return match ? stripTags(match[1]) : "";
};

const createMetaDescriptionNode = () => {
  let content = "";

  return {
    get content() {
      return content;
    },
    setAttribute(name, value) {
      if (name === "content") {
        content = String(value);
      }
    },
  };
};

const prerenderDynamicPage = (page) => {
  const root = { innerHTML: "" };
  const metaDescription = createMetaDescriptionNode();

  const noop = () => {};

  const document = {
    title: page.title,
    body: {
      insertAdjacentHTML: noop,
      classList: { add: noop, remove: noop },
    },
    getElementById(id) {
      return id === "page-root" ? root : null;
    },
    querySelector(selector) {
      if (selector === 'meta[name="description"]') {
        return metaDescription;
      }

      return null;
    },
    querySelectorAll() {
      return [];
    },
    addEventListener: noop,
  };

  const windowObject = {
    __LANDING_PAGE_CONTENT__: {},
    matchMedia: () => ({
      matches: false,
      addEventListener: noop,
      removeEventListener: noop,
    }),
    requestAnimationFrame: noop,
    addEventListener: noop,
    clearTimeout: noop,
    setTimeout: () => 0,
    scrollTo: noop,
    innerHeight: 1080,
    innerWidth: 1440,
    scrollY: 0,
    history: {
      pushState: noop,
      scrollRestoration: "manual",
    },
    location: {
      hash: "",
    },
  };

  const context = vm.createContext({
    console,
    document,
    window: windowObject,
    globalThis: null,
    setTimeout: () => 0,
    clearTimeout: noop,
  });

  context.globalThis = context;

  if (page.configJs) {
    const configCode = fs.readFileSync(path.join(rootDir, page.configJs), "utf8");
    vm.runInContext(configCode, context, { filename: page.configJs });
  }

  const rendererCode = fs.readFileSync(
    path.join(rootDir, page.rendererJs),
    "utf8"
  );
  vm.runInContext(rendererCode, context, { filename: page.rendererJs });

  return {
    html: root.innerHTML.trim(),
    title: document.title,
    description: metaDescription.content || page.description,
  };
};

const getOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: `${site.url}/`,
  logo: {
    "@type": "ImageObject",
    url: makeAbsoluteUrl(site.logoPath),
  },
  description: site.description,
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
});

const getWebSiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: `${site.url}/`,
  name: site.name,
  inLanguage: site.language,
  description: site.description,
  publisher: {
    "@id": `${site.url}/#organization`,
  },
});

const getBreadcrumbSchema = (pageUrl, pageName) => ({
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumbs`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: `${site.url}/`,
    },
    ...(pageName === "Главная"
      ? []
      : [
          {
            "@type": "ListItem",
            position: 2,
            name: pageName,
            item: pageUrl,
          },
        ]),
  ],
});

const getFaqSchema = (pageUrl, faqItems) => {
  if (!faqItems.length) {
    return null;
  }

  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
};

const getHomeSchema = (page, faqItems) => {
  const pageUrl = `${site.url}/`;

  const graph = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      description: page.description,
      inLanguage: site.language,
      image: makeAbsoluteUrl(page.ogImagePath || site.ogImagePath),
      isPartOf: {
        "@id": `${site.url}/#website`,
      },
      about: [
        { "@type": "Thing", name: "деревянные дома" },
        { "@type": "Thing", name: "деревянные окна и двери" },
        { "@type": "Thing", name: "пиломатериалы" },
        { "@type": "Thing", name: "мебель и интерьер из дерева" },
      ],
    },
    {
      "@type": "OfferCatalog",
      "@id": `${pageUrl}#catalog`,
      name: "Направления WOODHOLDING",
      itemListElement: pages
        .filter((item) => item.serviceName)
        .map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.serviceName,
            url: makeAbsoluteUrl(item.slug),
          },
        })),
    },
    getBreadcrumbSchema(pageUrl, "Главная"),
  ];

  const faqSchema = getFaqSchema(pageUrl, faqItems);

  if (faqSchema) {
    graph.push(faqSchema);
  }

  return graph;
};

const getServiceSchema = (page, pageUrl, faqItems) => {
  const graph = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      description: page.description,
      inLanguage: site.language,
      image: makeAbsoluteUrl(page.ogImagePath || site.ogImagePath),
      isPartOf: {
        "@id": `${site.url}/#website`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumbs`,
      },
    },
    getBreadcrumbSchema(pageUrl, page.serviceName),
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: `${page.serviceName} — ${site.name}`,
      serviceType: page.serviceName,
      description: page.description,
      areaServed: {
        "@type": "Country",
        name: "Россия",
      },
      provider: {
        "@id": `${site.url}/#organization`,
      },
      url: pageUrl,
      image: makeAbsoluteUrl(page.ogImagePath || site.ogImagePath),
    },
  ];

  const faqSchema = getFaqSchema(pageUrl, faqItems);

  if (faqSchema) {
    graph.push(faqSchema);
  }

  return graph;
};

const buildStructuredData = (page, faqItems) => {
  const pageUrl = page.slug ? makeAbsoluteUrl(page.slug) : `${site.url}/`;
  const graph = page.serviceName
    ? getServiceSchema(page, pageUrl, faqItems)
    : getHomeSchema(page, faqItems);

  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": graph,
    },
    null,
    2
  );
};

const buildHead = (page, pageUrl, faqItems) => {
  const ogImagePath = page.ogImagePath || site.ogImagePath;
  const ogImageUrl = makeAbsoluteUrl(ogImagePath);
  const structuredData = buildStructuredData(page, faqItems);
  const keywords = escapeHtml(page.keywords.join(", "));
  const alternateHref = pageUrl;

  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="keywords" content="${keywords}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="author" content="${escapeHtml(site.name)}" />
    <meta name="theme-color" content="${escapeHtml(site.themeColor)}" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="canonical" href="${escapeHtml(pageUrl)}" />
    <link rel="alternate" hreflang="ru-RU" href="${escapeHtml(alternateHref)}" />
    <link rel="alternate" hreflang="x-default" href="${escapeHtml(alternateHref)}" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:type" content="${page.serviceName ? "website" : "website"}" />
    <meta property="og:site_name" content="${escapeHtml(site.name)}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${escapeHtml(pageUrl)}" />
    <meta property="og:image" content="${escapeHtml(ogImageUrl)}" />
    <meta property="og:image:alt" content="${escapeHtml(page.ogImageAlt || page.title)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />
    <link rel="icon" href="./logo.png" type="image/png" />
    <link rel="apple-touch-icon" href="./logo.png" />
    <link rel="manifest" href="./site.webmanifest" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    ${
      page.preloadImage
        ? `<link rel="preload" as="image" href="${escapeHtml(page.preloadImage)}" fetchpriority="high" />`
        : ""
    }
    <link rel="stylesheet" href="./styles.css" />
    <script type="application/ld+json">
${structuredData}
    </script>`;
};

const writeDynamicPage = (page, prerendered) => {
  const pageUrl = makeAbsoluteUrl(page.slug);
  const faqItems = extractFaqItems(prerendered.html);
  const html = `<!DOCTYPE html>
<html lang="ru">
  <head>
${buildHead(
  page,
  pageUrl,
  faqItems
)}
  </head>
  <body class="${escapeHtml(page.bodyClass || "")}">
    <div id="page-root" aria-live="polite">
${prerendered.html
  .split("\n")
  .map((line) => `      ${line}`)
  .join("\n")}
    </div>
${page.scripts.map((src) => `    <script src="${src}"></script>`).join("\n")}
  </body>
</html>
`;

  fs.writeFileSync(path.join(rootDir, page.file), html);
};

const writeRobots = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;

  fs.writeFileSync(path.join(rootDir, "robots.txt"), robots);
};

const writeSitemap = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((page) => {
      const loc = page.slug ? makeAbsoluteUrl(page.slug) : `${site.url}/`;
      return `  <url>
    <loc>${escapeHtml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.slug ? "weekly" : "weekly"}</changefreq>
    <priority>${page.slug ? "0.9" : "1.0"}</priority>
  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  fs.writeFileSync(path.join(rootDir, "sitemap.xml"), sitemap);
};

const writeManifest = () => {
  const manifest = {
    name: site.name,
    short_name: site.name,
    description: site.description,
    lang: site.language,
    start_url: "/woodholding/",
    scope: "/woodholding/",
    display: "standalone",
    background_color: site.themeColor,
    theme_color: site.themeColor,
    icons: [
      {
        src: "./logo.png",
        sizes: "2166x1142",
        type: "image/png",
      },
    ],
  };

  fs.writeFileSync(
    path.join(rootDir, "site.webmanifest"),
    `${JSON.stringify(manifest, null, 2)}\n`
  );
};

for (const page of pages) {
  if (!page.rendererJs) {
    continue;
  }

  const prerendered = prerenderDynamicPage(page);
  writeDynamicPage(page, prerendered);
}

writeRobots();
writeSitemap();
writeManifest();
