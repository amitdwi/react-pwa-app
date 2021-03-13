import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layouts/Navbar';
import Men from './components/pages/Men';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Men} />
          <Route component={NotFound} />
        </Switch>   
      </div>
    </Router>
  );
}

export default App;
