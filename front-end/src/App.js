import React from 'react';
import { Route, Switch, } from 'react-router-dom';

import About from './Component/About/About';
import Home from './Component/Home/Home';
import Policy from './Component/Policy';
import Login from './Component/Login/Login';
import MainNavbar from './Component/Header/MainNavbar';
import Footer from './Component/Footer/Footer';
import ParentSignUp from './Component/SignUp/ParentSignUp';




const App=()=>{
  return(
    <>
    <MainNavbar/>
 <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/login" component={Login}/>
   <Route exact path="/policy" component={Policy}/>
   <Route exact path='/parent-signup' component={ParentSignUp}/>
   
  </Switch>
  <Footer/>
    </>
  )
}
export default App;