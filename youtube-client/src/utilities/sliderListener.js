import lazyLoading from './lazyLoading';

const sliderListener = (slider) => {
  if (!slider.dataset.listener) {
    const root = document.documentElement;
    const prevPage = document.querySelector('.controls__button_prev');
    const currPage = document.querySelector('.controls__button_curr');
    const nextPage = document.querySelector('.controls__button_next');
    let isDown = false;
    let startX = null;
    let diff = null;

    const activate = ({ pageX, changedTouches }) => {
      isDown = true;
      if (pageX) {
        startX = pageX - slider.offsetLeft;
      } else {
        startX = changedTouches[0].pageX - slider.offsetLeft;
      }
    };

    const leave = () => {
      isDown = false;
      root.style.removeProperty('--diff');
    };

    const moveSlider = () => {
      let chunk = +sessionStorage.getItem('chunk');
      const items = +sessionStorage.getItem('items');
      isDown = false;
      if (diff > 30) {
        chunk += 1;
        root.style.setProperty('--chunk', `${chunk}`);
        sessionStorage.setItem('chunk', `${chunk}`);
        prevPage.querySelector('.controls__prev-control-content').textContent = `${chunk}`;
        currPage.textContent = `${chunk + 1}`;
        nextPage.querySelector('.controls__next-control-content').textContent = `${chunk + 2}`;
        prevPage.classList.remove('controls__button_state_disabled');
        sessionStorage.setItem('leftItem', `${chunk * items}`);
      } else if (Math.abs(diff) > 30 && chunk !== 0) {
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
      root.style.removeProperty('--diff');
      diff = 0;
    };

    const drag = (e) => {
      if (!isDown) return;
      e.preventDefault();
      if (e.pageX) {
        const x = e.pageX - slider.offsetLeft;
        diff = startX - x;
        root.style.setProperty('--diff', `${diff}px`);
        root.style.setProperty('--check', `${diff}px`);
      } else {
        const x = e.changedTouches[0].pageX - slider.offsetLeft;
        diff = startX - x;
        root.style.setProperty('--diff', `${diff}px`);
        root.style.setProperty('--check', `${diff}px`);
      }
    };

    const resize = () => {
      const initItems = +sessionStorage.getItem('items');
      const currItems = +getComputedStyle(root).getPropertyValue('--items');
      const leftItem = +sessionStorage.getItem('leftItem');
      const currChunk = Math.floor(leftItem / currItems);
      if (initItems !== currItems) {
        root.style.setProperty('--chunk', `${currChunk}`);
        sessionStorage.setItem('chunk', `${currChunk}`);
        sessionStorage.setItem('items', `${currItems}`);
        prevPage.querySelector('.controls__prev-control-content').textContent = `${currChunk}`;
        currPage.textContent = `${currChunk + 1}`;
        nextPage.querySelector('.controls__next-control-content').textContent = `${currChunk + 2}`;
      }
    };

    slider.addEventListener('mousedown', activate);
    slider.addEventListener('touchstart', activate);

    slider.addEventListener('mouseleave', leave);

    slider.addEventListener('mousemove', drag);
    slider.addEventListener('touchmove', drag);

    slider.addEventListener('mouseup', moveSlider);
    slider.addEventListener('touchend', moveSlider);

    slider.addEventListener('mouseup', lazyLoading);
    slider.addEventListener('touchend', lazyLoading);
    window.addEventListener('resize', resize);
    slider.setAttribute('data-listener', true);
  }
};

export default sliderListener;
