import React from "react";

const WatchedList = ({ watchedMovies, onDelete }) => {
  return (
    <div className="text-center">
      <h1 className="font-bold p-8">시청한 영화목록</h1>
      <ul>
        {watchedMovies.map((watchedMovie) => (
          <li key={watchedMovie.id} className="p-2">
            <span key={watchedMovie.id}>{watchedMovie.title}</span>
            <button
              className="px-1 border bg-gray-200 hover:bg-gray-600 hover:text-white cursor-pointer"
              onClick={() => onDelete(watchedMovie.id)}
            >
              삭제
            </button>
            <hr className="mt-3 border-gray-400" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchedList;
