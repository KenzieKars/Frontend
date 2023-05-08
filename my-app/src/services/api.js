import axios from 'axios';

const api = axios.create({
	baseURL: 'https://kenzie-kars-sifj.onrender.com',
	timeout: 5000,
});

export { api };
