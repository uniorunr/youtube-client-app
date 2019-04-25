import './SliderItem.scss';
import template from './SliderItem.template';

const sliderItemComponent = (parent) => {
  const element = document.querySelector(parent);
  element.insertAdjacentHTML('afterbegin', template);
  element.insertAdjacentHTML('afterbegin', template);
  element.insertAdjacentHTML('afterbegin', template);
  element.insertAdjacentHTML('afterbegin', template);
};

export default sliderItemComponent;
