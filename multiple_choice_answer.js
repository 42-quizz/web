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
		1: "0", 
		2: "1", 
		3: "1", 
		4: "1",
		5: "0",
		6: "1", 
		7: "1", 
		8: "1", 
		9: "1", 
		10: "1", 
		11: "1", 
		12: "1", 
		13: "1", 
		14: "1", 
		15: "1", 
		16: "1", 
		17: "1", 
		18: "1", 
		19: "1", 
		20: "Veolia", 
		21: "1", 
		22: "1", 
		23: "1", 
		24: "1", 
		25: "1", 
		26: "1", 
		27: "1", 
		28: "1", 
		29: "1", 
		30: "1", 
		31: "1", 
		32: "1", 
		33: "1", 
		34: "1", 
		35: "1", 
		36: "1",
		37: "1",
		38: "1",
		39: "1",
		40: "1",
		41: "1",
		42: "1"
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