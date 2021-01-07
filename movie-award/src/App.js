import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home'
import '../src/App.css'

//import from Utils 
import { MoviesNominationProvider } from './Utils/GlobalState'
function App() {
  return (
    <Router>
      <MoviesNominationProvider>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </MoviesNominationProvider>
    </Router>
  );
}

export default App;
