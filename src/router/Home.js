import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = { 
    isLoading: true,
    movie: [ ]
  };
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading:false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'> Loading...</span>
          </div>
        ) : (
          <div className='movie__container'>
            <h1 className='movie__nav'>Top Rated</h1>
            <div className='movies'>
              { movies.map ( movie => (
                < Movie 
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    rating={movie.rating}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    image={movie.background_image}
                    summary={movie.summary}
                />
              ))}
            </div>
          </div>
          
        )}
      </section>
    )
  }
}

export default Home;