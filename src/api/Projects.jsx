// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Ajuste conforme necessário

export const getProjects = () => {
  return axios.get(`${API_URL}/projects/`);
};

export const getProject = (id) => {
  return axios.get(`${API_URL}/projects/${id}/`);
};

export const createProject = (project) => {
  return axios.post(`${API_URL}/projects/`, project);
};

export const createNote = (note) => {
  return axios.post(`${API_URL}/notes/`, note);
};