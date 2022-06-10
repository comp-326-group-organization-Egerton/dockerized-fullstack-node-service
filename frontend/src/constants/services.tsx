import { BASE_URL } from '.';
import axios from 'axios';

export const publicAxios = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});