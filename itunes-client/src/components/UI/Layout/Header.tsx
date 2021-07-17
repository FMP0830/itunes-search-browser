import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import logo from './../../../assets/images/438px-ITunes_logo.svg.png';
import HeaderStyles from './Header.styles';

interface Props {
	window?: () => Window;
	children: React.ReactElement;
}

function ElevationScroll(props: Props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

export default function Header() {
	const classes = HeaderStyles();
	return (
		<>
			<ElevationScroll>
				<AppBar className={classes.appbar}>
					<Toolbar disableGutters>
						<Button
							className={classes.logoContainer}
							component={'a'}
							href='/'
							disableRipple>
							<img src={logo} alt='company logo' className={classes.logo} />
						</Button>
						<Typography variant='h6' className={classes.text}>
							iTunes Music Album Search Browser
						</Typography>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
			<Toolbar />
		</>
	);
}
