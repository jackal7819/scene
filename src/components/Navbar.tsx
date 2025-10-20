import Logo from './Logo';
import Results from './Results';
import Search from './Search';

export default function Navbar() {
	return (
		<nav className='container flex flex-wrap items-center justify-between gap-10 p-10 mx-auto bg-indigo-500 lg:gap-20 w-9/10 rounded-xl'>
			<Logo />
			<Search />
			<Results />
		</nav>
	);
}
