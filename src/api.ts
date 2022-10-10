import axios from "axios";
export default axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: "Bearer " + process.env.VUE_APP_BEARER_TOKEN,
  },
});
