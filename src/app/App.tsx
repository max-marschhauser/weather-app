// importing general items
import React, { useState, useEffect } from "react";
import axios from "axios";

// importing styles
import "./app.scss";

// importing components
import DateAndLocation from "./components/dateAndLocation/DateAndLocation";
import CurrentWeather from "./components/currentWeather/CurrentWeather";

// importing utils
import settingDateAndHour from "./utils/settingDateAndHour";

interface APIdata {
	latitude: number;
	longitude: number;
	timezone: string;
	current_weather: {
		temperature: number;
		time: string;
		weathercode: number;
		windspeed: number;
	};
	hourly: {
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
	hourly_units: {
		apparent_temperature: string;
		cloudcover: string;
		precipitation: string;
		precipitation_probability: string;
		relativehumidity_2m: string;
		temperature_2m: string;
		windspeed_10m: string;
	};
	daily: {
		apparent_temperature_max: number[];
		apparent_temperature_min: number[];
		precipitation_probability_max: number[];
		temperature_2m_max: number[];
		temperature_2m_min: number[];
		time: string[];
		weathercode: number[];
		windspeed_10m_max: number[];
	};
	daily_units: {
		apparent_temperature_max: string;
		apparent_temperature_min: string;
		precipitation_probability_max: string;
		temperature_2m_max: string;
		temperature_2m_min: string;
		windspeed_10m_max: string;
	};
}

export default function App() {
	// fetching data

	let [item, setItem] = useState<APIdata | undefined>(undefined);
	let [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				"https://api.open-meteo.com/v1/forecast?latitude=45.55&longitude=18.69&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,cloudcover,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=Europe%2FBerlin"
			)
			.then((response) => {
				setItem(response.data);
				setLoading(false);
			})
			.catch(() => {
				alert("Error");
			});
	}, []);

	// Creating date and time variables

	const currentTime: string | undefined = item?.current_weather.time;
	let dateAndHour = settingDateAndHour(currentTime);

	// creating location variables

	let longitude: number | undefined = item?.longitude;
	let latitude: number | undefined = item?.latitude;

	// current day weather report

	const currentWeatherInfo = item?.current_weather;

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<DateAndLocation
				date={dateAndHour?.currentDate}
				hour={dateAndHour?.currentHour}
				longitude={longitude}
				latitude={latitude}
			/>
			<CurrentWeather currentWeatherInfo={currentWeatherInfo} />
		</>
	);
}
