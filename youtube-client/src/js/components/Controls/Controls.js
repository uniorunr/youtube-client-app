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

    const prevPageContent = '<i class="fas fa-caret-left"></i><span class="prev-page">1</span>';
    const prevPage = controlButton('prev-page-button button', prevPageContent);
    container.appendChild(prevPage);

    const currPage = controlButton('curr-page-button button');
    container.appendChild(currPage);

    const nextPageContent = '<span class="next-page">3</span><i class="fas fa-caret-right"></i>';
    const nextPage = controlButton('next-page-button button', nextPageContent);
    container.appendChild(nextPage);

    parent.appendChild(containerWrapper);

    console.log(containerWrapper);
    return containerWrapper;
  }

  return null;
};

export default controlsComponent;
