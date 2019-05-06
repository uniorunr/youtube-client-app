import lazyLoading from './lazyLoading';

const sliderListener = (slider) => {
  if (!slider.dataset.listener) {
    const root = document.documentElement;
    let isDown = false;
    let startX = null;
    let diff = null;

    slider.addEventListener('mousedown', ({ pageX }) => {
      isDown = true;
      slider.classList.add('active');
      startX = pageX - slider.offsetLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
      root.style.removeProperty('--diff');
    });

    slider.addEventListener('mouseup', () => {
      let chunk = +sessionStorage.getItem('chunk');
      isDown = false;
      slider.classList.remove('active');
      if (diff > 30) {
        chunk += 1;
        root.style.setProperty('--chunk', `${chunk}`);
        sessionStorage.setItem('chunk', `${chunk}`);
      } else if (Math.abs(diff) > 30 && chunk !== 0) {
        chunk -= 1;
        root.style.setProperty('--chunk', `${chunk}`);
        sessionStorage.setItem('chunk', `${chunk}`);
      }
      root.style.removeProperty('--diff');
      diff = 0;
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      diff = startX - x;
      root.style.setProperty('--diff', `${diff}px`);
      root.style.setProperty('--check', `${diff}px`);
    });

    slider.addEventListener('mouseup', lazyLoading);
    slider.setAttribute('data-listener', true);
  }
};

export default sliderListener;
