const createElement = (tagName, className, attributesArray) => {
  const element = document.createElement(`${tagName}`);
  element.className = `${className}`;

  if (attributesArray) {
    attributesArray.forEach((attribute) => {
      element.setAttribute(`${attribute[0]}`, `${attribute[1]}`);
    });
  }

  return element;
};

const createAndAppendElement = (tagName, className, parentClass) => {
  const element = document.createElement(`${tagName}`);
  element.className = `${className}`;
  document.querySelector(`${parentClass}`).appendChild(element);
};

export { createElement, createAndAppendElement };
