import { useState } from "react";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";
import RightPanel from "./RightPanel";

const fetchMovies = () => {
	const movies = [];
	for (let i = 1; i <= 2500; i++) {
		movies.push({
			id: i,
			title: `Movie ${i}`,
			description: `Description for Movie ${i}`,
		});
	}
	alert("데이터를 가져오는 중입니다...");
	return movies;
};

const App = () => {
	const [allMovies, setAllMovies] = useState([]);
	const [watched, setWatched] = useState([]);
	const [willWatch, setwillWatch] = useState([]);

	return (
		<div className="flex flex-col h-screen">
			<header className="bg-black text-white text-center">Movie List</header>
			<main className="flex flex-1 overflow-hidden">
				<LeftPanel />

				<MainPanel />

				<RightPanel />
			</main>
			<footer className="bg-black text-white text-center">Footer</footer>
		</div>
	);
};

export default App;
