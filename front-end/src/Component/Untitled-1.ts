/* App.js extra file */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './Component/About';
import Error from './Component/Error';
import Home from './Component/Home';
import Policy from './Component/Policy';
import Login from './Component/Login';
import List from './Component/List';
import Footer from './Component/Footer';



const App=()=>{
  return(
    <>
    <List/>
 <Switch>
   <Route exact path="/" component={Home}/>
   <Route path="/about" component={About}/>
   
   <Route path="/policy" component={Policy}/>
   <Route component={Error}/>
  </Switch>
  <Footer/>
    </>
  )
}
export default App;