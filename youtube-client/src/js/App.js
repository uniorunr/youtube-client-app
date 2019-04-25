import inputComponent from './components/Input/Input';
import sliderComponent from './components/Slider/Slider';
import { createAndAppendElement } from './utilities/elementCreator';

import './App.scss';

const startApp = () => {
  createAndAppendElement('main', 'main', 'body');

  inputComponent();
  sliderComponent();
};

startApp();
