import lazyLoading from './lazyLoading';

const controlsListener = (controlsWrapper) => {
  if (!controlsWrapper) return;
  const isListenersPresent = controlsWrapper.dataset.listener;
  if (!isListenersPresent) {
    const prevPage = controlsWrapper.querySelector('.prev-page-button');
    const nextPage = controlsWrapper.querySelector('.next-page-button');
    const root = document.documentElement;

    prevPage.addEventListener('click', () => {
      let chunk = +sessionStorage.getItem('chunk');
      if (chunk !== 0) {
        chunk -= 1;
        root.style.setProperty('--chunk', `${chunk}`);
        sessionStorage.setItem('chunk', `${chunk}`);
      }
    });
    prevPage.addEventListener('click', lazyLoading);

    nextPage.addEventListener('click', () => {
      let chunk = +sessionStorage.getItem('chunk');
      chunk += 1;
      root.style.setProperty('--chunk', `${chunk}`);
      sessionStorage.setItem('chunk', `${chunk}`);
    });
    nextPage.addEventListener('click', lazyLoading);

    controlsWrapper.setAttribute('data-listener', 'true');
  }
};

export default controlsListener;
