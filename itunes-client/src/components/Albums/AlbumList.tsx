import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

import AlbumListStyles from './AlbumList.styles';

import AlbumService from '../../services/Album.service';

import IAlbum from './../../interfaces/Album.interface';
import AlbumCards from './AlbumCards';
import Searchbar from './Searchbar';
import ButtonBlock from '../UI/ButtonGroup';

export default function AlbumList() {
	const classes = AlbumListStyles();

	//Service to call the backend for data
	const albumService = new AlbumService();

	//States for app management
	const [albums, setAlbums] = useState<IAlbum[] | []>([]);
	const [error, setError] = useState<string | null>(null);
	const [searchtext, setSearchtext] = useState<string>('');
	const [filterSearch, setFilterSearch] = useState<string>('');
	const [filteredAlbums, setFilteredAlbums] = useState<IAlbum[] | []>([]);
	const [showButtons, setShowButtons] = useState<boolean>(false);

	//Get data from the backend
	const getData = async () => {
		try {
			const response = await albumService.getAlbums({
				searchtext: searchtext
			});

			const { message, results } = response.data;
			if (message) setError(response.data.message);
			if (results) {
				setAlbums(response.data.results);
				setFilteredAlbums(response.data.results);
				setError(null);
			}
		} catch (error) {
			setError(error.message);
		}
	};

	//Clear all searchs results and empty main page
	const clearData = () => {
		setAlbums([]);
		setFilteredAlbums([]);
		setSearchtext('');
		setShowButtons(false);
	};

	//Order the data according to different criteria and update the rendered view
	const sortData = (input: string) => {
		const sortedAlbums: IAlbum[] = [...filteredAlbums];

		switch (input) {
			case 'title':
				sortedAlbums.sort((a, b) =>
					a.collectionName.localeCompare(b.collectionName)
				);
				break;
			case 'artist':
				sortedAlbums.sort((a, b) => a.artistName.localeCompare(b.artistName));
				break;
			case 'date':
				sortedAlbums.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
				break;
			default:
				break;
		}

		setFilteredAlbums(sortedAlbums);
	};

	useEffect(() => {
		const search = albums.filter((album) =>
			album.collectionName.toLowerCase().includes(filterSearch.toLowerCase())
		);
		setFilteredAlbums(search);
	}, [filterSearch]);

	return (
		<div>
			<Container maxWidth='md'>
				<Grid container direction='column' alignItems='center' justifyContent='center' spacing={4}>
					<Grid item>
						<Grid
							container
							justifyContent='space-between'
							alignItems='center'
							spacing={3}>
							<Grid item>
								<Searchbar setSearch={setSearchtext} getData={getData} />
							</Grid>
							<Grid item>
								<Button
									variant='contained'
									color='primary'
									onClick={clearData}
									className={classes.button}>
									Clear Results
								</Button>
							</Grid>
							<Grid item>
								<Button
									variant='contained'
									color='primary'
									className={classes.button2}
									onClick={() => setShowButtons(!showButtons)}>
									Show Filters
								</Button>
							</Grid>
						</Grid>
					</Grid>
					{albums.length > 0 && (
						<Grid item>
							<Typography paragraph className={classes.showresults}>
								Showing search results , {filteredAlbums.length} albums found
							</Typography>
						</Grid>
					)}
					{error && (
						<Grid item>
							<Typography paragraph className={classes.showresults}>
								{error}
							</Typography>
						</Grid>
					)}
					{showButtons && (
						<Grid item>
							<ButtonBlock
								sortData={sortData}
								filterSearch={filterSearch}
								setFilterSearch={setFilterSearch}
							/>
						</Grid>
					)}
				</Grid>
			</Container>

			<div className={classes.root}>
				<Grid container spacing={2}>
					{albums &&
						filteredAlbums.map((album) => (
							<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
								<AlbumCards key={album.collectionId} album={album} />
							</Grid>
						))}
				</Grid>
			</div>
		</div>
	);
}
