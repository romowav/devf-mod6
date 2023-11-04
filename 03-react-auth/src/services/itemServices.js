import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const getAllItemService = () => axios.get(`${BASE_URL}/items`)
const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)
const createItemService = (data, jwtToken) => axios.post(`${BASE_URL}/items`, data, { headers: { Authorization: `Bearer ${jwtToken}` } })

export {
  getAllItemService, getOneItemService, createItemService
}
