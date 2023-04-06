import React from "react";
import "./dateAndLocation.scss";

interface Props {
	currentDate: string;
	currentHour: string;
	longitude: number | undefined;
	latitude: number | undefined;
}

export default function DateAndLocation({ currentDate, currentHour, longitude, latitude }: Props) {
	return (
		<div className="dateAndLocation">
			<p>
				<span>Date</span>
				<span>{currentDate}</span>
			</p>
			<p>
				<span>Hour</span>
				<span>{currentHour}</span>
			</p>
			<p>
				<span>Location</span>
				<span>
					{longitude} / {latitude}
				</span>
			</p>
		</div>
	);
}
