import ListBox from './ListBox';
import WatchedBox from './WatchedBox';

export default function Main() {
	return (
		<main className='container flex flex-grow p-10 mx-auto w-9/10'>
			<ListBox />
			<WatchedBox />
		</main>
	);
}
