import axios from "axios";
import callAPI from "../config/api";
import { LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = "api/v1";

export const postSignUp = async (data: FormData) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/sign-up`;
  return callAPI({ url, method: "POST", data });
};

export const postSignIn = async (data: LoginTypes) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/sign-in`;
  return callAPI({ url, method: "POST", data });
};
