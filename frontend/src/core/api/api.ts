export const getHeaders = () => {
  const jwtToken = getJwtToken();
  return {
    'Content-Type': 'application/json',
    ...(jwtToken ? { 'Authorization': `Bearer ${jwtToken}` } : {}),
  };
}

export const getJwtToken = (): string | null => {
  return localStorage.getItem('token');
};


export const setJwtToken = (token: string): void => {
  localStorage.setItem('token', token);
}

export const removeJwtToken = (): void => {
  localStorage.removeItem('token');
}