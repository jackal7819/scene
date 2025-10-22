export default function Main({ children }: { children: React.ReactNode }) {
	return (
		<main className='container flex flex-col gap-10 p-10 mx-auto w-9/10 xl:flex-row'>
			{children}
		</main>
	);
}
