import React from "react";

const WatchedList = ({ watchedMovies }) => {
  return (
    <div>
      <h1>시청한 영화목록</h1>
      <ul>
        {watchedMovies.map((watchedMovie) => (
          <li>
            <span key={watchedMovie.id}>{watchedMovie.title}</span>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchedList;
