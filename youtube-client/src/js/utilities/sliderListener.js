import config from '../config';
import { fetchVideoData, fetchVideoViewCount } from './requestHandler';
import sliderComponent from '../components/Slider/Slider';

const lazyLoading = async () => {
  const root = document.documentElement;
  const chunk = +sessionStorage.getItem('chunk');
  const items = +getComputedStyle(root).getPropertyValue('--items');
  const itemsViewed = chunk * items + items;
  const pageToken = sessionStorage.getItem('pageToken');
  const query = sessionStorage.getItem('query');
  const allItems = document.querySelector('.slider').children.length;

  if (itemsViewed + items > allItems) {
    const videoData = await fetchVideoData(query, config, pageToken);
    const videoDataWithViewCount = await fetchVideoViewCount(videoData, config);

    if (videoDataWithViewCount) {
      sliderComponent(videoDataWithViewCount, 'load', allItems);
    }
  }
};

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
