import React, { useState } from "react";
import getWeather from "./getWeather";

export default function App() {
	const [items, setItems] = useState(getWeather);

	console.log(items);

	return (
		<>
			<ul>
				<li>Temperature:</li>
				<li>Windspeed: </li>
			</ul>
		</>
	);
}
