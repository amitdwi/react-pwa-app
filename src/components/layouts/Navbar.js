import React from "react";
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <a className="navbar-brand" href="www.google.com">LOGO</a>
            <div className="react-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="www.google.com">MEN <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">WOMEN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">KIDS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">FTW</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">ACCESSORIES</a>
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