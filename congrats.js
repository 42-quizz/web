    // Play trumpet sound
    const audio = new Audio('success.mp3');
    audio.play();

    // Confetti animation
    function createConfetti() {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      confetti.style.opacity = Math.random();
      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }

    setInterval(createConfetti, 50);