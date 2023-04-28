import axios from 'axios';

const fipe = axios.create({
	baseURL: 'https://kenzie-kars.herokuapp.com',
	timeout: 5000,
});

export { fipe };
