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

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [watched, setWatched] = useState([]);
  const [toWatch, setToWatch] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true); // 로딩 시작
      const data = await fetchMovies();
      setMovies(data);
      setLoading(false); // 로딩 종료
    };

    loadMovies();
  }, []);

  const sortById = (list) => list.sort((a, b) => a.id - b.id);

  const addWatchedList = (movie) => {
    setWatched((prev) => sortById([...prev, movie]));
    setMovies((prev) => sortById(prev.filter((m) => m.id !== movie.id)));
  };
  
  const addToWatchList = (movie) => {
    setToWatch((prev) => sortById([...prev, movie]));
    setMovies((prev) => sortById(prev.filter((m) => m.id !== movie.id)));
  };

  const removeWatchedList = (movie) => {
    setWatched((prev) => sortById(prev.filter((m) => m.id !== movie.id)));
    setMovies((prev) => sortById([...prev, movie]));
  };

  const removeToWatchList = (movie) => {
    setToWatch((prev) => sortById(prev.filter((m) => m.id !== movie.id)));
    setMovies((prev) => sortById([...prev, movie]));
  };

  if (loading) {
    return (
      <div>
        <div className="text-center border bg-gray-700 text-white font-bold text-2xl p-3"> 
          Movie List
        </div>
        <div className="mb-7 text-center text-xl font-bold mt-10">
        Loading...
        </div>
        <div className="text-center border bg-gray-700 text-white font-bold text-xl p-3"> 
            Footer 
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between text-center h-screen pl-3 pr-3 pb-0.5">
      <div className="text-center border bg-gray-700  text-white font-bold text-4xl p-6 mt-1 h-[170px]">
        Movie List
      </div>
      <div className="justify-between flex align-center overflow-hidden text-center mt-3">
        <div className="bg-gray-100 w-[250px]">
        <div className="pt-15 font-bold ">
            <div className="pb-10 font-bold text-2xl">시청한 영화 목록</div>
              {watched.map((movie) => (
                <div key={movie.id} className="mb-3 border-b pb-3 border-gray-300">
                  <div>{movie.title}</div>
                  <button
                    onClick={() => removeWatchedList(movie)}
                    className="text-sm mt-1 px-2 py-1 border rounded bg-white hover:bg-gray-200"
                  >
                    삭제
                  </button>
                </div>
              ))}
          </div>
        </div>
        <ul className="flex-1 overflow-auto font-semibold">
          {movies.map((movie) => (
            <li key={movie.id} className="border-b  p-4">
              <div>{movie.title}</div>
              <div>{movie.description}</div>
              <div className="just">
                <button
                  onClick={() => addWatchedList(movie)} 
                  className="bg-white hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded mt-4 mr-3">
                  시청한 영화 담기
                </button>
                <button
                  onClick={() => addToWatchList(movie)}
                 className="bg-white hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded ">
                  볼 영화 담기
                </button>
              </div>
            </li>
          ))}
        </ul>


      <div className="bg-gray-100 w-[250px]">
        <div className="pt-15 font-bold ">
            <div className="pb-10 font-bold text-2xl">볼 영화 목록</div>
              {toWatch.map((movie) => (
                <div key={movie.id} className="mb-3 border-b pb-3 border-gray-300">
                  <div>{movie.title}</div>
                  <button
                    onClick={() => removeToWatchList(movie)}
                    className="text-sm mt-1 px-2 py-1 border rounded bg-white hover:bg-gray-200"
                  >
                    삭제
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>


      <div className="text-center border bg-gray-700 text-white font-bold text-4xl p-6 mt-3"> 
        Footer 
      </div>
    </div>
  );
};

export default FetchMovies;