import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Week1 from './components/Week1';
import Week2 from './components/Week2';
import Week3 from './components/Week3';
import Week4 from './components/Week4';
import Week5 from './components/Week5';
import Week6 from './components/Week6';
import Week7 from './components/Week7';
import Week8 from './components/Week8';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/week-1" component={Week1} />
        <Route path="/week-2" component={Week2} />
        <Route path="/week-3" component={Week3} />
        <Route path="/week-4" component={Week4} />
        <Route path="/week-5" component={Week5} />
        <Route path="/week-6" component={Week6} />
        <Route path="/week-7" component={Week7} />
        <Route path="/week-8" component={Week8} />
      </Switch>
    </div>
  );
}

export default App;
