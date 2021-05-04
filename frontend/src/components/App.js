import logo from '../logo.svg';
import '../css/App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import store from "../store/index.js"
import { useEffect } from 'react'

import Home from './Home'

function App() {

  useEffect(() => {
    axios.get("/products").then(response => {
      const data = response.data;
      store.dispatch({ type: 'SET_ADS', ads: data});
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  });

  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
