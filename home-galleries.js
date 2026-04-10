(() => {
  const root = document.querySelector("[data-home-direction-galleries]");

  if (!root) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const formatFrameNumber = (index) => String(index + 1).padStart(2, "0");

  const buildGallerySlides = (basePath, subject, frameNumbers) =>
    frameNumbers.map((frameNumber, index) => ({
      src: `${basePath}/rebtcova-${frameNumber}.jpg`,
      alt: `${subject}, кадр ${formatFrameNumber(index)}`,
      label: `Кадр ${formatFrameNumber(index)}`,
    }));

  const galleries = [
    {
      eyebrow: "Галерея объектов",
      title: "Дома и срубы",
      text:
        "Несколько ракурсов, чтобы увидеть посадку в лесу, фасады, интерьер и детали без лишней постановки.",
      slides: buildGallerySlides(
        "./HOMES/izbrannoe_web_2026-04-09%20(3)",
        "Сруб и дом",
        [339, 151, 159, 162, 163, 164, 180, 203, 204, 237, 250, 251, 252, 253, 255, 258, 261, 263, 268, 310, 341]
      ),
    },
    {
      eyebrow: "Галерея объектов",
      title: "Произвоство окон",
      text:
        "Подборка кадров, чтобы показать окна, двери, узлы, детали и интеграцию в реальных объектах.",
      slides: buildGallerySlides(
        "./WINDOWS/izbrannoe_web_2026-04-09",
        "Окна и двери",
        [23, 24, 27, 29, 30, 31, 32, 34, 42, 48, 58, 61, 67, 71, 73, 78, 82]
      ),
    },
    {
      eyebrow: "Галерея объектов",
      title: "Цех деревообработки",
      text:
        "Подборка кадров, чтобы показать материал, фактуру, подготовку и применение в реальных проектах.",
      slides: buildGallerySlides(
        "./LAMBER/izbrannoe_web_2026-04-09%20(2)",
        "Пиломатериалы",
        [95, 85, 86, 93, 100, 108, 109, 110, 113, 120, 123, 130, 132, 136, 141, 142, 144]
      ),
    },
    {
      eyebrow: "Галерея объектов",
      title: "Реализованные интерьеры",
      text:
        "Подборка кадров, чтобы показать мебель, отделку, детали и интеграцию интерьера в реальных пространствах.",
      slides: buildGallerySlides(
        "./TABLE/izbrannoe_web_2026-04-09%20(4)",
        "Мебель и интерьер",
        [271, 187, 217, 221, 224, 266, 318, 319, 320, 326, 329, 333, 334, 350, 354, 355, 356, 357, 358, 363, 366, 370, 373, 378, 379]
      ),
    },
  ];

  const renderTitleFrame = (title) => `
    <div class="section-title-frame">
      <h2>${escapeHtml(title)}</h2>
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

  const renderGallerySection = (gallery, galleryIndex) => `
    <section class="section gallery home-direction-gallery">
      <div class="container">
        ${renderStackedSectionHeading(gallery.eyebrow, gallery.title, gallery.text)}
        <div class="gallery-slider" data-home-gallery-slider>
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
                      id="home-gallery-${galleryIndex}-slide-${index}"
                      data-slide-index="${index}"
                    >
                      <img
                        src="${escapeHtml(slide.src)}"
                        alt="${escapeHtml(slide.alt)}"
                        loading="${index === 0 ? "eager" : "lazy"}"
                        decoding="async"
                      />
                      <div class="gallery-slider__caption">
                        <span class="gallery-slider__index">${formatFrameNumber(index)}</span>
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
                    aria-controls="home-gallery-${galleryIndex}-slide-${index}"
                    aria-pressed="${index === 0 ? "true" : "false"}"
                    aria-label="Показать слайд ${formatFrameNumber(index)}: ${escapeHtml(slide.label)}"
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

  root.innerHTML = galleries.map(renderGallerySection).join("");

  const initGallerySlider = (gallerySlider) => {
    if (gallerySlider.dataset.galleryReady === "true") {
      return;
    }

    gallerySlider.dataset.galleryReady = "true";

    const prevButton = gallerySlider.querySelector("[data-slide-nav='prev']");
    const nextButton = gallerySlider.querySelector("[data-slide-nav='next']");
    const track = gallerySlider.querySelector(".gallery-slider__track");
    const thumbsTrack = gallerySlider.querySelector(".gallery-slider__thumbs");
    const realSlides = [...gallerySlider.querySelectorAll(".gallery-slider__slide")];
    const thumbs = [...gallerySlider.querySelectorAll(".gallery-slider__thumb")];

    if (!track || !realSlides.length || !thumbs.length) {
      return;
    }

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
        behavior: reducedMotion ? "auto" : "smooth",
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
          reducedMotion ? "auto" : "smooth"
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
          reducedMotion ? "auto" : "smooth"
        );
      });
    }

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        goToRenderedIndex(
          isSingleSlide ? 0 : index + 1,
          reducedMotion ? "auto" : "smooth"
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
  };

  root.querySelectorAll("[data-home-gallery-slider]").forEach(initGallerySlider);
})();
