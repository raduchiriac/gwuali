import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'array.prototype.findindex';

import App from './components/App.jsx';

main();

function main() {
  injectTapEventPlugin();

  const root = document.createElement('div');
  root.id = "root";
  document.body.appendChild(root);

  ReactDOM.render(<App />, root);
}
