import { JSDOM } from 'jsdom';
import createAndAppendElement from './elementCreator';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

describe('tests for createAndAppendElement function', () => {
  it('should create div element and append it to body', () => {
    createAndAppendElement('div', 'test', 'body');
    const element = document.querySelector('.test');
    expect(element).not.toBeNull();
  });
});
