import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import Bugs from './pages/Bugs';
import Contact from './pages/Contact';
import OpenSource from './pages/OpenSource';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const App = () => (
  <Fragment>
    <Helmet titleTemplate="%s | Egodact" />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bugs" component={Bugs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/open-source" component={OpenSource} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/terms-of-use" render={() => (
          <Redirect to="/terms" />
        )} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </Fragment>
);

export default App;
