import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FooterStyles from './Footer.styles';

export default function Footer() {
	const classes = FooterStyles();
	return (
		<footer className={classes.footer}>
			<Toolbar>
				<Typography variant='h6' className={classes.text}>
					Developed by Fede Muniente.{' '}
					<a className={classes.text} href='https://www.github.com/fmp0830'>
						Check it out in GitHub!
					</a>
				</Typography>
			</Toolbar>
		</footer>
	);
}
