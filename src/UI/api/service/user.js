import { API } from "../axios";

export const registerUser = async (data) => {
  console.log("🚀 ~ registerUser ~ data:", data)
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

export const logoutUser = async () => {
  try {
    const response = await API.post("/user/login", data);
    console.log("🚀 ~ logoutUser ~ response:", response)
    return { data: response?.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
