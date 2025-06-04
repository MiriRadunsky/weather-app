import { CITIES } from './types/types';



export const getCityDisplayName = (cityKey: string): string => {
  const city = CITIES.find(city => city.key === cityKey);
  return city?.name || cityKey;
};

export const roundTemperature = (temp: number): number => {
  return Math.round(temp);
};