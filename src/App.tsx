import type React from "react";
import { useState } from "react";

const App: React.FC = () => {
	const [count, setCount] = useState<number>(0);

	const handleClick = (): void => {
		setCount((prev) => prev + 1);
	};

	return (
		<main>
			<h1>React App</h1>
			<p>
				A simple React project built with TypeScript, React Router, and Biome.
				<br />
				Configured for easy deployment to GitHub Pages.
			</p>
			<button type="button" onClick={handleClick}>
				Clicked {count} times
			</button>
		</main>
	);
};

export default App;
