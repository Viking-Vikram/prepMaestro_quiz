const labelTimer = document.querySelector(".timer");
const timerContainer = document.querySelector(".timer-container");
const drop = document.querySelector(".drop");
const paragraph = document.querySelector(".paragraph");

const startLogoutTimer = function () {
	const tick = function () {
		const min = Math.trunc(String(time / 60).padStart(2, 0));
		const sec = String(time % 60).padStart(2, 0);

		// In each call print time
		labelTimer.textContent = `${min} Min : ${sec} Secs`;

		if (time === 0) {
			clearInterval(timer);
			labelTimer.textContent = "Time out";
		}

		// decrease timer by 1 second
		time--;
	};
	// set time to 2 minutes
	let time = 600;
	// call timer every second
	tick();
	const timer = setInterval(tick, 1000);
	console.log(timer);
	if (time <= 5) {
		timerContainer.style.backgroundColor = "#e52165";
	}
	return timer;
};
// startLogoutTimer();

drop.addEventListener("click", () => {
	paragraph.classList.toggle("show");
});
