const sliderListener = (slider) => {
  const root = document.documentElement;
  let isDown = false;
  let startX = null;
  let diff = null;
  let chunk = +getComputedStyle(root)
    .getPropertyValue('--chunk');

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
    isDown = false;
    slider.classList.remove('active');
    if (diff > 30) {
      chunk += 1;
      root.style.setProperty('--chunk', chunk);
    } else if (Math.abs(diff) > 30 && chunk !== 0) {
      chunk -= 1;
      root.style.setProperty('--chunk', chunk);
    }
    root.style.removeProperty('--diff');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    diff = startX - x;
    root.style.setProperty('--diff', `${diff}px`);
    root.style.setProperty('--check', `${diff}px`);
  });
};

export default sliderListener;
