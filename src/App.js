import React, {useState, useEffect} from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './styles/styles.css';
import logo from './assets/logo_imagination.png';
import HomePage from './components/HomePage'
import ViewImage from './components/ViewImage'

function App() {

  const [animacao, setAnimacao] = useState('animacao-inicial');
  useEffect(() => {
    setTimeout(() => { setAnimacao('animacao-hover') }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="app">
      <div className="bar">
        <Link className="barImage" to={{pathname: '/'}}>
          <img alt="logo imagination" className={`logo ${animacao}`} src={logo} draggable="false"/>
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
