const LeftPanel = ({ watched, removeMovie }) => {
	return (
		<aside className="w-[20%] overflow-y-auto bg-gray-100 p-2">
			<h2 className="text-center">시청한영화 목록</h2>
			{watched.map((movie) => (
				<div
					key={movie.id}
					className="flex justify-between items-center border-b"
				>
					<span>{movie.title}</span>
					<button
						className="border"
						onClick={() => removeMovie(movie, "watched")}
					>
						삭제
					</button>
				</div>
			))}
		</aside>
	);
};

export default LeftPanel;
