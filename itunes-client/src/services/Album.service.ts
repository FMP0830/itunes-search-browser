import axios, { AxiosInstance } from 'axios';
import ISearch from './../interfaces/Search.interface'


export default class AlbumService {
	readonly instance: AxiosInstance;

	constructor() {
		this.instance = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/`,
			withCredentials: true
		});
	}

	getAlbums = (data: ISearch) => this.instance.post('/search', data);
}
