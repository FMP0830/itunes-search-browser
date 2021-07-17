import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

function setup() {
	return render(<App />);
}

describe('App', () => {
	test('Loads properly', () => {
		setup();
		//screen.debug();
	});

	test('Show buttons should change the state visibility', () => {
		const button = screen.getByRole('button', { name: /Show filters/i });
		screen.debug(button);
	});
});
