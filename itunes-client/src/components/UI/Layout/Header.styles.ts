import { makeStyles } from '@material-ui/styles';

const HeaderStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor: '#eeeeee',
		color: '#003c8f'
	},
	text: {
		margin: '0 auto'
	},
	toolbarMargin: {
		marginBottom: '4em'
	},
	logo: {
		height: '4em'
	},
	logoContainer: {
		'padding': '0',
		'&:hover': {
			backgroundColor: 'transparent'
		}
	}
}));

export default HeaderStyles;
