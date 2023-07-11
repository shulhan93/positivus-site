import './sass/main.scss';

const processContainer = document.querySelector('.process__inner');

processContainer.addEventListener('click', (e) => {
  const process = e.target.closest('.process__item');

  if (!process) return;

  Array.from(processContainer.children).forEach((element) => {
    element.classList.remove('open');
  });
  process.classList.toggle('open');
});
