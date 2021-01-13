import axios from "axios";

axios.defaults.baseURL = "http://test.elecsis.co";

const api = axios.create({
  baseURL: "http://test.elecsis.co",
});

api.defaults.headers.common["Authorization"] = "token";

export default api;
