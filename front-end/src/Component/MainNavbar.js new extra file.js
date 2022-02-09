/* MainNavbar.js new extra file */

import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';





const MainNavbar=()=>{
    return(
        <>
        <header>
            <div className='container container-flex'>
                
                

                <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="logo">
      <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      Bootstrap
    </a>
  </div>
</nav>

                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href='/'>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/policy">Policy</a>
                        </li>
                    </ul>

                   
               
               
           </div>
       </header>
        </>
    )
}
export default MainNavbar;