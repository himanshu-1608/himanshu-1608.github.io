const heightPercent = window.innerHeight / 100;
const widthPercent = window.innerWidth / 100;

const isPhone = () => window.innerWidth < 850;

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
		{ x: 20 * widthPercent, y: -30 * heightPercent, scaleX: 2, scaleY: 2 },
		{ x: 70 * widthPercent, y: -30 * heightPercent, scaleX: 1.2, scaleY: 1.2 },
	],
};

const samuraiScrollPath = {
	curviness: 1,
	autoRotate: false,
	values: [{ x: -400 }],
};

const planeScrollPath = {
	curviness: 0,
	autoRotate: false,
	values: [
		{
			x: 150 * widthPercent,
			y: -40 * heightPercent,
			scaleX: 0,
			scaleY: 0,
		},
	],
};

const addIntroAnimations = () => {
	// remove loader
	let loadingPage = document.getElementById('loading-page');
	loadingPage.parentElement.removeChild(loadingPage);

	// add animations

	// Intro Animation
	let introElem = document.getElementById('intro');
	introElem.classList.add('animate-intro');

	// Techsamurai animation
	let imgSamurai = document.getElementById('img-samurai-animate');
	imgSamurai.classList.add('animate-samurai');
	setTimeout(() => {
		if (!isPhone()) {
			let imgSamuraiAnimate = document.getElementById('img-samurai-animate');
			imgSamuraiAnimate.parentElement.removeChild(imgSamuraiAnimate);
			let imgSamuraiScroll = document.getElementById('img-samurai-scroll');
			imgSamuraiScroll.style.display = 'block';
		}
	}, 2000);
	// PaperPlane Animation
	isPhone()
		? TweenLite.to('#img-plane-animate', 2, {
				bezier: flightPathMobile,
				ease: Power1.easeOut,
		  })
		: TweenLite.to('#img-plane-animate', 2, {
				bezier: flightPathDesktop,
				ease: Power1.easeOut,
		  });
	setTimeout(() => {
		let imgPlaneAnimate = document.getElementById('img-plane-animate');
		let imgPlaneScroll = document.getElementById('img-plane-scroll');

		imgPlaneScroll.style.transform = imgPlaneAnimate.style.transform;
		imgPlaneAnimate.parentElement.removeChild(imgPlaneAnimate);
		imgPlaneScroll.style.display = 'block';
	}, 2000);

	const tweenTimeLine = new TimelineLite();

	tweenTimeLine.add(
		TweenLite.to('.img-samurai-scroll', 2, {
			bezier: samuraiScrollPath,
			ease: Power1.easeOut,
		})
	);
	tweenTimeLine.add(
		TweenLite.to('.img-plane-scroll', 1, {
			bezier: planeScrollPath,
			ease: Power1.easeIn,
		}),
		0
	);
	const controller = new ScrollMagic.Controller();

	const scene = new ScrollMagic.Scene({
		triggerElement: 'header',
		duration: 1000,
		triggerHook: '0',
	})
		.setTween(tweenTimeLine)
		.addIndicators()
		.addTo(controller);
};

addIntroAnimations();

// // window.onload clustered here
// window.onload = (event) => {
// 	// after 1 sec
// 	setTimeout(() => {
// 		// addIntroAnimations();
// 	}, 1000);
// };

// const amplifyScrollPathMobile = {
// 	curviness: 1.5,
// 	autoRotate: false,
// 	values: [
// 		{ x: 0 * widthPercent, y: 30 * heightPercent },
// 		{ x: 20 * widthPercent, y: 40 * heightPercent },
// 		{ x: 40 * widthPercent, y: 60 * heightPercent },
// 		{ x: 20 * widthPercent, y: 80 * heightPercent },
// 		{ x: 0 * widthPercent, y: 90 * heightPercent },
// 	],
// };

const amplifyScrollPathDesktop = {
	curviness: 1.5,
	autoRotate: false,
	values: [
		{ x: 0 * widthPercent, y: 15 * heightPercent },
		{ x: 35 * widthPercent, y: 13 * heightPercent },
		{ x: 55 * widthPercent, y: 53 * heightPercent },
		{ x: 35 * widthPercent, y: 93 * heightPercent },
	],
};

const reactScrollPathDesktop = {
	curviness: 1.5,
	autoRotate: false,
	values: [
		{ x: 0 * widthPercent, y: -5 * heightPercent },
		{ x: -10 * widthPercent, y: 43 * heightPercent },
		{ x: -15 * widthPercent, y: 63 * heightPercent },
		{ x: -35 * widthPercent, y: 103 * heightPercent },
		{ x: -55 * widthPercent, y: 63 * heightPercent },
	],
};

const firebaseAuthScrollPathDesktop = {
	curviness: 1.5,
	autoRotate: false,
	values: [
		{ x: 0 * widthPercent, y: 5 * heightPercent },
		{ x: -25 * widthPercent, y: -17 * heightPercent },
		{ x: -45 * widthPercent, y: -57 * heightPercent },
		{ x: -25 * widthPercent, y: -97 * heightPercent },
	],
};

const firebaseCloudFnsScrollPathDesktop = {
	curviness: 1.5,
	autoRotate: false,
	values: [
		{ x: -5 * widthPercent, y: 0 * heightPercent },
		{ x: 0 * widthPercent, y: 0 * heightPercent },
		{ x: 0 * widthPercent, y: -17 * heightPercent },
		{ x: -5 * widthPercent, y: -57 * heightPercent },
		{ x: 15 * widthPercent, y: -97 * heightPercent },
		{ x: 28 * widthPercent, y: -81 * heightPercent },
	],
};

