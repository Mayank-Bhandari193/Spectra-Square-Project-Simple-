import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
        <div className="Container-fluid nav bg">
            <div className='row'>
                <div className="row-12 ms-auto">

                
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
        Navbar</NavLink>
    <button
     className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
</ul>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/works">Works</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>


     
    </div>
  </div>
</nav>
      </div>
    </div>
</div>  
    </>
    );
};

export default Navbar;