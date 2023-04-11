import React from "react";

export default function settingDateAndHour(weathercode: number | undefined) {
	switch (weathercode) {
		case 0: // Clear sky
			return "CLEAR SKY";

		case 1: // Mainly clear
			return "MAINLY CLEAR";

		case 2: // Partly cloudy
			return "PARTLY CLOUDY";

		case 3: // Overcast
			return "OVERCAST";

		case 45: // Fog
		case 48: // Fog
			return "FOG";

		case 51: // Drizzle
		case 53: // Drizzle
		case 55: // Drizzle
		case 56: // Drizzle
		case 57: // Drizzle
		case 61: // Rain
		case 63: // Rain
		case 65: // Rain
		case 66: // Rain
		case 67: // Rain
		case 80: // Rain showers
		case 81: // Rain showers
		case 82: // Rain showers
			return "RAIN";

		case 71: // Snow fall
		case 73: // Snow fall
		case 75: // Snow fall
		case 77: // Snow fall
		case 85: // Snow showers
		case 86: // Snow showers
			return "SNOW";

		case 95: // Thunderstorms
		case 96: // Thunderstorms
		case 99: // Thunderstorms
			return "THUNDERSTORMS";

		default:
			return "Error";
	}
}
