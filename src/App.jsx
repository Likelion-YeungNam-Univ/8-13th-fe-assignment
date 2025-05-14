import React, { useEffect, useState } from "react";
import "./App.css"; // CSS는 아래 따로 작성해줄게

function App() {
  const [loading, setLoading] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [watchedList, setWatchedList] = useState([]);

  // fetchMovies 로딩
  useEffect(() => {
    setLoading(true); //...loading을 띄워줌
    setTimeout(() => {
      const movies = []; //movies 빈 배열열
      for (let i = 1; i <= 2500; i++) {
        movies.push({ //.push를 통해 배열에 새로운 요소를 추가해줌
          id: i,
          title: `Movie ${i}`,
          description: `Description for Movie ${i}`,
        }); //각 객체들에 값을 넣어주는 과정
      } //가짜? 비동기 함수라고 하는데 100ms 후 안에 코드를 실행하여 
      // 네트워크 요청하는 과정을 흉내내는 코드라고 함.
      alert("데이터를 가져오는 중입니다...");
      setAllMovies(movies);
      setLoading(false);
    }, 100);
  }, []); //빈 배열을 값으로 주었으므로 1번만 초기에 실행.

  const moveMovie = (id, targetSetter) => { // 해당 targetsetter가 setwatchedlist, 또는 setwatchlist를 받아주기에 
    const movie = allMovies.find((m) => m.id === id);
    if (movie) { //예외 상황 방지용으로 작성 해둔것! id를 받아와서 배열안에 넣거나 빼주려고 하는데 해당하는 id자체가 없으면 오류가 나니까 if문을통해 실행여부를 결정하게 해주는것.
      targetSetter((prev) => [...prev, movie]); // setwathced와 setwatch 둘중 하나의 배열에 해당하는 movie 객체 하나가 들어가게 됨.
      setAllMovies((prev) => prev.filter((m) => m.id !== id)); //setallmovies (중앙부분)의 해당 movie 객체는 소멸되어야 하기에 filter로 배열에서 제외시켜주기.
    }
  };

  const removeMovie = (id, fromList, fromListSetter) => { //인자로 왼쪽 오른쪽 화면의 setwatch와 setwated를 받아주고, fromlist는 현재 존재하는 배열의 객체들들
    const movie = fromList.find((m) => m.id === id); //해당 객체를 onclick 속성으로 id까지 받아줌.
    if (movie) {  //예외 상황 방지용으로 작성 해둔것! id를 받아와서 배열안에 넣거나 빼주려고 하는데 해당하는 id자체가 없으면 오류가 나니까 if문을통해 실행여부를 결정하게 해주는것.
      fromListSetter((prev) => prev.filter((m) => m.id !== id));
      setAllMovies((prev) => {
        const updated = [...prev, movie];
        return updated.sort((a, b) => a.id - b.id);
      });
    }
  };

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  //usestate 상태관리 함수가 true일때 loading... 을 띄워줌. false이면 실행을 하지않음.

  return (
    <div className="app-container">
      <header className="header">Movie List</header>

      <div className="main">
        {/* 왼쪽: 시청한 영화 */}
        <div className="side-column">
          <h3>시청한 영화 목록</h3>
          {watchedList.map((movie) => (
            <div key={movie.id}>
              {movie.title}
              <button onClick={() => removeMovie(movie.id, watchedList, setWatchedList)}>삭제</button>
              {/* 삭제 기능은 주로 해당하는 객체를 배열에서 제외시켜주고, 중앙에 있는 배열에 그 객체를 추가시켜줘야하는 기능이 될것. setwatch 에서 filter를 쓴다음 setallmovies에 
              추가시켜주면 됨. */}
            </div>
          ))}
        </div>

        {/* 중앙: 전체 영화 */}
        <div className="center-column">
          {allMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <h4>{movie.title}</h4>
              <p>{movie.description}</p>
              <button onClick={() => moveMovie(movie.id, setWatchedList)}>시청한 영화 담기</button>
              <button onClick={() => moveMovie(movie.id, setWatchList)}>볼 영화 담기</button>
              {/* movemovie 함수 기능을 통해서 시청한 영화, 볼 영화로 넘겨야하기에 targetsetter를 통해서 추가될 부분의 배열에 추가해주고, 기존 중앙에 있던 배열에서 하나 빼주는 
              방식을 사용하면 됨. */}
            </div>
          ))}
        </div>

        {/* 오른쪽: 볼 영화 */}
        <div className="side-column">
          <h3>볼 영화 목록</h3>
          {watchList.map((movie) => (
            <div key={movie.id}>
              {movie.title}
              <button onClick={() => removeMovie(movie.id, watchList, setWatchList)}>삭제</button>
              {/* 삭제 기능은 주로 해당하는 객체를 배열에서 제외시켜주고, 중앙에 있는 배열에 그 객체를 추가시켜줘야하는 기능이 될것. setwatch 에서 filter를 쓴다음 setallmovies에 
              추가시켜주면 됨. */}
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
