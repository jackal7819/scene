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
		<div className='flex flex-col justify-center gap-10 p-10 text-2xl bg-slate-600 rounded-xl md:h-50'>
			<h2 className='uppercase'>Movies you watched</h2>
			<div className='flex flex-wrap justify-between gap-10 text-2xl'>
				<p className='flex items-center justify-center gap-5'>
					<span>#️⃣</span>
					<span>{watched.length}5</span>
				</p>
				<p className='flex items-center justify-center gap-5'>
					<span>⭐️</span>
					<span>{avgImdbRating}</span>
				</p>
				<p className='flex items-center justify-center gap-5'>
					<span>🌟</span>
					<span>{avgUserRating}</span>
				</p>
				<p className='flex items-center justify-center gap-5'>
					<span>⏳</span>
					<span>{avgRuntime} min</span>
				</p>
			</div>
		</div>
	);
}
