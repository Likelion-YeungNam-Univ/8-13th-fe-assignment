import React from "react";
import Header from "./Header";
import WatchedList from "./WatchedList";
import MovieList from "./MovieList";
import WillWatchList from "./WillWatchList";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <WatchedList />
      <MovieList />
      <WillWatchList />
      <Footer />
    </div>
  );
};

export default App;
