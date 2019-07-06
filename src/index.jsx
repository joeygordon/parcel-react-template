import { Global, css } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Example from './components/Example';

const App = () => {
  const globalStyles = css`
    body {
      background: #ddd;
      color: #333;
    }
  `;

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Example message="Hey" />
    </React.Fragment>
  );
};

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

serviceWorker.register();
