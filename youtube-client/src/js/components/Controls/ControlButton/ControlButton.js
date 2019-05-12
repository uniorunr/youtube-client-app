import './ControlButton.scss';

const controlButton = (className, innerHTML) => {
  const button = document.createElement('button');
  button.className = `${className}`;
  button.setAttribute('type', 'button');
  if (innerHTML) {
    button.innerHTML = `${innerHTML}`;
  } else {
    button.textContent = '1';
  }
  return button;
};

export default controlButton;
