const loginSubmitBtn = document.getElementById("login-submit");
const loginResetBtn = document.getElementById("login-clear");

loginSubmitBtn.addEventListener("click", submitLoginInfo);
loginResetBtn.addEventListener("click", resetInputValue);

function submitLoginInfo() {
	localStorage.clear();
	const airlineCode = document
		.getElementById("airline-code")
		.value.toLowerCase();
	const fltNum = document.getElementById("flt-num").value;
	const aircraft = document.getElementById("aircraft").value.toLowerCase();
	window.localStorage.setItem("airline", airlineCode);
	window.localStorage.setItem("fltNum", fltNum);
	window.localStorage.setItem("aircraft", aircraft);
	document.location = "dashboard.html";
}

function resetInputValue() {
	const airlineCode = document.getElementById("airline-code");
	const fltNum = document.getElementById("flt-num");
	const aircraft = document.getElementById("aircraft");
	const loginId = document.getElementById("login-id");
	const loginPw = document.getElementById("login-pw");
	airlineCode.value = "";
	fltNum.value = "";
	aircraft.value = "";
	loginId.value = "";
	loginPw.value = "";
}
