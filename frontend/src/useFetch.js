import useAsync from "./useAsync";
import axios from "axios";

export default function useFetch(url, method, dependencies) {
  return useAsync(() => {
    return axios
      .request({
        method: method,
        url: url,
      })
      .then((res) => res.data);
  }, dependencies);
}
