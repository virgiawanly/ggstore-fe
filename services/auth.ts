import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = "api/v1";

export const postSignUp = async (payload) => {
  const URL = "auth/sign-up";

  const res = await axios
    .post(`${ROOT_API}/${API_VERSION}/${URL}`, payload)
    .catch((err) => err.response);
  const axiosResponse = res.data;
  if (axiosResponse.error === true) return axiosResponse;

  return axiosResponse.data;
};

export const postSignIn = async () => {
  //
};
