$(document).ready(function () {
  const categories = {
    events: [
      "events-1.webp",
      "events-2.webp",
      "events-3.webp",
      "events-4.webp",
      "events-5.webp",
      "events-6.webp",
    ],
    urban: [
      "urban-1.webp",
      "urban-2.webp",
      "urban-3.webp",
      "urban-4.webp",
      "urban-5.webp",
      "urban-6.webp",
    ],
    rural: [
      "rural-1.webp",
      "rural-2.webp",
      "rural-3.webp",
      "rural-4.webp",
      "rural-5.webp",
      "rural-6.webp",
    ],
    sports: [
      "sport-1.webp",
      "sport-2.webp",
      "sport-3.webp",
      "sport-4.webp",
      "sport-5.webp",
      "sport-6.webp",
    ],
  };

  const filterSection = $("#filter-section");
  const portfolioSection = $("#portfolio-section");
  const swiperWrapper = $("#about-gallery");

  // Create filters
  const filterHtml = `
      <ul class="portfolio-filter nav nav-tabs justify-content-center justify-content-xl-end border-0 fw-500">
          <li class="nav active"><a data-filter="*" href="#">All</a></li>
          ${Object.keys(categories)
            .map(
              (cat) => `
              <li class="nav"><a data-filter=".${cat}" href="#">${
                cat.charAt(0).toUpperCase() + cat.slice(1)
              }</a></li>
          `
            )
            .join("")}
      </ul>
    `;
  filterSection.html(filterHtml);

  // Create grid-sizer and portfolio items
  const gridSizerHtml = '<li class="grid-sizer"></li>';
  const portfolioItemsHtml = Object.entries(categories)
    .map(
      ([category, images]) => `
        ${images
          .map(
            (image) => `
            <li class="grid-item ${category} transition-inner-all">
                <a href="img/gallery/${category}/${image}" data-fancybox="${category}" data-caption="${category.toUpperCase()}">
                    <div class="portfolio-box">
                        <div class="portfolio-image border-radius-6px">
                            <img src="img/gallery/${category}/${image}" alt="${category}">
                        </div>
                        <div class="portfolio-hover box-shadow-extra-large">
                            <div class="bg-white d-flex align-items-center align-self-end text-start border-radius-4px ps-30px pe-30px pt-20px pb-20px lg-p-20px w-100">
                                <div class="me-auto">
                                    <div class="fw-700 text-dark-gray text-uppercase lh-initial">${category.toUpperCase()}</div>
                                </div>
                                <div class="ms-auto"><i class="feather icon-feather-eye icon-extra-medium text-dark-gray lh-36"></i></div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        `
          )
          .join("")}
      `
    )
    .join("");

  // Set inner HTML for portfolioSection
  portfolioSection.html(gridSizerHtml + portfolioItemsHtml);

  // Generate Swiper slides
  const swiperSlidesHtml = Object.entries(categories)
    .flatMap(([category, images]) =>
      images.map(
        (image) => `
          <div class="swiper-slide">
              <a href="img/gallery/${category}/${image}" data-fancybox="gallery" data-caption="gallery">
                <img src="img/gallery/${category}/${image}" class="border-radius-6px" alt="${category}">
              </a>
          </div>
        `
      )
    )
    .join("");
  swiperWrapper.html(swiperSlidesHtml);

  // Initialize Swiper
  new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-line-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slider-three-slide-next",
      prevEl: ".slider-three-slide-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 3,
      },
    },
    effect: "slide",
  });

  // Add event listeners for filters
  $(".portfolio-filter a").click(function (e) {
    e.preventDefault();
    const filterValue = $(this).data("filter");
    $(".grid-item").each(function () {
      if (filterValue === "*" || $(this).hasClass(filterValue.substring(1))) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
