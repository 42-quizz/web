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
      5: "50",
      6: "60",
      7: "70",
      8: "80",
      9: "90",
      10: "100"
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
      if (nextPageNumber <= 10) {
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