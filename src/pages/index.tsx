import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<main className="min-h-screen flex flex-col p-4 text-center gap-4 items-center justify-center">
			<h1 className="text-6xl">Home Page</h1>
			<p className="text-lg">
				Nothing to show here. Check out other pages
			</p>
			<div className="flex gap-4 text-blue-500">
				<Link className="hover:underline" to={"/sign-up"}>
					Sign up
				</Link>
				<Link className="hover:underline" to={"/sign-in"}>
					Sign in
				</Link>
			</div>
		</main>
	);
};

export default HomePage;
