import { API } from "../axios";

export const getStaredRepo = async (token) => {
  const headers = {
    "x-token": token,
  };
  try {
    const response = await API.get("/star/getAll", { headers });
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const starHandlerApi = async (data, token) => {
  const headers = {
    "x-token": token,
  };
  try {
    const response = await API.post("/star/starhandle", data, { headers });
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
