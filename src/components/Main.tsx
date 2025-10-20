import { useState } from 'react';

import { average, tempMovieData, tempWatchedData } from '../../constants';

export default function Main() {
	const [movies, setMovies] = useState(tempMovieData);
	const [watched, setWatched] = useState(tempWatchedData);
	const [isOpen1, setIsOpen1] = useState(true);
	const [isOpen2, setIsOpen2] = useState(true);

	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));

	return (
		<main className='container flex flex-grow p-10 mx-auto w-9/10'>
			<div>
				<button type='button' onClick={() => setIsOpen1((prev) => !prev)}>
					{isOpen1 ? '–' : '+'}
				</button>
				{isOpen1 && (
					<ul>
						{movies.map((movie) => (
							<li key={movie.imdbID}>
								<img src={movie.Poster} alt={`${movie.Title} poster`} />
								<h3>{movie.Title}</h3>
								<div>
									<p>
										<span>🗓</span>
										<span>{movie.Year}</span>
									</p>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
			<div>
				<button type='button' onClick={() => setIsOpen2((prev) => !prev)}>
					{isOpen2 ? '–' : '+'}
				</button>
				{isOpen1 && (
					<>
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

						<ul>
							{watched.map((movie) => (
								<li key={movie.imdbID}>
									<img src={movie.Poster} alt={`${movie.Title} poster`} />
									<h3>{movie.Title}</h3>
									<div>
										<p>
											<span>⭐️</span>
											<span>{movie.imdbRating}</span>
										</p>
										<p>
											<span>🌟</span>
											<span>{movie.userRating}</span>
										</p>
										<p>
											<span>⏳</span>
											<span>{movie.runtime} min</span>
										</p>
									</div>
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		</main>
	);
}
