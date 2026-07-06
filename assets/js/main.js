const revealElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.18,
      rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach((el, index) => {
      el.style.transitionDelay = (index % 6) * 80 + 'ms';
      observer.observe(el);
    });

/* === AFPA CLEAN MOBILE MENU JS START === */

(function(){
  function initAfpaMobileMenu(){
    const header = document.querySelector('.site-header');
    if(!header) return;

    const btn = header.querySelector('[data-mobile-menu-toggle]');
    const nav = header.querySelector('.nav-links');

    if(!btn || !nav) return;

    function setMenu(open){
      header.classList.toggle('menu-open', open);
      btn.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', function(event){
      event.preventDefault();
      event.stopPropagation();
      setMenu(!header.classList.contains('menu-open'));
    });

    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        setMenu(false);
      });
    });

    document.addEventListener('click', function(event){
      if(!header.contains(event.target)){
        setMenu(false);
      }
    });

    window.addEventListener('resize', function(){
      if(window.innerWidth > 1180){
        setMenu(false);
      }
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initAfpaMobileMenu);
  }else{
    initAfpaMobileMenu();
  }
})();

/* === AFPA CLEAN MOBILE MENU JS END === */
