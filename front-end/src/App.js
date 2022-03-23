import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import MainNavbar from './Component/Header/MainNavbar';
import Footer from './Component/Footer/Footer';
import ParentSignUp from './Component/SignUp/ParentSignUp';
import ParentMessage from './Component/ParentAccount/Message';
import ParentNavbar from './Component/ParentAccount/ParentNavbar';
import ParentFeedback from './Component/ParentAccount/Feedback';
import StudentDetails from './Component/ParentAccount/StudentDetails';
import DriverNavbar from './Component/DriverAccount/DriverNavbar';
import Students from './Component/DriverAccount/Students';
import StudentLocation from './Component/DriverAccount/StudentLocation';
import SignUp from './Component/SignUp/SignUp';
import Registration from './Component/Login/Register';
import DriverSignUp from './Component/SignUp/DriverSignUp';


function App() {
  return (
    <>
      <MainNavbar />
      <ParentNavbar />
      <DriverNavbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path='/parent-signup' component={ParentSignUp} />
        <Route path='/message' component={ParentMessage} />
        <Route path='/feedback' component={ParentFeedback} />
        <Route path='/student-detail' component={StudentDetails} />
        <Route path='/student-update' component={Students} />
        <Route path='/student-location' component={StudentLocation} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/register' component={Registration} />
        <Route path='/driver-signup' component={DriverSignUp} />
      </Switch>

      <Footer />
    </>

  );
}
export default App;