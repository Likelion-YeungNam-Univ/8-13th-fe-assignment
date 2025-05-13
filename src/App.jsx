import { useEffect, useState } from "react";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";
import RightPanel from "./RightPanel";

const App = () => {
	const [allMovies, setAllMovies] = useState([]);
	const [watched, setWatched] = useState([]);
	const [willWatch, setWillWatch] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// useEffect로 처음 한 번만 영화 가져오기
	useEffect(() => {
		const movies = fetchMovies();
		setAllMovies(movies);
		setIsLoading(false);
	}, []);

	// 영화 가져오는 함수
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

	// listType에 따라 영화 옮기는 함수
	const moveMovie = (movie, listType) => {
		setAllMovies((prev) => prev.filter((m) => m.id !== movie.id));
		if (listType === "watched") setWatched((prev) => [...prev, movie]);
		else setWillWatch((prev) => [...prev, movie]);
	};

	// 영화 지우는 함수
	const removeMovie = (movie, listType) => {
		if (listType === "watched") {
			setWatched((prev) => prev.filter((m) => m.id !== movie.id));
		} else {
			setWillWatch((prev) => prev.filter((m) => m.id !== movie.id));
		}
		setAllMovies((prev) => [...prev, movie].sort((a, b) => a.id - b.id));
	};

	return (
		<div className="flex flex-col h-screen">
			<header className="h-[25px] bg-black text-white text-center">
				Movie List
			</header>
			<main className="flex flex-1 overflow-hidden">
				{/* 왼쪽 패널, 시청한 영화 목록 */}
				<LeftPanel watched={watched} removeMovie={removeMovie} />

				{/* isLoading이 true이면 로딩 중을, false면 영화리스트를 보여줌 */}
				{isLoading ? (
					<div className="w-[80%] flex justify-center items-center p-2">
						<span className="text-2xl font-bold">Loading...</span>
					</div>
				) : (
					<MainPanel allMovies={allMovies} moveMovie={moveMovie} />
				)}

				{/* 오른쪽 패널, 볼 영화 목록 */}
				<RightPanel willWatch={willWatch} removeMovie={removeMovie} />
			</main>
			<footer className="h-[25px] bg-black text-white text-center">
				Footer
			</footer>
		</div>
	);
};

export default App;
