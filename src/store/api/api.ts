import axios from 'axios';

const baseUrl = process.env.API_BASE_URL || "http://localhost:5000";

if(localStorage.getItem('auth_token') ) {
	axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('auth_token')}`;
}
else {
	axios.defaults.headers.common.Authorization = '';
}

export default axios.create({
  baseURL: baseUrl,
})
