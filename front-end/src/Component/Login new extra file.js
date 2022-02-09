/* Login.js new extra file */

import React from 'react';
import './LoginStyle.css';


const Login=()=>{
    return (
      <>
        <div className="container my-5 w-50">
            <form>
                <div className="row mb-3">
                    <label htlmFor="inputUsername" className="col-sm-2 col-form-label">
                        I am
                    </label>
                    <div className="col-sm-6">
                        <input 
                            type="text" 
                            placeholder='Enter your username'
                            className="form-control" 
                            id="inputUsername"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htlmFor="inputPassword" className="col-sm-2 col-form-label">
                        My password is
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="password"
                            placeholder='Enter your password' 
                            className="form-control"
                            id="inputPassword"
                        />
                    </div>
                </div>
                <fieldset className="row ">
                    <legend className="col-form-label col-sm-2 pt-0">
                        I am a
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
                            <label className="form-check-label" htmlFor="gridRadios1">
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
                            <label className="form-check-label" htmlFor="gridRadios2">
                                Parent
                            </label>
                        </div>
                    </div>
                </fieldset>
                
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
      </>
    );
}
export default Login;