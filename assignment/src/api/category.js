import apiAxios from "./axios";

const prefix = '/categories';

export const getCategories = () => apiAxios.get(prefix);