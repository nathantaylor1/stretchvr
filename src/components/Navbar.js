import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import './Navbar.css';

export default function Navbar({ title }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <b>{title}</b><img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="" className='logo' />
                    </Link>
                    <div className='nav-menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-link' onClick={closeMobileMenu}>
                                HOME
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/about' className='nav-link' onClick={closeMobileMenu}>
                                ABOUT
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/dev-blog' className='nav-link' onClick={closeMobileMenu}>
                                DEV BLOG
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
