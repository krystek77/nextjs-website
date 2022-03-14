const dev = process.env.NODE_ENV === 'development' ? true : false;
export const server = dev ? 'http://localhost:3000' : 'http://www.mydomain.pl';
