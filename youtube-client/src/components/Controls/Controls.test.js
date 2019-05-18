import controlsComponent from './Controls';

describe('controlsComponent', () => {
  const main = document.createElement('main');
  document.body.appendChild(main);

  it('should be instance of Function', () => {
    expect(controlsComponent).toBeInstanceOf(Function);
  });

  it('should be rendered correctly if controls aren\'t added to the page', () => {
    controlsComponent(main);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('should be rendered correctly if controls already added to the page', () => {
    const controls = document.createElement('section');
    controls.className = 'controls-section';
    controlsComponent(main);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
