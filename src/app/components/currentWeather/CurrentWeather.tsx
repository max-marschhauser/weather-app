// importing styles
import React from "react";

// importing styles
import "./currentWeather.scss";

// importing utils
import WMODecoder from "../../utils/WMODecoder";

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
		<>
			<h2>CURRENT WEATHER</h2>
			<div className="currentWeather">
				<div className="weathercode">{WMODecoder(weathercode)}</div>
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
		</>
	);
}
