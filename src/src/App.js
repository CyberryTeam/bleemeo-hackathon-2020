import React from 'react';
import NavBar from './components/NavBar'
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NoMatch from './NoMatch';
import Skills from './Skills';
import Projets from './Projets';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/projects" component={Projets}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
