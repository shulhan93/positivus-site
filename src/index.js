import './sass/main.scss';
// Swiper
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// init Swiper:
// eslint-disable-next-line no-new
new Swiper('.testimonials-slider', {
  modules: [Navigation, Pagination],
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    renderBullet(index, className) {
      return `<span class="${className} ">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
</svg>
      </span>`;
    },
  },
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 50,
  slidesPerGroup: 1,
  initialSlide: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const processContainer = document.querySelector('.process__inner');

processContainer.addEventListener('click', (e) => {
  const process = e.target.closest('.process__item');

  if (!process) return;

  Array.from(processContainer.children).forEach((element) => {
    element.classList.remove('open');
  });
  process.classList.toggle('open');
});
