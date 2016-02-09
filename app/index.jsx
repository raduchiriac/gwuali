import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

main();

var WebFontConfig = {
      google: { families: [ 'Roboto:400,300,500:latin' ] }
    };
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

function main() {
  injectTapEventPlugin();

  const root = document.createElement('div');
  root.id = "root";
  document.body.appendChild(root);

  ReactDOM.render(<App />, root);
}
