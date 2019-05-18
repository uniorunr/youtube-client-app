import controlsComponent from './Controls';

describe('controlsComponent', () => {
  const main = document.createElement('main');
  document.body.appendChild(main);

  it('should be instance of Function', () => {
    expect(controlsComponent).toBeInstanceOf(Function);
  });

  it('should be rendered correctly', () => {
    controlsComponent(main);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
