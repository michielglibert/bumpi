import axios from "axios";
import EnvVars from "../constants/EnvVars";

const bumpiApi = axios.create({
  baseURL: EnvVars.ApiEndpoint,
});

export default bumpiApi;
