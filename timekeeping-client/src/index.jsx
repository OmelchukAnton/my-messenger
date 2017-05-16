import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserHistory } from 'react-history';
import App from './components/App.jsx';
import First from './components/FirstPage/First.jsx';
import RegLog from './components/entry/RegLog.jsx';
import Messanges from './components/chatPage/Messanges.jsx';

import './index.scss';

const HomeLayout = () => (
  <App>
    <Route exact path="/pm/:userId" component={Messanges} />
  </App>
);

render(
  <Router className="App" history={BrowserHistory}>
    <div>
      <Route exact path="/" component={First} />
      <Route path="/pm" component={HomeLayout} />
      <Route path="/reg" component={RegLog} />
    </div>
  </Router>,

  document.getElementById('root'),
);
