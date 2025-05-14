import React, { useEffect, useState } from "react";

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

  alert("데이터를 가져오는 중입니다...");
  return movies;
};

export default function MovieList() {
  const [allMovies, setAllMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [watchLaterMovies, setWatchLaterMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const movies = fetchMovies();
      setAllMovies(movies);
      setLoading(false);
    }, 0);
  }, []);

  const handleMove = (movie, targetSetter) => {
    setAllMovies((prev) => prev.filter((m) => m.id !== movie.id));
    targetSetter((prev) => [...prev, movie]);
  };

  const handleRemove = (movie, sourceList, setSourceList) => {
    setSourceList((prev) => prev.filter((m) => m.id !== movie.id));
    setAllMovies((prev) => {
      const updated = [...prev, movie];
      return updated.sort((a, b) => a.id - b.id);
    });
  };

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "100px", fontSize: "30px" }}>
        Loading...
      </div>
    );

  return (
    <div>
      <header style={{ background: "#333", color: "#fff", padding: "20px", textAlign: "center", fontSize: "32px" }}>
        Movie List
      </header>

      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", minHeight: "80vh" }}>
        <div style={{ width: "25%", background: "#f5f5f5", padding: "15px", borderRadius: "8px", overflowY: "auto", maxHeight: "75vh" }}>
          <h3 style={{ textAlign: "center" }}>시청한 영화 목록</h3>
          {watchedMovies.map((movie) => (
            <div key={movie.id} style={{ marginBottom: "15px", textAlign: "center", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
              <div>{movie.title}</div>
              <button onClick={() => handleRemove(movie, watchedMovies, setWatchedMovies)}>삭제</button>
            </div>
          ))}
        </div>

        <div style={{ width: "45%", textAlign: "center" }}>
          {allMovies.slice(0, 10).map((movie) => (
            <div key={movie.id} style={{ marginBottom: "30px", border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
              <h4>{movie.title}</h4>
              <p>{movie.description}</p>
              <button onClick={() => handleMove(movie, setWatchedMovies)} style={{ marginRight: "10px" }}>
                시청한영화 담기
              </button>
              <button onClick={() => handleMove(movie, setWatchLaterMovies)}>볼 영화 담기</button>
            </div>
          ))}
        </div>

        <div style={{ width: "25%", background: "#f5f5f5", padding: "15px", borderRadius: "8px", overflowY: "auto", maxHeight: "75vh" }}>
          <h3 style={{ textAlign: "center" }}>볼 영화 목록</h3>
          {watchLaterMovies.map((movie) => (
            <div key={movie.id} style={{ marginBottom: "15px", textAlign: "center", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
              <div>{movie.title}</div>
              <button onClick={() => handleRemove(movie, watchLaterMovies, setWatchLaterMovies)}>삭제</button>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ background: "#333", color: "#fff", padding: "20px", textAlign: "center" }}>
        Footer
      </footer>
    </div>
  );
}
