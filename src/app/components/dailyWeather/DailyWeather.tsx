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
	hour?: number;
}

export default function DailyWeather({ currentDayWeatherInfo, currentDayWeatherUnits, hour }: Props) {
	return <div></div>;
}
