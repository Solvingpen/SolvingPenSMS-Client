import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<main className="min-h-screen flex flex-col p-4 text-center gap-4 items-center justify-center">
			<h1 className="text-6xl text-red-600">404 Error</h1>
			<p className="text-lg">Sorry, we couldn't the page you requested</p>
			<p className="flex gap-4 text-blue-500">
				<Link className="hover:underline" to={"/"}>
					Go back to <b>Home page</b>
				</Link>
			</p>
		</main>
	);
};

export default NotFoundPage;
