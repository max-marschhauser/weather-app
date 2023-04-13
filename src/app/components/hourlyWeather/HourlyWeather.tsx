// importing styles
import React, { useState } from "react";

// importing styles
import "./hourlyWeather.scss";

// importing utils
import WMODecoder from "../../utils/WMODecoder";
import WMODecoderText from "../../utils/WMODecoderText";
import settingDateAndHour from "../../utils/settingDateAndHour";

interface Props {
	hourlyWeatherInfo?: {
		apparent_temperature: number[];
		cloudcover: number[];

		precipitation_probability: number[];
		relativehumidity_2m: number[];
		temperature_2m: number[];
		time: number[];
		weathercode: number[];
		windspeed_10m: number[];
	};
	hourlyWeatherUnits?: {
		apparent_temperature: string;
		precipitation_probability: string;
		windspeed_10m: string;
	};
	hour?: number;
}

export default function HourlyWeather({ hourlyWeatherInfo, hourlyWeatherUnits, hour }: Props) {
	if (typeof hour === "number") {
		const [currentHour, setCurrentHour] = useState<number>(hour);

		const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setCurrentHour(Number(event.target.value));
		};

		let dateAndHour = settingDateAndHour(hourlyWeatherInfo?.time[currentHour].toString());
		let date = dateAndHour?.currentDate;

		return (
			<div className="hourlyWeather">
				<ul>
					<li>{date}</li>
					<li>{currentHour}:00h</li>
				</ul>
				<input type="range" min={0} max={23} value={currentHour} onChange={handleSlideChange} />
				<ul>
					<li>
						<span>Temperature </span>
						{hourlyWeatherInfo?.temperature_2m[currentHour]}
						{hourlyWeatherUnits?.apparent_temperature}
					</li>
					<li>
						<span>Real Feel </span>
						{hourlyWeatherInfo?.apparent_temperature[currentHour]}
						{hourlyWeatherUnits?.apparent_temperature}
					</li>
					<li>
						<span>
							<span>Wind </span>
							{hourlyWeatherInfo?.windspeed_10m[currentHour]}
							{hourlyWeatherUnits?.windspeed_10m}
						</span>
					</li>
					<li>
						<span>Cloudcover </span> {hourlyWeatherInfo?.cloudcover[currentHour]}
						{hourlyWeatherUnits?.precipitation_probability}
					</li>
					<li>
						<span>Precipitation </span>
						{hourlyWeatherInfo?.precipitation_probability[currentHour]}
						{hourlyWeatherUnits?.precipitation_probability}
					</li>
					<li>
						<span>Humidity </span>
						{hourlyWeatherInfo?.relativehumidity_2m[currentHour]}
						{hourlyWeatherUnits?.precipitation_probability}
					</li>
					<li>{WMODecoderText(hourlyWeatherInfo?.weathercode[currentHour])}</li>
					<li>{WMODecoder(hourlyWeatherInfo?.weathercode[currentHour], currentHour)}</li>
				</ul>
			</div>
		);
	} else {
		return <></>;
	}
}
