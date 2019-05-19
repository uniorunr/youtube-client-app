import './SliderItem.scss';
import template from './SliderItem.template';

const preventClick = (linkElement) => {
  linkElement.addEventListener('click', (e) => {
    const root = document.documentElement;
    const check = +getComputedStyle(root)
      .getPropertyValue('--check')
      .replace('px', '');
    if (Math.abs(check) > 30) {
      e.preventDefault();
      e.stopPropagation();
    }

    root.style.removeProperty('--check');
  });
};

const sliderItemComponent = (parent, dataObj, allItems) => {
  const sliderContainer = document.querySelector(parent);
  const ids = Object.keys(dataObj);
  const fragment = document.createDocumentFragment();

  ids.forEach((id, itemIndex) => {
    let actualIndex = itemIndex;
    if (allItems) {
      actualIndex += allItems;
    }
    const container = document.createElement('article');
    container.className = `container container${actualIndex}`;
    container.insertAdjacentHTML('afterbegin', template);
    container.querySelector('.image-block__image').classList.add(`img${actualIndex}`);
    container.querySelector('.image-block__image')
      .setAttribute('src', dataObj[id].thumbnailUrl);
    container.querySelector('.container-content__title-link')
      .classList.add(`title-link${actualIndex}`);
    container.querySelector('.container-content__title-link')
      .setAttribute('href', `https://www.youtube.com/watch?v=${id}`);
    container.querySelector('.container-content__title-link').textContent = dataObj[id].title;
    container.querySelector('.container-content__title-link')
      .setAttribute('target', '_blank');
    container.querySelector('.container-content__channel').classList.add(`channel${actualIndex}`);
    container.querySelector('.container-content__channel').textContent = dataObj[id].channelTitle;
    container.querySelector('.container-content__description').classList.add(`description${actualIndex}`);
    container.querySelector('.container-content__description p').textContent = dataObj[id].description;
    container.querySelector('.container-content__date').classList.add(`date${actualIndex}`);
    container.querySelector('.container-content__date').textContent = dataObj[id].publishedAt;
    container.querySelector('.container-content__views').classList.add(`views${actualIndex}`);
    container.querySelector('.container-content__views').textContent = dataObj[id].viewCount;

    const link = container.querySelector('.container-content__title');
    preventClick(link);

    fragment.appendChild(container);
  });
  sliderContainer.appendChild(fragment);
};

export default sliderItemComponent;
