import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navigation.css';

function Navigation() {
    return (
        <header>
            <div className="movie__logo">
                <Link to = '/' ><img src={logo} width='70px' height='70px' alt='logo'/></Link>
            </div>
            <div className='nav'>
                <Link to='/'>Home</Link>
                <Link to='/Favorite'>Favorite</Link>
                <Link to='/about'>About</Link>
            </div>
        </header>
    );
}

export default Navigation;
