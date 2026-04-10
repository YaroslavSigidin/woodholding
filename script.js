const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("has-reveal-motion");

const deferredVideos = [...document.querySelectorAll("video[data-deferred-video]")];

const hydrateDeferredVideo = (video) => {
  if (!(video instanceof HTMLVideoElement) || video.dataset.videoReady === "true") {
    return;
  }

  const sources = [...video.querySelectorAll("source[data-src]")];

  if (!sources.length) {
    return;
  }

  sources.forEach((source) => {
    source.src = source.dataset.src || "";
    source.removeAttribute("data-src");
  });

  video.dataset.videoReady = "true";
  video.load();

  if (reducedMotion || !video.autoplay) {
    return;
  }

  const playPromise = video.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
};

if (deferredVideos.length) {
  if (reducedMotion) {
    deferredVideos.forEach((video) => {
      video.removeAttribute("autoplay");
    });
  } else if ("IntersectionObserver" in window) {
    const deferredVideoObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          hydrateDeferredVideo(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "240px 0px",
        threshold: 0.05,
      }
    );

    deferredVideos.forEach((video) => deferredVideoObserver.observe(video));
  } else {
    deferredVideos.forEach(hydrateDeferredVideo);
  }
}

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open", !expanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

const autoRevealSelectors = [
  ".footer-brand-block",
  ".footer-column",
  ".footer-legal",
];

autoRevealSelectors.forEach((selector) => {
  document.querySelectorAll(selector).forEach((element) => {
    if (!element.hasAttribute("data-reveal")) {
      element.setAttribute("data-reveal", "");
    }
  });
});

const promoteRevealChildren = (selector) => {
  document.querySelectorAll(selector).forEach((container) => {
    const children = [...container.children];

    if (!children.length) {
      return;
    }

    container.removeAttribute("data-reveal");

    children.forEach((child) => {
      child.setAttribute("data-reveal", "");
    });
  });
};

[
  ".header-inner",
  ".site-nav",
  ".section-heading",
  ".section-intro",
  ".hero-actions",
  ".section-actions",
  ".estimate-form",
  ".estimate-form__row",
  ".final-cta-form",
  ".footer-brand-block",
  ".footer-column",
  ".footer-social",
  ".footer-legal",
  ".sticky-cta",
  ".checklist",
  ".form-social",
].forEach(promoteRevealChildren);

const lineSplitSelectors = [
  ".hero-copy h1",
  ".hero-copy .hero-subtitle",
  ".hero-copy .hero-extra",
  ".hero-aside .hero-note",
  ".section-title-frame h2",
  ".eyebrow",
  ".card-index",
  ".faq-index",
  ".process-step__index",
  ".section-copy",
  ".direction-card h3",
  ".direction-card p",
  ".metric-item strong",
  ".project-meta p",
  ".why-item h3",
  ".why-item__copy",
  ".process-step h3",
  ".process-step__copy",
  ".faq-question",
  ".faq-answer p",
  ".final-cta-copy h2",
  ".final-cta-copy .section-copy",
  ".footer-copy",
  ".footer-label",
  ".footer-column a",
  ".footer-legal p",
  ".holding-note",
].filter(Boolean);

const lineSplitOriginalText = new WeakMap();
const shouldKeepHeroTitleSingleLine =
  window.matchMedia("(min-width: 1081px)").matches &&
  document.body.classList.contains("page-sruby-i-doma");

const isLineSplitCandidate = (element) => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  if (shouldKeepHeroTitleSingleLine && element.matches(".hero-copy h1")) {
    return false;
  }

  if (
    element.closest(
      ".site-nav, .button, .nav-toggle, .hero-actions, .section-actions, .footer-social, .sticky-cta, .gallery-slider"
    )
  ) {
    return false;
  }

  if (element.children.length > 0) {
    return false;
  }

  const text = lineSplitOriginalText.get(element) ?? element.textContent ?? "";
  return text.trim().length > 0;
};

