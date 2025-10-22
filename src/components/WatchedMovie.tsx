import type { IMovie } from './Movie';

interface WatchedMovieProps {
	movie: IMovie;
}

export default function WatchedMovie({ movie }: WatchedMovieProps) {
	return (
		<li
			key={movie.imdbID}
			className='flex flex-col gap-10 p-10 border-b border-slate-600 rounded-xl md:h-50 md:flex-row'
		>
			<img src={movie.Poster} alt={`${movie.Title} poster`} className='w-20' />
			<div className='flex flex-col justify-center flex-1 gap-10 text-2xl'>
				<h3>{movie.Title}</h3>
				<div className='flex flex-wrap justify-between gap-10 text-2xl'>
					<p className='flex items-center justify-center gap-5'>
						<span>⭐️</span>
						<span>{movie.imdbRating}</span>
					</p>
					<p className='flex items-center justify-center gap-5'>
						<span>🌟</span>
						<span>{movie.userRating}</span>
					</p>
					<p className='flex items-center justify-center gap-5'>
						<span>⏳</span>
						<span>{movie.runtime} min</span>
					</p>
				</div>
			</div>
		</li>
	);
}
