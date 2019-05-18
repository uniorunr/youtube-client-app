import controlsListener from './controlsListener';
import controlsComponent from '../components/Controls/Controls';
import createAndAppendElement from './elementCreator';

describe('controlsListener', () => {
  it('should be instance of Function', () => {
    expect(controlsListener).toBeInstanceOf(Function);
  });

  it('should add listener to the slider', () => {
    const mainSection = createAndAppendElement('main', 'main', 'body');
    const controls = controlsComponent(mainSection);
    expect(controls.dataset.listener).toBe(undefined);
    controlsListener(controls);
    expect(controls.dataset.listener).toBe('true');
  });
});
