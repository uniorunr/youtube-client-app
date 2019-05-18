import sliderListener from './sliderListener';

describe('sliderListener', () => {
  it('should be instance of Function', () => {
    expect(sliderListener).toBeInstanceOf(Function);
  });

  it('should add listener to the slider', () => {
    const sliderElement = document.createElement('section');
    sliderElement.className = 'slider';
    document.body.appendChild(sliderElement);
    const slider = document.querySelector('.slider');
    expect(slider.dataset.listener).toBe(undefined);
    sliderListener(slider);
    expect(slider.dataset.listener).toBe('true');
  });
});
