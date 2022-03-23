import React from 'react';
import loginImage from '../Images/loginImage.jpg';





    

const login=()=>{
    return(
        <>
            <div className='base-container'>
                <div className='header'> Login </div>
                <div className='content'>
                    <div className='image'>
                        <img src={loginImage} alt=''/>
                    </div>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='username'>
                                Username
                            </label>
                            <input type='text' className='username' placeholder='username'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>
                                Password
                            </label>
                            <input type='password' className='password' placeholder='password'/>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <button type='button' className='btn'>
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default login;