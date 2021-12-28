import callAPI from "../config/api";
import { CheckoutTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = "api/v1";

export const getFeaturedGames = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/landing-page`;
  return callAPI({ url, method: "GET" });
};

export const getVoucherDetail = async (id: string) => {
  const url = `${ROOT_API}/${API_VERSION}/players/${id}/detail`;
  return callAPI({ url, method: "GET" });
};

export const getGameCategoy = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/category`;
  return callAPI({ url, method: "GET" });
};

export const postCheckout = async (data: CheckoutTypes) => {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;
  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
};

export const getMemberOverview = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;
  return callAPI({ url, method: "GET", token: true });
};
