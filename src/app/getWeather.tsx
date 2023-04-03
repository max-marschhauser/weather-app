import axios from "axios";

export default function getWeather() {
	return axios.get(
		"https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&timeformat=unixtime&timezone=Europe%2FBerlin"
	);
}
