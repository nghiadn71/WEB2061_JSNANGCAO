import apiAxios from "./axios";

const prefix = '/books';

export const getBooks = () => apiAxios.get(prefix);
export const getBook = (id) => apiAxios.get(`${prefix}/${id}`);