import lazyLoading from './lazyLoading';

const controlsListener = (controlsWrapper) => {
  if (!controlsWrapper) return;
  const isListenersPresent = controlsWrapper.dataset.listener;
  if (!isListenersPresent) {
    const prevPage = controlsWrapper.querySelector('.prev-page-button');
    const currPage = controlsWrapper.querySelector('.curr-page-button');
    const nextPage = controlsWrapper.querySelector('.next-page-button');
    const root = document.documentElement;

    prevPage.addEventListener('click', () => {
      let chunk = +sessionStorage.getItem('chunk');
      if (chunk !== 0) {
        chunk -= 1;
        root.style.setProperty('--chunk', `${chunk}`);
        sessionStorage.setItem('chunk', `${chunk}`);
        prevPage.querySelector('span.prev-page').textContent = `${chunk}`;
        currPage.textContent = `${chunk + 1}`;
        nextPage.querySelector('span.next-page').textContent = `${chunk + 2}`;
        if (chunk === 0) {
          prevPage.classList.add('disabled');
        }
      }
    });
    prevPage.addEventListener('click', lazyLoading);
    prevPage.addEventListener('mousedown', () => {
      const chunk = +sessionStorage.getItem('chunk');
      prevPage.classList.add('tooltip');
      prevPage.setAttribute('data-page', `${chunk}`);
    });
    prevPage.addEventListener('mouseup', () => {
      prevPage.classList.remove('tooltip');
    });

    nextPage.addEventListener('click', () => {
      let chunk = +sessionStorage.getItem('chunk');
      chunk += 1;
      root.style.setProperty('--chunk', `${chunk}`);
      sessionStorage.setItem('chunk', `${chunk}`);
      prevPage.querySelector('span.prev-page').textContent = `${chunk}`;
      currPage.textContent = `${chunk + 1}`;
      nextPage.querySelector('span.next-page').textContent = `${chunk + 2}`;
      prevPage.classList.remove('disabled');
    });
    nextPage.addEventListener('click', lazyLoading);
    nextPage.addEventListener('mousedown', () => {
      const chunk = +sessionStorage.getItem('chunk');
      nextPage.classList.add('tooltip');
      nextPage.setAttribute('data-page', `${chunk + 2}`);
    });
    nextPage.addEventListener('mouseup', () => {
      nextPage.classList.remove('tooltip');
    });

    controlsWrapper.setAttribute('data-listener', 'true');
  }
};

export default controlsListener;
