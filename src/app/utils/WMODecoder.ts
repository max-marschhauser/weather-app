export default function settingDateAndHour(weathercode: number | undefined) {
	switch (weathercode) {
		case 0:
			return "Clear sky";
		case 1:
			return "Mainly clear";
		case 2:
			return "Partly cloudy";
		case 3:
			return "Overcast";
		case 45:
			return "Fog";
		case 48:
			return "Fog";
		case 51:
			return "Drizzle";
		case 53:
			return "Drizzle";
		case 55:
			return "Drizzle";
		case 56:
			return "Drizzle";
		case 57:
			return "Drizzle";
		case 61:
			return "Rain";
		case 63:
			return "Rain";
		case 65:
			return "Rain";
		case 66:
			return "Freezing rain";
		case 67:
			return "Freezing rain";
		case 71:
			return "Snow fall";
		case 73:
			return "Snow fall";
		case 75:
			return "Snow fall";
		case 77:
			return "Snow fall";
		case 80:
			return "Rain showers";
		case 81:
			return "Rain showers";
		case 82:
			return "Rain showers";
		case 85:
			return "Snow showers";
		case 86:
			return "Snow showers";
		case 95:
			return "Thunderstorm";
		case 96:
			return "Thunderstorm";
		case 99:
			return "Thunderstorm";
		default:
			return "Error";
	}
}
