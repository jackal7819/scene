import { useState } from 'react';

import MoviesList from './MoviesList';

export default function ListBox() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div>
			<button type='button' onClick={() => setIsOpen((isOpen) => !isOpen)}>
				{isOpen ? '–' : '+'}
			</button>
			{isOpen && <MoviesList />}
		</div>
	);
}
