import axios from 'axios'
import { API_TOKEN, BASE_URL } from '../config/EndPoints'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    'Accept-Language': 'ar'
  }
})

export default api
