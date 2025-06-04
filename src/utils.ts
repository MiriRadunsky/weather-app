import { CITIES } from './types/types';

export const getTemperatureLabel = (feelsLike: number): string => {
  if (feelsLike <= 20) return 'קר';
  if (feelsLike < 30) return 'נעים';
  return 'חם';
};

export const getCityDisplayName = (cityKey: string): string => {
  const city = CITIES.find(city => city.key === cityKey);
  return city?.name || cityKey;
};

export const roundTemperature = (temp: number): number => {
  return Math.round(temp);
};