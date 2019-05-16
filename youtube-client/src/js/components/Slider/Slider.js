import './Slider.scss';
import sliderItemComponent from './SliderItem/SliderItem';
import createAndAppendElement from '../../utilities/elementCreator';
import config from '../../config';

const sliderComponent = (dataObj, flag, allItems) => {
  const root = document.documentElement;
  const isSliderPresent = document.querySelector('.main .slider');

  if (!isSliderPresent) {
    createAndAppendElement('section', 'slider', 'main');
    sliderItemComponent('.slider', dataObj);
  } else if (!flag) {
    const sliderChilds = [...document.querySelector('.main .slider').children];
    sliderChilds.forEach((child) => {
      child.remove();
    });
    root.style.setProperty('--chunk', '0');
    sliderItemComponent('.slider', dataObj);
  } else {
    sliderItemComponent('.slider', dataObj, allItems);
  }

  const children = document.querySelector('.main .slider').children.length;
  root.style.setProperty('--request', `${children / config.max_results}`);
  const items = +getComputedStyle(root).getPropertyValue('--items');
  sessionStorage.setItem('chunk', '0');
  sessionStorage.setItem('items', `${items}`);

  return document.querySelector('.main .slider');
};

export default sliderComponent;
