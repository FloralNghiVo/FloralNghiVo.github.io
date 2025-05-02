// step 1: focus in -> picture smaller, the text appears below
// check how get focus state in html via js. ex: how to listen when picture is focused in js
// check how to make pic smaller in js
// check how to append text below the picture

// step 2: focus out / blur -> remove
// how to listen when the focus is out in html in js

var img = document.getElementById('image');
var textContainer = document.getElementById('textContainer');

var defaultWidth = img.style.width

img.addEventListener('focus', (e) => {
	img.style.width = "200px"
	const existingUrl = document.getElementById("testUrl")
	if (!existingUrl) {
		const url = document.createElement('a');
		url.href = 'https://www.pinterest.com/pin/3870349673848365/';
		urlrl.innerText = 'Visit Example.com';
		urlrl.id = 'testUrl';
		urlrl.target = '_blank'; // Open in new tab
		url.style.display = 'block';
		url.style.marginTop = '10px';
		textContainer.appendChild(Url);
	} else {
		existingUrl.style.display = 'block';
		existingUrl.style.marginTop = '10px';
	}

});

img.addEventListener('blur', () => {
	setTimeout(() => {
		img.style.width = defaultWidth; // Restore original size
		const Url = document.getElementById('testUrl');
		if (Url) {
			// window.open(Url.href, '_blank');

			Url.style.display = "none" // Remove Url
		}
	}, 200);

});