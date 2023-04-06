import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.scss";
import DateAndLocation from "./components/dateAndLocation/DateAndLocation";

interface APIdata {
	latitude: number;
	longitude: number;
	timezone: string;
	current_weather: {
		temperature: number;
		time: string;
		weathercode: number;
		winddirection: number;
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

	let [item, setItem] = useState<APIdata | null>(null);

	useEffect(() => {
		axios
			.get(
				"https://api.open-meteo.com/v1/forecast?latitude=45.55&longitude=18.69&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,cloudcover,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=Europe%2FBerlin"
			)
			.then((response) => {
				setItem(response.data);
			})
			.catch(() => {
				alert("Error");
			});
	}, []);

	// Creating date and time variables

	const currentTime = item?.current_weather.time;
	let currentYear: string = "";
	let currentMonth: string = "";
	let currentDay: string = "";
	let currentHour: string = "";
	let currentDate: string = "";

	if (currentTime !== undefined) {
		for (let i = 0; i < 4; i++) {
			currentYear += currentTime[i];
		}

		for (let i = 5; i < 7; i++) {
			currentMonth += currentTime[i];
		}

		for (let i = 8; i < 10; i++) {
			currentDay += currentTime[i];
		}

		for (let i = 11; i < 13; i++) {
			currentHour += currentTime[i];
		}

		switch (currentMonth) {
			case "01":
				currentMonth = "January";
				break;
			case "02":
				currentMonth = "February";
				break;
			case "03":
				currentMonth = "March";
				break;
			case "04":
				currentMonth = "April";
				break;
			case "05":
				currentMonth = "May";
				break;
			case "06":
				currentMonth = "June";
				break;
			case "07":
				currentMonth = "July";
				break;
			case "08":
				currentMonth = "August";
				break;
			case "09":
				currentMonth = "September";
				break;
			case "10":
				currentMonth = "October";
				break;
			case "11":
				currentMonth = "November";
				break;
			case "12":
				currentMonth = "December";
				break;
		}

		currentDate = `${currentDay}. ${currentMonth} ${currentYear}.`;
		currentHour = currentHour + ":00";
	}

	// creating location variables

	let longitude: number | undefined = item?.longitude;
	let latitude: number | undefined = item?.latitude;

	return (
		<DateAndLocation
			currentDate={currentDate}
			currentHour={currentHour}
			longitude={longitude}
			latitude={latitude}
		/>
	);
}
