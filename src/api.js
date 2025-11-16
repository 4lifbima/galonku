const API_BASE =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost/backend' // jika pakai XAMPP di port 80
    : // ? 'http://localhost:8000'  // jika pakai php -S
      'https://backends.kesug.com'

export default API_BASE
