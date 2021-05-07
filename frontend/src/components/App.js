import '../css/App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'
// import store from "../store/index.js"
import { useEffect, useState } from 'react'

import Header from './Header'
import Home from './Home'
import { Container } from 'semantic-ui-react';
function App() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios.get("/products").then(response => {
      setAds(response.data);
      // store.dispatch({ type: 'SET_ADS', ads: ads});
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Router>
      <Header />
      <Container style={{marginTop: '12em'}}>
        <Switch>
          <Route exact path="/" render={() => (<Home ads={ads}/>)} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