const measureLineBreaks = (element, text, width) => {
  const probe = document.createElement("div");
  const computed = window.getComputedStyle(element);

  probe.className = element.className;
  probe.setAttribute("aria-hidden", "true");
  probe.style.position = "absolute";
  probe.style.left = "-99999px";
  probe.style.top = "0";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  probe.style.boxSizing = "border-box";
  probe.style.width = `${width}px`;
  probe.style.maxWidth = "none";
  probe.style.display = "block";
  probe.style.margin = "0";
  probe.style.padding = "0";
  probe.style.border = "0";
  probe.style.whiteSpace = "normal";
  probe.style.font = computed.font;
  probe.style.fontFamily = computed.fontFamily;
  probe.style.fontSize = computed.fontSize;
  probe.style.fontWeight = computed.fontWeight;
  probe.style.fontStyle = computed.fontStyle;
  probe.style.lineHeight = computed.lineHeight;
  probe.style.letterSpacing = computed.letterSpacing;
  probe.style.wordSpacing = computed.wordSpacing;
  probe.style.textTransform = computed.textTransform;
  probe.style.wordBreak = computed.wordBreak;
  probe.style.overflowWrap = computed.overflowWrap;
  probe.style.hyphens = computed.hyphens;
  probe.style.textAlign = computed.textAlign;

  const words = text.split(/\s+/).filter(Boolean);

  words.forEach((word, index) => {
    const wordSpan = document.createElement("span");
    wordSpan.textContent = word;
    probe.appendChild(wordSpan);

    if (index < words.length - 1) {
      probe.appendChild(document.createTextNode(" "));
    }
  });

  document.body.appendChild(probe);

  const wordSpans = [...probe.querySelectorAll("span")];
  const lines = [];
  let currentTop = null;
  let currentLine = [];

  wordSpans.forEach((wordSpan, index) => {
    const top = Math.round(wordSpan.offsetTop);

    if (currentTop === null || Math.abs(top - currentTop) > 1) {
      if (currentLine.length) {
        lines.push(currentLine);
      }

      currentTop = top;
      currentLine = [words[index]];
      return;
    }

    currentLine.push(words[index]);
  });

  if (currentLine.length) {
    lines.push(currentLine);
  }

  probe.remove();
  return lines;
};

const splitTextBlock = (element) => {
  if (!isLineSplitCandidate(element)) {
    return false;
  }

  const originalText = lineSplitOriginalText.has(element)
    ? lineSplitOriginalText.get(element)
    : element.textContent ?? "";
  const normalizedText = originalText.replace(/\s+/g, " ").trim();

  lineSplitOriginalText.set(element, originalText);

  if (!normalizedText) {
    return false;
  }

  const width = Math.max(element.clientWidth, 1);

  if (!width) {
    return false;
  }

  const lines = measureLineBreaks(element, normalizedText, width);

  if (!lines.length) {
    return false;
  }

  const fragment = document.createDocumentFragment();

  lines.forEach((lineWords, lineIndex) => {
    const line = document.createElement("span");
    line.className = "text-line";
    line.style.setProperty("--line-index", String(lineIndex));

    const inner = document.createElement("span");
    inner.className = "text-line__inner";
    inner.textContent = lineWords.join(" ");

    line.appendChild(inner);
    fragment.appendChild(line);
  });

  element.replaceChildren(fragment);
  element.setAttribute("data-text-lines", "");
  element.classList.add("line-split-ready");

  return true;
};

const splitAllTextBlocks = () => {
  const targets = new Set();

  lineSplitSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (isLineSplitCandidate(element)) {
        targets.add(element);
      }
    });
  });

  targets.forEach(splitTextBlock);
};

if (!reducedMotion) {
  splitAllTextBlocks();
}

const reveals = [...document.querySelectorAll("[data-reveal]")];
const revealGroupSelector = ".site-header, main section, .site-footer, .sticky-cta";
const revealGroups = document.querySelectorAll(revealGroupSelector);

revealGroups.forEach((group) => {
  let localIndex = 0;

  group.querySelectorAll("[data-reveal]").forEach((element) => {
    if (element.closest(revealGroupSelector) !== group) return;

    element.style.setProperty("--delay", `${Math.min(localIndex * 96, 960)}ms`);
    localIndex += 1;
  });
});

