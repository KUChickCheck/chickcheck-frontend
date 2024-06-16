import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  login(credentials) {
    return apiClient.post('/api/auth/login', credentials);
  },
  logout() {
    localStorage.removeItem('token');
  },
  get(resource, token) {
    return apiClient.get(resource, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  post(resource, data, token) {
    return apiClient.post(resource, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

};
