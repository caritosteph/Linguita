import React from 'react';
/*global Navbar*/
export default Navbar = () =>(
    <div className="navbar-fixed">
        <nav id="nav_f" className="default_color" role="navigation">
            <div className="nav-wrapper container">
                <a href="#home" id="logo-container" className="brand-logo">Linguita</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#more">More</a></li>
                    </ul>
                    <ul id="nav-mobile" className="side-nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#more">More</a></li>
                    </ul>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
            </div>
        </nav> 
    </div>
); 
