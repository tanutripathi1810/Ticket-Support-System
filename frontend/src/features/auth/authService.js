import axios from 'axios'
const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  console.log('from register', response)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
  console.log('from register', response)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Logout user
const logout = () => localStorage.removeItem('user')

export const getUserProfile = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await axios.get('/api/users/me', config);
  return res.data;
};

export const completeIntro = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await axios.put('/api/users/complete-intro', {}, config);
  return res.data;
};
const authService = {
  register,
  logout,
  login,
}

export default authService
