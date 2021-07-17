import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import ButtonGroupStyles from './ButtonGroup.styles';

interface ButtonProps {
	sortData: (string: string) => void;
	filterSearch: string;
	setFilterSearch: (e: string) => void;
}

const ButtonBlock: React.FC<ButtonProps> = ({
	sortData,
	filterSearch,
	setFilterSearch
}) => {
	const classes = ButtonGroupStyles();

	return (
		<Grid container alignItems='center' justifyContent='center' spacing={3}>
			<Grid item>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={() => sortData('title')}>
					Sort by title
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={() => sortData('artist')}>
					Sort by artist
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={() => sortData('date')}>
					Sort by release date
				</Button>
			</Grid>
			<Grid item>
				<TextField
					id='filled-basic'
					label='Search by artist'
					variant='filled'
					value={filterSearch}
					onChange={(e) => setFilterSearch(e.target.value)}
					className={classes.input}
				/>
			</Grid>
		</Grid>
	);
};

export default ButtonBlock;
