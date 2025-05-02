// Select the hamburger menu button
const menu_btn = document.querySelector('.hamburger');

// Select the mobile navigation menu
const mobile_menu = document.querySelector('.mobile-nav');

// Select main page sections to toggle visibility/styling
const section = document.querySelector('section');
const footer = document.querySelector('footer');
const hero = document.querySelector('.hero');
const heroVideo = document.querySelector('.heroVideo');


// Add a click event listener to the hamburger menu button

menu_btn.addEventListener('click', function () {
	// Toggle the 'is-active' class on the hamburger button (to animate to an "X")
	menu_btn.classList.toggle('is-active');

	// Toggle the mobile navigation menu open/close
	mobile_menu.classList.toggle('is-active');

	// Toggle the 'is-active' class on main page elements to apply menu-open styles/effects
	section.classList.toggle('is-active');
	footer.classList.toggle('is-active');
	hero.classList.toggle('is-active');
	heroVideo.classList.toggle('is-active');

});


// This function is triggered when the user submits a form or clicks a send button
function send() {
	// Display a simple alert thanking the user
	alert("Thank you for your message!");
}

