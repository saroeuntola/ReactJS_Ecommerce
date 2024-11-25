import axios from "axios";

const BaseURL = axios.create({
  baseURL: "https://fakestoreapi.com",
});
export default BaseURL;




