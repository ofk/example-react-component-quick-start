import React from 'react';
import { render } from 'react-dom';

const rootElement = document.body.appendChild(document.createElement('div'));

const renderApp = () => {
  render(<p>test</p>, rootElement);
};

renderApp();
