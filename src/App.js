import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const ArtPage = () => (
  <div>
    <h1>ART PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/art' component={ArtPage} />
      </Switch>
    </div>
  );
}

export default App;
