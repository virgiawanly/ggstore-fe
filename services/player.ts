import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = "api/v1";

export const getFeaturedGames = async () => {
  const URL = "players/landing-page";

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
};

export const getVoucherDetail = async (id: string) => {
  const URL = `players/${id}/detail`;

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
};

export const getGameCategoy = async () => {
  const URL = "players/category";

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
};
