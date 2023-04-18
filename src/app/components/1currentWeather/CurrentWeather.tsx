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
	city: string | undefined;
	handleCoordsChange: Function;
}

export default function DateAndLocation({
	currentHourWeatherInfo,
	date,
	hourString,
	hourNumber,
	city,
	handleCoordsChange,
}: Props) {
	const temperature = `${currentHourWeatherInfo?.temperature} °C`;
	const weathercode = currentHourWeatherInfo?.weathercode;
	const windspeed = `${currentHourWeatherInfo?.windspeed} m/s`;

	let [locationModal, setLocationModal] = useState(false);

	function handleLocationModal() {
		setLocationModal((prev) => !prev);
	}

	function handleLocationChange(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
		let location = (event.target as HTMLInputElement).value;

		switch (location) {
			case "Zagreb":
				handleCoordsChange({ newLatitude: 45.82, newLongitude: 15.97, newCity: "Zagreb" });
				break;
			case "Split":
				handleCoordsChange({ newLatitude: 43.51, newLongitude: 16.44, newCity: "Split" });
				break;
			case "Rijeka":
				handleCoordsChange({ newLatitude: 45.33, newLongitude: 14.46, newCity: "Rijeka" });
				break;
			case "Osijek":
				handleCoordsChange({ newLatitude: 45.55, newLongitude: 18.69, newCity: "Osijek" });
				break;
			default:
				console.log("Error");
				break;
		}
	}

	function ChangeLocation() {
		return (
			<div className="changeLocation">
				<h2>Change Location</h2>
				<ul>
					<li>
						<button onClick={handleLocationChange} value="Zagreb">
							Zagreb
						</button>
					</li>
					<li>
						<button onClick={handleLocationChange} value="Split">
							Split
						</button>
					</li>
					<li>
						<button onClick={handleLocationChange} value="Rijeka">
							Rijeka
						</button>
					</li>
					<li>
						<button onClick={handleLocationChange} value="Osijek">
							Osijek
						</button>
					</li>
				</ul>
			</div>
		);
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
					<span>{city}</span>
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
