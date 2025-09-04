/* CABIN MENU */
const cabinMenuBtn = document.querySelectorAll(".cabin-menu-btn");

/* The event listener automatically passes an event object to the function, which contains information about the click event and the element that was clicked. */
cabinMenuBtn.forEach((btn) => {
	btn.addEventListener("click", toggleCabinSection);
});

//TOGGLE CABIN SECTION
function toggleCabinSection(event) {
	const clickedBtn = event.currentTarget;
	cabinMenuBtn.forEach((btn) => {
		if (btn === clickedBtn) {
			btn.classList.add("cabin-menu-btn-active");
		} else {
			btn.classList.remove("cabin-menu-btn-active");
		}
	});

	const clickedBtnData = clickedBtn.dataset.section;
	const cabinSection = document.querySelectorAll(".cabin-section");

	cabinSection.forEach((section) => {
		if (section.dataset.section === clickedBtnData) {
			section.classList.remove("hidden");
		} else section.classList.add("hidden");
	});
}

// TOGGLE SECTION BAR ITEM
const sectionBarBtn = document.querySelectorAll(".section-bar-btn");
sectionBarBtn.forEach((btn) => {
	btn.addEventListener("click", toggleSectionBarItem);
});

function toggleSectionBarItem(event) {
	const clickedBtn = event.currentTarget;
	const sectionBarItemBtn = document.querySelectorAll(".section-bar-btn");
	sectionBarItemBtn.forEach((btn) => {
		if (btn === clickedBtn) {
			btn.classList.add("section-bar-btn-active");
		} else {
			btn.classList.remove("section-bar-btn-active");
		}
	});

	const clickedBtnData = clickedBtn.dataset.section;
	const sectionBarItem = document.querySelectorAll(".section-bar-item");

	sectionBarItem.forEach((section) => {
		if (section.dataset.section === clickedBtnData) {
			section.classList.remove("hidden");
		} else section.classList.add("hidden");
	});
}

// TOGGLE SUB-SECTION BAR ITEM
const subSectionBarBtn = document.querySelectorAll(".sub-section-bar-btn");
subSectionBarBtn.forEach((btn) => {
	btn.addEventListener("click", toggleSubSectionBarItem);
});

function toggleSubSectionBarItem(event) {
	const clickedBtn = event.currentTarget;
	const subSectionBarItemBtn = document.querySelectorAll(
		".sub-section-bar-btn"
	);
	subSectionBarItemBtn.forEach((btn) => {
		if (btn === clickedBtn) {
			btn.classList.add("sub-section-bar-btn-active");
		} else {
			btn.classList.remove("sub-section-bar-btn-active");
		}
	});

	const clickedBtnData = clickedBtn.dataset.section;
	const subSectionBarItem = document.querySelectorAll(".sub-section-bar-item");

	subSectionBarItem.forEach((section) => {
		if (section.dataset.section === clickedBtnData) {
			section.classList.remove("hidden");
		} else section.classList.add("hidden");
	});
}

/* PA SECTION */
const paTracks = [
	{
		group: "hospitality",
		name: "boarding",
		script:
			"Ladies and gentlemen, welcome aboard. Please take your seats promptly and stow your carry-on luggage securely in the overhead lockers or under the seat in front of you. For your safety and comfort, fasten your seatbelts whenever you are seated, and ensure your seatbacks and tray tables are in the upright position. Our cabin crew is here to assist you if you require any assistance during boarding. Thank you for flying with us. We wish you a pleasant and comfortable journey.",
	},
	{
		group: "hospitality",
		name: "after-take-off",
		script:
			"Ladies and gentlemen, we have now reached cruising altitude and the seatbelt sign has been turned off. You may now use approved electronic devices in airplane mode. Our in-flight entertainment system and duty-free catalogue are available for your enjoyment. The cabin crew will shortly begin the meal and beverage service. Please sit back, relax, and enjoy your flight.",
	},
	{
		group: "hospitality",
		name: "service",
		script:
			"Ladies and gentlemen, the cabin crew will now begin the in-flight service. We offer a variety of refreshments and meals to suit your preferences. Passengers with special meal orders will be served first. Should you wish to enjoy any beverages or snacks, please let a crew member know. We are here to make your flight as comfortable as possible. Thank you for choosing to fly with us.",
	},
	{
		group: "hospitality",
		name: "duty-free",
		script:
			"Ladies and gentlemen, the duty-free shopping service is now open. Please take a moment to browse the catalogue located in your seat pocket. Our cabin crew will be happy to assist you with your orders. All items are tax-free and may be limited in quantity, so be sure to place your order early. Thank you for shopping with us.",
	},
	{
		group: "safety",
		name: "turbulence",
		script:
			"Attention please: We are anticipating some moderate turbulence ahead. For your safety, please return to your seats and fasten your seatbelt securely. We advise all passengers to remain seated with their seatbelts fastened until the seatbelt sign is turned off. Please secure any loose items and avoid moving around the cabin until further notice. Thank you for your co-operation.",
	},
	{
		group: "safety",
		name: "pre-take-off",
		script:
			"Ladies and gentlemen, as we prepare for take-off, please ensure your seatbelts are securely fastened, seats are in the upright position, and tray tables are stowed away. All carry-on items should be safely stored either under the seat in front of you or in the overhead lockers. Please switch all electronic devices to airplane mode. Smoking is strictly prohibited on this aircraft at all times. The safety demonstration will begin shortly. Thank you for your attention and co-operation.",
	},
	{
		group: "safety",
		name: "pre-landing",
		script:
			"Ladies and gentlemen, we will soon begin our descent. Please return to your seats and fasten your seatbelts securely. Ensure your seatbacks and tray tables are in their full upright and locked positions. Please secure all carry-on items for arrival. Electronic devices must remain off or in airplane mode until the aircraft has come to a complete stop at the gate. The cabin crew will collect any remaining service items. Thank you for flying with us and we hope to welcome you again soon.",
	},
	{
		group: "safety",
		name: "smoking",
		script:
			"For safety reasons, smoking is strictly prohibited on this aircraft, including inside the lavatories. Tampering with, disabling, or destroying any smoke detectors is illegal and subject to penalties. We appreciate your co-operation in maintaining a safe environment for all passengers.",
	},
	{
		group: "others",
		name: "cleaning",
		script:
			"For your health and safety, we kindly remind you to use the sanitising wipes and hand sanitisers provided in the cabin. Our crew will be conducting regular sanitisation during the flight, focusing on high-touch areas such as tray tables, armrests, and lavatories. We thank you for helping maintain a clean and comfortable environment.",
	},
	{
		group: "others",
		name: "ciq",
		script:
			"As we approach our destination, please ensure you have completed all customs, quarantine, and immigration forms found in your seat pocket. Have your travel and identification documents readily accessible for inspection upon arrival. If you have any questions, please ask a member of the cabin crew. We appreciate your co-operation and wish you a smooth arrival process.",
	},
];

