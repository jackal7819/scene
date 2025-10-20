interface WatchedSummaryProps {
	watched: {
		imdbRating: number;
		userRating: number;
		runtime: number;
	}[];
}

export default function WatchedSummary({ watched }: WatchedSummaryProps) {
	const average = (arr: number[]) => arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));

	return (
		<div>
			<h2>Movies you watched</h2>
			<div>
				<p>
					<span>#️⃣</span>
					<span>{watched.length}</span>
				</p>
				<p>
					<span>⭐️</span>
					<span>{avgImdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{avgUserRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{avgRuntime} min</span>
				</p>
			</div>
		</div>
	);
}
