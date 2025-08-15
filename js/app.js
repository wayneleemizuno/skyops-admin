const flightInfo = {
	airline: "",
	flightNum: "",
	aircraft: "",
	origin: "",
	destination: "",
	departure: "",
	arrival: "",
};

const loginSubmitBtn = document.getElementById("login-submit");
const loginResetBtn = document.getElementById("login-reset");
/* loginSubmitBtn.addEventListener("click", submitLoginInfo);

function submitLoginInfo() {
	const airlineCode = document.getElementById("airline-code").value;
	const fltNum = document.getElementById("flt-num").value;
	const aircraft = document.getElementById("aircraft").value;
	flightInfo.airline = airlineCode;
	flightInfo.flightNum = fltNum;
	flightInfo.aircraft = aircraft;
	console.log(flightInfo);
	window.sessionStorage.setItem("airline", airlineCode);
	window.sessionStorage.setItem("fltNum", fltNum);
	window.sessionStorage.setItem("aircraft", aircraft);
	document.location = "dashboard.html";
	updateTopBarFltInfo();
}

function updateTopBarFltInfo() {
	const iataCodeDisplay = document.getElementById("iata-code");
	const fltNumDisplay = document.getElementById("flight-number");
	const aircraftTypeDisplay = document.getElementById("aircraft");
	iataCodeDisplay.textContent = window.sessionStorage.getItem("airline");
	fltNumDisplay.textContent = window.sessionStorage.getItem("fltNum");
	aircraftTypeDisplay.textContent = window.sessionStorage.getItem("aircraft");
}

updateTopBarFltInfo(); */
