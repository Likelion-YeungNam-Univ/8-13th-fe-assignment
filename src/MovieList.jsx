import React, { useEffect, useState } from "react";

const fetchMovies = () => {
  const movies = [];
  for (let i = 1; i <= 2500; i++) {
    movies.push({
      id: i,
      title: `Movie ${i}`,
      description: `Description for Movie ${i}`,
    });
  }

  setTimeout(() => {
    alert("데이터를 가져오는 중입니다...");
  }, 0);

  return movies;
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = fetchMovies();
      setMovies(data);
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-black text-white text-4xl font-bold text-center p-4">
        Movie List
      </div>

      {/* 영화 목록만 스크롤 가능하게 설정 */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {loading ? (
          <div className="text-2xl font-bold text-center mt-10">Loading...</div>
        ) : (
          <ul className="space-y-2">
            {movies.map((movie) => (
              <li key={movie.id}>
                <span className="font-bold">{movie.title}</span> -{" "}
                {movie.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      <div className="bg-black text-white text-4xl font-bold text-center p-4">
        Footer
      </div>
    </div>
  );
};

export default MovieList;
