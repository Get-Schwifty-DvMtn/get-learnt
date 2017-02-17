// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

//localFile imports
import App from './App';
import WowHome from './such_component/WowHome';
import FullCodez_Index from './such_component/FullCodez/FullCodez_Index';
import ShortCodez_Index from './such_component/ShortCodez/ShortCodez_Index';
import OohHowLogin from './such_component/OohHowLogin/OohHowLogin';

//css imports
import './index.css';
import './much_flashy/Bootstraps.css';

// Home page path
/**/

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path='/' component={OohHowLogin} />
      <Route path='/home' component={WowHome} />
      <Route path='/wow' component={ShortCodez_Index} />
      <Route path='/muchcode' component={FullCodez_Index} />
     
    </Route>
  </Router>,
  document.getElementById('root')
);