const paTitleDisplay = document.getElementById("pa-title");
const paScriptDisplay = document.getElementById("pa-script");

const paLib = document.getElementById("pa-lib");
paLib.addEventListener("change", (event) => {
	const paName = event.target.value;
	const selectedIndex = event.target.selectedIndex;
	const paTitle = event.target.options[selectedIndex].text;
	paTitleDisplay.textContent = paTitle;

	if (paName === "default") {
		paScriptDisplay.textContent = "No track selected";
	} else {
		const track = paTracks.find((track) => track.name === paName);
		paScriptDisplay.textContent = track.script;
	}
});

/* AC SECTION */
//Fan Speed Adjustment
const fanSpeedData = [
	{ area: "frt", fan: "auto" },
	{ area: "mid", fan: "auto" },
	{ area: "aft", fan: "auto" },
];

const fanSpeedBtn = document.querySelectorAll(".ac-fanspeed-btn");
fanSpeedBtn.forEach((btn) => {
	btn.addEventListener("click", setFanSpeed);
});

const updateFanSpeed = () => {
	fanSpeedBtn.forEach((btn) => {
		let matchFound = false;
		const btnArea = btn.dataset.area;
		const btnFanSpeed = btn.dataset.fan;
		for (let i = 0; i < fanSpeedData.length; i++) {
			if (
				btnArea === fanSpeedData[i].area &&
				btnFanSpeed === fanSpeedData[i].fan
			) {
				matchFound = true;
				break;
			}
		}
		if (matchFound) {
			btn.classList.add("ac-fanspeed-btn-active");
		} else {
			btn.classList.remove("ac-fanspeed-btn-active");
		}
	});
};

updateFanSpeed();

function setFanSpeed(event) {
	const clickedBtn = event.currentTarget;
	const fanSpeedArea = clickedBtn.dataset.area;
	const fanSpeed = clickedBtn.dataset.fan;
	const targetArea = fanSpeedData.find(
		(target) => target.area === fanSpeedArea
	);
	targetArea.fan = fanSpeed;
	updateFanSpeed();
	console.log(`${targetArea.area} fan speed is set to ${fanSpeed}.`);
}

//Temperature Adjustment
const acTemp = document.querySelectorAll(".ac-temp-value");
const tempUpBtn = document.querySelectorAll(".ac-temp-up");
const tempDownBtn = document.querySelectorAll(".ac-temp-down");

tempUpBtn.forEach((btn) => {
	btn.addEventListener("click", increaseTemp);
});

tempDownBtn.forEach((btn) => {
	btn.addEventListener("click", decreaseTemp);
});

function increaseTemp(event) {
	const clickedBtn = event.currentTarget;
	const adjustArea = clickedBtn.dataset.area;
	acTemp.forEach((temp) => {
		if (temp.dataset.area === adjustArea) {
			let currentTemp = Number(temp.textContent);
			if (currentTemp >= 30) {
				return;
			} else {
				currentTemp++;
				temp.textContent = currentTemp;
				console.log(`${adjustArea} temperature is set to ${currentTemp}`);
			}
		}
	});
}

function decreaseTemp(event) {
	const clickedBtn = event.currentTarget;
	const adjustArea = clickedBtn.dataset.area;
	acTemp.forEach((temp) => {
		if (temp.dataset.area === adjustArea) {
			let currentTemp = Number(temp.textContent);
			if (currentTemp <= 15) {
				return;
			} else {
				currentTemp--;
				temp.textContent = currentTemp;
				console.log(`${adjustArea} temperature is set to ${currentTemp}`);
			}
		}
	});
}

/* MUSIC SECTION */

/* IFE SECTION */
