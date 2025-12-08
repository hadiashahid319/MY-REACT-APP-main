import axios from "axios";

const API_URL = "https://my-react-app-main-llmi.vercel.app/"; // your backend URL
const url = "https://my-react-app-main-llmi.vercel.app/items";
const URL = "https://my-react-app-main-llmi.vercel.app/api";
const uRl="https://my-react-app-main-llmi.vercel.app/";
const BASE_URL = "https://my-react-app-main-llmi.vercel.app/api"; 


export const registerUser = async (data) => axios.post(`${URL}/register`, data);
export const loginUser = async (data) => axios.post(`${URL}/login`, data);

// For authenticated requests
export const getUsers = async () => {
  const token = localStorage.getItem("token");
  return axios.get(`${URL}/users`, { headers: { Authorization: `Bearer ${token}` } });
};

//ADMIN
export const addItem = async (itemData) => {
  return await axios.post("https://my-react-app-main-llmi.vercel.app/api/items", itemData);
};


// GET all items
export const getItems = async () => {
  const res = await axios.get(`${BASE_URL}/items`);
  return res.data;
};

// UPDATE item
export const updateItem = (id, data) => axios.put(`${BASE_URL}/items/${id}`, data);

// DELETE item
export const deleteItem = (id) => axios.delete(`${BASE_URL}/items/${id}`);
export const submitRatingAPI = async (data) => {
  return await axios.post(`${uRl}/rating`, data);
};
export const addItemToCart = async (itemName) => {
  const response = await axios.post(`${url}/cart/add`, {
    name: itemName,
  });
  return response.data;
};
export const viewuser = async () => {
  const response = await axios.get(`${url}/user/view`);
  return response.data;
};

export const createPaymentIntentAPI = (amount) =>
  axios.post("https://my-react-app-main-llmi.vercel.app/api/payments/create-payment-intent", { amount });

export const storePaymentAPI = (paymentData) =>
  axios.post("https://my-react-app-main-llmi.vercel.app/api/payments/store-payment", paymentData);


const token = localStorage.getItem("token");

const config = { headers: { Authorization: `Bearer ${token}` } };

// GET PROFILE (with token)
export const getProfileAPI = async () => {
  const token = localStorage.getItem("token");

  return await axios.get(`${API_URL}/api/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// UPDATE PROFILE
export const updateProfileAPI = async (data) => {
  const token = localStorage.getItem("token");

  return await axios.put(`${API_URL}/api/users/profile`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// DELETE PROFILE
export const deleteProfileAPI = async () => {
  const token = localStorage.getItem("token");

  return await axios.delete(`${API_URL}/api/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};