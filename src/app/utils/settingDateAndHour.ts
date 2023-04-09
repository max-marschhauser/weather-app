export default function settingDateAndHour(currentTime: string | undefined) {
	let currentYear: string = "";
	let currentMonth: string = "";
	let currentDay: string = "";
	let currentHourString: string = "";
	let currentDate: string = "";

	if (currentTime !== undefined) {
		for (let i = 0; i < 4; i++) {
			currentYear += currentTime[i];
		}

		for (let i = 5; i < 7; i++) {
			currentMonth += currentTime[i];
		}

		for (let i = 8; i < 10; i++) {
			currentDay += currentTime[i];
		}

		for (let i = 11; i < 13; i++) {
			currentHourString += currentTime[i];
		}

		switch (currentMonth) {
			case "01":
				currentMonth = "january";
				break;
			case "02":
				currentMonth = "february";
				break;
			case "03":
				currentMonth = "march";
				break;
			case "04":
				currentMonth = "april";
				break;
			case "05":
				currentMonth = "may";
				break;
			case "06":
				currentMonth = "june";
				break;
			case "07":
				currentMonth = "july";
				break;
			case "08":
				currentMonth = "august";
				break;
			case "09":
				currentMonth = "september";
				break;
			case "10":
				currentMonth = "october";
				break;
			case "11":
				currentMonth = "november";
				break;
			case "12":
				currentMonth = "december";
				break;
		}

		currentDate = `${currentDay}. ${currentMonth} ${currentYear}.`;
		const currentHourNumber: number = parseInt(currentHourString);
		currentHourString = currentHourString + ":00h";

		return { currentDate, currentHourString, currentHourNumber };
	}
}
