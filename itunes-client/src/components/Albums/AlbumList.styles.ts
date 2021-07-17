import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const AlbumListStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			width: '100vw'
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary
		},
		showresults: {
			fontSize: '1.8rem',
			color: '#222222'
		},
		button: {
			margin: '0 auto',
			color: '#FAFAFA',
			height: '56px',
			width: '141px'
		},
		button2: {
			margin: '0 auto',
			color: '#FAFAFA',
			height: '56px',
			width: '141px',
			backgroundColor: '#003c8f'
		}
	})
);

export default AlbumListStyles;
