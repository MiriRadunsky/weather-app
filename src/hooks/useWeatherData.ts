import { useState, useEffect } from 'react';
import { type CityWeather, CITIES } from '../types/types';
import { fetchWeatherData } from '../api';

export const useWeatherData = () => {
    const [cities, setCities] = useState<CityWeather[]>(
        CITIES.map(city => ({
            city: city.key,
            data: null,
            loading: true,
            error: null
        }))
    );



    const fetchCityWeather = async (cityKey: string, index: number) => {
        try {
            setCities(prev => prev.map((cityData, i) =>
                i === index
                    ? { ...cityData, loading: true, error: null }
                    : cityData
            ));

            const data = await fetchWeatherData(cityKey);

            setCities(prev => prev.map((cityData, i) =>
                i === index
                    ? { ...cityData, data, loading: false, error: null }
                    : cityData
            ));

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'שגיאה בטעינת הנתונים';

            setCities(prev => prev.map((cityData, i) =>
                i === index
                    ? { ...cityData, loading: false, error: errorMessage }
                    : cityData


            ));
        }
    }


    useEffect(() => {
        cities.forEach((city, index) => {
            fetchCityWeather(city.city, index);
        });
    }, []);
    return { cities };
};