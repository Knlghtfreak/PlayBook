document.addEventListener("DOMContentLoaded", function () {
  let currentPage = 0;
  const pages = [
    document.getElementById("page0"),
    document.getElementById("page1"),
    document.getElementById("page2"),
    document.getElementById("page3"),
    document.getElementById("page4"),
    document.getElementById("page5"),
    document.getElementById("page6"),
    document.getElementById("page7"),
    document.getElementById("page8"),
  ];

  function updateNavButtons() {
    const centerPage = document.getElementsByClassName("flipbook")[0];
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    prev.style.display = currentPage === 0 ? "none" : "inline-block";
    next.style.display = currentPage === pages.length ? "none" : "inline-block";
    if (currentPage === 0) {
      centerPage.style.translate = "15%";
    } else if (currentPage === pages.length) {
      centerPage.style.translate = "87%";
    } else {
      centerPage.style.translate = "50%";
    }
  }

  document.getElementById("next").addEventListener("click", () => {
    if (currentPage < pages.length) {
      pages[currentPage].classList.add("flipped");
      pages[currentPage].style.zIndex = 0;
      currentPage++;
      updateNavButtons();
    }
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      pages[currentPage].classList.remove("flipped");
      pages[currentPage].style.zIndex = pages.length - currentPage;
      updateNavButtons();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      // Next page
      if (currentPage < pages.length) {
        pages[currentPage].classList.add("flipped");
        pages[currentPage].style.zIndex = 0;
        currentPage++;
        updateNavButtons();
      }
    } else if (event.key === "ArrowLeft") {
      // Previous page
      if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove("flipped");
        pages[currentPage].style.zIndex = pages.length - currentPage;
        updateNavButtons();
      }
    }
  });

  // Prevent zooming
  document.addEventListener("keydown", function (e) {
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === "+" || e.key === "-" || e.key === "0")
    ) {
      e.preventDefault();
      return false;
    }
  });

  document.addEventListener(
    "touchmove",
    function (e) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  function counterZoom() {
    const scale = 1 / (window.devicePixelRatio || 1);
    document.getElementById("zoom-content").style.transform = `scale(${scale})`;
  }

  window.addEventListener("resize", counterZoom);
  setInterval(counterZoom, 100);
  counterZoom();
});



// -----------------------------------------------------------//



document.addEventListener("DOMContentLoaded", function () {
  const mainSliderTrack = document.getElementById("MobsliderTrack");
  const mainTotalSlides = 15;
  let mainCurrentSlide = 0;

  function updateMainSlider() {
    mainSliderTrack.style.transform = `translateX(-${mainCurrentSlide * 100}%)`;
  }

  window.MobnextSlide = function () {
    if (mainCurrentSlide < mainTotalSlides - 1) {
      mainCurrentSlide++;
      updateMainSlider();
    }
  };

  window.MobprevSlide = function () {
    if (mainCurrentSlide > 0) {
      mainCurrentSlide--;
      updateMainSlider();
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const mainSliderTrack = document.getElementById("MobsliderTrack");
  const mainTotalSlides = 15;
  let mainCurrentSlide = 0;

  function updateMainSlider() {
    mainSliderTrack.style.transform = `translateX(-${mainCurrentSlide * 100}%)`;
  }

  let startX = 0;
  let endX = 0;

  mainSliderTrack.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  mainSliderTrack.addEventListener("touchend", function (e) {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeDistance = endX - startX;
    const threshold = 50; // Minimum swipe distance to trigger

    if (swipeDistance > threshold && mainCurrentSlide > 0) {
      mainCurrentSlide--;
      updateMainSlider();
    } else if (swipeDistance < -threshold && mainCurrentSlide < mainTotalSlides - 1) {
      mainCurrentSlide++;
      updateMainSlider();
    }
  }

  updateMainSlider(); // Initialize position
});