if (reducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => {
    element.classList.add("is-visible");
  });
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -14% 0px",
      threshold: 0.02,
    }
  );

  reveals.forEach((element) => observer.observe(element));
}

const contactModalMarkup = `
  <div class="contact-modal" hidden>
    <div class="contact-modal__backdrop" data-contact-modal-close></div>
    <div
      class="contact-modal__dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-copy"
      tabindex="-1"
    >
      <button
        class="contact-modal__close"
        type="button"
        data-contact-modal-close
        aria-label="Закрыть форму"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M6 6L18 18" />
          <path d="M18 6L6 18" />
        </svg>
      </button>
      <div class="contact-modal__content">
        <div class="contact-modal__main">
          <p class="eyebrow eyebrow--number">Связаться</p>
          <h2 id="contact-modal-title">Оставить заявку</h2>
          <p class="section-copy" id="contact-modal-copy">
            Оставьте контакты, и мы свяжемся с вами, чтобы уточнить задачу и
            предложить следующий шаг.
          </p>
          <form class="estimate-form contact-modal__form">
            <div class="contact-modal__fields">
              <label class="estimate-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  aria-label="Имя"
                  autocomplete="name"
                  required
                />
              </label>
              <label class="estimate-field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  aria-label="Номер телефона"
                  autocomplete="tel"
                  inputmode="numeric"
                  pattern="^\\+7\\s\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}$"
                  maxlength="18"
                  required
                />
              </label>
              <label class="estimate-field contact-modal__comment">
                <textarea
                  name="comment"
                  rows="4"
                  placeholder="Комментарий"
                  aria-label="Комментарий"
                ></textarea>
              </label>
            </div>
            <button class="button button-primary estimate-submit" type="submit">
              Отправить
            </button>
          </form>
        </div>
        <div
          class="contact-modal__success"
          hidden
          role="status"
          aria-live="polite"
          aria-atomic="true"
          tabindex="-1"
        >
          <div class="contact-modal__success-mark" aria-hidden="true">
            <svg viewBox="0 0 96 96" focusable="false" aria-hidden="true">
              <circle
                class="contact-modal__success-ring"
                cx="48"
                cy="48"
                r="29"
              />
              <path
                class="contact-modal__success-check"
                d="M34 49.5 44 59.5 63.5 40"
              />
            </svg>
          </div>
          <p class="contact-modal__success-title">Заявка успешно отправлена</p>
        </div>
      </div>
    </div>
  </div>
`;

document.body.insertAdjacentHTML("beforeend", contactModalMarkup);

const contactModal = document.querySelector(".contact-modal");
const contactModalDialog = document.querySelector(".contact-modal__dialog");
const contactModalMain = document.querySelector(".contact-modal__main");
const contactModalForm = document.querySelector(".contact-modal__form");
const contactModalPhoneInput = document.querySelector(
  '.contact-modal__form input[name="phone"]'
);
const contactModalSuccess = document.querySelector(".contact-modal__success");
const contactModalTriggerSelector = ".header-contact, .hero-cta, .sticky-cta__secondary";
const contactModalCloseSelector = "[data-contact-modal-close]";
let contactModalReturnFocus = null;
let contactModalHideTimeout = null;
const modalTransitionMs = reducedMotion ? 0 : 220;

const getContactModalFocusables = () => {
  if (!contactModalDialog) {
    return [];
  }

  return [...contactModalDialog.querySelectorAll(
    "button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex='-1'])"
  )].filter((element) => {
    if (!(element instanceof HTMLElement)) {
      return false;
    }

    if (element.hidden || element.closest("[hidden], [inert]")) {
      return false;
    }

    const computed = window.getComputedStyle(element);
    return computed.display !== "none" && computed.visibility !== "hidden";
  });
};

const formatContactPhone = (value) => {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  }

  if (digits.startsWith("7")) {
    digits = digits.slice(1);
  }

  digits = digits.slice(0, 10);

  if (!digits.length) {
    return "";
  }

  const parts = [`+7 (`];
  parts.push(digits.slice(0, 3));

  if (digits.length >= 3) {
    parts.push(")");
  }

  if (digits.length > 3) {
    parts.push(` ${digits.slice(3, 6)}`);
  }

  if (digits.length > 6) {
    parts.push(`-${digits.slice(6, 8)}`);
  }

  if (digits.length > 8) {
    parts.push(`-${digits.slice(8, 10)}`);
  }

  return parts.join("");
};

