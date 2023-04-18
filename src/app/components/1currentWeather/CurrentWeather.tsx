// importing styles
import React, { useState } from "react";

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
	date: string | undefined;
	hourString: string | undefined;
	hourNumber: number | undefined;
	longitude: number | undefined;
	latitude: number | undefined;
}

export default function DateAndLocation({
	currentHourWeatherInfo,
	date,
	hourString,
	hourNumber,
	longitude,
	latitude,
}: Props) {
	const temperature = `${currentHourWeatherInfo?.temperature} °C`;
	const weathercode = currentHourWeatherInfo?.weathercode;
	const windspeed = `${currentHourWeatherInfo?.windspeed} m/s`;

	let [locationModal, setLocationModal] = useState(false);

	function handleLocationModal() {
		setLocationModal((prev) => !prev);
	}

	function ChangeLocation() {
		return <div className="changeLocation">ChangeLocation</div>;
	}

	return (
		<>
			<div className="dateAndLocation">
				<p>
					<span>Date</span>
					<span>{date}</span>
				</p>
				<p>
					<span>Hour</span>
					<span>{hourString}</span>
				</p>
				<button onClick={handleLocationModal}>
					<span>Location</span>
					<span>
						{longitude} / {latitude}
					</span>
				</button>
			</div>
			{locationModal ? <ChangeLocation /> : <></>}
			<div className="currentWeather">
				<div className="weathercode">
					<div className="weathercodeIcon">{WMODecoder(weathercode, hourNumber)}</div>
					<p className="weathercodeText">{WMODecoderText(weathercode)}</p>
				</div>
				<div className="currentWeather--info">
					<p>
						<span>Temperature</span>
						{temperature}
					</p>
					<p>
						<span>Wind</span>
						{windspeed}
					</p>
				</div>
			</div>
		</>
	);
}
