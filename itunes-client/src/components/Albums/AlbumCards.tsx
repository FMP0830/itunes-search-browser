import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Marquee from 'react-fast-marquee';

import CardStyles from './AlbumCard.styles';

import IAlbum from '../../interfaces/Album.interface';

interface IProps {
	album: IAlbum;
}

export default function RecipeReviewCard({
	album: {
		artistName,
		collectionName,
		artworkUrl100,
		trackCount,
		releaseDate,
		collectionPrice,
		primaryGenreName,
		copyright,
		collectionViewUrl
	}
}: IProps) {
	const classes = CardStyles();
	const [expanded, setExpanded] = React.useState(false);

	const formatDate = new Date(releaseDate).toLocaleDateString('en-US');
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<Marquee pauseOnHover speed={80} gradientWidth={20} delay={5} loop={5}>
				<CardHeader title={collectionName} />
			</Marquee>
			<CardMedia
				className={classes.media}
				image={artworkUrl100}
				title={collectionName}
				component='img'
			/>
			<CardContent>
				<Typography variant='body1' color='primary' component='h2'>
					{collectionName}
				</Typography>
				<Typography className={classes.artist} variant='body1' component='h3'>
					<b>Artist:</b> {artistName}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Typography variant='body2' color='textSecondary' component='p'>
					Release date: {formatDate}
				</Typography>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label='show more'>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Typography variant='body1' component='h2'>
						Extra info:
					</Typography>
					<Typography paragraph className={classes.extrainfo}>
						<b>Track count:</b> {trackCount} tracks
					</Typography>
					<Typography paragraph className={classes.extrainfo}>
						<b>Price:</b> {collectionPrice}$
					</Typography>
					<Typography paragraph className={classes.extrainfo}>
						<b>Genre:</b> {primaryGenreName}
					</Typography>
					<Typography paragraph className={classes.extrainfo}>
						<b>Copyright by:</b> {copyright}
					</Typography>
					<Typography paragraph className={classes.extrainfo}>
						<b>
							<a
								href={collectionViewUrl}
								rel='noopener noreferrer'
								target='_blank'>
								Apple music link
							</a>
						</b>
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
