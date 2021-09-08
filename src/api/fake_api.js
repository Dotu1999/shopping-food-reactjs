import axios from "axios";

export default axios.create({
  baseURL: `https://61376a27eac1410017c18306.mockapi.io/`,
  headers: {
    "Content-type": "application/json",
  },
});
