import React from 'react';
import { useWeatherData } from '../hooks/useWeatherData';
import WeatherCard from './WeatherCard';

const WeatherPage: React.FC = () => {
  const { cities } = useWeatherData();
  
  return (
    <div 
      className="h-screen bg-[#C2E6FF] font-heebo flex flex-col overflow-hidden" 
      dir="rtl"
    >
      <div className="w-full bg-white h-20 shrink-0 flex items-center px-8">
        <h1 className="text-[32px] leading-none text-gray-800 font-normal">
          תחזית מסביב לעולם
        </h1>
      </div>
      
      <div className="flex-1 w-full">
        <div className="h-full max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {cities.map((cityWeather) => (
              <WeatherCard
                key={cityWeather.city}
                cityWeather={cityWeather}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;