import React from 'react';
import "./Favorite.css";

function Favorite(props) {
    return (
        <div className="favorite__container">
            <h2>Favorite</h2>
            <span>
            Oops! You don't have any favourite movies! 
            </span>
        </div>
    )
}

export default Favorite;