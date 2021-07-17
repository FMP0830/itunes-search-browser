import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const SearchbarStyles = makeStyles((theme: Theme) =>
	createStyles({
		input: {
			fontSize: '1.5rem'
		},
		button: {
			height: '56px',
			width: '141px',
			color: '#FAFAFA'
		}
	})
);

export default SearchbarStyles;
