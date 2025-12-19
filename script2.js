document.addEventListener("DOMContentLoaded", function () {

  /* ===== AOS ===== */
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      duration: 1300,
      offset:120,
      easing: "ease-out-cubic"
    });
  }

  /* ===== HERO SWIPER ===== */
  if (typeof Swiper !== "undefined") {
    new Swiper(".hero-swiper", {
      effect: "fade",
      loop: true,
      speed: 1800,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false
      }
    });
  }

  /* ===== TYPEWRITER EFFECT ===== */
  const texts = [
    "+91 96899 99793",
    "Call for Free Quote",
    "24/7 Available"
  ];

  const el = document.getElementById("typewriter");

  let i = 0, j = 0;
  const typingSpeed = 95;
  const erasingSpeed = 55;

  function type() {
    if (j < texts[i].length) {
      el.textContent += texts[i][j++];
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, 2000);
    }
  }
   
  function erase() {
    if (j > 0) {
      el.textContent = texts[i].substring(0, --j);
      setTimeout(erase, erasingSpeed);
    } else {
      i = (i + 1) % texts.length;
      setTimeout(type, 500);
    }
  }



  if (!el) {
  console.warn("Typewriter element not found");
  } else {
  type();
  }

  

 



/*Reviews slider logic*/
if (document.querySelector(".review-swiper")) {
  new Swiper(".review-swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  });
}


/* Counter animation*/
const counters = document.querySelectorAll(".count");

const animateCounter = (counter) => {
  const target = +counter.dataset.target;
  const isPercent = counter.textContent.includes('%');
  const isPlus = counter.textContent.includes('+');

  const duration = 2500; // 👈 TOTAL animation time in ms (increase this)
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const value = Math.floor(progress * target);
    counter.textContent =
      value + (isPercent ? '%' : isPlus ? '+' : '');

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counter.textContent =
        target + (isPercent ? '%' : isPlus ? '+' : '');
    }
  };

  requestAnimationFrame(update);
};

/* Trigger once when About section enters view */
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      counters.forEach(counter => animateCounter(counter));
      observer.disconnect();
    }
  },
  { threshold: 0.5 }
);

const aboutSection = document.querySelector(".about-section");
if (aboutSection) {
  observer.observe(aboutSection);
}


/*====================Services Section===========================*/

});


