import React from "react";

const WillWatchList = ({ willWatchMovies, onDelete }) => {
  return (
    <div className="text-center">
      <h1 className="font-bold p-8">볼 영화목록</h1>
      <ul>
        {willWatchMovies.map((willwatchMovie) => (
          <li key={willwatchMovie.id} className="p-2">
            <span>{willwatchMovie.title}</span>
            <button
              className="px-1 border bg-gray-200 hover:bg-gray-600 hover:text-white cursor-pointer"
              onClick={() => onDelete(willwatchMovie.id)}
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

export default WillWatchList;
