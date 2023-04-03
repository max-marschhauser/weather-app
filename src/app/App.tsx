import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.scss";

export default function App() {
	let [time, setTime] = useState([]);
	let [temperature, setTemperature] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`https://api.open-meteo.com/v1/forecast?latitude=45.55&longitude=18.69&hourly=temperature_2m&timezone=Europe%2FBerlin`
			)
			.then((response) => {
				setLoading(false);
				setTime(response.data.hourly.time);
				setTemperature(response.data.hourly.temperature_2m);
			})
			.catch(() => {
				alert("Error");
			});
	}, []);

	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div className="list">
					<ul>
						{time.map((item, id) => {
							return <li key={id}>{item}</li>;
						})}
					</ul>
					<ul>
						{temperature.map((item, id) => {
							return <li key={id}>{item}°C</li>;
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
