import { useState } from 'react';

export default function Navbar() {
	const [query, setQuery] = useState('');

	return (
		<nav className='container flex flex-wrap items-center justify-between gap-10 p-10 mx-auto bg-indigo-500 lg:gap-20 w-9/10 rounded-xl'>
			<div className='flex items-center gap-10'>
				<span role='img' title='logo' className='text-5xl'>
					🎬
				</span>
				<h1 className='text-3xl uppercase'>Scene</h1>
			</div>
			<input
				type='text'
				placeholder='Search movies...'
				value={query}
				onChange={(event) => setQuery(event.target.value)}
				className='flex-1 px-5 py-3 duration-500 bg-indigo-400 border-4 border-indigo-400 outline-none rounded-xl hover:border-indigo-300 focus:border-indigo-300 focus:outline-none'
			/>
			<p>
				Found <strong>5</strong> results
			</p>
		</nav>
	);
}
