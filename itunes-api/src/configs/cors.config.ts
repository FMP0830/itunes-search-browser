const cors = require('cors');

module.exports = (app: any) => {
	app.use(
		cors({
			credentials: true,
			origin: [process.env.PUBLIC_DOMAIN]
		})
	);
};
