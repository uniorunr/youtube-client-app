import { fetchVideoData, fetchVideoViewCount } from './requestHandler';
import config from '../config';
import sliderComponent from '../components/Slider/Slider';

const lazyLoading = async () => {
  const root = document.documentElement;
  const chunk = +sessionStorage.getItem('chunk');
  const items = +getComputedStyle(root).getPropertyValue('--items');
  const itemsViewed = chunk * items + items;
  const pageToken = sessionStorage.getItem('pageToken');
  const query = sessionStorage.getItem('query');
  const allItems = document.querySelector('.slider').children.length;

  if (itemsViewed + 2 * items > allItems) {
    const videoData = await fetchVideoData(query, config, pageToken);
    const videoDataWithViewCount = await fetchVideoViewCount(videoData, config);

    if (videoDataWithViewCount) {
      const lastIndex = document.querySelector('.slider').children.length;
      sliderComponent(videoDataWithViewCount, 'load', lastIndex);
    }
  }
};

export default lazyLoading;
