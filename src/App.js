import React from 'react';
// import { BrowserRouter, Switch, useHistory, Route, Link } from 'react-router-dom'
import { Switch, Route, Link } from 'react-router-dom'
import './styles/styles.css';
import logo from './assets/logo_imagination.png';
import HomePage from './components/HomePage'
import ViewImage from './components/ViewImage'


function App() {
  return (
    <div className="app">
      <div className="bar">
        <Link className="barImage" to={{pathname: '/'}}>
          <img alt="logo imagination" className="logo" src={logo} draggable="false"/>
        </Link>
      </div>
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/ViewImage" component={ViewImage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
