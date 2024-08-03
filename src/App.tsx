import { HashRouter, Routes, Route } from "react-router-dom";
import NextTopLoader from "nextjs-toploader";
import HomePage from "./pages";
import NotFoundPage from "./pages/404";
<<<<<<< HEAD
import Signin from './pages/signin'
import ForgotPassword from './pages/fogotPassword'

=======
import SignUpPage from "./pages/sign-up/index";
>>>>>>> 097803971eefca905a8ac4433133ef5a9e7574f4

const App = () => {
	return (
		<HashRouter>
			<NextTopLoader color="blue" showSpinner={false} />
			<Routes>
				<Route index element={<HomePage />} />
<<<<<<< HEAD
				<Route path="/" element={<HomePage />} />
				<Route path="/sign-in" element={<Signin/>} />
				<Route path="/forgot-password" element={<ForgotPassword/>} />
=======
				<Route path="/sign-up" element={<SignUpPage />} />
>>>>>>> 097803971eefca905a8ac4433133ef5a9e7574f4
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
