import React from 'react';
import { render } from 'react-dom';
import { Hello } from 'react-component-quick-start';

const rootElement = document.body.appendChild(document.createElement('div'));

const renderApp = () => {
  render(<div><Hello text="World" /></div>, rootElement);
};

renderApp();
