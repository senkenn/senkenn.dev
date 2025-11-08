// src/App.tsx

function App() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-900">
			<div className="flex flex-col items-center gap-8">
				<h1 className="text-5xl font-bold text-indigo-500">SENKEN</h1>
				<nav className="flex flex-col gap-4 min-w-[200px]">
					<a
						href="https://github.com/senkenn"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 border-2 border-indigo-500 rounded-lg text-indigo-500 text-xl font-medium transition-all hover:bg-indigo-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
					>
						GitHub
					</a>
					<a
						href="https://bsky.app/profile/senkenn.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 border-2 border-indigo-500 rounded-lg text-indigo-500 text-xl font-medium transition-all hover:bg-indigo-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
					>
						Bluesky
					</a>
					<a
						href="https://zenn.dev/senken"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 border-2 border-indigo-500 rounded-lg text-indigo-500 text-xl font-medium transition-all hover:bg-indigo-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
					>
						Zenn
					</a>
				</nav>
			</div>
		</div>
	);
}

export default App;
