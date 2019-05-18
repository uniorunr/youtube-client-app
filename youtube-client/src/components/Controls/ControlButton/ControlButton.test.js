import controlButton from './ControlButton';

describe('controlButton', () => {
  it('should be instance of Function', () => {
    expect(controlButton).toBeInstanceOf(Function);
  });

  it('should be rendered correctly', () => {
    const button = controlButton('test-class', 'test-inner-html');
    document.body.appendChild(button);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
