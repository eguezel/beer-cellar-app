import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import CtxBeers from './Components/CtxBeers';
import Shelfs from './Components/Shelfs/Shelfs';
import Shelf from './Components/Shelf/Shelf';
import BeersList from './Components/BeersList/BeersList';
import Beer from './Components/Beer/Beer'

const App = () => {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(response => {
      setBeers(response.data);
    })
  }, []);

  return (
    <div className="App">
      <CtxBeers.Provider value={beers}>
        <Switch>
          <Route exact path='/' render={props =>
            <React.Fragment>
              <Shelfs />
              <BeersList />
            </React.Fragment>
          } />
          <Route path='/beers/:id' render={props =>
            <React.Fragment>
              <Shelf />
              <Beer />
            </React.Fragment>
          } />
        </Switch>
      </CtxBeers.Provider>
    </div>
  );
}

export default App;
