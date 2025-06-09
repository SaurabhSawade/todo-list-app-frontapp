import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchTasks = () => axios.get(`${BASE_URL}/api/tasks`);
export const addTask = (task) => axios.post(`${BASE_URL}/api/tasks`, task);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/api/tasks/${id}`);
export const updateTask = (id, updated) => axios.put(`${BASE_URL}/api/tasks/${id}`, updated);