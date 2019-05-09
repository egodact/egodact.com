import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'react-emotion';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Bugs from './pages/Bugs';
import Contact from './pages/Contact';
import ProgressMonitor from './pages/ProgressMonitor';
import ChallengeMonitor from './pages/ChallengeMonitor';
import OpenSource from './pages/OpenSource';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_nl from 'react-intl/locale-data/nl';
import messages_nl from './translations/nl.json';
import messages_en from './translations/en.json';
import getLanguage from './getLanguage';

const SpaceFix = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

const messages = {
  nl: messages_nl,
  en: messages_en
};

const language = getLanguage();

addLocaleData([...locale_en, ...locale_nl]);

const App = () => (
  <IntlProvider locale={language} messages={messages[language]}>
    <Router>
      <ScrollToTop>
        <SpaceFix>
          <Helmet titleTemplate="%s | Egodact" />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/bugs" component={Bugs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/progressmonitor" component={ProgressMonitor} />
            <Route exact path="/challengemonitor" component={ChallengeMonitor} />
            <Route exact path="/open-source" component={OpenSource} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/terms-of-use" render={() => (
              <Redirect to="/terms" />
            )} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </SpaceFix>
      </ScrollToTop>
    </Router>
  </IntlProvider>
);

export default App;
