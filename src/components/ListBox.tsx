import { useState } from 'react';

import MoviesList from './MoviesList';

export default function ListBox() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className='relative xl:w-1/2 rounded-xl bg-slate-700'>
			<button
				type='button'
				className='absolute flex items-center justify-center pt-1 text-4xl duration-500 rounded-full cursor-pointer size-14 right-10 top-10 bg-slate-800 hover:bg-slate-600'
				onClick={() => setIsOpen((isOpen) => !isOpen)}
			>
				{isOpen ? '–' : '+'}
			</button>
			{isOpen && <MoviesList />}
		</div>
	);
}
