// import { useEffect, useState } from 'react';

// import ErrorMessage from './ErrorMessage';
// import Loader from './Loader';
// import type { IMovie } from './Movie';

// interface MovieDetailsProps {
// 	selectedId: string;
// 	onCloseMovieDetails: () => void;
// }

// const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
// const API_BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

// export default function MovieDetails({ selectedId, onCloseMovieDetails }: MovieDetailsProps) {
// 	const [movie, setMovie] = useState<IMovie | null>(null);
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [error, setError] = useState('');

// 	const getMovieDetails = async (id: string) => {
// 		try {
// 			setIsLoading(true);
// 			setError('');
// 			const url = `${API_BASE_URL}/?apikey=${API_KEY}&i=${id}`;
// 			const res = await fetch(url);
// 			const data = await res.json();
// 			if (data.Response === 'False') throw new Error(data.Error);
// 			setMovie(data);
// 		} catch (error) {
// 			if (error instanceof Error) setError(error.message);
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	};

// 	useEffect(() => {
// 		getMovieDetails(selectedId);
// 	}, [selectedId]);
// 	return (
// 		<aside>
// 			<button
// 				type='button'
// 				className='absolute flex items-center justify-center pt-1 text-4xl duration-500 rounded-full cursor-pointer size-14 left-10 top-10 bg-slate-800 hover:bg-slate-600'
// 				onClick={onCloseMovieDetails}
// 			>
// 				&larr;
// 			</button>
// 			{isLoading && <Loader />}
// 			{!isLoading && !error && movie && (
// 				<>
// 					<header className='movie-details'>
// 						<img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
// 						<div className='movie-details__content'>
// 							<h2>{movie.Title}</h2>
// 							<p>
// 								<span>🗓</span>
// 								<span>{movie.Year}</span>
// 							</p>
// 							<p>
// 								<span>⭐️</span>
// 								<span>{movie.imdbRating}</span>
// 							</p>
// 							<p>
// 								<span>⏳</span>
// 								<span>{movie.Runtime}</span>
// 							</p>
// 							<p>
// 								<span>🎭</span>
// 								<span>{movie.Genre}</span>
// 							</p>
// 						</div>
// 					</header>
// 					<section>
// 						<p>
// 							<span>📝</span>
// 							<span>{movie.Plot}</span>
// 						</p>
// 						<p>
// 							<span>👥</span> {movie.Actors}
// 						</p>
// 						<p>
// 							<span>💡</span> {movie.Director}
// 						</p>
// 					</section>
// 				</>
// 			)}
// 			{error && <ErrorMessage errorMessage={error} />}
// 		</aside>
// 	);
// }

import { useEffect, useState } from 'react';

import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import StarRating from './Rating';
import type { IMovie } from './Movie';

interface MovieDetailsProps {
	selectedId: string;
	onCloseMovieDetails: () => void;
}

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export default function MovieDetails({ selectedId, onCloseMovieDetails }: MovieDetailsProps) {
	const [movie, setMovie] = useState<IMovie | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const getMovieDetails = async (id: string) => {
		try {
			setIsLoading(true);
			setError('');
			const url = `${API_BASE_URL}/?apikey=${API_KEY}&i=${id}`;
			const res = await fetch(url);
			const data = await res.json();
			if (data.Response === 'False') throw new Error(data.Error);
			setMovie(data);
		} catch (error) {
			if (error instanceof Error) setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getMovieDetails(selectedId);
	}, [selectedId]);

	return (
		<aside
			aria-label='Movie details'
			className='relative flex flex-col p-10 border-l text-slate-100 border-slate-700'
		>
			<button
				type='button'
				aria-label='Close movie details'
				className='absolute flex items-center justify-center pt-1 text-4xl duration-500 rounded-full cursor-pointer size-14 left-10 top-10 bg-slate-800 hover:bg-slate-600'
				onClick={onCloseMovieDetails}
			>
				&larr;
			</button>

			{isLoading && (
				<div className='flex items-center justify-center flex-1'>
					<Loader />
				</div>
			)}

			{!isLoading && !error && movie && (
				<div>
					<header className='flex flex-col items-center mb-10 text-center rounded-lg md:flex-row md:text-left bg-slate-600'>
						<img
							src={movie.Poster}
							alt={`Movie poster for ${movie.Title}`}
							className='object-cover w-48 rounded-lg shadow-lg md:w-56'
						/>
						<div className='flex flex-col gap-5 mt-5 md:mt-0 md:ml-6'>
							<h2 className='text-2xl text-slate-50'>{movie.Title}</h2>
							<ul className='flex flex-wrap items-center gap-5 text-slate-300'>
								<li>🗓 {movie.Year}</li>
								<li>⭐️ IMDB {movie.imdbRating}</li>
								<li>⏳ {movie.Runtime}</li>
								<li>🎭 {movie.Genre}</li>
							</ul>
						</div>
					</header>

					<section aria-label='Movie information' className='space-y-4'>
						<dl className='space-y-10'>
							<div className='p-10 rounded-lg bg-slate-600'>
								<StarRating
									maxRating={10}
									defaultRating={movie.imdbRating}
									onSetRating={(rating) => console.log(rating)}
								/>
							</div>
							<div>
								<dt className='font-semibold text-slate-200'>📝 Plot</dt>
								<dd className='text-slate-400'>{movie.Plot}</dd>
							</div>
							<div>
								<dt className='font-semibold text-slate-200'>👥 Actors</dt>
								<dd className='text-slate-400'>{movie.Actors}</dd>
							</div>
							<div>
								<dt className='font-semibold text-slate-200'>💡 Director</dt>
								<dd className='text-slate-400'>{movie.Director}</dd>
							</div>
						</dl>
					</section>
				</div>
			)}

			{error && (
				<div className='flex items-center justify-center flex-1'>
					<ErrorMessage errorMessage={error} />
				</div>
			)}
		</aside>
	);
}
