import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./MovieList";
import WatchedList from "./WatchedList";
import WillWatchList from "./WillWatchList";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = () => {
      const movies = [];
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
    const resultList = fetchMovies();
    setMovies(resultList);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {/* Left */}
        <div className="w-1/5 bg-gray-100">
          <WatchedList />
        </div>
        {/* Center */}
        <div className="w-3/5 overflow-y-auto max-h-[calc(100vh-160px)]">
          <MovieList movies={movies} />
        </div>
        {/* Right */}
        <div className="w-1/5 bg-gray-100">
          <WillWatchList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
