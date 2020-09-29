import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSketch } from '@fortawesome/free-brands-svg-icons'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import './Sidenav.css';


function Sidenav() {
    return (
        <div className="sidenav">
            <div className='movie__filter'>
                <ul>
                    <Link to='/popular'><li className='filter__list'><FontAwesomeIcon icon={faFire} />   Popular</li></Link>
                    <Link to='/toprated'><li className='filter__list'><FontAwesomeIcon icon={faStar} />   Top Rated</li></Link>
                    <Link to='/nowplaying'><li className='filter__list'><FontAwesomeIcon icon={faSketch} />   Now Playing</li></Link>
                    <Link to='/upcoming'><li className='filter__list'><FontAwesomeIcon icon={faHourglass} />   Upcoming</li></Link>
                </ul>
            </div>
            <div className="footer">
                <p>© 2020 Juhee KIM <br/>For educational purposes only</p>    
            </div>
        </div>
    );
}

export default Sidenav;
