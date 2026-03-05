import api from './axios';
import { API_ENDPOINTS } from './endpoints';
import { addressmockdata } from '../data/Addressdata';

// Fake delay (simulate real API)
const delay = (ms) => new Promise(res => setTimeout(res, ms));

let db = [...addressmockdata];

// GET
export const getAddresses = async () => {
  await delay(400);
  return db;
};

// CREATE
export const createAddress = async (data) => {
  await delay(300);
  const newItem = { ...data, id: Date.now() };
  db = [...db, newItem];
  return newItem;
};

// UPDATE
export const updateAddress = async ({ id, data }) => {
  await delay(300);
  db = db.map(item => (item.id === id ? { ...item, ...data } : item));
  return { id, ...data };
};

// DELETE
export const deleteAddress = async (id) => {
  await delay(300);
  db = db.filter(item => item.id !== id);
  return id;
};

export const addressApi = {
  getActiveAddresses: async (companyId) => {
    const response = await api.get(API_ENDPOINTS.ADDRESS.ACTIVE_BY_COMPANY(companyId));
    return response.data;
  }
};