const closeContactModal = () => {
  if (!contactModal || contactModal.hidden) {
    return;
  }

  window.clearTimeout(contactModalHideTimeout);
  contactModal.classList.remove("is-open");
  const returnFocus = contactModalReturnFocus;

  contactModalHideTimeout = window.setTimeout(() => {
    if (contactModal.hidden) {
      return;
    }

    contactModal.hidden = true;
    document.body.classList.remove("modal-open");

    if (contactModal.classList.contains("is-success")) {
      contactModal.classList.remove("is-success");

      if (contactModalMain instanceof HTMLElement) {
        contactModalMain.inert = false;
      }

      if (contactModalSuccess instanceof HTMLElement) {
        contactModalSuccess.hidden = true;
      }

      contactModalForm?.reset();
    }

    if (returnFocus instanceof HTMLElement) {
      returnFocus.focus({ preventScroll: true });
    }
  }, modalTransitionMs);

  contactModalReturnFocus = null;
};

const openContactModal = () => {
  if (!contactModal) {
    return;
  }

  window.clearTimeout(contactModalHideTimeout);

  if (!contactModal.hidden && contactModal.classList.contains("is-open")) {
    const focusables = getContactModalFocusables();
    focusables[0]?.focus({ preventScroll: true });
    return;
  }

  contactModalReturnFocus = document.activeElement instanceof HTMLElement
    ? document.activeElement
    : null;

  if (contactModal.classList.contains("is-success")) {
    contactModal.classList.remove("is-success");

    if (contactModalMain instanceof HTMLElement) {
      contactModalMain.inert = false;
    }

    if (contactModalSuccess instanceof HTMLElement) {
      contactModalSuccess.hidden = true;
    }

    contactModalForm?.reset();
  }

  contactModal.hidden = false;
  document.body.classList.add("modal-open");

  window.requestAnimationFrame(() => {
    contactModal.classList.add("is-open");

    const firstField = contactModalPhoneInput
      ?? contactModalDialog?.querySelector("input, textarea")
      ?? contactModalDialog?.querySelector(".contact-modal__close");

    if (firstField instanceof HTMLElement) {
      firstField.focus({ preventScroll: true });
    }
  });
};

if (contactModalPhoneInput instanceof HTMLInputElement) {
  const primeContactPhoneInput = () => {
    if (contactModalPhoneInput.value) {
      return;
    }

    contactModalPhoneInput.value = "+7 (";
    contactModalPhoneInput.setSelectionRange(
      contactModalPhoneInput.value.length,
      contactModalPhoneInput.value.length
    );
  };

  const syncContactPhoneValue = () => {
    const nextValue = formatContactPhone(contactModalPhoneInput.value);
    contactModalPhoneInput.value = nextValue;
  };

  contactModalPhoneInput.addEventListener("focus", primeContactPhoneInput);
  contactModalPhoneInput.addEventListener("input", syncContactPhoneValue);
  contactModalPhoneInput.addEventListener("blur", syncContactPhoneValue);
}

document.addEventListener(
  "click",
  (event) => {
    const trigger = event.target instanceof Element
      ? event.target.closest(contactModalTriggerSelector)
      : null;

    if (!trigger) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    openContactModal();
  },
  true
);

contactModal?.querySelectorAll(contactModalCloseSelector).forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeContactModal();
  });
});

contactModal?.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;

  if (target?.closest(contactModalCloseSelector)) {
    event.preventDefault();
    event.stopPropagation();
    closeContactModal();
  }
});

contactModalForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!contactModal || !(contactModalSuccess instanceof HTMLElement)) {
    return;
  }

  contactModalSuccess.hidden = false;

  if (contactModalMain instanceof HTMLElement) {
    contactModalMain.inert = true;
  }

  window.requestAnimationFrame(() => {
    contactModal.classList.add("is-success");
    contactModalSuccess.focus({ preventScroll: true });
  });
});

