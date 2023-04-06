import React from "react";
import "./currentWeather.scss";

interface Props {
	currentWeatherInfo?: {
		temperature: number;
		weathercode: number;
		windspeed: number;
	};
}

export default function DateAndLocation({ currentWeatherInfo }: Props) {
	const temperature = `${currentWeatherInfo?.temperature}°C`;
	const weathercode = currentWeatherInfo?.weathercode;
	const windspeed = `${currentWeatherInfo?.windspeed}m/s`;

	return (
		<div className="currentWeather">
			<div className="weathercode">{weathercode}</div>
			<div className="currentWeather--info">
				<p>
					<span>Temperature: </span>
					<span>{temperature}</span>
				</p>
				<p>
					<span>Wind speed: </span>
					<span>{windspeed}</span>
				</p>
			</div>
		</div>
	);
}
