import React from 'react';
import './movie-item.css';
import { navigate } from '@reach/router';
import Img from '../../shared/Img';

function getImageUrl(imgUrl, width = 150, height = width * 1.5) {
  return `https://image.tmdb.org/t/p/w${width}_and_h${height}_bestv2${imgUrl}`;
}

export default function MovieItem({ movie }) {
  return (
    <div className="movie-item" onClick={() => navigate(`/movies/${movie.id}`)}>
      <div className="movie-item-image">
        <Img style={{ width: 100 }} src={getImageUrl(movie.poster_path, 150)} alt="poster" />
      </div>
      <div className="movie-item-content">
        <h1>{movie.title}</h1>
        {movie.overview && <p>{movie.overview}</p>}
      </div>
    </div>
  );
}
