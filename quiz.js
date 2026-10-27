const quizForm = document.querySelector("#animal-quiz");

if (quizForm) {
  const quizResult = document.querySelector("#quiz-result");

  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedAnswer = quizForm.querySelector('input[name="answer"]:checked');
    quizResult.classList.remove("correct", "incorrect");

    if (!selectedAnswer) {
      quizResult.textContent = "Choose an answer first, then check again.";
      return;
    }

    if (selectedAnswer.value === "cat") {
      quizResult.textContent = "That is right! Cats often enjoy climbing and finding cosy places to rest.";
      quizResult.classList.add("correct");
    } else {
      quizResult.textContent = "Not quite. The answer is a cat. You can read more on the Animals page.";
      quizResult.classList.add("incorrect");
    }
  });
}
