import './Input.scss';

const inputComponent = () => {
  const inputContainer = document.createElement('section');
  inputContainer.className = 'input-section';
  document.querySelector('main').appendChild(inputContainer);

  const input = document.createElement('input');
  input.className = 'input-section__input';
  input.setAttribute('placeholder', 'Search...');
  input.setAttribute('type', 'search');
  document.querySelector('.input-section').appendChild(input);

  return input;
};

export default inputComponent;
