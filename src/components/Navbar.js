import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    console.log(props);
    return(
        <nav>
            <div className="nav-wrapper #00695c teal darken-3">
                <a href='/' className='brand-logo center'>Portfolio Site</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/resume'>Resume</NavLink></li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);