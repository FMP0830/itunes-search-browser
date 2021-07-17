import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const CardStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345
		},
		media: {
			width: '200px',
			margin: '0 auto'
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest
			})
		},
		expandOpen: {
			transform: 'rotate(180deg)'
		},
		artist: {
			marginTop: '15px'
		},
		extrainfo: {
			marginTop: '15px'
		}
	})
);

export default CardStyles;
