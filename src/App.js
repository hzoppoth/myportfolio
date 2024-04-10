import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/aboutme" component={AboutMe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
