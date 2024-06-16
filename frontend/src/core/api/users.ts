import { API_URL } from '../config/index';


const getJwtToken = (): string | null => {
  return localStorage.getItem('token');
};


const getHeaders = (): HeadersInit => {
  const jwtToken = getJwtToken();
  return {
    'Content-Type': 'application/json',
    ...(jwtToken ? { 'Authorization': `Bearer ${jwtToken}` } : {}),
  };
};

