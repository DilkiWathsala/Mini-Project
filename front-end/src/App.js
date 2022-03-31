import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Footer from "./Component/Footer/Footer";
import ParentSignUp from "./Component/SignUp/ParentSignUp";
import ParentMessage from "./Component/ParentAccount/ParentMessage";
import ParentFeedback from "./Component/ParentAccount/Feedback";
import StudentDetails from "./Component/ParentAccount/StudentDetails";
import Students from "./Component/DriverAccount/Students";
import StudentLocation from "./Component/DriverAccount/StudentLocation";
import SignUp from "./Component/SignUp/SignUp";
import DriverSignUp from "./Component/SignUp/DriverSignUp";
import DriverMessage from "./Component/DriverAccount/DriverMessage";
import DriverFeedback from "./Component/DriverAccount/DriverFeedback";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/parent-signup" component={ParentSignUp} />
        <Route path="/parent-message" component={ParentMessage} />
        <Route path="/feedback" component={ParentFeedback} />
        <Route path="/student-detail" component={StudentDetails} />
        <Route path="/student-update" component={Students} />
        <Route path="/student-location" component={StudentLocation} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/driver-signup" component={DriverSignUp} />
        <Route path="/driver-message" component={DriverMessage} />
        <Route path="/driver-feedback" component={DriverFeedback} />
      </Switch>

      <Footer />
    </div>
  );
}
export default App;
