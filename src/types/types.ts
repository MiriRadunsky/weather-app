export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
}

export interface CityWeather {
  city: string;
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

export const CITIES = [
  
  { key: 'London,UK', name: 'לונדון' },
   { key: 'New York,US', name: 'ניו יורק' },
   { key: 'Anchorage,US', name: 'אלסקה' },
  
  { key: 'Eilat,IL', name: 'אילת' } 
  
 
] as const;
