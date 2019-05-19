import lazyLoading from './lazyLoading';

const controlsListener = (controlsWrapper) => {
  if (!controlsWrapper) return;
  const isListenersPresent = controlsWrapper.dataset.listener;
  if (!isListenersPresent) {
    const prevPage = controlsWrapper.querySelector('.controls__button_prev');
    const currPage = controlsWrapper.querySelector('.controls__button_curr');
    const nextPage = controlsWrapper.querySelector('.controls__button_next');
    const root = document.documentElement;

    prevPage.addEventListener('click', () => {
      let chunk = +sessionStorage.getItem('chunk');
      const items = +sessionStorage.getItem('items');
      if (chunk !== 0) {
        chunk -= 1;
        root.style.setProperty('--chunk', `${chunk}`);
        sessionStorage.setItem('chunk', `${chunk}`);
        prevPage.querySelector('.controls__prev-control-content').textContent = `${chunk}`;
        currPage.textContent = `${chunk + 1}`;
        nextPage.querySelector('.controls__next-control-content').textContent = `${chunk + 2}`;
        sessionStorage.setItem('leftItem', `${chunk * items}`);
        if (chunk === 0) {
          prevPage.classList.add('controls__button_state_disabled');
        }
      }
    });
    prevPage.addEventListener('click', lazyLoading);
    prevPage.addEventListener('mousedown', () => {
      const chunk = +sessionStorage.getItem('chunk');
      prevPage.classList.add('controls__button_state_tooltip');
      prevPage.setAttribute('data-page', `${chunk}`);
    });
    prevPage.addEventListener('mouseup', () => {
      prevPage.classList.remove('controls__button_state_tooltip');
    });
    prevPage.addEventListener('mouseleave', () => {
      prevPage.classList.remove('controls__button_state_tooltip');
    });

    nextPage.addEventListener('click', () => {
      let chunk = +sessionStorage.getItem('chunk');
      const items = +sessionStorage.getItem('items');
      chunk += 1;
      root.style.setProperty('--chunk', `${chunk}`);
      sessionStorage.setItem('chunk', `${chunk}`);
      prevPage.querySelector('.controls__prev-control-content').textContent = `${chunk}`;
      currPage.textContent = `${chunk + 1}`;
      nextPage.querySelector('.controls__next-control-content').textContent = `${chunk + 2}`;
      prevPage.classList.remove('controls__button_state_disabled');
      sessionStorage.setItem('leftItem', `${chunk * items}`);
    });
    nextPage.addEventListener('click', lazyLoading);
    nextPage.addEventListener('mousedown', () => {
      const chunk = +sessionStorage.getItem('chunk');
      nextPage.classList.add('controls__button_state_tooltip');
      nextPage.setAttribute('data-page', `${chunk + 2}`);
    });
    nextPage.addEventListener('mouseup', () => {
      nextPage.classList.remove('controls__button_state_tooltip');
    });
    nextPage.addEventListener('mouseleave', () => {
      nextPage.classList.remove('controls__button_state_tooltip');
    });

    controlsWrapper.setAttribute('data-listener', 'true');
  }
};

export default controlsListener;
