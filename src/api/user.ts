import axios from 'axios';
import { UserState } from '@/store/modules/user/types';
import defaultSettings from '@/config/settings.json';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>(`${defaultSettings.domain}/api/user/login`, data);
}

export function logout() {
  return axios.post<LoginRes>(`${defaultSettings.domain}/api/user/logout`);
}

export function getUserInfo() {
  return axios.post<UserState>(`${defaultSettings.domain}/api/user/info`);
}
