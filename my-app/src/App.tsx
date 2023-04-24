import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';

import { RoutesMain } from './routes';
import { AdProvider } from './contexts/AdContext';

function App() {
	return (
		<>
			<GlobalStyle />
			<AdProvider>
				<RoutesMain />
			</AdProvider>
		</>
	);
}

export default App;
