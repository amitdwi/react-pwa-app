import React from "react";
import './Navbar.scss';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <NavLink className="navbar-brand" exact to="/">LOGO</NavLink>
            <div className="react-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-Nav" exact to="/">MEN </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Women">WOMEN </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Kids">KIDS </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Ftw">FTW</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Accessories">ACCESSORIES</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">                    
                    <div class="form-group has-search">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <span class="fa fa-search form-control-feedback"></span>
                    </div>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;