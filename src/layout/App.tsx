import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Logo from 'components/Logo/Logo';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';




type Props = {}

const App = (props: Props) => {
	return (
		<>
			<StyledEngineProvider injectFirst>
			<CssBaseline />
			<Header />
			<Main />
			<Footer />
			</StyledEngineProvider>
		</>
	)
}

export default App