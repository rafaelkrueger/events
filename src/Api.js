import axios from "axios";

const Api = axios.create({
  baseURL: "https://passporter.herokuapp.com/",
});

export default Api;
