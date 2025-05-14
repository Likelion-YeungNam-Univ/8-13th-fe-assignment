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
  const [wish, setWish] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // 로딩화면 먼저 출력
      setLoading(true);
      // 요청 후 응답 관계없이 다음 동작 실행하는 async
      const MovieLoad = async () => {
        const movieData = fetchMovies();
        setMovies(movieData);
        setLoading(false);
      };
      MovieLoad();
    });
  }, []);

  // 배열을 정렬하는 함수
  const sortList = (movieList) => {
    return [...movieList].sort((a, b) => a.id - b.id);
  };

  const addWish = (movie) => {
    setWish((prev) => [...prev, movie]);
    setMovies((prev) => sortList(prev.filter((m) => m.id != id)));
  };

  const addWatched = (movie) => {
    setWatched((prev) => [...prev, movie]);
    setMovies((prev) => sortList(prev.filter((m) => m.id != id)));
  };

  const deleteWish = (movie) => {
    setWish((prev) => prev.filter((movie) => movie.wish != wish));
    setMovies((prev) => sortList([...prev, movie]));
  };

  const deleteWatched = (movie) => {
    setWish((prev) => prev.filter((movie) => movie.watched != watched));
    setMovies((prev) => sortList([...prev, movie]));
  };

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        <h2>시청한 영화 목록</h2>
        <ul>
          {watched.map((movie) => (
            <li key={movie.id}>
              {movie.title}
              <button onClick={() => deleteWatched(movie)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2></h2>
        <ul>
          {movies.slice(0, 10).map((movie) => (
            <li key={movie.id}>
              {movie.title}
              <button onClick={() => addWatched(movie)}>
                시청한 영화 담기
              </button>
              <button onClick={() => addWish(movie)}>볼 영화 담기</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>볼 영화 목록</h2>
        <ul>
          {wish.map((movie) => (
            <li key={movie.id}>
              {movie.title}
              <button onClick={() => deleteWish(movie)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
