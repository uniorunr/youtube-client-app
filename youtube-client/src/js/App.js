import '@babel/polyfill';
import config from './config';
import inputComponent from './components/Input/Input';
import sliderComponent from './components/Slider/Slider';
import { createAndAppendElement } from './utilities/elementCreator';
import { fetchVideoData, fetchVideoViewCount } from './utilities/requestHandler';

import './App.scss';

const startApp = () => {
  createAndAppendElement('main', 'main', 'body');
  const input = inputComponent();

  input.addEventListener('search', async ({ target: { value } }) => {
    sessionStorage.setItem('query', value);
    const videoData = await fetchVideoData(value, config);
    const videoDataWithViewCount = await fetchVideoViewCount(videoData, config);
    sliderComponent(videoDataWithViewCount);
  });
};

startApp();
