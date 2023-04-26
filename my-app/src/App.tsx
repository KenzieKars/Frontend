import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';

import { RoutesMain } from './routes';
import { AdProvider } from './contexts/AdContext';
import { AuthProvider } from './contexts/UserContext';

function App() {
	return (
		<>
			<GlobalStyle />
			<AuthProvider>
				<AdProvider>
					<RoutesMain />
				</AdProvider>
			</AuthProvider>
		</>
	);
}

export default App;
