import lazyLoading from './lazyLoading';

const sliderListener = (slider) => {
  if (!slider.dataset.listener) {
    const root = document.documentElement;
    const prevPage = document.querySelector('.prev-page-button');
    const currPage = document.querySelector('.curr-page-button');
    const nextPage = document.querySelector('.next-page-button');
    let isDown = false;
    let startX = null;
    let diff = null;

    const activate = ({ pageX, changedTouches }) => {
      isDown = true;
      slider.classList.add('active');
      if (pageX) {
        startX = pageX - slider.offsetLeft;
      } else {
        startX = changedTouches[0].pageX - slider.offsetLeft;
      }
    };

    const leave = () => {
      isDown = false;
      slider.classList.remove('active');
      root.style.removeProperty('--diff');
    };

    const moveSlider = () => {
      let chunk = +sessionStorage.getItem('chunk');
      const items = +sessionStorage.getItem('items');
      isDown = false;
      slider.classList.remove('active');
      if (diff > 30) {
        chunk += 1;
        root.style.setProperty('--chunk', `${chunk}`);
        sessionStorage.setItem('chunk', `${chunk}`);
        prevPage.querySelector('span.prev-page').textContent = `${chunk}`;
        currPage.textContent = `${chunk + 1}`;
        nextPage.querySelector('span.next-page').textContent = `${chunk + 2}`;
        prevPage.classList.remove('disabled');
        sessionStorage.setItem('leftItem', `${chunk * items}`);
      } else if (Math.abs(diff) > 30 && chunk !== 0) {
        chunk -= 1;
        root.style.setProperty('--chunk', `${chunk}`);
        sessionStorage.setItem('chunk', `${chunk}`);
        prevPage.querySelector('span.prev-page').textContent = `${chunk}`;
        currPage.textContent = `${chunk + 1}`;
        nextPage.querySelector('span.next-page').textContent = `${chunk + 2}`;
        sessionStorage.setItem('leftItem', `${chunk * items}`);
        if (chunk === 0) {
          prevPage.classList.add('disabled');
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
        prevPage.querySelector('span.prev-page').textContent = `${currChunk}`;
        currPage.textContent = `${currChunk + 1}`;
        nextPage.querySelector('span.next-page').textContent = `${currChunk + 2}`;
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
