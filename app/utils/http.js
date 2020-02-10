import axios from "axios";
import config from "./../../build/config";
const env = process.env.NODE_ENV;
const host = config[env].httpHost;

export default function http(url, data) {
  return axios({
    method: "post",
    url: host + url,
    data
  });
}