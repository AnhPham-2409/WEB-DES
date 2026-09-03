
// let sample = [
//     {id: 1, name: "math", score: 8.5},
//     {id: 2, name: "english", score: 7},
//     {id: 3, name: "physics", score: 9}
// ]

// for (let i = 0; i < sample.length; i++) {
//     if (sample[i].score >= 8) {
//         console.log(sample[i])
//     }
// }

// function sumScore() {
//     let total = 0;

//     for (let i = 0; i < sample.length; i++) {
//         total += sample[i].score;
//     }

//     return total;
// }

// console.log(sumScore());

// function findHighest() {
//     let highest = sample[0];

//     for (let i = 1; i < sample.length; i++) {
//         if (sample[i].score > highest.score) {
//             highest = sample[i];
//         }
//     }

//     return highest;
// }

// console.log(findHighest());


// let card = document.querySelector("#semantic p");

// card.style.color = "red";

// console.log(card.textContent);



let noti = document.createElement("div");
document.body.appendChild(noti);
let message = document.createElement("p");
message.textContent = "This is a notification.";
noti.appendChild(message);

noti.style.backgroundColor = "blue";
noti.style.padding = "20px";


const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let budget = document.getElementById("budget").value;
    let usage = document.querySelector('input[name="usage"]:checked').value;
    let city = document.getElementById("city").value;
    let notes = document.getElementById("notes").value;

    console.log(fullname);
    console.log(budget);
    console.log(usage);
    console.log(city);
    console.log(notes);
});





