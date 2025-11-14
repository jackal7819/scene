import type { IMovie } from './Movie';

interface WatchedSummaryProps {
	watched: IMovie[];
}

const average = (arr: (number | undefined)[]) => {
	const numbers = arr.filter((n): n is number => n !== undefined);
	return numbers.length ? numbers.reduce((acc, cur) => acc + cur / numbers.length, 0) : 0;
};

export default function WatchedSummary({ watched }: WatchedSummaryProps) {
	const avgImdbRating = average(watched.map((movie) => movie.imdbRating)).toFixed(1);
	const avgUserRating = average(watched.map((movie) => movie.userRating)).toFixed(1);
	const avgRuntime = average(watched.map((movie) => Number(movie.Runtime.split(' ').at(0))));

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
