import { createTheme } from '@material-ui/core/styles';

export default createTheme({
	palette: {
		primary: {
			light: '#fafafa',
			main: '#00a6d6',
			dark: '#222222'
		},
		secondary: {
			light: '#fafafa',
			main: '#4d82cb',
			dark: '#222222',
			contrastText: '#fff'
		},
		custom: {
			contrastText: '#90caf9',
			light: '#4d82cb',
			main: '#1565c0',
			dark: '#003c8f'
		}
	}
});
