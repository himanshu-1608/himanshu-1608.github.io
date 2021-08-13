const androidScrollPathDesktop = {
	curviness: 0,
	autoRotate: false,
	values: [{ x: 15 * widthPercent, y: -30 * heightPercent }],
};

const elasticScrollPathDesktop = {
	curviness: 0,
	autoRotate: false,
	values: [
		{
			x: 0 * widthPercent,
			y: 0 * heightPercent,
			scaleX: 10,
			scaleY: 10,
			opacity: 1,
		},
		{
			x: 0 * widthPercent,
			y: -1000 * heightPercent,
			scaleX: 60,
			scaleY: 60,
			opacity: 1,
		},
		{
			x: 0 * widthPercent,
			y: -2000 * heightPercent,
			scaleX: 100,
			scaleY: 100,
			opacity: 1,
		},
	],
};

const logstashScrollPathDesktop = {
	curviness: 0,
	autoRotate: false,
	values: [
		{
			x: 0 * widthPercent,
			y: 0 * heightPercent,
			scaleX: 10,
			scaleY: 10,
			opacity: 1,
		},
		{
			x: -600 * widthPercent,
			y: 300 * heightPercent,
			scaleX: 50,
			scaleY: 50,
			opacity: 1,
		},
		{
			x: -1200 * widthPercent,
			y: 600 * heightPercent,
			scaleX: 100,
			scaleY: 100,
			opacity: 1,
		},
	],
};

const kibanaScrollPathDesktop = {
	curviness: 0,
	autoRotate: false,
	values: [
		{
			x: 0 * widthPercent,
			y: 0 * heightPercent,
			scaleX: 10,
			scaleY: 10,
			opacity: 1,
		},
		{
			x: 600 * widthPercent,
			y: 300 * heightPercent,
			scaleX: 50,
			scaleY: 50,
			opacity: 1,
		},
		{
			x: 1200 * widthPercent,
			y: 600 * heightPercent,
			scaleX: 100,
			scaleY: 100,
			opacity: 1,
		},
	],
};

const tweenTimeLineAndroidElastic = new TimelineLite();

tweenTimeLineAndroidElastic.add(
	TweenLite.to('#rotated-android', 3, {
		bezier: androidScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	0
);

tweenTimeLineAndroidElastic.add(
	TweenLite.to('#elk-elastic', 3, {
		bezier: elasticScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	3
);

tweenTimeLineAndroidElastic.add(
	TweenLite.to('#elk-logstash', 3, {
		bezier: logstashScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	6
);

tweenTimeLineAndroidElastic.add(
	TweenLite.to('#elk-kibana', 3, {
		bezier: kibanaScrollPathDesktop,
		ease: Power0.easeNone,
	}),
	9
);

const controllerAndroidElastic = new ScrollMagic.Controller();

const sceneAndroidElastic = new ScrollMagic.Scene({
	triggerElement: '.android-elastic',
	duration: 1000,
	triggerHook: '0',
})
	.setTween(tweenTimeLineAndroidElastic)
	.setPin('.android-elastic')
	.addTo(controllerAndroidElastic);
