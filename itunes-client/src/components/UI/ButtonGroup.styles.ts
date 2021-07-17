import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const ButtonGroupStyles = makeStyles((theme: Theme) =>
	createStyles({
		input: {
			fontSize: '1.5rem',
			marginBottom: '50px'
		},
		button: {
			height: '56px',
			color: '#FAFAFA',
			backgroundColor: theme.palette.secondary.main,
			marginBottom: '50px'
		}
	})
);

export default ButtonGroupStyles;
