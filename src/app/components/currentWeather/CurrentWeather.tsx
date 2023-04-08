// importing styles
import React from "react";

// importing styles
import "./currentWeather.scss";

// importing utils
import WMODecoder from "../../utils/WMODecoder";

interface Props {
	currentHourWeatherInfo?: {
		temperature: number;
		weathercode: number;
		windspeed: number;
	};
	hour: number | undefined;
}

export default function DateAndLocation({ currentHourWeatherInfo, hour }: Props) {
	const temperature = `${currentHourWeatherInfo?.temperature}°C`;
	const weathercode = currentHourWeatherInfo?.weathercode;
	const windspeed = `${currentHourWeatherInfo?.windspeed}m/s`;

	return (
		<>
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
