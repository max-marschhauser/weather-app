import React from "react";
import "./dateAndLocation.scss";

interface Props {
	date: string | undefined;
	hour: string | undefined;
	longitude: number | undefined;
	latitude: number | undefined;
}

export default function DateAndLocation({ date, hour, longitude, latitude }: Props) {
	return (
		<div className="dateAndLocation">
			<p>
				<span>Date</span>
				<span>{date}</span>
			</p>
			<p>
				<span>Hour</span>
				<span>{hour}</span>
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
