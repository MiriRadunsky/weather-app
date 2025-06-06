import type { WeatherData } from '../types/types';

 const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || '8ee633956bad6ae1965b557a94ecfcba';
 const BASE_URL = import.meta.env.VITE_WEATHER_API_URL || 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=he`
    );
    
    if (!response.ok) {
      throw new Error(`שגיאה בקבלת נתונים עבור ${city}`);
    }
    
    const data: WeatherData = await response.json();
    return data;
  } catch (error) {
    throw new Error(`שגיאה בחיבור לשרת מזג האוויר: ${error instanceof Error ? error.message : 'unknown error'}`);
  }
};