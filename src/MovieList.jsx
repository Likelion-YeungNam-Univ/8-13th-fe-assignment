import React, { useEffect, useState } from "react";

const fetchMovies = () => {
  const movies = [];

  // movies 배열 안에 객체 형태의 데이터 추가
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

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 화면이 먼저 렌더링되도록 setTimeout으로 비동기 처리
    setTimeout(() => {
      const data = fetchMovies();
      setMovies(data);
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-black text-white text-4xl font-bold text-center p-4">
        Movie List
      </div>

      <div className="flex-1 flex items-center justify-center">
        {loading ? (
          <div className="text-2xl font-bold">Loading...</div>
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                {movie.title} - {movie.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-black text-white text-4xl font-bold text-center p-4">
        Footer
      </div>
    </div>
  );
};

export default MovieList;
