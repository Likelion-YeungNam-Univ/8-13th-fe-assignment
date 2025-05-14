import React, { useState, useEffect } from "react";

export default function MovieList() {

  const [movies, setMovies] = useState([]);          
  const [watchedList, setWatchedList] = useState([]); 
  const [toWatchList, setToWatchList] = useState([]); 
  const [loading, setLoading] = useState(true);       


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const data = fetchMovies();  
      setMovies(data);
      setLoading(false);
    }, 0);
  }, []);

  const fetchMovies = () => {
    const movies = [];
    for (let i = 1; i <= 2500; i++) {
      movies.push({
        id: i,
        title: `Movie ${i}`,
        description: `Description for Movie ${i}`,
      });
    }
    console.log("2500개의 영화 목록을 가져오는 중...");
    alert("데이터를 가져오는 중입니다...");
    return movies;
  };

  const addWatched = (m) =>
    setWatchedList(prev =>
      [...prev, m].sort((a, b) => a.id - b.id)
    );

  const addToWatch = (m) =>
    setToWatchList(prev =>
      [...prev, m].sort((a, b) => a.id - b.id)
    );

  const removeWatched = id =>
    setWatchedList(prev => prev.filter(m => m.id !== id));

  const removeToWatch = id =>
    setToWatchList(prev => prev.filter(m => m.id !== id));

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white text-2xl font-medium py-4 text-center">
        Movie List
      </header>

      {loading ? (
        <div className="flex-1 flex items-center justify-center text-xl">
          Loading...
        </div>
      ) : (
        <div className="flex flex-1 overflow-hidden">
    
          <aside className="w-1/4 bg-gray-100 p-4 overflow-y-auto border-r">
            <h2 className="text-lg font-semibold mb-2">시청한 영화 목록</h2>
            <ul className="space-y-2">
              {watchedList.map(m => (
                <li
                  key={m.id}
                  className="flex justify-between items-center py-1 border-b"
                >
                  <span>{m.title}</span>
                  <button
                    onClick={() => removeWatched(m.id)}
                    className="text-sm text-black px-2 py-1 rounded border"
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </aside>

     
          <section className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {movies
                .filter(
                  m =>
                    !watchedList.some(w => w.id === m.id) &&
                    !toWatchList.some(t => t.id === m.id)
                )
                .map(m => (
                  <div
                    key={m.id}
                    className="border rounded p-4 flex flex-col items-center"
                  >
                    <h3 className="font-semibold">{m.title}</h3>
                    <p className="text-sm mb-2">{m.description}</p>
                    <div className="space-x-2">
                      <button
                        onClick={() => addWatched(m)}
                        className="text-sm  text-black px-3 py-1 rounded border"
                      >
                        시청한 영화 담기
                      </button>
                      <button
                        onClick={() => addToWatch(m)}
                        className="text-sm text-black px-3 py-1 rounded border"
                      >
                        볼 영화 담기
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <aside className="w-1/4 bg-gray-100 p-4 overflow-y-auto border-l">
            <h2 className="text-lg font-semibold mb-2">볼 영화 목록</h2>
            <ul className="space-y-2">
              {toWatchList.map(m => (
                <li
                  key={m.id}
                  className="flex justify-between items-center py-1 border-b"
                >
                  <span>{m.title}</span>
                  <button
                    onClick={() => removeToWatch(m.id)}
                    className="text-sm text-black px-2 py-1 rounded border"
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
      <footer className="bg-gray-800 text-white text-2xl text-center py-10">
        Footer
      </footer>
    </div>
  );
}
