import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = () => {
      const movies = [];
      for (let i = 1; i <= 2500; i++) {
        movies.push({
          id: i,
          title: `Movie ${i}`,
          description: `Description for Movie ${i}`,
        });

        console.log("2500개의 영화 목록을 가져오는 중...");
      }

      // fetchMovies함수가 동작하는데 오래 걸린다고 가정하기 위한 코드
      alert("데이터를 가져오는 중입니다...");

      return movies;
    };
    const resultList = fetchMovies();
    setMovies(resultList);
  }, []);

  return (
    <div className="text-center">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="space-y-3 pt-3">
            <div>{movie.title}</div>
            <div>Description for {movie.title}</div>
            <button className="bg-gray-200 border px-2 cursor-pointer">
              시청한 영화 담기
            </button>
            <button className="bg-gray-200 border px-2 cursor-pointer">
              볼 영화 담기
            </button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
