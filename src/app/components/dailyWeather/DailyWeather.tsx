// importing styles
import React from "react";

// importing styles
import "./dailyWeather.scss";

// importing utils
import WMODecoder from "../../utils/WMODecoder";

interface Props {
	currentDayWeatherInfo?: {
		apparent_temperature: number[];
		cloudcover: number[];
		precipitation: number[];
		precipitation_probability: number[];
		relativehumidity_2m: number[];
		temperature_2m: number[];
		time: number[];
		weathercode: number[];
		windspeed_10m: number[];
	};
	currentDayWeatherUnits?: {
		apparent_temperature: string;
		cloudcover: string;
		precipitation: string;
		precipitation_probability: string;
		relativehumidity_2m: string;
		temperature_2m: string;
		windspeed_10m: string;
	};
	hour: number | undefined;
}

export default function DailyWeather({ currentDayWeatherInfo, currentDayWeatherUnits, hour }: Props) {
	return <div className="dailyWeather">DailyWeather</div>;
}

// ova komponenta prikazuje prognozu za svaki sat u idućih tjedan dana, ukupno ima 24sata x 16dana podataka (0-383), počinje s današnjim danom u 0:00, a završava sa 16. danom u 23:00

// apparent_teperature
// cloudcover
// precipitation
// precitipation_probability
// relativehumidity_2m
// temperature_2m
// windspeed_10m
// weathercode
// time
