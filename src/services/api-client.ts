import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5a201bbb061f4a8f8b51eb4e5170699f",
  },
});
