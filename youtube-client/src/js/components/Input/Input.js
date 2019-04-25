import './Input.scss';

const inputComponent = () => {
  const inputContainer = document.createElement('section');
  inputContainer.className = 'input-wrapper';
  document.querySelector('main').appendChild(inputContainer);

  const input = document.createElement('input');
  input.className = 'search-input';
  input.setAttribute('placeholder', 'Search...');
  input.setAttribute('type', 'search');
  document.querySelector('.input-wrapper').appendChild(input);
};

export default inputComponent;
