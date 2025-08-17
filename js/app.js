const flightStatus = {
	origin: "",
	destination: "",
	departure: "",
	arrival: "",
};

//Update Top Bar Flight Info
function updateTopBarFltInfo() {
	const iataCodeDisplay = document.getElementById("iata-code");
	const fltNumDisplay = document.getElementById("flight-number");
	const aircraftTypeDisplay = document.getElementById("aircraft-type");
	iataCodeDisplay.textContent = window.localStorage.getItem("airline");
	fltNumDisplay.textContent = window.localStorage.getItem("fltNum");
	aircraftTypeDisplay.textContent = window.localStorage.getItem("aircraft");
}

updateTopBarFltInfo();
