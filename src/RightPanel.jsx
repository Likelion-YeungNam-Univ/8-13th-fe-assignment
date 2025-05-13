const RightPanel = ({ willWatch, removeMovie }) => {
	return (
		<aside className="w-[20%] overflow-y-auto bg-gray-100 p-2">
			<h2 className="text-center">볼 영화 목록</h2>
			{willWatch.map((movie) => (
				<div
					key={movie.id}
					className="flex justify-between items-center border-b"
				>
					<span>{movie.title}</span>
					<button
						className="border"
						onClick={() => removeMovie(movie, "willWatch")}
					>
						삭제
					</button>
				</div>
			))}
		</aside>
	);
};

export default RightPanel;
