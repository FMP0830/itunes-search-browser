
![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ITunes_logo.svg/239px-ITunes_logo.svg.png)



# iTunes API Music Album Searcher



A Nodejs and Express server with routes that allow users to search the [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html) for music albums based on user input, filtering the search text to look up the API for music artists.



## Features

- Developed in NodeJS, Express
- Developed in TypeScript
- Use of Jest and supertest for unit testing



## Installation and usage

After cloning the repositori, run `npm install` or `yarn install` to get the necessary dependencies in the root of the project.

The file allows the user to use a `.env` file for the customization of global variables such as the PORT in which the server will run and the URL for the iTunes API. In the case the user does not have a `.env` file, the project is set to run by default on PORT 5000 and a preset query route for the API.



### Running the test server

Run the command `npm run test` or `yarn run test` to perform the unit tests to check on the correct behavior of the search routes



### Running the development server

Run the command ` npm run dev` or `yarn run dev` to launch the development server and start listening from request into it.



## Folder structure and overview

```
.
├── build		# Bundled TS code conversion
│   ├── routes		# Routing logic
|	├── index.js		# Middleware logic & server setup		
│   └── server.js		# Server Launching
|
├── src		# Main folder of project 
|	|
│   ├── configs
│   │   ├── cors.config.ts		# CORS configuration for requests
│   │   └── middleware.config.ts	# Body-parser, Morgan & PATH
|	|
│   ├── routes
│   │   └── Search.routes.ts	# Controller for routing searches    
|	|
│   ├── tests
│   │   └── Search.routes.test.ts	# Testing for search controller    
|	|
│   ├── app.ts			# Middleware logic & server setup
│   └── server.ts		# Launches the server
|
├── jest.config.js		# config for testing    
├── tsconfig.json		# TypeScript config    
├── package.json		# Info & dependencies    
├── package.lock.json	# Info & dependencies    
└── README.md			# Info & documentation
```



## Endpoints

HTTP Method | Endpoint | Req. Body | Description
------------ | ------- | ------ | -------------
POST | "/api/search" | { searchtext: string } | Search the API based on req.body 



## Packages & dependencies used



| Package     | Version | Link                                              |
| ----------- | ------- | ------------------------------------------------- |
| Axios       | 0.21.1  | [Link](https://www.npmjs.com/package/axios)       |
| Body-Parser | 1.19.0  | [Link](https://www.npmjs.com/package/body-parser) |
| Cors        | 2.8.5   | [Link](https://www.npmjs.com/package/cors)        |
| Dotenv      | 10.0.0  | [Link](https://www.npmjs.com/package/dotenv)      |
| Express     | 4.17.1  | [Link](https://www.npmjs.com/package/express)     |
| Morgan      | 1.10.0  | [Link](https://www.npmjs.com/package/morgan)      |
| Jest        | 26.6.1  | [Link](https://www.npmjs.com/package/jest)        |
| Supertest   | 5.0.0   | [Link](https://www.npmjs.com/package/supertest)   |
| TypeScript  | 4.0.3   | [Link](https://www.npmjs.com/package/typescript)  |



## Contributing



### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/FMP0830/itunes-search-browser/issues) to report any bugs or file feature requests



### Developing

PRs are welcome. To begin developing, do this:

```bash
$ git clone https://github.com/FMP0830/itunes-search-browser.git
$ cd itunes-search-browser/itunes-search-browser/api
$ npm run dev
or
$ yarn run dev
```



## License

MIT License

[Copyright (c) 2021](https://github.com/FMP0830/itunes-search-browser/blob/main/itunes-api/License) Fede Muniente

