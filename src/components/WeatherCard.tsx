import React from 'react';
import { Cloud, Zap, Sun } from 'lucide-react';
import type { CityWeather } from '../types/types';
import { getCityDisplayName, roundTemperature } from '../utils';
import Loading from './Loading';

interface WeatherCardProps {
  cityWeather: CityWeather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ cityWeather }) => {
  const getTemperatureIcon = (feelsLike: number) => {
    if (feelsLike <= 20) {
      return <Zap className="w-6 h-6 text-[#0066FF]" />; 
    } else if (feelsLike <= 30) {
      return <Cloud className="w-6 h-6 text-[#7CC2FF]" />; 
    } else {
      return <Sun className="w-6 h-6 text-[#FFD600]" />; 
    }
  };

  if (cityWeather.loading) {
    return (
      <div 
        className="bg-white rounded-lg p-8 min-h-64"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Heebo, sans-serif'
        }}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {getCityDisplayName(cityWeather.city)}
          </h2>
          <Loading />
        </div>
      </div>
    );
  }

  if (cityWeather.error) {
    return (
      <div 
        className="bg-white rounded-lg p-8 min-h-64 flex items-center justify-center"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Heebo, sans-serif'
        }}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {getCityDisplayName(cityWeather.city)}
          </h2>
          <p className="text-red-500 text-center">{cityWeather.error}</p>
        </div>
      </div>
    );
  }

  if (!cityWeather.data) return null;
  const { data } = cityWeather;

  return (
    <div className="w-full max-w-[365px] h-auto md:h-[250px] bg-white rounded-[4px] p-4 md:p-6 font-heebo shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
    
      <div className="flex justify-between items-start mb-6 md:mb-8">
        <div className="text-right">
          <h2 className="text-2xl md:text-[30px] font-bold leading-none mb-1">
            {getCityDisplayName(cityWeather.city)}
          </h2>
          <p className="text-sm md:text-[16px] font-normal leading-none text-[#8F8F8F]">
            {data.weather[0].description}
          </p>
        </div>
        <div>{getTemperatureIcon(data.main.feels_like)}</div>
      </div>

  
      <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
        <div>
          <p className="text-sm md:text-[16px] font-normal leading-none text-gray-600 mb-2">
            טמפ׳ נמדדת
          </p>
          <p className="text-2xl md:text-[30px] font-normal leading-none">
            {roundTemperature(data.main.temp)}°C
          </p>
        </div>
        <div>
          <p className="text-sm md:text-[16px] font-normal leading-none text-gray-600 mb-2">
            טמפ׳ מורגשת
          </p>
          <p className="text-2xl md:text-[30px] font-normal leading-none">
            {roundTemperature(data.main.feels_like)}°C
          </p>
        </div>
        <div>
          <p className="text-sm md:text-[16px] font-normal leading-none text-gray-600 mb-2">
            לחות
          </p>
          <p className="text-2xl md:text-[30px] font-normal leading-none">
            {data.main.humidity}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;