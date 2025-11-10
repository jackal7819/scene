interface SearchProps {
	query: string;
	setQuery: (query: string) => void;
}

export default function Search({ query, setQuery }: SearchProps) {
	return (
		<input
			type='text'
			placeholder='Search movies...'
			value={query}
			onChange={(event) => setQuery(event.target.value)}
			className='flex-1 px-5 py-3 duration-500 bg-indigo-400 border-4 border-indigo-400 outline-none rounded-xl hover:border-indigo-300 focus:border-indigo-300 focus:outline-none'
		/>
	);
}
