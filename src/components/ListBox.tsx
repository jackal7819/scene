import { useState } from 'react';

import MoviesList from './MoviesList';

export default function ListBox() {
	const [isOpen1, setIsOpen1] = useState(true);

	return (
		<div>
			<button type='button' onClick={() => setIsOpen1((prev) => !prev)}>
				{isOpen1 ? '–' : '+'}
			</button>
			{isOpen1 && <MoviesList />}
		</div>
	);
}