document.addEventListener("keydown", (event) => {
  if (!contactModal || contactModal.hidden) {
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeContactModal();
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  const focusables = getContactModalFocusables();

  if (!focusables.length) {
    event.preventDefault();
    return;
  }

  const firstFocusable = focusables[0];
  const lastFocusable = focusables[focusables.length - 1];
  const activeElement = document.activeElement;

  if (event.shiftKey && activeElement === firstFocusable) {
    event.preventDefault();
    lastFocusable.focus({ preventScroll: true });
  } else if (!event.shiftKey && activeElement === lastFocusable) {
    event.preventDefault();
    firstFocusable.focus({ preventScroll: true });
  }
});

const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
const fixedHeader = document.querySelector(".site-header");

if (fixedHeader) {
  const updateHeaderState = () => {
    fixedHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

const easeInOutCubic = (progress) => {
  if (progress < 0.5) {
    return 4 * progress * progress * progress;
  }

  return 1 - Math.pow(-2 * progress + 2, 3) / 2;
};

const animateScrollTo = (targetY) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = Math.min(1400, Math.max(700, Math.abs(distance) * 0.75));
  let startTime = 0;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href) return;

    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();

    const headerOffset = fixedHeader ? fixedHeader.getBoundingClientRect().height + 16 : 0;
    const targetY = Math.max(
      target.getBoundingClientRect().top + window.scrollY - headerOffset,
      0
    );

    if (reducedMotion) {
      window.scrollTo(0, targetY);
    } else {
      animateScrollTo(targetY);
    }

    if (window.location.hash !== href) {
      window.history.pushState({}, "", href);
    }
  });
});

if (window.location.hash === "#top") {
  window.requestAnimationFrame(() => {
    window.scrollTo(0, 0);
  });
}

const heroMedia = document.querySelector(".hero-media");

if (heroMedia && !reducedMotion) {
  const updateParallax = () => {
    const offset = window.scrollY * 0.045;
    heroMedia.style.transform = `translateY(${offset}px) scale(1.04)`;
  };

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
}

const featurePhotoFrame = document.querySelector(".feature-photo__frame");
const featurePhotoImage = featurePhotoFrame?.querySelector("img");

if (featurePhotoFrame && featurePhotoImage && !reducedMotion) {
  const updateFeaturePhotoParallax = () => {
    const rect = featurePhotoFrame.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const progress = Math.min(
      Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0),
      1
    );
    const travel = Math.min(rect.height * 0.18, 88);
    const offset = (0.5 - progress) * travel * 2;

    featurePhotoFrame.style.setProperty(
      "--feature-photo-offset",
      `${offset.toFixed(2)}px`
    );
  };

  updateFeaturePhotoParallax();
  window.addEventListener("scroll", updateFeaturePhotoParallax, { passive: true });
  window.addEventListener("resize", updateFeaturePhotoParallax);
}

const faqItems = document.querySelectorAll(".faq-list details");

if (faqItems.length) {
  const closeFaqItem = (item) => {
    const answer = item.querySelector(".faq-answer");
    if (!answer || !item.open) return;

    answer.style.maxHeight = `${answer.scrollHeight}px`;

    window.requestAnimationFrame(() => {
      answer.style.maxHeight = "0px";
      answer.style.opacity = "0";
      answer.style.marginTop = "0";
    });

    window.setTimeout(() => {
      item.open = false;
    }, 420);
  };

  const openFaqItem = (item) => {
    const answer = item.querySelector(".faq-answer");
    if (!answer) return;

    faqItems.forEach((other) => {
      if (other !== item) closeFaqItem(other);
    });

    item.open = true;
    answer.style.maxHeight = "0px";
    answer.style.opacity = "0";
    answer.style.marginTop = "0";

    window.requestAnimationFrame(() => {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
      answer.style.opacity = "1";
      answer.style.marginTop = "1.2rem";
    });
  };

  faqItems.forEach((item) => {
    const summary = item.querySelector("summary");
    const answer = item.querySelector(".faq-answer");

    if (!summary || !answer) return;

    answer.style.maxHeight = "0px";

    summary.addEventListener("click", (event) => {
      event.preventDefault();

      if (item.open) {
        closeFaqItem(item);
        return;
      }

      openFaqItem(item);
    });
  });
}

