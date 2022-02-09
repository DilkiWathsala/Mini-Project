import React from 'react';
import './LoginStyle.css';
import loginImage from '../Images/loginImage.jpg';


const Login=()=>{
    return (
      <>
        <div className="container my-5">
            <form className='row'>
                <div className='col-xs-12 col-md-6'>
                    <div className="mb-3">
                        <label htlmfor="inputUsername" className="col-form-label mx-1">
                            Enter Your Username:
                        </label>
                        <input 
                            type="text" 
                            placeholder='My Name is'
                            className="form-control col-md-6" 
                            id="inputUsername"
                        />    
                    </div>
                    <div className=" mb-5">
                        <label htlmFor="inputPassword" className="col-form-label mx-1">
                            Enter Your Password:
                        </label>
                        <input
                            type="password"
                            placeholder='My Password is' 
                            className="form-control"
                            id="inputPassword"
                        />        
                    </div>
                
                    <fieldset className="row my-5">
                        <legend className="col-form-label col-sm-2 pt-0">
                            You are a:
                        </legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input
                                    className="form-check-input "
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios1"
                                    value="option1"
                                    checked
                                />
                                <label className="form-check-label" htmlfor="gridRadios1">
                                    Driver
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios2"
                                    value="option2"
                                />
                                <label className="form-check-label" htmlfor="gridRadios2">
                                    Parent
                                </label>
                            </div>
                        </div>
                    </fieldset>
                
                    <button type="submit" className="btn btn-primary col-xs-12 col-md-3 mb-50">
                        Login
                    </button>
                </div>
                <div className="col-xs-12 col-md-4 my-5">
                    <div className="image">
                        <img src={loginImage} alt=''/>
                    </div>
                </div>
            </form>
        </div>
      </>
    );
}
export default Login;