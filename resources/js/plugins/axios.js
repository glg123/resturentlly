import axios from 'axios'

const axiosIns = axios.create({
// You can add your headers here
// ================================
  baseURL: 'http://restaurantlly.com/api/',
  //baseURL: 'http://rest.local.com/api/',

// timeout: 1000,
// headers: {'X-Custom-Header': 'foobar'}
})

export default axiosIns
