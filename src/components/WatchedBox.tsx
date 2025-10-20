import { useState } from 'react';

import WatchedMoviesList from './WatchedMoviesList'
import WatchedSummary from './WatchedSummary';
import { tempWatchedData } from '../../constants';

export default function WatchedBox() {
	const [watched, setWatched] = useState(tempWatchedData);
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div>
			<button type='button' onClick={() => setIsOpen((isOpen) => !isOpen)}>
				{isOpen ? '–' : '+'}
			</button>
			{isOpen && (
				<>
					<WatchedSummary watched={watched} />
					<WatchedMoviesList watched={watched} />
				</>
			)}
		</div>
	);
}
