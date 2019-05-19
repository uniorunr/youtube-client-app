import './Controls.scss';
import controlButton from './ControlButton/ControlButton';

const controlsComponent = (parent) => {
  const controls = document.querySelector('.controls-section');
  if (!controls) {
    const containerWrapper = document.createElement('section');
    containerWrapper.className = 'controls-section';

    const container = document.createElement('div');
    container.className = 'controls';
    containerWrapper.appendChild(container);

    const prevPageContent = '<i class="fas fa-caret-left"></i><span class="controls__prev-control-content">0</span>';
    const prevPage = controlButton('controls__button controls__button_prev controls__button_state_disabled', prevPageContent);
    prevPage.setAttribute('data-page', '0');
    container.appendChild(prevPage);

    const currPage = controlButton('controls__button controls__button_curr');
    currPage.setAttribute('data-page', '1');
    container.appendChild(currPage);

    const nextPageContent = '<span class="controls__next-control-content">2</span><i class="fas fa-caret-right"></i>';
    const nextPage = controlButton('controls__button controls__button_next', nextPageContent);
    nextPage.setAttribute('data-page', '2');
    container.appendChild(nextPage);

    parent.appendChild(containerWrapper);

    return containerWrapper;
  }
  const prevPage = controls.querySelector('.controls__prev-control-content');
  const currPage = controls.querySelector('.controls__button_curr');
  const nextPage = controls.querySelector('.controls__next-control-content');
  prevPage.textContent = '0';
  prevPage.parentElement.classList.add('controls__button_state_disabled');
  currPage.textContent = '1';
  nextPage.textContent = '2';

  return null;
};

export default controlsComponent;
