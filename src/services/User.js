import axios from "axios";
import { baseUrl } from "../config/constants"

class UserService {

  register(user) {
    return axios.post(`${baseUrl}/users`, {
      ...user,
      role: "company"
    })
  }

  login(user) {
    return axios.post(`${baseUrl}/sessions`, user)
  }
}
export default UserService
