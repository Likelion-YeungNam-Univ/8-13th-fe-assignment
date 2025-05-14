import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [watchLaterMovies, setWatchLaterMovies] = useState([]);

  useEffect(() => {
    Promise.resolve().then(() => {
      const fetchMovies = () => {
        const fetchedMovies = [];

        // movies 배열 안에 객체 형태의 데이터 추가
        for (let i = 1; i <= 2500; i++) {
          fetchedMovies.push({
            id: i,
            title: `Movie ${i}`,
            description: `Description for Movie ${i}`,
          });
          console.log("2500개의 영화 목록을 가져오는 중...");
        }

        console.log("가져오기 완료");

        // fetchMovies함수가 동작하는데 오래 걸린다고 가정하기 위한 코드
        alert("데이터를 가져오는 중입니다...");

        return fetchedMovies;
      };

      setMovies(fetchMovies());
      console.log("목록 전달 완료");

      setLoading(false);
    });
  }, []);

  const watched = (movie) => {
    setMovies(movies.filter((m) => m.id !== movie.id));
    setWatchedMovies([...watchedMovies, movie]);
  };

  const watchLater = (movie) => {
    setMovies(movies.filter((m) => m.id !== movie.id));
    setWatchLaterMovies([...watchLaterMovies, movie]);
  };

  const removeFromWatched = (movie) => {
    setWatchedMovies(watchedMovies.filter((m) => m.id !== movie.id));
    setMovies([...movies, movie].sort((a, b) => a.id - b.id));
  };

  const removeFromWatchLater = (movie) => {
    setWatchLaterMovies(watchLaterMovies.filter((m) => m.id !== movie.id));
    setMovies([...movies, movie].sort((a, b) => a.id - b.id));
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="text-center bg-black text-white p-2 text-3xl">
        Movie List
      </div>
      {loading ? (
        <div className="text-center p-8 text-xl">Loading...</div>
      ) : (
        <div className="flex flex-1 justify-between overflow-hidden">
          {/* 왼쪽 시청한 영화 목록 */}
          <div className="bg-gray-200 p-5 w-1/5 overflow-y-auto">
            <h2 className="text-center text-2xl py-4">시청한 영화 목록</h2>
            <ul>
              {watchedMovies.map((movie) => (
                <li
                  className="flex flex-col justify-center items-center py-2 border-b-2 border-gray-300"
                  key={movie.id}
                >
                  <span>{movie.title}</span>
                  <button
                    className="bg-gray-100 border px-1 py-0.5 text-sm rounded-lg hover:bg-yellow-200 mt-1"
                    onClick={() => removeFromWatched(movie)}
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 가운데 영화 목록 */}
          <div className="flex-1 overflow-y-auto">
            <ul>
              {movies.map((movie) => (
                <li
                  className="flex flex-col justify-center items-center py-2 border-b-2 border-gray-300"
                  key={movie.id}
                >
                  <span>{movie.title}</span>
                  <span>{movie.description}</span>
                  <span className="space-x-3 my-0.5">
                    <button
                      className="bg-gray-100 border px-1 py-0.5 text-sm rounded-lg hover:bg-yellow-200"
                      onClick={() => watched(movie)}
                    >
                      시청한 영화 담기
                    </button>
                    <button
                      className="bg-gray-100 border px-1 py-0.5 text-sm rounded-lg hover:bg-yellow-200"
                      onClick={() => watchLater(movie)}
                    >
                      볼 영화 담기
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽 볼 영화 목록 */}
          <div className="bg-gray-200 p-5 w-1/5 overflow-y-auto">
            <h2 className="text-center text-2xl py-4">볼 영화 목록</h2>
            <ul>
              {watchLaterMovies.map((movie) => (
                <li
                  className="flex flex-col justify-center items-center py-2 border-b-2 border-gray-300"
                  key={movie.id}
                >
                  <span>{movie.title}</span>
                  <button
                    className="bg-gray-100 border px-1 py-0.5 text-sm rounded-lg hover:bg-yellow-200 mt-1"
                    onClick={() => removeFromWatchLater(movie)}
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center bg-black text-white p-2 text-3xl">Footer</div>
    </div>
  );
};

export default MovieList;
