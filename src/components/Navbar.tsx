import Search from './Search';

export default function Navbar() {
	return (
		<nav className='container flex flex-wrap items-center justify-between gap-10 p-10 mx-auto bg-indigo-500 lg:gap-20 w-9/10 rounded-xl'>
			<div className='flex items-center gap-10'>
				<span role='img' title='logo' className='text-5xl'>
					🎬
				</span>
				<h1 className='text-3xl uppercase'>Scene</h1>
			</div>
			<Search />
			<p>
				Found <strong>5</strong> results
			</p>
		</nav>
	);
}
