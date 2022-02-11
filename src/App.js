import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import New from './pages/New/New'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />       
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route path="/new" component ={New} />
          <Route path="/dashboard" component ={Dashboard} />
          <Route path="/search" component ={SearchPage} />
          <Route path="/login" component ={Login} />
        </Switch>
        
        <Footer />
       </Router>
    </div>
  );
}

export default App;