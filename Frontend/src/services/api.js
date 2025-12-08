import axios from "axios";

const API_URL = "http://localhost:5000"; // your backend URL
const url = "http://localhost:5000/items";
const URL = "http://localhost:5000/api";
const uRl="http://localhost:5000";
const BASE_URL = "http://localhost:5000/api"; 


export const registerUser = async (data) => axios.post(`${URL}/register`, data);
export const loginUser = async (data) => axios.post(`${URL}/login`, data);

// For authenticated requests
export const getUsers = async () => {
  const token = localStorage.getItem("token");
  return axios.get(`${URL}/users`, { headers: { Authorization: `Bearer ${token}` } });
};

//ADMIN
export const addItem = async (itemData) => {
  return await axios.post("http://localhost:5000/api/items", itemData);
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
  axios.post("http://localhost:5000/api/payments/create-payment-intent", { amount });

export const storePaymentAPI = (paymentData) =>
  axios.post("http://localhost:5000/api/payments/store-payment", paymentData);


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