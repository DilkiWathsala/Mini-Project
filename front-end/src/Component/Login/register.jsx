import React from 'react';
import loginImage from '../Images/loginImage.jpg';



const register=()=>{
    return(
        <>
            <div className='base-container'>
                <div className='header'> Register </div>
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
                            <label htmlFor='email'>
                                Email
                            </label>
                            <input type='email' className='email' placeholder='email'/>
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
                        Register
                    </button>
                </div>
            </div>
        </>
    )
}

export default register;