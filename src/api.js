const API_BASE =
  process.env.NODE_ENV === 'production' ? 'https://backends.kesug.com/' : 'http://localhost:3000'

export default API_BASE
