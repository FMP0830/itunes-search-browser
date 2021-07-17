import supertest from 'supertest';

import app from './../app';

describe('test Search.route', () => {
	it('POST /search with valid input', async (done) => {
		await supertest(app)
			.post('/api/search')
			.send({ searchtext: 'Jack Johnson' })
			.then(async (response) => {
				expect(response.status).toBe(200);
				expect(response.body.results.length).toBe(50);
			});

		done();
	});
});

describe('test Search.route', () => {
	it('POST /search with valid input and no results', async (done) => {
		await supertest(app)
			.post('/api/search')
			.send({ searchtext: 'axaibweib iwb iw on ' })
			.then(async (response) => {
				expect(response.status).toBe(202);
				expect(response.body).toBeTruthy();
				expect(response.body.message).toBe('No results found for this search');
			});

		done();
	});
});

describe('test Search.route', () => {
	it('POST /search with invalid input', async (done) => {
		await supertest(app)
			.post('/api/search')
			.send({ wrongvalue: '' })
			.then(async (response) => {
				expect(response.status).toBe(404);
				expect(response.body.message).toBe(
					'Please provide something to search'
				);
			});

		done();
	});
});

describe('test Search.route', () => {
	it('POST /search with empty input', async (done) => {
		await supertest(app)
			.post('/api/search')
			.send({ searchtext: '' })
			.then(async (response) => {
				expect(response.status).toBe(404);
				expect(response.body.message).toBe(
					'Please provide something to search'
				);
			});

		done();
	});
});
