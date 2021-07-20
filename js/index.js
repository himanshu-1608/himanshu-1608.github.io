const heightPercent = window.innerHeight / 100;
const widthPercent = window.innerWidth / 100;

const isPhone = () => window.innerWidth < 500;

const flightPathDesktop = {
	curviness: 0.5,
	autoRotate: true,
	values: [
		{ x: 0 * widthPercent, y: 0 * heightPercent, scaleX: 4, scaleY: 4 },
		{ x: 80 * widthPercent, y: -30 * heightPercent, scaleX: 3.5, scaleY: 3.5 },
		{ x: 90 * widthPercent, y: -70 * heightPercent, scaleX: 3, scaleY: 3 },
		{ x: 40 * widthPercent, y: -70 * heightPercent, scaleX: 2.5, scaleY: 2.5 },
		{ x: 40 * widthPercent, y: -40 * heightPercent, scaleX: 2, scaleY: 2 },
		{ x: 55 * widthPercent, y: -30 * heightPercent, scaleX: 1.5, scaleY: 1.5 },
		{ x: 70 * widthPercent, y: -40 * heightPercent, scaleX: 1.2, scaleY: 1.2 },
		{ x: 80 * widthPercent, y: -47 * heightPercent, scaleX: 1, scaleY: 1 },
	],
};

const flightPathMobile = {
	curviness: 0.5,
	autoRotate: true,
	values: [
		{ x: 0 * widthPercent, y: 0 * heightPercent, scaleX: 4, scaleY: 4 },
		{ x: 80 * widthPercent, y: -30 * heightPercent, scaleX: 3.5, scaleY: 3.5 },
		{ x: 90 * widthPercent, y: -70 * heightPercent, scaleX: 3, scaleY: 3 },
		{ x: 40 * widthPercent, y: -80 * heightPercent, scaleX: 2.5, scaleY: 2.5 },
		{ x: 10 * widthPercent, y: -70 * heightPercent, scaleX: 2.5, scaleY: 2.5 },
		{ x: 20 * widthPercent, y: -40 * heightPercent, scaleX: 2, scaleY: 2 },
		{ x: 70 * widthPercent, y: -40 * heightPercent, scaleX: 1.2, scaleY: 1.2 },
	],
};

const addIntroAnimations = () => {
	// remove loader
	let loadingPage = document.getElementById('loading-page');
	loadingPage.parentElement.removeChild(loadingPage);

	// add animations

	// Intro Animation
	let introElem = document.getElementById('intro');
	introElem.classList.add('introscale');

	// Techsamurai animation
	let imgSamurai = document.getElementById('samurai-img');
	imgSamurai.classList.add('samuraiemergeleft');

	// PaperPlane Animation
	isPhone()
		? TweenLite.to('#paperplane-img', 2, {
				bezier: flightPathMobile,
				ease: Power1.easeOut,
		  })
		: TweenLite.to('#paperplane-img', 2, {
				bezier: flightPathDesktop,
				ease: Power1.easeOut,
		  });
};

// addIntroAnimations();

// window.onload clustered here
window.onload = (event) => {
	// after 1 sec
	setTimeout(() => {
		addIntroAnimations();
	}, 1000);
};
