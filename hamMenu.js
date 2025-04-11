
	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');
	const section = document.querySelector('section');
	const footer = document.querySelector('footer');
	const hero = document.querySelector('.hero');
	const heroImage = document.querySelector('.heroImage');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
        section.classList.toggle('is-active');
        footer.classList.toggle('is-active');
        hero.classList.toggle('is-active');
        heroImage.classList.toggle('is-active');

	});
