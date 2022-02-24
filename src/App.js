import React ,{useState} from 'react';
import './App.css';
import Header from './Header'
import Footer from './components/Footer'
import SearchPage from './SearchPage'

import Login from './pages/Login/Login'
import New from './pages/New/New'
import MyHome from './Home'
import AboutUS from './pages/company/aboutUs'
import Services from './pages/company/Services2'
import NotFound from './pages/NotFound'

import Contact from './pages/company/contact'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const[cursorX,setCursorX]=useState();
  const[cursorY,setCursorY]=useState();
     window.addEventListener('mousemove',(e)=>{
          setCursorX(e.pageX)
        setCursorY(e.pageY)
      });

  return(
    <div className="app">
      <Router>
        <Header />        
        <Switch>
          <Route exact path="/" component ={MyHome} />
          <Route path="/new" component ={New} />
          <Route path="/search" component ={SearchPage} />
          <Route path="/login" component ={Login} />
          <Route path="/services" component ={Services} />
          <Route path="/aboutus" component ={AboutUS} />  
          <Route path="/contact"  component={Contact} />
          <Route path='*'>
               <NotFound />
           </Route>
        </Switch>   
       <Footer/>     
       </Router>

       <div className='cursor'
             style={{
                 left:cursorX + 'px',
                 top: cursorY + 'px'
                  }
                  }
              >
        </div>
    </div>
  );
}

export default App;