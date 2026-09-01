export function renderQuestions(questions) {
  const container = document.querySelector(".questions-list");

  container.innerHTML = questions
    .map((question) => {
      return `
            <article class="question">

                <button class="question-button">
                    <span>${question.question}</span>
                    <span class="question-icon">+</span>
                </button>

                <div class="answer">
                    ${question.answer}
                </div>

            </article>
        `;
    })
    .join("");

  const buttons = document.querySelectorAll(".question-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;

      answer.classList.toggle("show");

      button.classList.toggle("active");
    });
  });
}
