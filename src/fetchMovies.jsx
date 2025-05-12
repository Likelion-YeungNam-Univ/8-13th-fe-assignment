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

  useEffect(() => {
    const data = fetchMovies();
    setMovies(data);
  }, []);

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div>{movie.title}</div>
            <div>{movie.description}</div>
            <div>
              <div>시청한 영화 담기</div>
              <div>볼 영화 담기</div>  
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchMovies;
