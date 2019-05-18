import inputComponent from './Input';

describe('inputComponent', () => {
  const main = document.createElement('main');
  document.body.appendChild(main);

  it('should be instance of Function', () => {
    expect(inputComponent).toBeInstanceOf(Function);
  });

  it('should be rendered correctly', () => {
    inputComponent();
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
