import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./MovieList";
import WatchedList from "./WatchedList";
import WillWatchList from "./WillWatchList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

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

  const handleAddToWatched = (id) => {
    const movie = movies.find((m) => m.id === id);
    setWatched((prev) => [...prev, movie]);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleDelete = (id) => {
    const movie = watched.find((m) => m.id === id);
    setMovies((prev) => [...prev, movie].sort((a, b) => a.id - b.id));
    setWatched(watched.filter((movie) => movie.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {/* Left */}
        <div className="w-1/5 bg-gray-100">
          <WatchedList watchedMovies={watched} onDelete={handleDelete} />
        </div>
        {/* Center */}
        <div className="w-3/5 overflow-y-auto max-h-[calc(100vh-160px)]">
          <MovieList movies={movies} onAddToWatched={handleAddToWatched} />
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
