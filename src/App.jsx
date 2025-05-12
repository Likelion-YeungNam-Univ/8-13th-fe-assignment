import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./MovieList";
import WatchedList from "./WatchedList";
import WillWatchList from "./WillWatchList";

const App = () => {
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
          <MovieList />
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
