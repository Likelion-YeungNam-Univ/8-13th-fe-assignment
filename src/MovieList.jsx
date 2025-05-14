import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [watch, setWatch] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const result = fetchMovies();
      setMovies(result);
      setLoading(false);
    }, 0);
  }, []);

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

  const addwatch = (id) => {
    const check = movies.find((m) => m.id === id);
    setWatch([...watch, check]);
    setMovies(movies.filter((m) => m.id !== id));
  };
  const addwatched = (id) => {
    const check = movies.find((m) => m.id === id);
    setWatched([...watched, check]);
    setMovies(movies.filter((m) => m.id !== id));
  };
  const deletewatch = (id) => {
    const check = watch.find((m) => m.id === id);
    const update = watch.filter((m) => m.id !== id);
    setWatch(update);
    setMovies([...movies, check].sort((a, b) => a.id - b.id));
  };
  const deletewatched = (id) => {
    const check = watched.find((m) => m.id === id);
    const update = watched.filter((m) => m.id !== id);
    setWatched(update);
    setMovies([...movies, check].sort((a, b) => a.id - b.id));
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <h1 className="text-xl font-bold text-white bg-black text-center py-8">
          Movie List
        </h1>
        <div className=" flex flex-1 justify-center items-center bg-white">
          <h1 className="text-4xl font-bold text-black bg-white">Loading...</h1>
        </div>
        <h1 className="text-xl font-bold text-white bg-black text-center py-8">
          Footer
        </h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="fixed top-0 w-full text-xl font-bold text-white bg-black text-center py-6">
        Movie List
      </h1>
      <div className="pt-24 pb-24">
        <div className="flex justify-between text-center">
          <div className="w-1/5 bg-gray-100">
            <div className="font-bold mb-6">시청한 영화 목록</div>
            <ul>
              {watched.map((movie) => (
                <li key={movie.id} className="border-b border-gray-300 mb-4">
                  {movie.title}
                  <button
                    onClick={() => deletewatched(movie.id)}
                    className="border border-gray-400"
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/5 bg-white h-[600px] overflow-y-auto">
            <ul>
              {movies.map((movie) => (
                <li key={movie.id} className="border-b border-gray-300">
                  <div>{movie.title}</div>
                  <div>{movie.description}</div>
                  <div>
                    <button
                      onClick={() => addwatched(movie.id)}
                      className="border border-gray-500 text-black bg-gray-200 hover:bg-gray-300 font-bold"
                    >
                      시청한 영화 담기
                    </button>
                    <button
                      onClick={() => addwatch(movie.id)}
                      className="border border-gray-500 text-black bg-gray-200 hover:bg-gray-300 font-bold"
                    >
                      볼 영화 담기
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5 bg-gray-100">
            <div className="font-bold mb-6">볼 영화 목록</div>
            <ul>
              {watch.map((movie) => (
                <li key={movie.id} className="border-b border-gray-300 mb-4">
                  {movie.title}
                  <button
                    onClick={() => deletewatch(movie.id)}
                    className="border border-gray-400"
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h1 className="fixed bottom-0 w-full text-xl font-bold text-white bg-black text-center py-6">
        Footer
      </h1>
    </div>
  );
};
export default MovieList;
