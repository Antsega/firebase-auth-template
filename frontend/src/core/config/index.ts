
const isRunningInDocker = process.env.REACT_APP_DOCKER === 'true';

// console.log('isRunningInDocker', isRunningInDocker);

export const API_URL = isRunningInDocker ? '/api' : process.env.REACT_APP_API_URL;