const awsCognitoScrollPathDesktop = {
	curviness: 1.5,
	autoRotate: false,
	values: [
		{ x: -55 * widthPercent, y: -17 * heightPercent },
		{ x: -75 * widthPercent, y: -57 * heightPercent },
		{ x: -68 * widthPercent, y: -81 * heightPercent },
	],
};

const serverlessScrollPathDesktop = {
	curviness: 1.5,
	autoRotate: false,
	values: [
		{ x: -4 * widthPercent, y: 0 * heightPercent },
		{ x: 15 * widthPercent, y: 23 * heightPercent },
		{ x: 35 * widthPercent, y: 63 * heightPercent },
		{ x: 15 * widthPercent, y: 103 * heightPercent },
		{ x: 2 * widthPercent, y: 87 * heightPercent },
	],
};

const npmPackageScrollPathDesktop = {
	curviness: 1.5,
	autoRotate: false,
	values: [
		{ x: 0 * widthPercent, y: 20 * heightPercent },
		{ x: 0 * widthPercent, y: 0 * heightPercent },
		{ x: 35 * widthPercent, y: -27 * heightPercent },
		{ x: 55 * widthPercent, y: 13 * heightPercent },
		{ x: 48 * widthPercent, y: 37 * heightPercent },
	],
};

const phpScrollPathDesktop = {
	curviness: 1.5,
	autoRotate: false,
	values: [
		{ x: 0 * widthPercent, y: -18 * heightPercent },
		{ x: 0 * widthPercent, y: 0 * heightPercent },
		{ x: 15 * widthPercent, y: -20 * heightPercent },
		{ x: 35 * widthPercent, y: -47 * heightPercent },
		{ x: 55 * widthPercent, y: -7 * heightPercent },
	],
};

const tweenTimeLineFrontend = new TimelineLite();

// isPhone()
// 	? tweenTimeLineFrontend.add(
// 			TweenLite.to('#cover-amplify', 1, {
// 				bezier: amplifyScrollPathMobile,
// 				ease: Power0.easeNone,
// 			})
// 	  )

tweenTimeLineFrontend.add(
	TweenLite.to('#cover-amplify', 3, {
		bezier: amplifyScrollPathDesktop,
		ease: Power0.easeNone,
	})
);

tweenTimeLineFrontend.add(
	TweenLite.to('#cover-react', 3, {
		bezier: reactScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	0
);

tweenTimeLineFrontend.add(
	TweenLite.to('#cover-firebase-auth', 3, {
		bezier: firebaseAuthScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	0
);

tweenTimeLineFrontend.add(
	TweenLite.to('#cover-firebase-cloud-fns', 3, {
		bezier: firebaseCloudFnsScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	0
);

tweenTimeLineFrontend.add(
	TweenLite.to('#cover-aws-cognito', 3, {
		bezier: awsCognitoScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	0
);

tweenTimeLineFrontend.add(
	TweenLite.to('#cover-serverless', 3, {
		bezier: serverlessScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	0
);

tweenTimeLineFrontend.add(
	TweenLite.to('#cover-npm-package', 3, {
		bezier: npmPackageScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	0
);

tweenTimeLineFrontend.add(
	TweenLite.to('#cover-php', 3, {
		bezier: phpScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	0
);

const controllerFrontend = new ScrollMagic.Controller();

const sceneFrontend = new ScrollMagic.Scene({
	triggerElement: '.frontend',
	duration: 1000,
	triggerHook: '0',
})
	.setTween(tweenTimeLineFrontend)
	.addIndicators()
	.setPin('.frontend')
	.addTo(controllerFrontend);

const tweenTimeLineBackend = new TimelineLite();

const boatScrollPathDesktop = {
	curviness: 1.0,
	autoRotate: true,
	values: [
		{ x: 10 * widthPercent, y: 1 * heightPercent },
		{ x: 20 * widthPercent, y: 2 * heightPercent },
		{ x: 40 * widthPercent, y: 4 * heightPercent },
		{ x: 50 * widthPercent, y: 2 * heightPercent },
		{ x: 55 * widthPercent, y: 1.5 * heightPercent },
		{ x: 60 * widthPercent, y: 0 * heightPercent },
		{ x: 70 * widthPercent, y: 0 * heightPercent },
		{ x: 75 * widthPercent, y: 0.5 * heightPercent },
		{ x: 80 * widthPercent, y: 1 * heightPercent },
		{ x: 85 * widthPercent, y: 2 * heightPercent },
		{ x: 90 * widthPercent, y: 1.75 * heightPercent },
		{ x: 100 * widthPercent, y: 0 * heightPercent },
		{ x: 110 * widthPercent, y: 1 * heightPercent },
		{ x: 125 * widthPercent, y: 1.5 * heightPercent },
		{ x: 130 * widthPercent, y: 1.5 * heightPercent },
	],
};

tweenTimeLineBackend.add(
	TweenLite.to('#boat-node', 3, {
		bezier: boatScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	0
);

tweenTimeLineBackend.add(
	TweenLite.to('#boat-python', 3, {
		bezier: boatScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	1
);

tweenTimeLineBackend.add(
	TweenLite.to('#boat-nosql', 3, {
		bezier: boatScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	2
);

tweenTimeLineBackend.add(
	TweenLite.to('#boat-sql', 3, {
		bezier: boatScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	3
);

const controllerBackend = new ScrollMagic.Controller();

const sceneBackend = new ScrollMagic.Scene({
	triggerElement: '.backend',
	duration: 1000,
	triggerHook: '0',
})
	.setTween(tweenTimeLineBackend)
	.addIndicators()
	.setPin('.backend')
	.addTo(controllerBackend);
