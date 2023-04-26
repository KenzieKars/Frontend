import { Routes, Route } from 'react-router';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/Register';
import LoginPage from '../pages/Login';
import UserPage from '../pages/UserPage';
import PasswordPage from '../pages/PasswordPage';
import { AdPage } from '../pages/AdPage';
import ViewUserPage from '../pages/ViewUserPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';

export const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/user" element={<UserPage />} />
			<Route path="/password" element={<PasswordPage />} />
			<Route path="/reset-password" element={<ResetPasswordPage />} />
			<Route path="/adpage" element={<AdPage />} />
			<Route path="/user-view/:id" element={<ViewUserPage />} />
		</Routes>
	);
};
