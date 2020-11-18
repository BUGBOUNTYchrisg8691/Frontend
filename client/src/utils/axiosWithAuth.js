import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL:
      // "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/",
      "http://localhost:5000/"
    headers: {
      authorization: token,
    },
  });
};
