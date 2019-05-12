import '@babel/polyfill';
import config from './config';
import inputComponent from './components/Input/Input';
import sliderComponent from './components/Slider/Slider';
import controlsComponent from './components/Controls/Controls';
import createAndAppendElement from './utilities/elementCreator';
import { fetchVideoData, fetchVideoViewCount } from './utilities/requestHandler';
import sliderListener from './utilities/sliderListener';
import controlsListener from './utilities/controlsListener';

import './App.scss';

const startApp = () => {
  const mainSection = createAndAppendElement('main', 'main', 'body');
  const input = inputComponent();

  input.addEventListener('search', async ({ target: { value } }) => {
    sessionStorage.clear();
    sessionStorage.setItem('query', value);
    const videoData = await fetchVideoData(value, config);
    const videoDataWithViewCount = await fetchVideoViewCount(videoData, config);
    const slider = sliderComponent(videoDataWithViewCount);
    const controls = controlsComponent(mainSection);
    sliderListener(slider);
    controlsListener(controls);
  });
};

startApp();
