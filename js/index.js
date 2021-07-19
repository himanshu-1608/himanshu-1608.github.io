const heightPercent = window.innerHeight / 100;
const widthPercent = window.innerWidth / 100;

const isPhone = () => window.innerWidth < 500;

const flightPathDesktop = {
	curviness: 0.2,
	autoRotate: true,
	values: [
		{ x: 0 * widthPercent, y: 0 * heightPercent, scaleX: 5, scaleY: 5 },
		{ x: 70 * widthPercent, y: -65 * heightPercent, scaleX: 5, scaleY: 4.5 },
		{ x: 140 * widthPercent, y: -130 * heightPercent, scaleX: 4, scaleY: 4 },
		{ x: 50 * widthPercent, y: -140 * heightPercent, scaleX: 3, scaleY: 3 },
		{ x: 60 * widthPercent, y: 20 * heightPercent, scaleX: 3, scaleY: 3 },
		{ x: 80 * widthPercent, y: 50 * heightPercent, scaleX: 2, scaleY: 2 },
		{ x: 140 * widthPercent, y: 40 * heightPercent, scaleX: 1.5, scaleY: 1.5 },
		{ x: 90 * widthPercent, y: -90 * heightPercent, scaleX: 1.5, scaleY: 1.5 },
		{ x: 10 * widthPercent, y: -90 * heightPercent, scaleX: 1.5, scaleY: 1.5 },
		{ x: 10 * widthPercent, y: -60 * heightPercent, scaleX: 1.5, scaleY: 1.5 },
		{ x: 25 * widthPercent, y: -30 * heightPercent, scaleX: 1.5, scaleY: 1 },
		{ x: 70 * widthPercent, y: -50 * heightPercent, scaleX: 1, scaleY: 1 },
	],
};

const flightPathMobile = {
	curviness: 0.5,
	autoRotate: true,
	values: [
		{ x: 0 * widthPercent, y: 0 * heightPercent, scaleX: 5, scaleY: 5 },
		{ x: 70 * widthPercent, y: -65 * heightPercent, scaleX: 5, scaleY: 4.5 },
		{ x: 140 * widthPercent, y: -130 * heightPercent, scaleX: 4, scaleY: 4 },
		{ x: 50 * widthPercent, y: -140 * heightPercent, scaleX: 3, scaleY: 3 },
		{ x: 60 * widthPercent, y: 20 * heightPercent, scaleX: 3, scaleY: 3 },
		{ x: 80 * widthPercent, y: 50 * heightPercent, scaleX: 2, scaleY: 2 },
		{ x: 140 * widthPercent, y: 40 * heightPercent, scaleX: 1.5, scaleY: 1.5 },
		{ x: 90 * widthPercent, y: -90 * heightPercent, scaleX: 1.5, scaleY: 1.5 },
		{ x: 10 * widthPercent, y: -90 * heightPercent, scaleX: 1.5, scaleY: 1.5 },
		{ x: -10 * widthPercent, y: -60 * heightPercent, scaleX: 1.5, scaleY: 1.5 },
		{ x: 0 * widthPercent, y: -30 * heightPercent, scaleX: 1.5, scaleY: 1.5 },
		{ x: 25 * widthPercent, y: -30 * heightPercent, scaleX: 1.5, scaleY: 1 },
		{ x: 70 * widthPercent, y: -38 * heightPercent, scaleX: 1, scaleY: 1 },
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

// window.onload clustered here
window.onload = (event) => {
	// after 1 sec
	setTimeout(() => {
		addIntroAnimations();
	}, 1000);
};
