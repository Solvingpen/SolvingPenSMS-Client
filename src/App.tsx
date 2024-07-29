import { HashRouter, Routes, Route } from "react-router-dom";
import NextTopLoader from "nextjs-toploader";
import HomePage from "./pages";
import NotFoundPage from "./pages/404";

const App = () => {
	return (
		<HashRouter>
			<NextTopLoader color="blue" showSpinner={false} />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</HashRouter>
	);
};

export default App;