/* Get all cabin menu buttons; this returns a NodeList of elements 
   with the class "cabin-menu-btn" */
const cabinMenuBtn = document.querySelectorAll(".cabin-menu-btn");

/* Add a click event listener to each button.
   When a button is clicked, it triggers the 'toggleSection' function.
   The event listener automatically passes an event object to the function, which contains information about the click event and the element that was clicked. */
cabinMenuBtn.forEach((btn) => {
	btn.addEventListener("click", toggleSection);
});

//TOGGLE SECTION ON/OFF
function toggleSection(event) {
	console.clear();
	console.log("button clicked!");
	/* 'event.currentTarget' refers to the button that was actually clicked, ensuring we are handling the correct element even if event bubbling occurs. */
	const clickedBtn = event.currentTarget;

	/* Access the custom data attribute 'data-section' of the clicked button. This lets us know which section the button corresponds to. */
	const clickedBtnData = clickedBtn.dataset.section;

	/* Select all sections with the class "cabin-section" to show or hide them accordingly. */
	const cabinSection = document.querySelectorAll(".cabin-section");

	/* Loop through each section and compare its 'data-section' value with the clicked button's.
	   If they match, remove the 'hidden' class to show the section.
	   If not, add the 'hidden' class to hide the section. */
	cabinSection.forEach((section) => {
		if (section.dataset.section === clickedBtnData) {
			section.classList.remove("hidden");
		} else section.classList.add("hidden");
	});
	console.log(`currently shown: ${event.currentTarget.dataset.section}`);
}
