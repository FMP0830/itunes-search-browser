# iTunes API Music Client Album Searcher


![](https://res.cloudinary.com/dnrpubnmn/image/upload/c_scale,w_600/v1626603061/Landing1_fmntsd.png)


A React frontend cliect Nodejs and Express server backend api with routes that allow users to search the [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html) for music albums based on user input, filtering the search text to look up the API for music artists.

Once the user gets the data in the frontend, there is an option to show extra filtering buttons to sort the results by artist, album title or release date as well as a second searchbar to filter the results in real time through text searching



## Features

- Developed in React with `create-react-app` template

- Developed in TypeScript

- Styling done with Material UI

  

## Installation and usage



After cloning the repository, run `npm install` or `yarn install` in the subfolder to get the necessary dependencies in the root directory.

The frontend codebase allows for customization through a Theme file in the Styles subfolder. It makes use of the [Material UI library](https://material-ui.com/), so detailed customization should be considered according to their specific [documentation](https://material-ui.com/customization/default-theme/). The frontend client will run by default on PORT 3000



#### Running the development client

Run the command ` npm start` or `yarn start` to launch the development client and start sending requests to the backend. 

Please note that you should also launch the development backend server to get search restults





![](https://res.cloudinary.com/dnrpubnmn/image/upload/c_scale,w_600/v1626603061/Landing2_w7t9rk.png)

## Folder structure and overview



```
.
├── node_modules		# holds packages and dependencies
|
├── public				# Required files for running code on browser
|	├── favicon.ico		# Favicon		
│   └── index.html		# Root file for showing content on browser
|
├── src		# Main folder of project 
|	|
│   ├── __test__				# Folder for testing files
│   │   └── App.test.tsx		# Vanilla test for running the app
|	|
│   ├── assets					# Folder for static files
|	|	├── fonts
│   │   └── images    
|	|
│   ├── components				# Folder containing components				
|	|	├── Albums				# Album UI related components
|	|	|	├── AlbumCard.tsx	# Contains card element for every element
|	|	|	├── AlbumList.tsx	# Contains the searchbar, buttongroup and maps search results into Album Cards
|	|	|	└── Searchbar.tsx	# Holds the search input and related buttons
│   │   └── UI					# Generic UI related components
|	|		├── Layout
|	|		|	├── Footer.tsx
|	|		|	├── Header.tsx
|	|		|	└── Layout.tsx	# Holds Header, Footer and content for Layout
|	|		|
|	|		└── ButtonGroup.tsx	# Holds the search filter buttons group
|	|
│   ├── interfaces			# Contains TypeScript interface files
|	|	├── Album.interface.ts
|	|	└── Search.interface.ts
|	|
│   ├── services			# Axios logic to call the API through Singleton service
|	|	└── Album.service.ts
|	|
│   ├── styles				# Material UI design Theme customization
|	|	├── expand-Theme.ts
|	|	└── Theme.ts
|	|
│   ├── utils				# Helper functions and global variables
|	|
│   ├── App.tsx			# Main component rendering React components
│   └── Index.tsx		# Launches the React App into index.html DOM
|
├── .gitignore			# config for git and github tracking    
├── tsconfig.json		# TypeScript config    
├── package.json		# Info & dependencies    
├── package.lock.json	# Info & dependencies    
└── README.md			# Info & documentation
```



## Endpoints

| HTTP Method | Endpoint | Description       |
| ----------- | -------- | ----------------- |
| GET         | "/"      | Renders main page |



## Packages & dependencies used

### 

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



## Contributing



### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/FMP0830/itunes-search-browser/issues) to report any bugs or file feature requests



### Developing

PRs are welcome. To begin developing, do this:

```bash
$ git clone https://github.com/FMP0830/itunes-search-browser.git
$ cd itunes-search-browser/itunes-search-browser-client
$ npm start
or
$ yarn start
$ go to http://localhost:3000/
```



## License

MIT License

[Copyright (c) 2021](https://github.com/FMP0830/itunes-search-browser/blob/main/itunes-api/License) Fede Muniente
