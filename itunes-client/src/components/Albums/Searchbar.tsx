import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchBarStyles from './Searchbar.styles';

interface SearchbarProps {
	setSearch(value: string): void;
	getData(): void;
}

const Searchbar: React.FC<SearchbarProps> = ({ setSearch, getData }) => {
	const classes = SearchBarStyles();
	const [input, setInput] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
		setSearch(e.target.value);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		getData();
		setInput('');
		setSearch('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<Grid container alignItems='center' spacing={3}>
				<Grid item>
					<TextField
						id='filled-basic'
						label='Search by artist'
						variant='filled'
						value={input}
						onChange={handleChange}
						className={classes.input}
					/>
				</Grid>
				<Grid item>
					<Button
						variant='contained'
						color='primary'
						type='submit'
						className={classes.button}>
						Search
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default Searchbar;
