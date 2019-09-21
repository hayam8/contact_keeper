/**
 * Check to see if a token is passed in.
 * If passed in, set it to the global header,
 * If not, delete it from global header
 */
import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
