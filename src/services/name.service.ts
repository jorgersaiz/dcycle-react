import axios from 'axios';
import { Age, Gender, Nationality } from '../models/name.model';


const BASE_URL = 'http://localhost:8080/api';

export const getGenderize = async (name: string): Promise<Gender> => {
  const response = await axios.get(`${BASE_URL}/genderize/${name}`);
  return response.data;
};

export const getNationalize = async (name: string): Promise<Nationality> => {
  const response = await axios.get(`${BASE_URL}/nationalize/${name}`);
  return response.data;
};

export const getAgify = async (name: string): Promise<Age> => {
  const response = await axios.get(`${BASE_URL}/agify/${name}`);
  return response.data;
};
