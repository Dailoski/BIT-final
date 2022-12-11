// istraziti https://www.npmjs.com/package/axios

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });

const fetchData = (endpoint, callback) => {
    fetch(`http://localhost:3333/api/${endpoint}`)
        .then(res => res.json())
        .then(res => callback(res))
}

export default fetchData