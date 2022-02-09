/*MainNavbar.js extra file*/

import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../Images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import './MainNavbarStyle.css';


const MainNavbar=()=>{
    return(
        <>
       <header>
           <div className='container container-flex'>
               <div className='logoContainer'>
                   <img src={logo} alt='logo' className='logo'/>
               </div>
               <nav>
                   <div className='list'>
                       <NavLink exact to='/' className='listItem' activeClassName='activeItem'>Home</NavLink>
                       <NavLink to='/about' className='listItem' activeClassName='activeItem'>About</NavLink>
                       <NavLink to='/login' className='listItem' activeClassName='activeItem'>Login</NavLink>
                       <NavLink to='/policy' className='listItem' activeClassName='activeItem'>Policy</NavLink>
                   </div>
               </nav>
               <div className='icons'>
                   <SearchIcon className='icon'/>
                   <PersonIcon className='icon'/>
                   <CallIcon className='icon'/>
               </div>
           </div>
       </header>
        </>
    )
}
export default MainNavbar;