import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Main from '../views/main';
import FirstSection from '../views/components/FirstSection';
import SecondSection from '../views/components/SecondSection';

const Routes = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Main} />
      <Route exact path="/first" component={FirstSection} />
      <Route exact path="/second" component={SecondSection} />
    </Fragment>
  </Router>
);

export default Routes;

