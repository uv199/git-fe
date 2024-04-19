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

export const starHandlerApi = async (owner, repoName, isRemove, token) => {
  const headers = {
    "x-token": token,
  };
  let data = { owner, repoName: repoName, isRemove };
  try {
    const response = await API.post("/git/star", data, { headers });
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
