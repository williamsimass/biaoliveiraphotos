// JavaScript
const whatsappButton = document.querySelector(".whatsapp-float");
whatsappButton.addEventListener("mouseover", function () {
  whatsappButton.classList.add("animate");
});

whatsappButton.addEventListener("mouseout", function () {
  whatsappButton.classList.remove("animate");
});

const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  const initialPosition = window.pageYOffset;
  const scrollStep = -initialPosition / 20; // ajuste a animação alterando o valor do divisor
  let currentPosition = initialPosition;

  const animation = () => {
    currentPosition += scrollStep;
    window.scrollTo(0, currentPosition);

    if (currentPosition <= 0) {
      cancelAnimationFrame(animationId);
    } else {
      animationId = requestAnimationFrame(animation);
    }
  };

  let animationId = requestAnimationFrame(animation);
});

$(document).ready(function () {
  // Inicialize o Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});