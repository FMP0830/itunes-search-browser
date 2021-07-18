# iTunes API Music Album Searcher


![](https://res.cloudinary.com/dnrpubnmn/image/upload/c_scale,w_600/v1626603061/Landing1_fmntsd.png)


A React frontend client Nodejs and Express server backend api with routes that allow users to search the [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html) for music albums based on user input, filtering the search text to look up the API for music artists.

Once the user gets the data in the frontend, there is an option to show extra filtering buttons to sort the results by artist, album title or release date as well as a second searchbar to filter the results in real time through text searching.



## Features

- Frontend
  - Developed in React with `create-react-app` template
  - Developed in TypeScript
- Backend
  - Developed in NodeJS with ExpressJS
  - Developed in TypeScript
  - Use of Jest and supertest for unit testing



## Installation and usage



After cloning the repositories, run `npm install` or `yarn install` in both subfolders to get the necessary dependencies in the root of every directory.

The frontend codebase allows for customization through a Theme file in the Styles subfolder. It makes use of the [Material UI library](https://material-ui.com/), so detailed customization should be considered according to their specific [documentation](https://material-ui.com/customization/default-theme/). The frontend client will run by default on PORT 3000.

The backed codebase allows the user to use a `.env` file for the customization of global variables such as the PORT in which the server will run and the URL for the iTunes API. In the case the user does not have a `.env` file, the project is set to run by default on PORT 5000 and a preset query route for the API.



### Frontend



#### Running the development client

Run the command ` npm start` or `yarn start` to launch the development client and start sending requests to the backend. 

Please note that you should also launch the development backend server to get search results.




### Backend



#### Running the test server

Run the command `npm run test` or `yarn run test` to perform the unit tests to check on the correct behavior of the search routes.



#### Running the development server

Run the command ` npm run dev` or `yarn run dev` to launch the development server and start listening for requests into it.



![](https://res.cloudinary.com/dnrpubnmn/image/upload/c_scale,w_600/v1626603061/Landing2_w7t9rk.png)

## Folder structure and overview



### Frontend

```
.
├── node_modules		# holds packages and dependencies
|
├── public				# Required files for running code on browser
|	  ├── favicon.ico		# Favicon		
│   └── index.html		# Root file for showing content on browser
|
├── src		# Main folder of project 
|	  |
│   ├── __test__				# Folder for testing files
│   │   └── App.test.tsx		# Vanilla test for running the app
|	  |
│   ├── assets					# Folder for static files
|	  |	├── fonts
│   │   └── images    
|	  |
│   ├── components				# Folder containing components				
|	  |	├── Albums				# Album UI related components
|	  |	|	├── AlbumCard.tsx	# Contains card element for every element
|	  |	|	├── AlbumList.tsx	# Contains the searchbar, buttongroup and maps search results into Album Cards
|	  |	|	└── Searchbar.tsx	# Holds the search input and related buttons
│   |
|   │ └── UI					# Generic UI related components
|	  |		├── Layout
|	  |	  |	├── Footer.tsx
|	  |	  |	├── Header.tsx
|	  |	  |	└── Layout.tsx	# Holds Header, Footer and content for Layout
|	  |		|
|	  |		└── ButtonGroup.tsx	# Holds the search filter buttons group
| 	|
│   ├── interfaces			# Contains TypeScript interface files
|	  |	├── Album.interface.ts
|	  |	└── Search.interface.ts
|	  |
│   ├── services			# Axios logic to call the API through Singleton service
|	  |	└── Album.service.ts
|	  |
│   ├── styles				# Material UI design Theme customization
|	  |	├── expand-Theme.ts
|	  |	└── Theme.ts
|	  |
│   ├── utils				# Helper functions and global variables
|	  |
│   ├── App.tsx			# Main component rendering React components
│   └── Index.tsx		# Launches the React App into index.html DOM
|
├── .gitignore			# config for git and github tracking    
├── tsconfig.json		# TypeScript config    
├── package.json		# Info & dependencies    
├── package.lock.json	# Info & dependencies    
└── README.md			# Info & documentation
```



### Backend

```
.
├── build		# Bundled TS code conversion
│   ├── routes		# Routing logic
| 	├── index.js		# Middleware logic & server setup		
│   └── server.js		# Server Launching
|
├── src		# Main folder of project 
|	  |
│   ├── configs
│   │   ├── cors.config.ts		# CORS configuration for requests
│   │   └── middleware.config.ts	# Body-parser, Morgan & PATH
|	  |
│   ├── routes
│   │   └── Search.routes.ts	# Controller for routing searches    
|	  |
│   ├── tests
│   │   └── Search.routes.test.ts	# Testing for search controller    
|	  |
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



### Frontend

HTTP Method | Endpoint | Description
------------ | ------- | -------------
GET | "/" | Renders main page 

### Backend

HTTP Method | Endpoint | Req. Body | Description
------------ | ------- | ------ | -------------
POST | "/api/search" | { searchtext: string } | Search the API based on req.body 



## Packages & dependencies used

### Frontend

| Package             | Version | Link                                                      |
| ------------------- | ------- | --------------------------------------------------------- |
| @material-ui/core   | 4.11.4  | [Link](https://www.npmjs.com/package/@material-ui/core)   |
| @material-ui/icons  | 4.11.2  | [Link](https://www.npmjs.com/package/@material-ui/icons)  |
| @material-ui/styles | 4.11.4  | [Link](https://www.npmjs.com/package/@material-ui/styles) |
| Axios               | 0.21.1  | [Link](https://www.npmjs.com/package/axios)               |
| React               | 17.0.2  | [Link](https://www.npmjs.com/package/react)               |
| React-dom           | 17.0.2  | [Link](https://www.npmjs.com/package/react-dom)           |
| React-fast-marquee  | 1.2.1   | [Link](https://www.npmjs.com/package/react-fast-marquee)  |
| React-scripts       | 4.0.3   | [Link](https://www.npmjs.com/package/react-scripts)       |
| TypeScript          | 4.1.2   | [Link](https://www.npmjs.com/package/typescript)          |


### Backend

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

Please use the [issue tracker](https://github.com/FMP0830/itunes-search-browser/issues) to report any bugs or file feature requests.



### Developing

PRs are welcome. To begin developing, do this:

```bash
$ git clone https://github.com/FMP0830/itunes-search-browser.git
$ cd itunes-search-browser/itunes-search-browser-client
$ npm start
or
$ yarn start
$ cd itunes-search-browser/itunes-search-browser-api
$ npm run dev
or
$ yarn run dev

$ go to http://localhost:3000/
```



## License

MIT License

[Copyright (c) 2021](https://github.com/FMP0830/itunes-search-browser/blob/main/itunes-api/License) Fede Muniente

