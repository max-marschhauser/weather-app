// importing general items
import React, { useState, useEffect } from "react";
import axios from "axios";

// importing styles
import "./app.scss";

// importing components
import CurrentWeather from "./components/1currentWeather/CurrentWeather";
import DailyWeather from "./components/3dailyWeather/DailyWeather";
import HourlyWeather from "./components/2hourlyWeather/HourlyWeather";
import Footer from "./components/4footer/Footer";

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
		precipitation_probability: number[];
		relativehumidity_2m: number[];
		temperature_2m: number[];
		time: number[];
		weathercode: number[];
		windspeed_10m: number[];
	};
	hourly_units: {
		apparent_temperature: string;
		precipitation_probability: string;
		windspeed_10m: string;
	};
	daily: {
		apparent_temperature_max: number[];
		apparent_temperature_min: number[];
		precipitation_probability_max: number[];
		time: string[];
		weathercode: number[];
		windspeed_10m_max: number[];
	};
	daily_units: {
		apparent_temperature_max: string;
		precipitation_probability_max: string;
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
				`https://api.open-meteo.com/v1/forecast?
				latitude=45.55&longitude=18.69&
				hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,cloudcover,windspeed_10m&
				forecast_days=15&
				daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,windspeed_10m_max&
				current_weather=true&
				timezone=Europe%2FBerlin`
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

	// current weather report

	const currentHourWeatherInfo = item?.current_weather;
	const hourlyWeatherInfo = item?.hourly;
	const hourlyWeatherUnits = item?.hourly_units;
	const dailyWeatherInfo = item?.daily;
	const dailyWeatherUnits = item?.daily_units;

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<main>
			<CurrentWeather
				currentHourWeatherInfo={currentHourWeatherInfo}
				date={dateAndHour?.currentDate}
				hourString={dateAndHour?.currentHourString}
				hourNumber={dateAndHour?.currentHourNumber}
				longitude={longitude}
				latitude={latitude}
			/>
			<HourlyWeather
				hourlyWeatherInfo={hourlyWeatherInfo}
				hourlyWeatherUnits={hourlyWeatherUnits}
				hour={dateAndHour?.currentHourNumber}
			/>
			<DailyWeather dailyWeatherInfo={dailyWeatherInfo} dailyWeatherUnits={dailyWeatherUnits} />
			<Footer />
		</main>
	);
}
