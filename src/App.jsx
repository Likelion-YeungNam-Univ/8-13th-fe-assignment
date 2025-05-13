import { useEffect, useState } from "react";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";
import RightPanel from "./RightPanel";

const App = () => {
	const [allMovies, setAllMovies] = useState([]);
	const [watched, setWatched] = useState([]);
	const [willWatch, setwillWatch] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const movies = fetchMovies();
		setAllMovies(movies);
		setIsLoading(false);
	}, []);

	const fetchMovies = () => {
		const movies = [];
		for (let i = 1; i <= 50; i++) {
			movies.push({
				id: i,
				title: `Movie ${i}`,
				description: `Description for Movie ${i}`,
			});
		}
		alert("데이터를 가져오는 중입니다...");
		return movies;
	};

	const moveMovie = (movie, listType) => {
		setAllMovies((prev) => prev.filter((m) => m.id !== movie.id));
		if (listType === "watched") setWatched((prev) => [...prev, movie]);
	};

	const removeMovie = (movie, listType) => {
		if (listType === "watched") {
			setWatched((prev) => prev.filter((m) => m.id !== movie.id));
		}
		setAllMovies((prev) => [...prev, movie].sort((a, b) => a.id - b.id));
	};

	return (
		<div className="flex flex-col h-screen">
			<header className="bg-black text-white text-center">Movie List</header>
			<main className="flex flex-1 overflow-hidden">
				<LeftPanel watched={watched} removeMovie={removeMovie} />

				{isLoading ? (
					<div className="w-[80%] flex justify-center items-center p-2">
						<span className="text-2xl font-bold">Loading...</span>
					</div>
				) : (
					<MainPanel allMovies={allMovies} moveMovie={moveMovie} />
				)}

				<RightPanel />
			</main>
			<footer className="bg-black text-white text-center">Footer</footer>
		</div>
	);
};

export default App;
