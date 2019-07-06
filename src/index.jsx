import { Global, css } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const globalStyles = css`
    body {
      background: #ddd;
      color: #666;
    }
  `;

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <div />
    </React.Fragment>
  );
};

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

serviceWorker.register();
