const quizForm = document.getElementById("quizForm");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");
quizForm.addEventListener("change", (e) => {
    const selected = e.target;
    if (selected.type === "radio") {
        const labels = selected.closest(".question").querySelectorAll("label");
        labels.forEach(label => label.style.color = "");
        if (selected.value === questions[index].answer) {
    score++;
}

    }
});
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let score = 0;
    const answers = quizForm.querySelectorAll("input[type='radio']:checked");
    answers.forEach(answer => {
        score += parseInt(answer.value);
    });

    resultDiv.textContent = `You scored ${score} out of 5`;
});
