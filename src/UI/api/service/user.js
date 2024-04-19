import { API } from "../axios";

export const registerUser = async (data) => {
  try {
    const response = await API.post("/user/signup", data);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const loginUser = async (data) => {
  try {
    const response = await API.post("/user/login", data);
    return { data: response?.data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
