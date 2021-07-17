import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/styles';
import Theme from './styles/Theme';

import Layout from './components/UI/Layout/Layout';
import AlbumList from './components/Albums/AlbumList';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={Theme}>
			<Layout>
				<AlbumList />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
