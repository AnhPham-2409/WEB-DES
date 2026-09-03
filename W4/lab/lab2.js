let sample = [
    { id: 1, name: "math", score: 8.5 },
    { id: 2, name: "english", score: 7 },
    { id: 3, name: "physics", score: 9 }
];

const form = document.getElementById("scoreForm");
let errorEl = null;

function clearError() {
    if (errorEl) {
        errorEl.remove();
        errorEl = null;
    }
}

function showError(message) {
    clearError();

    errorEl = document.createElement("p");
    errorEl.textContent = message;
    errorEl.style.color = "red";
    form.insertAdjacentElement("afterend", errorEl);
}

function showSuccess(message) {
    clearError();

    const successEl = document.createElement("p");
    successEl.textContent = message;
    successEl.style.color = "green";
    form.insertAdjacentElement("afterend", successEl);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const subject1 = document.getElementById("subject1").value;
    const subject2 = document.getElementById("subject2").value;
    const subject3 = document.getElementById("subject3").value;

    if (subject1 === "" || subject2 === "" || subject3 === "") {
        showError("Error: All subject fields are required.");
        return;
    }

    const score1 = Number(subject1);
    const score2 = Number(subject2);
    const score3 = Number(subject3);

    if (score1 <= 0 || score2 <= 0 || score3 <= 0) {
        showError("Error: Scores must be positive numbers.");
        return;
    }

    console.log("Submitted values:");
    console.log("Subject 1:", score1);
    console.log("Subject 2:", score2);
    console.log("Subject 3:", score3);

    showSuccess("Ready to submit.");
});


for (let i = 0; i < sample.length; i++) {
    if (sample[i].score >= 8) {
        console.log(sample[i]);
    }
}

function sumScore() {
    let total = 0;

    for (let i = 0; i < sample.length; i++) {
        total += sample[i].score;
    }

    return total;
}

console.log(sumScore());

function findHighest() {
    let highest = sample[0];

    for (let i = 1; i < sample.length; i++) {
        if (sample[i].score > highest.score) {
            highest = sample[i];
        }
    }

    return highest;
}

console.log(findHighest());