import Lenis from 'lenis';

/**
 * RidgeForm UI & Animation Runtime
 * Unified desktop & mobile kinetic animations: Lenis smooth scroll,
 * responsive masked line reveals, scroll-scrubbed statement highlights,
 * mobile-friendly reveal thresholds, touch-ready carousels, and accordions.
 */

const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenisInstance: Lenis | null = null;
const scrollListeners: Array<() => void> = [];

function notifyScrollListeners(): void {
  for (const fn of scrollListeners) fn();
}

function initLenis(): void {
  if (prefersReducedMotion()) return;

  lenisInstance = new Lenis({
    duration: 0.9,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    syncTouch: false,
    allowNestedScroll: true,
    anchors: true,
    autoToggle: true,
    autoRaf: true,
  });

  lenisInstance.on('scroll', notifyScrollListeners);
}

function buildSplitLines(el: HTMLElement, rawText: string): void {
  const words = rawText.split(' ');
  el.innerHTML = '';
  const tempSpans = words.map((word, idx) => {
    const span = document.createElement('span');
    span.textContent = idx < words.length - 1 ? `${word} ` : word;
    span.style.display = 'inline';
    el.appendChild(span);
    return span;
  });

  const lines: string[][] = [];
  let currentTop = -Infinity;
  tempSpans.forEach((span) => {
    const rect = span.getBoundingClientRect();
    if (lines.length === 0 || Math.abs(rect.top - currentTop) > rect.height * 0.45) {
      currentTop = rect.top;
      lines.push([span.textContent || '']);
    } else {
      lines[lines.length - 1].push(span.textContent || '');
    }
  });

  el.innerHTML = '';
  lines.forEach((lineWords, i) => {
    const lineWrap = document.createElement('span');
    lineWrap.className = 'rf-split-line';
    const inner = document.createElement('span');
    inner.className = 'rf-split-inner';
    inner.style.transitionDelay = `${i * 90}ms`;
    inner.textContent = lineWords.join('').trimEnd();
    lineWrap.appendChild(inner);
    el.appendChild(lineWrap);
  });
}

function initSplitReveal(): void {
  const headings = document.querySelectorAll<HTMLElement>('[data-split-reveal]');
  if (!headings.length) return;

  if (prefersReducedMotion()) {
    headings.forEach((h) => h.classList.add('is-visible'));
    return;
  }

  const originals = new Map<HTMLElement, string>();
  headings.forEach((el) => {
    const raw = (el.textContent || '').trim().replace(/\s+/g, ' ');
    if (!raw) return;
    originals.set(el, raw);
    buildSplitLines(el, raw);
  });

  // Re-split lines cleanly if viewport width changes across breakpoints
  let lastWidth = window.innerWidth;
  let resizeTimer: number | undefined;
  window.addEventListener('resize', () => {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      originals.forEach((raw, el) => buildSplitLines(el, raw));
    }, 180);
  });

  if (!('IntersectionObserver' in window)) {
    headings.forEach((h) => h.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.04, rootMargin: '0px 0px -10px 0px' }
  );

  headings.forEach((h) => {
    const rect = h.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94) {
      requestAnimationFrame(() => h.classList.add('is-visible'));
    } else {
      observer.observe(h);
    }
  });
}

function initScrollWords(): void {
  const blocks = document.querySelectorAll<HTMLElement>('[data-scroll-words]');
  if (!blocks.length) return;

  const wordGroups: { el: HTMLElement; spans: HTMLSpanElement[] }[] = [];

  blocks.forEach((el) => {
    const text = (el.textContent || '').trim().replace(/\s+/g, ' ');
    if (!text) return;
    const words = text.split(' ');
    el.innerHTML = '';
    const spans = words.map((word, idx) => {
      const s = document.createElement('span');
      s.className = prefersReducedMotion() ? 'rf-word is-lit' : 'rf-word';
      s.textContent = idx < words.length - 1 ? `${word} ` : word;
      el.appendChild(s);
      return s;
    });
    wordGroups.push({ el, spans });
  });

  if (prefersReducedMotion()) return;

  const update = () => {
    const vh = window.innerHeight;
    wordGroups.forEach(({ el, spans }) => {
      const rect = el.getBoundingClientRect();
      const start = vh * 0.88;
      const end = vh * 0.2;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const litCount = Math.floor(progress * spans.length);
      spans.forEach((s, i) => {
        s.classList.toggle('is-lit', i <= litCount);
      });
    });
  };

  scrollListeners.push(update);

  let rafPending = false;
  window.addEventListener(
    'scroll',
    () => {
      if (lenisInstance) return;
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
          rafPending = false;
          update();
        });
      }
    },
    { passive: true }
  );

  update();
}

function initScrollReveals(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!els.length) return;

  if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const isNarrow = () => window.innerWidth <= 767;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        const rawDelay = Number(target.dataset.delay || '0');
        const delay = isNarrow() ? Math.min(rawDelay, 120) : rawDelay;
        window.setTimeout(() => target.classList.add('is-visible'), delay);
        observer.unobserve(target);
      });
    },
    { threshold: 0.04, rootMargin: '0px 0px -10px 0px' }
  );

  els.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      const delay = Number(el.dataset.delay || '0');
      window.setTimeout(() => el.classList.add('is-visible'), delay);
    } else {
      observer.observe(el);
    }
  });
}

