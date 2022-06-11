import apiAxios from "./axios";

const prefix = '/books';

export const getBooks = () => apiAxios.get(prefix);
export const getBook = (id) => apiAxios.get(`${prefix}/${id}`);
export const createBook = (data) => apiAxios.post(prefix, data);
export const updateBook = (id, data) => apiAxios.put(`${prefix}/${id}`, data);
export const deleteBook = (id) => apiAxios.delete(`${prefix}/${id}`);
export const getBookCategory = (id) => apiAxios.get(`${prefix}?category_id=${id}`);