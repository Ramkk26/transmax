// <----page transition---->

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const transitionElem = document.querySelectorAll(".transition-in");

transitionElem.forEach((el) => observer.observe(el));

// <--sticky-bar-bg-change-->

$(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
      $(".change-color").css("background", "#013B49");
      $(".change-color").css("opacity", "0.8");
    } else {
      $(".change-color").css("background", "transparent");
    }
  });
});

const swiperEl = document.querySelector("swiper-container");

Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

swiperEl.initialize();

// <=====Counter-part======>
$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

// <------------carousel testimonial------------>
const swiperElem = document.querySelector(".mySwiper-1");

Object.assign(swiperElem, {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: true,
  pauseOnMouseEnter: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
swiperElem.initialize();

const swiperElement = document.querySelector(".mySwiper-3");

Object.assign(swiperElement, {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    pauseOnMouseEnter: true,
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
swiperElement.initialize();
