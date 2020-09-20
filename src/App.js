import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Week1 from './components/Week1';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/week-1" component={Week1} />
        <Route path="/week-2" />
        <Route path="/week-3" />
        <Route path="/week-4" />
        <Route path="/week-5" />
        <Route path="/week-6" />
        <Route path="/week-7" />
        <Route path="/week-8" />
      </Switch>
    </div>
  );
}

export default App;
