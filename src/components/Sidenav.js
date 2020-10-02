import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSketch } from '@fortawesome/free-brands-svg-icons'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import './Sidenav.css';


function Sidenav() {
    return (
        <div className="sidenav">
            <div className='movie__filter'>
                <ul>
                    <Link to='/'><li className='filter__list'><FontAwesomeIcon icon={faStar} />   Top Rated</li></Link>
                    <Link to='/Nowplaying'><li className='filter__list'><FontAwesomeIcon icon={faSketch} />   Now Playing</li></Link>
                    <Link to='/Uploaded'><li className='filter__list'><FontAwesomeIcon icon={faHourglass} />   Uploaded</li></Link>
                </ul>
            </div>
            <div className="footer">
                <p>© 2020 Juhee KIM <br/>For educational purposes only</p>    
            </div>
        </div>
    );
}

export default Sidenav;
