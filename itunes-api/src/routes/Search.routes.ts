import { Request, Response, Router } from 'express';

const searchRouter = Router();
const axios = require('axios');

searchRouter.post('/', async (req: Request, res: Response): Promise<void> => {
	try {
		//Get data from frontend input
		const { searchtext } = req.body;

		//Validate the input data
		if (!searchtext || searchtext === '') {
			res.status(202).json({
				message: 'Please provide something to search'
			});
			return;
		}

		//Use axios to fetch data and keep results
		const info = await axios.get(
			`${process.env.ITUNES_URL}term=${searchtext}&entity=album&attribute=allArtistTerm`
		);

		const { results, resultCount } = info.data;

		//TO-DO Eliminate duplicate entries by title

		//If there is data, return it, otherwise send an error message
		if (resultCount > 0) {
			res.status(200).json({ results });
		} else {
			res.status(202).json({
				message: 'No results found for this search'
			});
		}
	} catch (error) {
		//If there is an error in the try block, send message to user
		res.status(500).json({ message: error.message });
	}
});

export default searchRouter;
