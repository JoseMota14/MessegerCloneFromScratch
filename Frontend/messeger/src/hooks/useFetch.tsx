import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export async function postData(url: any, obj: any) {
  const response = await api.post(url, obj);

  return response.data;
}

export async function getData(url: any) {
  const response = await api.get(url);

  return response.data;
}
