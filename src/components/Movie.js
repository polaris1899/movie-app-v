import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, year, title, rating, poster }) {
    return (
        <div className='movie'>
            <Link
             to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    rating,
                    poster,
                }     
            }}
            >
                <img src={poster} alt={title} title={title} />            
            </Link>
            <div className="movie__data">
                <h3 className="movie__title">{title.length > 15 ? title.substring(0, 15) + "..." : title}</h3>
                <h5 className="movie__year">{year}</h5>
                <Link to={ `/movie/${id}`} >Read more</Link>
                <p className='movie__rating'> {rating}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;