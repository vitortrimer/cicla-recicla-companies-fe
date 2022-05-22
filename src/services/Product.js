import axios from "axios";
import { baseUrl } from "../config/constants"

class ProductService {

  packaging(packaging) {
    return axios.post(`${baseUrl}/packaging`, packaging)
  }

  getPackaging() {
    return axios.get(`${baseUrl}/packaging`)
  }

}
export default ProductService
