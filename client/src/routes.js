import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SideMenu from './components/sidemenu/side-menu';
import Home from './views/home';
import About from './views/about';
import Projects from './views/projects';
import Contact from './views/contact';
import Admin from './views/admin';

const Routes = () => {
  return (
    <div className="site">
      <Header />
      <SideMenu />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
      </Switch>

      <Footer />
    </div>
  );
}

export default Routes;
