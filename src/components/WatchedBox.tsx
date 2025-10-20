import { useState } from 'react';

import { average, tempWatchedData } from '../../constants';

export default function WatchedBox() {
	const [watched, setWatched] = useState(tempWatchedData);
	const [isOpen2, setIsOpen2] = useState(true);

	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));

	return (
		<div>
			<button type='button' onClick={() => setIsOpen2((prev) => !prev)}>
				{isOpen2 ? '–' : '+'}
			</button>
			{isOpen2 && (
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
	);
}
