import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DropMenu from './components/dropmenu/drop-menu';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/views/home';
import About from './components/views/about';
import Projects from './components/views/projects';
import Contact from './components/views/contact';
// import Admin from './components/views/admin';

const Routes = () => {
  return (
    <div className="site">
      <Header />
      <DropMenu />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/admin" component={Admin} /> */}
      </Switch>

      <Footer />
    </div>
  );
}

export default Routes;
