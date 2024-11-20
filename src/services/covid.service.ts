import axios from 'axios';
import { CovidData, CovidResponse, DataInfo } from '../models/covid.model';
import { removeNull } from '../helpers/remove-null.helper';

const BASE_URL = 'http://localhost:3200/api/covid';

export const getCovidHistorical = async (): Promise<CovidData[]> => {
  const response = await axios.get<CovidResponse>(`${BASE_URL}/historical`);
  return response.data.data.map((covidData: DataInfo) => {
    return {
      date: covidData.date,
      cases: removeNull(covidData.cases.total.value),
      deaths: removeNull(covidData.outcomes.death.total.value),
      tests: removeNull(covidData.testing.total.value)
    }
  }).reverse()
};