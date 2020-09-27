import React from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';
import logo from './logo.png';

function Sidenav() {
    return (
        <header className="header__bar">
            <div className="movie__logo">
                <Link to = '/' ><img src={logo} width='70px' height='70px' alt='logo'/></Link>
            </div>
            <div className='movie__filter'>
                <ul>
                    <Link to='/popular'><li className='filter__list'><i className="fas fa-fire"></i>Popular</li></Link>
                    <Link to='/toprated'><li className='filter__list'><i className="fas fa-star"></i>Top Rated</li></Link>
                    <Link to='/nowplaying'><li className='filter__list'><i className="fab fa-sketch"></i>Now Playing</li></Link>
                    <Link to='/upcoming'><li className='filter__list'><i className="far fa-hourglass"></i>Upcoming</li></Link>
                </ul>
            </div>
            <div className="footer">
                <p>© 2020 Juhee KIM <br/>For educational purposes only</p>    
            </div>
        </header>
    );
}

export default Sidenav;
