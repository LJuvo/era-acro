import axios from 'axios';
import defaultSettings from '@/config/settings.json';

export interface ContentDataRecord {
  x: string;
  y: number;
}

export function queryContentData() {
  return axios.get<ContentDataRecord[]>(`${defaultSettings.domain}/api/content-data`);
}

export interface PopularRecord {
  key: number;
  clickNumber: string;
  title: string;
  increases: number;
}

export function queryPopularList(params: { type: string }) {
  return axios.get<PopularRecord[]>(`${defaultSettings.domain}/api/popular/list`, { params });
}
