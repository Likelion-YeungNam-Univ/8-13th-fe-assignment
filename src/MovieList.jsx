import React, { useState, useEffect } from "react";

const fetchMovies = () => {
  return new Promise((resolve) => {
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

    resolve(movies); // 데이터가 다 준비되면 반환
  });
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [toWatch, setToWatch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      const data = await fetchMovies();
      setMovies(data);
      setLoading(false);
    };
    loadMovies();
  }, []);

  const moveToWatched = (movie) => {
    setMovies((prevMovies) => prevMovies.filter((m) => m.id !== movie.id));
    setWatched((prevWatched) => [...prevWatched, movie]);
  };

  const moveToToWatch = (movie) => {
    setMovies((prevMovies) => prevMovies.filter((m) => m.id !== movie.id));
    setToWatch((prevToWatch) => [...prevToWatch, movie]);
  };

  const restoreToMain = (movie, listType) => {
    if (listType === "watched") {
      setWatched((prevWatched) => prevWatched.filter((m) => m.id !== movie.id));
      setMovies((prevMovies) =>
        [...prevMovies, movie].sort((a, b) => a.id - b.id)
      );
    } else if (listType === "toWatch") {
      setToWatch((prevToWatch) => prevToWatch.filter((m) => m.id !== movie.id));
      setMovies((prevMovies) =>
        [...prevMovies, movie].sort((a, b) => a.id - b.id)
      );
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-black text-white text-4xl font-bold text-center p-4">
        Movie List
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300 overflow-y-auto">
          <h2 className="text-lg font-bold mb-2">시청한 영화 목록</h2>
          <ul className="space-y-2">
            {watched.map((movie) => (
              <li key={movie.id} className="border-b pb-2">
                <span className="block font-bold">{movie.title}</span>
                <button
                  className="mt-1 text-sm text-red-500"
                  onClick={() => restoreToMain(movie, "watched")}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-2/4 px-4 py-2 overflow-y-auto">
          {loading ? (
            <div className="text-2xl font-bold text-center mt-10">
              Loading...
            </div>
          ) : (
            <ul className="space-y-4">
              {movies.map((movie) => (
                <li key={movie.id} className="border-b border-gray-300 pb-4">
                  <span className="block font-bold">{movie.title}</span>
                  <span className="block">{movie.description}</span>
                  <div className="mt-2">
                    <button
                      className="px-4 py-2 bg-gray-200 text-black border border-black rounded-xl mr-2"
                      onClick={() => moveToWatched(movie)}
                    >
                      시청한 영화 담기
                    </button>
                    <button
                      className="px-4 py-2 bg-gray-200 text-black border border-black rounded-xl"
                      onClick={() => moveToToWatch(movie)}
                    >
                      볼 영화 목록
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="w-1/4 bg-gray-100 p-4 border-l border-gray-300 overflow-y-auto">
          <h2 className="text-lg font-bold mb-2">볼 영화 목록</h2>
          <ul className="space-y-2">
            {toWatch.map((movie) => (
              <li key={movie.id} className="border-b pb-2">
                <span className="block font-bold">{movie.title}</span>
                <button
                  className="mt-1 text-sm text-red-500"
                  onClick={() => restoreToMain(movie, "toWatch")}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-black text-white text-4xl font-bold text-center p-4">
        Footer
      </div>
    </div>
  );
};

export default MovieList;