function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>('[data-counter]');
  if (!counters.length) return;

  const animateCounter = (el: HTMLElement) => {
    const raw = (el.dataset.counter || el.textContent || '').trim();
    const match = raw.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) return;

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
    const duration = 1150;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const formatted =
        decimals > 0
          ? current.toFixed(decimals)
          : Math.round(current).toLocaleString('en-US');
      el.textContent = `${prefix}${formatted}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = raw;
      }
    };

    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
    counters.forEach((c) => {
      if (c.dataset.counter) c.textContent = c.dataset.counter;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  counters.forEach((c) => observer.observe(c));
}

function initMobileDrawer(): void {
  const openBtn = document.querySelector<HTMLButtonElement>('[data-nav-open]');
  const closeBtns = document.querySelectorAll<HTMLElement>('[data-nav-close]');
  const drawer = document.querySelector<HTMLElement>('[data-nav-drawer]');
  if (!openBtn || !drawer) return;

  const setOpen = (isOpen: boolean) => {
    drawer.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (lenisInstance) {
      if (isOpen) lenisInstance.stop();
      else lenisInstance.start();
    }
    openBtn.setAttribute('aria-expanded', String(isOpen));
  };

  openBtn.addEventListener('click', () => setOpen(true));
  closeBtns.forEach((btn) => btn.addEventListener('click', () => setOpen(false)));
  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) setOpen(false);
  });
}

function initHeroRotator(): void {
  const slides = document.querySelectorAll<HTMLElement>('[data-hero-thumb]');
  if (slides.length <= 1 || prefersReducedMotion()) return;

  let index = 0;
  window.setInterval(() => {
    slides[index].classList.remove('is-active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-active');
  }, 3600);
}

function initCarousels(): void {
  const carousels = document.querySelectorAll<HTMLElement>('[data-carousel]');
  carousels.forEach((root) => {
    const track = root.querySelector<HTMLElement>('[data-carousel-track]');
    const slides = root.querySelectorAll<HTMLElement>('[data-carousel-slide]');
    const prevBtn = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const nextBtn = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let startX = 0;
    let startY = 0;
    let tracking = false;

    const update = () => {
      const firstSlide = slides[0];
      const slideWidth = firstSlide.getBoundingClientRect().width;
      if (slideWidth <= 0) return;
      const slideStyle = window.getComputedStyle(track);
      const gap = parseFloat(slideStyle.columnGap || slideStyle.gap || '0') || 0;
      const step = slideWidth + gap;
      track.style.transform = `translate3d(-${currentIndex * step}px, 0, 0)`;
    };

    const go = (delta: number) => {
      currentIndex = (currentIndex + delta + slides.length) % slides.length;
      update();
    };

    prevBtn?.addEventListener('click', () => go(-1));
    nextBtn?.addEventListener('click', () => go(1));

    // Native touch swipe support for phones/tablets
    track.addEventListener(
      'touchstart',
      (e) => {
        if (e.touches.length !== 1) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        tracking = true;
      },
      { passive: true }
    );

    track.addEventListener(
      'touchend',
      (e) => {
        if (!tracking || e.changedTouches.length === 0) return;
        tracking = false;
        const dx = e.changedTouches[0].clientX - startX;
        const dy = e.changedTouches[0].clientY - startY;
        if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy)) {
          go(dx < 0 ? 1 : -1);
        }
      },
      { passive: true }
    );

    // Desktop mouse pointer drag fallback
    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      startX = e.clientX;
      tracking = true;
    });
    track.addEventListener('pointerup', (e) => {
      if (e.pointerType !== 'mouse' || !tracking) return;
      tracking = false;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
    });

    window.addEventListener('resize', update);
  });
}

function initExpertiseAccordion(): void {
  const items = document.querySelectorAll<HTMLElement>('[data-accordion-item]');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>('[data-accordion-trigger]');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const wasActive = item.classList.contains('is-active');
      items.forEach((sibling) => {
        sibling.classList.remove('is-active');
        sibling
          .querySelector<HTMLButtonElement>('[data-accordion-trigger]')
          ?.setAttribute('aria-expanded', 'false');
      });
      if (!wasActive) {
        item.classList.add('is-active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initFaqAccordion(): void {
  const items = document.querySelectorAll<HTMLElement>('[data-faq-item]');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>('[data-faq-trigger]');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const nextState = !item.classList.contains('is-open');
      item.classList.toggle('is-open', nextState);
      trigger.setAttribute('aria-expanded', String(nextState));
    });
  });
}

function initForms(): void {
  const forms = document.querySelectorAll<HTMLFormElement>('[data-static-form]');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const wrap = form.closest('[data-form-wrapper]');
      const honeypot = form.querySelector<HTMLInputElement>('input[name="_gotcha"]');
      const successBox = wrap?.querySelector<HTMLElement>('[data-form-success]');
      const errorBox = wrap?.querySelector<HTMLElement>('[data-form-error]');
      const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');

      if (form.dataset.formMode === 'password') {
        if (errorBox) errorBox.hidden = false;
        return;
      }

      if (honeypot && honeypot.value.trim() !== '') return;

      if (submitBtn) {
        const originalText = submitBtn.textContent || 'Send Message';
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        window.setTimeout(() => {
          form.hidden = true;
          if (successBox) successBox.hidden = false;
          if (errorBox) errorBox.hidden = true;
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }, 400);
      }
    });
  });
}

function bootstrap(): void {
  initLenis();
  initSplitReveal();
  initScrollWords();
  initScrollReveals();
  initCounters();
  initMobileDrawer();
  initHeroRotator();
  initCarousels();
  initExpertiseAccordion();
  initFaqAccordion();
  initForms();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
