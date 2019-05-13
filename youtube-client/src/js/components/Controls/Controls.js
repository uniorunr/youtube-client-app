import './Controls.scss';
import controlButton from './ControlButton/ControlButton';

const controlsComponent = (parent) => {
  const controls = document.querySelector('.controls-section');
  if (!controls) {
    const containerWrapper = document.createElement('section');
    containerWrapper.className = 'controls-section';

    const container = document.createElement('div');
    container.className = 'controls-wrapper';
    containerWrapper.appendChild(container);

    const prevPageContent = '<i class="fas fa-caret-left"></i><span class="prev-page">0</span>';
    const prevPage = controlButton('prev-page-button button disabled', prevPageContent);
    prevPage.setAttribute('data-page', '0');
    container.appendChild(prevPage);

    const currPage = controlButton('curr-page-button button');
    currPage.setAttribute('data-page', '1');
    container.appendChild(currPage);

    const nextPageContent = '<span class="next-page">2</span><i class="fas fa-caret-right"></i>';
    const nextPage = controlButton('next-page-button button', nextPageContent);
    nextPage.setAttribute('data-page', '2');
    container.appendChild(nextPage);

    parent.appendChild(containerWrapper);

    return containerWrapper;
  }

  return null;
};

export default controlsComponent;
