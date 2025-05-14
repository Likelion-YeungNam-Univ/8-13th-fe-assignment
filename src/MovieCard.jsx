// MovieCard.js
import React from 'react';

function MovieCard({ movie, onAddToWatchList, onAddToWatchedList }) {
    return (
        <div className="movie-card">
            <h4>{movie.title}</h4>
            <p>{movie.description}</p>
            <button onClick={() => onAddToWatchedList(movie.id)}>시청한 영화 담기</button>
            <button onClick={() => onAddToWatchList(movie.id)}>볼 영화 담기</button>
        </div>
    );
}

export default MovieCard;
