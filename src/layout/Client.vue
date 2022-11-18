<template>
  <RouterView />
</template>

<script>
import '../assets/js/vendor.min.js'
import '../assets/js/theme.min.js'


(function () {
  new HSHeader("#header").init();
  new HSMegaMenu(".js-mega-menu", {
    desktop: {
      position: "center",
    },
  });

  var swiper = new Swiper(".js-swiper-blog-metro-hero", {
    effect: "fade",
    autoplay: true,
    loop: true,
    pagination: {
      el: ".js-swiper-blog-metro-hero-pagination",
      clickable: true,
    },
  });

  new HsNavScroller(".js-nav-scroller");

  var swiper = new Swiper(".js-swiper-course-hero", {
    preloaderClass: "custom-swiper-lazy-preloader",
    navigation: {
      nextEl: ".js-swiper-course-hero-button-next",
      prevEl: ".js-swiper-course-hero-button-prev",
    },
    slidesPerView: 1,
    loop: 1,
    breakpoints: {
      380: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      580: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
    },
    on: {
      imagesReady: function (swiper) {
        const preloader = swiper.el.querySelector(".js-swiper-course-hero-preloader");
        preloader.parentNode.removeChild(preloader);
      },
    },
  });

  setTimeout(() => {
    HSCore.components.HSCircles.init(".js-circle");
  });
})();
</script>
