import axios, { AxiosRequestConfig } from "axios";

const callAPI = async ({ url, method, data }: AxiosRequestConfig) => {
  try {
    const res = await axios({ url, method, data });
    return {
      success: true,
      message: res.data.message ?? "success",
      data: res.data.data,
    };
  } catch (err: any) {
    const res = err.response;
    return {
      success: false,
      message: res.data.message,
      data: null,
    };
  }
};

export default callAPI;
