import { Routes, Route } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/Login';
import RegisterPage from '../pages/Register';
import PasswordPage from '../pages/PasswordPage';
import { UserPage } from '../pages/UserPage';
import { ViewUserPage } from '../pages/ViewUserPage';
import { AdPage } from '../pages/AdPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';

export const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/user" element={<UserPage />} />
			<Route path="/password" element={<PasswordPage />} />
			<Route path="/resetPassword" element={<ResetPasswordPage />} />
			<Route path="/adpage" element={<AdPage />} />
			<Route path="/user-view/:id" element={<ViewUserPage />} />
		</Routes>
	);
};
