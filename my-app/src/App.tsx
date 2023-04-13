import HomePage from './pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { AdPage } from './pages/AdPage';

function App() {
	return (
		<>
			<GlobalStyle />
			{/* <HomePage /> */}
			<AdPage />
		</>
	);
}

export default App;
