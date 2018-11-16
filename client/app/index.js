import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './containers/App/App';
import NotFound from './containers/App/NotFound';

import Home from './containers/Home/Home';

import Msft from './containers/Profile/Msft';
import Aapl from './containers/Profile/Aapl';
import Intc from './containers/Profile/Intc';
import Nflx from './containers/Profile/Nflx';
import Orcl from './containers/Profile/Orcl';
import Cmcsa from './containers/Profile/Cmcsa';
import Goog from './containers/Profile/Goog';
import Luv from './containers/Profile/Luv';
import Hog from './containers/Profile/Hog';
import Googl from './containers/Profile/Googl';
import Amzn from './containers/Profile/Amzn';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/msft" component={Msft}/>
        <Route path="/aapl" component={Aapl}/>
        <Route path="/intc" component={Intc}/>
        <Route path="/nflx" component={Nflx}/>
        <Route path="/orcl" component={Orcl}/>
        <Route path="/cmcsa" component={Cmcsa}/>
        <Route path="/goog" component={Goog}/>
        <Route path="/luv" component={Luv}/>
        <Route path="/hog" component={Hog}/>
        <Route path="/googl" component={Googl}/>
        <Route path="/amzn" component={Amzn}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
