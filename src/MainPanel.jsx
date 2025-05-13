const MainPanel = ({ allMovies, moveMovie }) => {
	return (
		<section className="w-[80%] overflow-y-auto p-2">
			{allMovies.map((movie) => (
				<div
					key={movie.id}
					className="flex flex-col justify-center items-center border"
				>
					<h2>{movie.title}</h2>
					<p>{movie.description}</p>
					<div className="mb-2">
						<button
							className="border"
							onClick={() => moveMovie(movie, "watched")}
						>
							시청한영화 담기
						</button>
						<button className="border">볼 영화 담기</button>
					</div>
				</div>
			))}
		</section>
	);
};

export default MainPanel;
