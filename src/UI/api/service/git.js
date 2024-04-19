import { API } from "../axios";

export const fetchSearchList = async (search) => {
  try {
    const response = await API.get(`/git/search-user?search=${search}`);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getUserRepo = async (userName) => {
  try {
    const response = await API.get(`/git/get-user/${userName}`);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
