import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCloud, faSun } from '@fortawesome/free-solid-svg-icons';
import { getCityDisplayName, roundTemperature } from '../utils/utils';
import Loading from './Loading';

import type { WeatherCardProps } from '../types/types';

const WeatherCard: React.FC<WeatherCardProps> = ({ cityWeather }) => {
  const getTemperatureIcon = (feelsLike: number) => {
    if (feelsLike <= 20) {
      return <FontAwesomeIcon icon={faBolt} className="w-8 h-8 text-[#004AAD]" />; 
    } else if (feelsLike <= 30) {
      return <FontAwesomeIcon icon={faCloud} className="w-8 h-8 text-[#7CC2FF]" />; 
    } else {
      return <FontAwesomeIcon icon={faSun} className="w-8 h-8 text-[#FFD600]" />; 
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