import { FixedSizeList } from "react-window";

const MainPanel = ({ allMovies, moveMovie }) => {
	const movieItem = ({ index, style }) => {
		const movie = allMovies[index];
		return (
			<div
				style={style}
				className="flex flex-col justify-center items-center border p-2"
			>
				<h2>{movie.title}</h2>
				<p>{movie.description}</p>
				<div className="mb-2">
					<button
						className="border mr-2 px-2"
						onClick={() => moveMovie(movie, "watched")}
					>
						시청한영화 담기
					</button>
					<button
						className="border px-2"
						onClick={() => moveMovie(movie, "willWatch")}
					>
						볼 영화 담기
					</button>
				</div>
			</div>
		);
	};

	return (
		<section className="w-[80%] p-2">
			<FixedSizeList
				height={window.innerHeight - 50}
				itemCount={allMovies.length}
				itemSize={100}
				width={"100%"}
			>
				{movieItem}
			</FixedSizeList>
		</section>
	);
};

export default MainPanel;
