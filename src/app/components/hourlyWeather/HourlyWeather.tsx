// importing styles
import React, { useState } from "react";

// importing styles
import "./hourlyWeather.scss";

// importing utils
import WMODecoder from "../../utils/WMODecoder";

interface Props {
	hourlyWeatherInfo?: {
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
	hourlyWeatherUnits?: {
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

export default function HourlyWeather({ hourlyWeatherInfo, hourlyWeatherUnits, hour }: Props) {
	//
	if (typeof hour === "number") {
		const [currentHour, setCurrentHour] = useState<number>(hour);

		const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setCurrentHour(Number(event.target.value));
		};

		return (
			<div className="hourlyWeather">
				<input type="range" min={0} max={23} value={currentHour} onChange={handleSlideChange} />
				<h2>{currentHour}</h2>
			</div>
		);
	} else {
		return <></>;
	}
}
