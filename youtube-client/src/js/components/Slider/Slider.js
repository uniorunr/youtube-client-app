import './Slider.scss';
import sliderItemComponent from './SliderItem/SliderItem';
import { createAndAppendElement } from '../../utilities/elementCreator';

const sliderComponent = () => {
  createAndAppendElement('section', 'slider', 'main');
  sliderItemComponent('.slider');
};

export default sliderComponent;
