import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Week1 from './components/Week1';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/" component={Home} />
        <Route to="/week-1" component={Week1} />
      </Switch>
    </div>
  );
}

export default App;
