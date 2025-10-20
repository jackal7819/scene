import Main from './components/Main';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<div className='min-h-screen py-10 text-xl text-white bg-slate-800'>
			<Navbar />
			<Main />
		</div>
	);
}
