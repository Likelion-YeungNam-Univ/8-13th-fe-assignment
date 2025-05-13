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

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true); // 로딩 시작
      const data = await fetchMovies();
      setMovies(data);
      setLoading(false); // 로딩 종료
    };

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="align-center">
        <div className="text-center border bg-gray-700 text-white font-bold text-2xl p-3"> 
          Movie List
        </div>
        <div className="mb-7 text-center text-2xl font-bold mt-10">
        Loading...
        </div>
        <div className="text-center border bg-gray-700 text-white font-bold text-2xl p-3"> 
            Footer 
        </div>
      </div>
      
    );
  }


  return (
    <div className="justify-center text-center m-3">
      <div className="text-center border bg-gray-700 text-white font-bold text-2xl p-3">
        Movie List
      </div>
      <div className="justify-between flex align-center text-center mt-3">
        <div className="bg-gray-400 width-{500px} height-{500px}">
          <div>시청한 영화 목록</div>
        </div>
        <ul className= "width={500px} height-{500px}">
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
        <div className="bg-gray-200 width-{500px} height-{500px}">
          <div>볼 영화 목록</div>
        </div>
      </div>
      <div className="text-center border bg-gray-700 text-white font-bold text-2xl p-3 mt-3"> 
        Footer 
      </div>

      
    </div>
    
  );
};

export default FetchMovies;
