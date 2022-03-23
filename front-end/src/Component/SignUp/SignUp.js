import React from 'react';
import loginImage from '../Images/loginImage.jpg';
import '../Login/LoginStyle.css';
import { NavLink } from 'react-router-dom';


const SignUp=()=>{
    return(
        <>

       <div className="container my-5">
            <form className='row'>
                <div className='col-xs-12 col-md-6'>
                    <h1> I am a </h1>  
                    <div className='button1 my-5'>
                        <NavLink to='/parent-signup'>
                            <button type="submit" className="btn btn-primary col-xs-12 col-md-3 mb-50">
                                Parent
                            </button>
                        </NavLink>
                    </div>
                    <div className='button2 my-5'>
                        <NavLink to='/driver-signup'>
                            <button type="submit" className="btn btn-primary col-xs-12 col-md-3 mb-50">
                                Driver
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4 my-5">
                    <div className="image">
                        <img src={loginImage} alt=''/>
                    </div>
                </div>
            </form>
        </div>
       
        </>
    )
}
export default SignUp;