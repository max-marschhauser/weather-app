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
	hour: number | undefined;
}

export default function DateAndLocation({ currentWeatherInfo, hour }: Props) {
	const temperature = `${currentWeatherInfo?.temperature}°C`;
	const weathercode = currentWeatherInfo?.weathercode;
	const windspeed = `${currentWeatherInfo?.windspeed}m/s`;

	return (
		<>
			<h2>CURRENT WEATHER</h2>
			<div className="currentWeather">
				<div className="weatherIcon">{WMODecoder(weathercode, hour)}</div>
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
