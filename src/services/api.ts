import axios from 'axios';
import type { User, UserResponse, UserDetailsResponse } from '../types/user';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async (page = 1) => {
  const response = await api.get<UserResponse>(`/users?page=${page}`);
  return response.data;
};

export const getUser = async (id: string) => {
  const response = await api.get<UserDetailsResponse>(`/users/${id}`);
  return response.data;
};

export const createUser = async (userData: Partial<User>) => {
  try {
    const response = await api.post<User>('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const updateUser = async (id: string, userData: Partial<User>) => {
  try {
    const response = await api.put<User>(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    await api.delete(`/users/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};