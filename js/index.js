let personList = document.querySelectorAll('.person');

let faceList = Array.from(personList).map((person) => {
	return person.querySelector('.face');
});
let armList = Array.from(personList).map((person) => {
	return person.querySelectorAll('.arms');
});
document.addEventListener('mousemove', (e) => {
	for (let i = 0; i < personList.length; i++) {
		let face = faceList[i];
		let faceBoundingRect = face.getBoundingClientRect();
		if (
			(faceBoundingRect.top >= 0 &&
				faceBoundingRect.bottom <= window.innerHeight) ||
			(faceBoundingRect.top < window.innerHeight &&
				faceBoundingRect.bottom >= 0)
		) {
			let arms = armList[i];
			let faceCenter = {
				x: faceBoundingRect.left + faceBoundingRect.width / 2,
				y: faceBoundingRect.top + faceBoundingRect.height / 2,
			};
			let angle =
				Math.atan2(e.pageX - faceCenter.x, -(e.pageY - faceCenter.y)) *
				(180 / Math.PI);
			if (angle >= 0 && angle <= 180) {
				face.style.transform = `rotate(${angle - 90}deg)`;
				for (arm of arms) {
					arm.style.transform = `rotate(${angle - 90}deg)`;
				}
			}

			if (angle > -180 && angle < 0) {
				face.style.transform = `rotate(${angle + 90}deg) scale(-1,1)`;
				for (arm of arms) {
					arm.style.transform = `rotate(${angle - 90}deg)`;
				}
			}
		}
	}
});
