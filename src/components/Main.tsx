import ListBox from './ListBox';
import WatchedBox from './WatchedBox';

export default function Main() {
	return (
		<main className='container flex flex-col gap-10 p-10 mx-auto w-9/10 xl:flex-row'>
			<ListBox />
			<WatchedBox />
		</main>
	);
}
