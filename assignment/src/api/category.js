import apiAxios from "./axios";

const prefix = '/categories';

export const getCategories = () => apiAxios.get(prefix);
export const getCategory = (id) => apiAxios.get(`${prefix}/${id}`);
export const createCategory = (data) => apiAxios.post(prefix, data);
export const deleteCategory = (id) => apiAxios.delete(`${prefix}/${id}`);
export const updateCategory = (id, data) => apiAxios.put(`${prefix}/${id}`, data);