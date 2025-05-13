import React from "react";

const MovieList = ({ movies, onAddToWatched }) => {
  const btnStyle =
    "bg-gray-200 border px-2 cursor-pointer hover:bg-gray-600 hover:text-white";

  return (
    <div className="text-center">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="space-y-3 pt-3">
            <div>{movie.title}</div>
            <div>Description for {movie.title}</div>
            <button
              className={btnStyle}
              onClick={() => onAddToWatched(movie.id)}
            >
              시청한 영화 담기
            </button>
            <button className={btnStyle}>볼 영화 담기</button>
            <hr className="border-gray-400" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
