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
		const [currentDay, setCurrentDay] = useState<number>(1);

		const equation = currentHour + currentDay * 24 - 24;

		const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setCurrentHour(Number(event.target.value));
		};

		let dateAndHour = settingDateAndHour(hourlyWeatherInfo?.time[equation].toString());
		let date = dateAndHour?.currentDate;

		function nextDay() {
			if (currentDay <= 14) {
				setCurrentDay((day) => {
					return (day = day + 1);
				});
			}
		}

		function previousDay() {
			if (currentDay >= 2) {
				setCurrentDay((day) => {
					return (day = day - 1);
				});
			}
		}

		const temperature = `${hourlyWeatherInfo?.temperature_2m[equation]} ${hourlyWeatherUnits?.apparent_temperature}`;
		const realFeel = `${hourlyWeatherInfo?.apparent_temperature[equation]} ${hourlyWeatherUnits?.apparent_temperature}`;
		const wind = `${hourlyWeatherInfo?.windspeed_10m[equation]} ${hourlyWeatherUnits?.windspeed_10m}`;
		const cloudcover = ` ${hourlyWeatherInfo?.cloudcover[equation]} ${hourlyWeatherUnits?.precipitation_probability}`;
		const precipitation = `	${hourlyWeatherInfo?.precipitation_probability[equation]} ${hourlyWeatherUnits?.precipitation_probability}`;
		const humidity = `	${hourlyWeatherInfo?.relativehumidity_2m[equation]} ${hourlyWeatherUnits?.precipitation_probability}`;

		return (
			<div className="hourlyWeather">
				<button onClick={previousDay}>
					<svg viewBox="0 0 512 512">
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="48"
							d="M328 112L184 256l144 144"
						/>
					</svg>
				</button>
				<div className="main">
					<ul>
						<li>
							<span>{date}</span>
						</li>
						<li>
							<span>{currentHour}:00h</span>
						</li>
					</ul>
					<input type="range" min={0} max={23} value={currentHour} onChange={handleSlideChange} />
					<ul>
						<li>
							<span>Temperature</span>
							{temperature}
						</li>
						<li>
							<span>Real Feel</span>
							{realFeel}
						</li>
						<li>
							<span>Wind</span>
							{wind}
						</li>
						<li>
							<span>Precipitation</span>
							{precipitation}
						</li>
						<li>
							<span>{WMODecoderText(hourlyWeatherInfo?.weathercode[equation])}</span>
						</li>
						<li>
							<span>{WMODecoder(hourlyWeatherInfo?.weathercode[equation], currentHour)}</span>
						</li>
					</ul>
				</div>
				<button onClick={nextDay}>
					<svg viewBox="0 0 512 512">
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="48"
							d="M184 112l144 144-144 144"
						/>
					</svg>
				</button>
			</div>
		);
	} else {
		return <></>;
	}
}
