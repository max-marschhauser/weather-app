export default function settingDateAndHour(currentTime: string | undefined) {
	let currentYear: string = "";
	let currentMonth: string = "";
	let currentDay: string = "";
	let currentHour: string = "";
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
			currentHour += currentTime[i];
		}

		switch (currentMonth) {
			case "01":
				currentMonth = "January";
				break;
			case "02":
				currentMonth = "February";
				break;
			case "03":
				currentMonth = "March";
				break;
			case "04":
				currentMonth = "April";
				break;
			case "05":
				currentMonth = "May";
				break;
			case "06":
				currentMonth = "June";
				break;
			case "07":
				currentMonth = "July";
				break;
			case "08":
				currentMonth = "August";
				break;
			case "09":
				currentMonth = "September";
				break;
			case "10":
				currentMonth = "October";
				break;
			case "11":
				currentMonth = "November";
				break;
			case "12":
				currentMonth = "December";
				break;
		}

		currentDate = `${currentDay}. ${currentMonth} ${currentYear}.`;
		currentHour = currentHour + ":00h";

		return { currentDate, currentHour };
	}
}
