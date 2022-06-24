import axios from "axios";

export default axios.create({
  baseURL: "https://backend.applatch.com/api/v1/user/admin",
});
