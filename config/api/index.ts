import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
}

const callAPI = async ({ url, method, data, token }: CallAPIProps) => {
  try {
    let headers = {};

    if (token) {
      const cookiesToken = Cookies.get("token");
      if (cookiesToken) {
        const jwtToken = atob(cookiesToken);
        headers = {
          Authorization: `Bearer ${jwtToken}`,
        };
      }
    }

    const res = await axios({
      url,
      method,
      data,
      headers,
    });

    return {
      success: true,
      message: res.data.message ?? "success",
      data: res.data.data,
    };
  } catch (err: any) {
    const res = err.response;
    return {
      success: false,
      message: res.data.message ?? "Error",
      data: null,
    };
  }
};

export default callAPI;
