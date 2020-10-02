import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import'./Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <section className="section">
                    <img className ="background-poster" src={location.state.image} alt={location.state.title} title={location.state.title} /> 
                    <div className="individual-movie-container">
                        <div className="solo-poster">
                            <img src={location.state.poster} alt={location.state.title} title={location.state.title} />  
                        </div>
                        <div className="individual-movie-info">
                            <h1 className="solo-title">
                                {location.state.title}
                            </h1>
                            <div className="solo-genres">
                                {location.state.genres}
                            </div>
                            <div className="solo-rating"><FontAwesomeIcon icon={faStar} />  {location.state.rating} / 10</div>
                            <div className="solo-summary">{location.state.summary}</div>
                            <button className="addfav">Add Favorite <FontAwesomeIcon icon={faHeart} /> </button>
                        </div>
                    </div>
                </section>
            )
        } else {
            return null;
        }
    }
}
export default Detail;