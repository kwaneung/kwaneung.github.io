(() => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav && links) {
    let closeTimer = 0;
    const mobileNav = () => window.matchMedia("(max-width: 760px)").matches;

    const syncMenuLayer = () => {
      window.clearTimeout(closeTimer);
      if (!mobileNav()) {
        // Desktop: always in the layout tree, never [hidden]
        links.hidden = false;
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        return;
      }
      // Mobile: keep closed menu out of Safari 26 color sampling
      if (!nav.classList.contains("is-open")) {
        links.hidden = true;
      }
    };

    const openMenu = () => {
      window.clearTimeout(closeTimer);
      links.hidden = false;
      // Next frame so the open transition runs after [hidden] is cleared
      requestAnimationFrame(() => {
        nav.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      });
    };

    const closeMenu = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      // Wait for the slide/fade to finish, then remove from Safari's sample tree
      closeTimer = window.setTimeout(() => {
        if (!nav.classList.contains("is-open") && mobileNav()) {
          links.hidden = true;
        }
      }, 450);
    };

    syncMenuLayer();
    window.addEventListener("resize", syncMenuLayer, { passive: true });

    toggle.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (mobileNav()) closeMenu();
      });
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  reveals.forEach((el) => io.observe(el));
})();
