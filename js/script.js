document.addEventListener("DOMContentLoaded", function () {
  const coverBackground = document.querySelector(".cover-background");
  const images = [
    "../riverbed/img/banner-1.webp",
    "../riverbed/img/banner-2.webp",
    "../riverbed/img/banner-3.webp",
    "../riverbed/img/banner-4.webp",
  ];

  let currentIndex = 0;

  function changeBackgroundImage() {
    coverBackground.style.backgroundImage = `linear-gradient(rgb(0 0 0 / 80%), rgb(255 255 255 / 19%)),url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Change image every 4 seconds
  setInterval(changeBackgroundImage, 4000);

  // Initial background image
  changeBackgroundImage();
});

$(".service-slider.owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

$("#service-prev").click(() => {
  $(".owl-prev").click();
});
$("#service-next").click(() => {
  $(".owl-next").click();
});
