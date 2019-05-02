import './Slider.scss';
import sliderItemComponent from './SliderItem/SliderItem';
import { createAndAppendElement } from '../../utilities/elementCreator';

const sliderComponent = (dataObj) => {
  const isSliderPresent = document.querySelector('.main .slider');

  if (!isSliderPresent) {
    createAndAppendElement('section', 'slider', 'main');
    const slider = document.querySelector('.main .slider');
    if (slider.children.length !== 4) {
      sliderItemComponent('.slider', dataObj);
    }
  }
};

export default sliderComponent;
