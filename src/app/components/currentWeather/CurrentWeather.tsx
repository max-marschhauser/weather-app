// importing styles
import React from "react";

// importing styles
import "./currentWeather.scss";

// importing utils
import WMODecoder from "../../utils/WMODecoder";
import WMODecoderText from "../../utils/WMODecoderText";

interface Props {
	currentHourWeatherInfo?: {
		temperature: number;
		weathercode: number;
		windspeed: number;
	};
	hour: number | undefined;
}

export default function DateAndLocation({ currentHourWeatherInfo, hour }: Props) {
	const temperature = `${currentHourWeatherInfo?.temperature} °C`;
	const weathercode = currentHourWeatherInfo?.weathercode;
	const windspeed = `${currentHourWeatherInfo?.windspeed} m/s`;

	return (
		<>
			<div className="currentWeather">
				<div className="weathercode">
					<div className="weathercodeIcon">{WMODecoder(weathercode, hour)}</div>
					<p className="weathercodeText">{WMODecoderText(weathercode)}</p>
				</div>
				<div className="currentWeather--info">
					<p>{temperature}</p>
					<p>{windspeed}</p>
				</div>
			</div>
		</>
	);
}
