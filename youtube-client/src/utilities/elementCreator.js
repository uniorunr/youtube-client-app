const createAndAppendElement = (tagName, className, parentClass) => {
  const element = document.createElement(`${tagName}`);
  element.className = `${className}`;
  document.querySelector(`${parentClass}`).appendChild(element);

  return element;
};

export default createAndAppendElement;
