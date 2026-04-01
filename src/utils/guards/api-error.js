import { API_ERROR_CODE } from "../../constants";

export const isAPIError = (apiCode) => {
  return API_ERROR_CODE === apiCode;
};