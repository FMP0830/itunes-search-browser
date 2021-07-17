import { makeStyles } from '@material-ui/styles';

const FooterStyles = makeStyles((theme) => ({
	footer: {
		marginTop: '3em',
		backgroundColor: '#eeeeee',
		color: '#003c8f',
		width: '100%'
	},
	text: {
		textDecoration: 'none',
		color: '#003c8f',
		fontSize: '1rem',
		margin: '0 auto'
	}
}));

export default FooterStyles;
