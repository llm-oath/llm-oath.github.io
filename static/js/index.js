document.addEventListener('DOMContentLoaded', function () {

  /* ---- Scroll-reveal: fade-up sections as they enter viewport ---- */
  var sections = document.querySelectorAll('.section');
  sections.forEach(function (sec) {
    var col = sec.querySelector('.content-column') || sec.querySelector('.container');
    if (col) col.classList.add('reveal');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  /* ---- Staggered reveal for case-study cards ---- */
  var cards = document.querySelectorAll('.case-card');
  cards.forEach(function (card, i) {
    card.classList.add('reveal', 'reveal-delay-' + (i + 1));
  });

  var cardObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(function (card) { cardObserver.observe(card); });

  /* ---- Hero parallax: slow-scroll video background ---- */
  var heroBg = document.querySelector('.hero-video-bg');
  if (heroBg) {
    var heroSection = document.querySelector('.hero-video-section');
    var heroH = heroSection.offsetHeight;
    window.addEventListener('scroll', function () {
      var scrollY = window.pageYOffset;
      if (scrollY < heroH) {
        heroBg.style.transform = 'translateY(' + (scrollY * 0.35) + 'px)';
      }
    }, { passive: true });
  }

});
