// state/services/product.servics.js

import axios from 'axios'
// /delayed - server response between 3 to 8 second delay
const API_ENDPOINT = 'http://localhost:7070/delayed'
// no delay
//const API_ENDPOINT = 'http://localhost:7070'

export const fetchProducts = async () =>  {
  const resp = await  axios.get(`${API_ENDPOINT}/api/products`)
  return resp.data // data is array of products
}