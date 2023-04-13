import React from "react";

export default function settingDateAndHour(weathercode: number | undefined, hour?: number | undefined) {
	switch (weathercode) {
		case 0: // Clear sky
		case 1: // Mainly clear
			if ((typeof hour === "number" && hour >= 5 && hour <= 20) || typeof hour === "undefined") {
				return (
					<svg viewBox="0 0 512 512">
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeMiterlimit="10"
							strokeWidth="32"
							d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
						/>
						<circle
							cx="256"
							cy="256"
							r="80"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeMiterlimit="10"
							strokeWidth="32"
						/>
					</svg>
				);
			} else {
				return (
					<svg viewBox="0 0 512 512">
						<path
							d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
					</svg>
				);
			}

		case 2: // Partly cloudy
			if ((typeof hour === "number" && hour >= 5 && hour <= 20) || typeof hour === "undefined") {
				return (
					<svg viewBox="0 0 512 512">
						<path
							d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"
							fill="none"
							stroke="currentColor"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
						<path
							d="M384.8 271.4a80 80 0 10-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63M449.14 94.86l-22.63 22.63"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
					</svg>
				);
			} else {
				return (
					<svg viewBox="0 0 512 512">
						<path
							d="M388.31 272c47.75 0 89.77-27.77 107.69-68.92-14.21 6.18-30.9 8.61-47.38 8.61A116.31 116.31 0 01332.31 95.38c0-16.48 2.43-33.17 8.61-47.38C299.77 65.92 272 107.94 272 155.69a116.31 116.31 0 003.44 28.18"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
						<path
							d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"
							fill="none"
							stroke="currentColor"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
					</svg>
				);
			}

		case 3: // Overcast
			if ((typeof hour === "number" && hour >= 5 && hour <= 20) || typeof hour === "undefined") {
				return (
					<svg viewBox="0 0 512 512">
						<path
							d="M100.18 241.19a15.93 15.93 0 0013.37-13.25C126.6 145.59 186.34 96 256 96c64.69 0 107.79 42.36 124.92 87a16.11 16.11 0 0012.53 10.18C449.36 202.06 496 239.21 496 304c0 66-54 112-120 112H116c-55 0-100-27.44-100-88 0-54.43 43.89-80.81 84.18-86.81z"
							fill="none"
							stroke="currentColor"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
					</svg>
				);
			} else {
				return (
					<svg viewBox="0 0 512 512">
						<path
							d="M388.31 272c47.75 0 89.77-27.77 107.69-68.92-14.21 6.18-30.9 8.61-47.38 8.61A116.31 116.31 0 01332.31 95.38c0-16.48 2.43-33.17 8.61-47.38C299.77 65.92 272 107.94 272 155.69a116.31 116.31 0 003.44 28.18"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
						<path
							d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"
							fill="none"
							stroke="currentColor"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
					</svg>
				);
			}

		case 45: // Fog
		case 48: // Fog
			if ((typeof hour === "number" && hour >= 5 && hour <= 20) || typeof hour === "undefined") {
				return (
					<svg viewBox="0 0 512 512">
						<path
							d="M100.18 241.19a15.93 15.93 0 0013.37-13.25C126.6 145.59 186.34 96 256 96c64.69 0 107.79 42.36 124.92 87a16.11 16.11 0 0012.53 10.18C449.36 202.06 496 239.21 496 304c0 66-54 112-120 112H116c-55 0-100-27.44-100-88 0-54.43 43.89-80.81 84.18-86.81z"
							fill="none"
							stroke="currentColor"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
					</svg>
				);
			} else {
				return (
					<svg viewBox="0 0 512 512">
						<path
							d="M388.31 272c47.75 0 89.77-27.77 107.69-68.92-14.21 6.18-30.9 8.61-47.38 8.61A116.31 116.31 0 01332.31 95.38c0-16.48 2.43-33.17 8.61-47.38C299.77 65.92 272 107.94 272 155.69a116.31 116.31 0 003.44 28.18"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
						<path
							d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"
							fill="none"
							stroke="currentColor"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
					</svg>
				);
			}

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
			return (
				<svg viewBox="0 0 512 512">
					<path
						d="M114.61 162.85A16.07 16.07 0 00128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"
						fill="none"
						stroke="currentColor"
						strokeLinejoin="round"
						strokeWidth="32"
					/>
					<path
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="32"
						d="M144 384l-32 48M224 384l-64 96M304 384l-32 48M384 384l-64 96"
					/>
				</svg>
			);

		case 71: // Snow fall
		case 73: // Snow fall
		case 75: // Snow fall
		case 77: // Snow fall
		case 85: // Snow showers
		case 86: // Snow showers
			return (
				<svg viewBox="0 0 512 512">
					<path
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="32"
						d="M256 32v448M313.72 80A111.47 111.47 0 01256 96a111.47 111.47 0 01-57.72-16M198.28 432a112.11 112.11 0 01115.44 0M449.99 144L62.01 368M437.27 218a112.09 112.09 0 01-57.71-100M74.73 294a112.09 112.09 0 0157.71 100M62.01 144l387.98 224M74.73 218a112.09 112.09 0 0057.71-100M437.27 294a112.09 112.09 0 00-57.71 100"
					/>
				</svg>
			);

		case 95: // Thunderstorms
		case 96: // Thunderstorms
		case 99: // Thunderstorms
			return (
				<svg viewBox="0 0 512 512">
					<path
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="32"
						d="M120 352l-24 48M136 432l-16 32M400 352l-24 48M416 432l-16 32M208 304l-16 96h48v80l80-112h-48l16-64M404.33 152.89H392.2C384.71 84.85 326.14 32 256 32a136.39 136.39 0 00-128.63 90.67h-4.57c-49.94 0-90.8 40.8-90.8 90.66h0C32 263.2 72.86 304 122.8 304h281.53C446 304 480 270 480 228.44h0c0-41.55-34-75.55-75.67-75.55z"
					/>
				</svg>
			);
		default:
			return "Error";
	}
}
