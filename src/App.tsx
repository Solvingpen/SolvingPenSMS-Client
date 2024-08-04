import { HashRouter, Routes, Route } from "react-router-dom";
import NextTopLoader from "nextjs-toploader";
import HomePage from "./pages";
import NotFoundPage from "./pages/404";
import Signin from "./pages/sign-in/index";
import ForgotPassword from "./pages/forgot-password/index";
import SignUpPage from "./pages/sign-up/index";

const App = () => {
  return (
    <HashRouter>
      <NextTopLoader color="blue" showSpinner={false} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
