import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.scss";

export default function App() {
	let [item, setItem] = useState<object>({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				"https://api.open-meteo.com/v1/forecast?latitude=45.56&longitude=18.69&hourly=temperature_2m&current_weather=true&timezone=Europe%2FBerlin"
			)
			.then((response) => {
				setLoading(false);
				setItem(response.data);
			})
			.catch(() => {
				alert("Error");
			});
	}, []);

	console.log(item.current_weather);

	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div>
					<h1>Day: {item.current_weather.time}</h1>
					<ul>
						<li>Current temperature: {item.current_weather.temperature}°C</li>
						<li>Windspeed: {item.current_weather.windspeed} m/s</li>
					</ul>
				</div>
			)}
		</div>
	);
}
