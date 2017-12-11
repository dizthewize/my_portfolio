import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import DropMenu from './DropMenu';
import Header from './Header';
import Footer from './Footer';
import Home from './views/home';
import About from './views/about';
import Projects from './views/projects';
import Contact from './views/contact';
import NotFound from './NotFound';
// import Admin from './components/views/admin';

class App extends Component {
  componentDidMount() {
    const { fetchProjects } = this.props;
    fetchProjects();
  }

  render() {
    return (
      <div className="site">
        <BrowserRouter>
          <div>
            <Header />
            <DropMenu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App)
