document.addEventListener('DOMContentLoaded', function() {
	const quizForm = document.getElementById('quiz-form');
	const feedback = document.getElementById('feedback');
  
	quizForm.addEventListener('submit', function(e) {
	  e.preventDefault();
  
	  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
	  if (!selectedAnswer) {
		alert('Please select an answer.');
		return;
	  }
  
	  const answer = selectedAnswer.value;
  
	  // Obtenir le chemin actuel
	  const currentPath = window.location.pathname;
	  // Extraire le numéro de la question actuelle à partir de l'URL
	  const currentPageNumber = parseInt(currentPath.match(/(\d+)\.html/)[1]);
  
	  // Définir les bonnes réponses pour chaque question
	  const correctAnswers = {
		1: "Option2", // Réponse pour question 1
		2: "Option1", // Réponse pour question 2
		3: "10", // Réponse pour question 3
		// Ajoutez d'autres réponses correctes au besoin
	  };
  
	  const correctAnswer = correctAnswers[currentPageNumber];
  
	  if (answer === correctAnswer) {
		feedback.textContent = "Correct! Moving to the next question...";
		feedback.className = "correct";
  
		// Calculer le numéro de la prochaine question
		const nextPageNumber = currentPageNumber + 1;
  
		// Rediriger vers la prochaine question, sauf si c'est la dernière question
		if (nextPageNumber <= Object.keys(correctAnswers).length) {
		  setTimeout(() => {
			window.location.href = `${nextPageNumber}.html`;
		  }, 1500);
		} else {
		  feedback.textContent = "You have completed all questions!";
		  // Par exemple, rediriger vers une page de félicitations
		  setTimeout(() => {
			window.location.href = "congrats.html";
		  }, 1500);
		}
	  } else {
		feedback.textContent = "Incorrect. Try again!";
		feedback.className = "incorrect";
	  }
	});
  });