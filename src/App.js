import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './components/Footer'
import SearchPage from './SearchPage'

import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import New from './pages/New/New'
import SearchBarDesign from './SearchBarDesign'
import MyHome from './myhome'
import ContactUs from './pages/company/ContactUs'
import Services from './pages/company/Services'
import Services2 from './pages/company/Services2'


import Contact from './pages/company/contact'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route exact path="/" component ={MyHome} />
          <Route path="/searchbar" component ={SearchBarDesign} />
          <Route path="/new" component ={New} />
          <Route path="/dashboard" component ={Dashboard} />
          <Route path="/search" component ={SearchPage} />
          <Route path="/login" component ={Login} />
          <Route path="/services" component ={Services} />
          <Route path="/services2" component ={Services2} />          
          <Route path="/contactus" component ={ContactUs} />
          <Route path="/contact"  component={Contact} />
        </Switch>        
       </Router>
    </div>
  );
}

export default App;