import { PutPostTodoReq } from '@/models/studyRoomTodos.model';
import axiosInstance from './axiosInstance.api';

export const getTodos = async (date: string) => {
  try {
    const res = await axiosInstance.get(`/planners?date=${date}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postTodo = async (data: PutPostTodoReq, date: string) => {
  try {
    const req = { ...data, date };
    await axiosInstance.post('/planners', req);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const putTodo = async (data: PutPostTodoReq, plannerId: string) => {
  try {
    await axiosInstance.put(`/planners/${plannerId}`, data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteTodo = async (plannerId: string) => {
  try {
    await axiosInstance.delete(`/planners/${plannerId}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const patchCheckBox = async (plannerId: string) => {
  try {
    await axiosInstance.patch(`/planners/completed/${plannerId}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
