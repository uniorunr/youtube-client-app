import './SliderItem.scss';
import template from './SliderItem.template';

const sliderItemComponent = (parent, dataObj) => {
  const sliderContainer = document.querySelector(parent);
  const ids = Object.keys(dataObj);

  ids.forEach((id, index) => {
    const container = document.createElement('article');
    container.className = `container container${index}`;
    container.insertAdjacentHTML('afterbegin', template);
    container.querySelector('.youtube-img').classList.add(`img${index}`);
    container.querySelector('.youtube-img')
      .setAttribute('src', dataObj[id].thumbnailUrl);
    container.querySelector('.container-header-title-link').classList.add(`title-link${index}`);
    container.querySelector('.container-header-title-link')
      .setAttribute('href', `https://www.youtube.com/watch?v=${id}`);
    container.querySelector('.container-header-title-link').textContent = dataObj[id].title;
    container.querySelector('.container-header-title-link')
      .setAttribute('target', '_blank');
    container.querySelector('.container-header-channel').classList.add(`channel${index}`);
    container.querySelector('.container-header-channel').textContent = dataObj[id].channelTitle;
    container.querySelector('.container-description').classList.add(`description${index}`);
    container.querySelector('.container-description p').textContent = dataObj[id].description;
    container.querySelector('.container-footer-date').classList.add(`date${index}`);
    container.querySelector('.container-footer-date').textContent = dataObj[id].publishedAt;
    container.querySelector('.container-footer-views').classList.add(`views${index}`);
    container.querySelector('.container-footer-views').textContent = dataObj[id].viewCount;

    sliderContainer.appendChild(container);
  });
};

export default sliderItemComponent;
