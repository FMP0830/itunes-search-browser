import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
const app = express();

// Middleware config
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);

import searchRouter from './routes/Search.routes';
app.use('/api/search', searchRouter);

//  Catch 404 and respond with error message
app.use((req: Request, res: Response) => {
	return res.status(404).json({ message: 'Not found' });
});

export default app;
