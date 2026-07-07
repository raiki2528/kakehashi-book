(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 1023px)').matches) return;

    var imgs = document.querySelectorAll('.parallax-img');
    if (!imgs.length) return;

    var ticking = false;

    function update() {
      var vh = window.innerHeight;
      imgs.forEach(function (img) {
        var wrap = img.parentElement;
        if (!wrap) return;
        var rect = wrap.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        var center = rect.top + rect.height * 0.5;
        var offset = (center - vh * 0.5) * 0.06;
        img.style.transform = 'translate3d(0,' + offset + 'px,0) scale(1.06)';
      });
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  initParallax();
})();