const hoverPreviewItems = document.querySelectorAll("[data-preview]");
const cursorPreview = document.querySelector(".cursor-preview");
const cursorPreviewMedia = document.querySelector(".cursor-preview__media");
const cursorPreviewImage = document.querySelector(".cursor-preview__image");
const hoverPreviewEnabled = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (
  hoverPreviewEnabled &&
  !reducedMotion &&
  cursorPreview &&
  cursorPreviewMedia &&
  cursorPreviewImage &&
  hoverPreviewItems.length
) {
  const state = {
    activeImage: "",
    cursorPosition: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    renderedPosition: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    opacity: 0,
    scale: 0.5,
    targetOpacity: 0,
    targetScale: 0.5,
    rafId: 0,
    showTimer: 0,
    hideTimer: 0,
  };

  const easing = 0.18;
  const fadeEasing = 0.16;
  const showDelay = 70;
  let activePreviewItem = null;

  const setPreviewImage = (src) => {
    if (!src || state.activeImage === src) return;
    state.activeImage = src;
    cursorPreviewImage.src = src;
  };

  const showPreview = (item) => {
    const src = item.dataset.preview;
    const previewRatio = item.dataset.previewRatio || "";

    activePreviewItem = item;
    window.clearTimeout(state.showTimer);
    window.clearTimeout(state.hideTimer);
    setPreviewImage(src);
    cursorPreview.classList.toggle(
      "cursor-preview--landscape",
      previewRatio === "landscape"
    );
    cursorPreview.classList.add("is-ready");

    state.showTimer = window.setTimeout(() => {
      if (state.activeImage !== src || activePreviewItem !== item) return;
      state.targetOpacity = 1;
      state.targetScale = 1;
      cursorPreview.classList.add("is-visible");
    }, showDelay);
  };

  const hidePreview = (item = null) => {
    if (item && activePreviewItem !== item) return;

    activePreviewItem = null;
    window.clearTimeout(state.showTimer);
    window.clearTimeout(state.hideTimer);
    state.targetOpacity = 0;
    state.targetScale = 0.5;
    cursorPreview.classList.remove("is-visible");
    cursorPreview.classList.remove("cursor-preview--landscape");
    state.activeImage = "";
    state.hideTimer = window.setTimeout(() => {
      if (state.targetOpacity > 0) return;
      cursorPreview.classList.remove("is-ready");
      cursorPreviewImage.removeAttribute("src");
    }, 260);
  };

  const updatePointer = (event) => {
    state.cursorPosition.x = event.clientX;
    state.cursorPosition.y = event.clientY;
  };

  const animatePreview = () => {
    state.renderedPosition.x +=
      (state.cursorPosition.x - state.renderedPosition.x) * easing;
    state.renderedPosition.y +=
      (state.cursorPosition.y - state.renderedPosition.y) * easing;
    state.opacity += (state.targetOpacity - state.opacity) * fadeEasing;
    state.scale += (state.targetScale - state.scale) * fadeEasing;

    cursorPreview.style.left = `${state.renderedPosition.x}px`;
    cursorPreview.style.top = `${state.renderedPosition.y}px`;
    cursorPreview.style.opacity = String(state.opacity);
    cursorPreview.style.transform = "translate(-50%, -50%)";
    cursorPreview.style.visibility =
      state.opacity > 0.02 || state.targetOpacity > 0 ? "visible" : "hidden";
    cursorPreviewMedia.style.transform = `scale(${state.scale})`;

    state.rafId = window.requestAnimationFrame(animatePreview);
  };

  window.addEventListener("mousemove", updatePointer, { passive: true });
  window.addEventListener("blur", hidePreview);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) hidePreview();
  });

  hoverPreviewItems.forEach((item) => {
    item.addEventListener("pointerenter", () => {
      showPreview(item);
    });

    item.addEventListener("pointerleave", () => hidePreview(item));
  });

  state.rafId = window.requestAnimationFrame(animatePreview);
}
