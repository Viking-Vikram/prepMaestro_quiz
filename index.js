"use strict";

const labelTimer = document.querySelector(".timer");
const drop = document.querySelector(".drop");
const paragraph = document.querySelector(".paragraph");
var qtContainer = document.querySelector(".qt-container");
const timerContainer = document.querySelector(".timer-container");

const startLogoutTimer = function () {
	const tick = function () {
		const min = Math.trunc(String(time / 60).padStart(2, 0));
		const sec = String(time % 60).padStart(2, 0);

		labelTimer.textContent = `${min} Min : ${sec} Secs`;

		if (time <= 10) {
			timerContainer.style.animation = "blink 1s infinite";
		}
		if (time === 0) {
			clearInterval(timer);
			labelTimer.textContent = "Time out";
		}

		time--;
	};

	let time = 300;

	tick();
	const timer = setInterval(tick, 1000);
	console.log(timer);

	return timer;
};
startLogoutTimer();

window.onscroll = function () {
	if (
		document.body.scrollTop >= 50 ||
		document.documentElement.scrollTop >= 50
	) {
		qtContainer.classList.add("position");
	} else {
		qtContainer.classList.remove("position");
	}
};

drop.addEventListener("click", () => {
	paragraph.classList.toggle("show");
});
