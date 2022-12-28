import axios from "axios";

const API_URL = "http://localhost:8888/";

const API_URL1 = "http://localhost:8888/userDetails/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "authenticate", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstName, lastName, email,password,address,contactNumber) {
    return axios.post(API_URL1 + "create", {
      firstName,
      lastName,
      email,
      password,
      address,
      contactNumber
    });
  }
}

export default new AuthService();
