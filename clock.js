let startTime;
let timerInterval;
const countdownTime = 42 * 60 * 1000; // 42 minutes in milliseconds
let remainingTime = localStorage.getItem('remainingTime') ? parseInt(localStorage.getItem('remainingTime')) : countdownTime;

function startTimer() {
	startTime = Date.now();
	timerInterval = setInterval(() => {
		const elapsedTime = Date.now() - startTime;
		remainingTime -= elapsedTime;
		startTime = Date.now();

		if (remainingTime <= 0) {
			clearInterval(timerInterval);
			remainingTime = 0;
			document.getElementById('time').innerText = '0:00';
			alert("Game Over! Time's up.");
			// Optional: redirect to a "Game Over" page
			// window.location.href = 'gameover.html';
		} else {
			const minutes = Math.floor(remainingTime / 60000);
			const seconds = Math.floor((remainingTime % 60000) / 1000);
			document.getElementById('time').innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
			localStorage.setItem('remainingTime', remainingTime);
		}
	}, 1000);
}

function stopTimer() {
	clearInterval(timerInterval);
	localStorage.setItem('remainingTime', remainingTime);
}

window.onload = startTimer;
