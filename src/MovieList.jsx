import React, { useState, useEffect } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); //로딩
  const [watched, setWatched] = useState([]); //시청한 영화
  const [willWatch, setWillWatch] = useState([]); //볼 영화

  useEffect(() => {
    //조건2: alert 함수 끝내기 전 Loading 화면  보이게
    setLoading(true);
    setTimeout(() => {
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

        return movies;
      };
      // fetchMovies함수가 동작하는데 오래 걸린다고 가정하기 위한 코드
      alert("데이터를 가져오는 중입니다...");

      const data = fetchMovies(); //조건 1: fetchMovies를 useEffect 내부에서 호출하여 사용
      setMovies(data);
      setLoading(false);
    }, 0);
  }, []);

  //시청한 영화 추가
  const addToWatched = (movie) => {
    setWatched((prev) => [...prev, movie]);
    setMovies((prev) => prev.filter((m) => m.id !== movie.id)); //조건3: 목록에 담기면 가운데 영화 목록에서 제거
  };

  //볼 영화 추가
  const addToWillWatch = (movie) => {
    setWillWatch((prev) => [...prev, movie]);
    setMovies((prev) => prev.filter((m) => m.id !== movie.id)); //조건3: 목록에 담기면 가운데 영화 목록에서 제거
  };

  //양쪽 목록에서 삭제 버튼 기능
  const removeFromList = (movie, listSetter) => {
    listSetter((prev) => prev.filter((m) => m.id !== movie.id));
    setMovies((prev) => [...prev, movie].sort((a, b) => a.id - b.id)); //조건4: 가운데 영화 목록에 오름차순으로 다시 추가
  };

  return (
    <div className="flex flex-col text-center">
      {/* Movie List */}
      <header className="bg-black text-white py-5 text-3xl font-bold">
        Movie List
      </header>

      <div className="flex flex-grow">
        {/* 시청한 영화 목록 */}
        <div className="w-1/4 bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4">시청한 영화 목록</h2>
          {watched.map((movie) => (
            <div key={movie.id} className="mb-5 border-b">
              <span>{movie.title}</span>
              <button
                onClick={() => removeFromList(movie, setWatched)}
                className="border px-2"
              >
                삭제
              </button>
            </div>
          ))}
        </div>

        {/* 영화 목록 */}
        <div className="w-2/3 p-4 overflow-y-auto max-h-[500px]">
          {loading ? (
            <p className="text-center text-xl font-semibold">Loading...</p>
          ) : (
            movies.map((movie) => (
              <div key={movie.id} className="m-3 border-b pb-3 text-center">
                <h3 className="text-lg">{movie.title}</h3>
                <p>{movie.description}</p>
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => addToWatched(movie)}
                    className="border px-2 bg-gray-200"
                  >
                    시청한 영화 담기
                  </button>
                  <button
                    onClick={() => addToWillWatch(movie)}
                    className="border px-2 bg-gray-200"
                  >
                    볼 영화 담기
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 볼 영화 목록 */}
        <div className="w-1/4 bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4">볼 영화 목록</h2>
          {willWatch.map((movie) => (
            <div key={movie.id} className="mb-5 border-b">
              <span>{movie.title}</span>
              <button
                onClick={() => removeFromList(movie, setWillWatch)}
                className="border px-2"
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-5 text-3xl font-bold">Footer</div>
    </div>
  );
};

export default MovieList;
