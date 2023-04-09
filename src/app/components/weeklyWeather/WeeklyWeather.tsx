// importing styles
import React from "react";

// importing styles
import "./weeklyWeather.scss";

// importing utils
import WMODecoder from "../../utils/WMODecoder";

interface Props {
	currentWeekWeatherInfo?: {
		apparent_temperature_max: number[];
		apparent_temperature_min: number[];
		precipitation_probability_max: number[];
		time: string[];
		weathercode: number[];
		windspeed_10m_max: number[];
	};

	currentWeekWeatherUnits?: {
		apparent_temperature_max: string;
		precipitation_probability_max: string;
		windspeed_10m_max: string;
	};
}

interface DayCard {
	id: number;
	time: string | undefined;
	apparent_temperature_max: number | undefined;
	apparent_temperature_min: number | undefined;
	precipitation_probability_max: number | undefined;
	weathercode: number | undefined;
	windspeed_10m_max: number | undefined;
}

export default function WeeklyWeather({ currentWeekWeatherInfo, currentWeekWeatherUnits }: Props) {
	let weeklyWeather: DayCard[] = [
		{
			id: 1,
			time: currentWeekWeatherInfo?.time[1],
			apparent_temperature_max: currentWeekWeatherInfo?.apparent_temperature_max[1],
			apparent_temperature_min: currentWeekWeatherInfo?.apparent_temperature_min[1],
			precipitation_probability_max: currentWeekWeatherInfo?.precipitation_probability_max[1],
			weathercode: currentWeekWeatherInfo?.weathercode[1],
			windspeed_10m_max: currentWeekWeatherInfo?.windspeed_10m_max[1],
		},
		{
			id: 2,
			time: currentWeekWeatherInfo?.time[2],
			apparent_temperature_max: currentWeekWeatherInfo?.apparent_temperature_max[2],
			apparent_temperature_min: currentWeekWeatherInfo?.apparent_temperature_min[2],
			precipitation_probability_max: currentWeekWeatherInfo?.precipitation_probability_max[2],
			weathercode: currentWeekWeatherInfo?.weathercode[2],
			windspeed_10m_max: currentWeekWeatherInfo?.windspeed_10m_max[2],
		},
		{
			id: 3,
			time: currentWeekWeatherInfo?.time[3],
			apparent_temperature_max: currentWeekWeatherInfo?.apparent_temperature_max[3],
			apparent_temperature_min: currentWeekWeatherInfo?.apparent_temperature_min[3],
			precipitation_probability_max: currentWeekWeatherInfo?.precipitation_probability_max[3],
			weathercode: currentWeekWeatherInfo?.weathercode[3],
			windspeed_10m_max: currentWeekWeatherInfo?.windspeed_10m_max[3],
		},
		{
			id: 4,
			time: currentWeekWeatherInfo?.time[4],
			apparent_temperature_max: currentWeekWeatherInfo?.apparent_temperature_max[4],
			apparent_temperature_min: currentWeekWeatherInfo?.apparent_temperature_min[4],
			precipitation_probability_max: currentWeekWeatherInfo?.precipitation_probability_max[4],
			weathercode: currentWeekWeatherInfo?.weathercode[4],
			windspeed_10m_max: currentWeekWeatherInfo?.windspeed_10m_max[4],
		},
		{
			id: 5,
			time: currentWeekWeatherInfo?.time[5],
			apparent_temperature_max: currentWeekWeatherInfo?.apparent_temperature_max[5],
			apparent_temperature_min: currentWeekWeatherInfo?.apparent_temperature_min[5],
			precipitation_probability_max: currentWeekWeatherInfo?.precipitation_probability_max[5],
			weathercode: currentWeekWeatherInfo?.weathercode[5],
			windspeed_10m_max: currentWeekWeatherInfo?.windspeed_10m_max[5],
		},
		{
			id: 6,
			time: currentWeekWeatherInfo?.time[6],
			apparent_temperature_max: currentWeekWeatherInfo?.apparent_temperature_max[6],
			apparent_temperature_min: currentWeekWeatherInfo?.apparent_temperature_min[6],
			precipitation_probability_max: currentWeekWeatherInfo?.precipitation_probability_max[6],
			weathercode: currentWeekWeatherInfo?.weathercode[6],
			windspeed_10m_max: currentWeekWeatherInfo?.windspeed_10m_max[6],
		},
	];

	function changeDateFormat(oldDate?: string) {
		if (oldDate !== undefined) {
			let newDate: string = "";
			let day: string = "";
			let month: string = "";
			let year: string = "";

			for (let i = 0; i < oldDate.length; i++) {
				if (i < 4) {
					year += oldDate[i];
				}
				if (i > 4 && i < 7) {
					month += oldDate[i];
				}
				if (i > 7 && i < 10) {
					day += oldDate[i];
				}
			}

			switch (month) {
				case "01":
					month = "january";
					break;
				case "02":
					month = "february";
					break;
				case "03":
					month = "march";
					break;
				case "04":
					month = "april";
					break;
				case "05":
					month = "may";
					break;
				case "06":
					month = "june";
					break;
				case "07":
					month = "july";
					break;
				case "08":
					month = "august";
					break;
				case "09":
					month = "september";
					break;
				case "10":
					month = "october";
					break;
				case "11":
					month = "november";
					break;
				case "12":
					month = "december";
					break;
			}

			newDate = `${day}. ${month} ${year}.`;

			return <div>{newDate}</div>;
		}
	}

	return (
		<div className="weeklyWeather">
			{weeklyWeather.map((day) => {
				return (
					<article key={day.id}>
						<h2>{changeDateFormat(day.time)}</h2>
						<ul>
							<li>
								Max. temp: {day.apparent_temperature_max}
								{currentWeekWeatherUnits?.apparent_temperature_max}
							</li>
							<li>
								Min. temp: {day.apparent_temperature_min}
								{currentWeekWeatherUnits?.apparent_temperature_max}
							</li>
							<li>
								Precipitation: {day.precipitation_probability_max}
								{currentWeekWeatherUnits?.precipitation_probability_max}
							</li>
							<li>
								Wind: {day.windspeed_10m_max}
								{currentWeekWeatherUnits?.windspeed_10m_max}
							</li>
							<li>{WMODecoder(day.weathercode)}</li>
						</ul>
					</article>
				);
			})}
		</div>
	);
}
