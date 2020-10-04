import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Randomizer from './pages/Randomizer.js';
import Home from './pages/Home.js';
import Error from './pages/Error.js';
import Navigation from './navigation/Navigation.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/randomizer" component={(Randomizer)}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
