document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtenir le chemin actuel
    const currentPath = window.location.pathname;
    // Extraire le numéro de la page actuelle
    const currentPageNumber = parseInt(currentPath.match(/(\d+)/)[0]);
    
    // Définir la bonne réponse en fonction de la page actuelle
    const correctAnswers = {
	1: "10",
	2: "20",
	3: "30",
	4: "40",
	5: "42",
	6: "60",
	7: "70",
	8: "80",
	9: "SorbetCitron",
	10: "libft",
	11: "1", 
	12: "1", 
	13: "1", 
	14: "1", 
	15: "1", 
	16: "1", 
	17: "1", 
	18: "1", 
	19: "1", 
	20: "1", 
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
    
    const answer = document.getElementById('answer').value.trim();
    const feedback = document.getElementById('feedback');
    
    if (answer === correctAnswer) {
      feedback.textContent = "Correct! Moving to the next question...";
      feedback.className = "correct";
      
      // Calculer le numéro de la prochaine page
      const nextPageNumber = currentPageNumber + 1;
      
      // Rediriger vers la prochaine page, sauf si c'est la dernière page
      if (nextPageNumber <= 42) {
        setTimeout(() => {
          window.location.href = nextPageNumber + ".html";
        }, 1500);
      } else {
        feedback.textContent = "You have completed all questions!";
      }
    } else {
      feedback.textContent = "Incorrect. Try again!";
      feedback.className = "incorrect";
    }
  });