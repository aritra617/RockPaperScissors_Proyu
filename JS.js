// Soft greeting instead of alert
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usUpdate = document.querySelector("#user-score");
const csUpdate = document.querySelector("#comp-score");

// Initial message
msg.innerText = "Hey Proyukta 😌 Pick your move.";

// Click handling
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const uc = choice.getAttribute("id");
        play(uc);
    });
});

// Generate computer choice
const genComp = () => {
    const opt = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3);
    return opt[i];
};

// Main function
const play = (uc) => {

    const cc = genComp();

    // DRAW
    if (uc === cc) {
        msg.innerText = `Same move, its a draw (${cc})`;
        msg.style.background = "linear-gradient(135deg, #FFD0EC, #FF9BD2)";
    } 
    else {

        let userwin = true;

        if (uc === "rock") {
            userwin = cc === "paper" ? false : true;
        } 
        else if (uc === "paper") {
            userwin = cc === "scissors" ? false : true;
        } 
        else if (uc === "scissors") {
            userwin = cc === "rock" ? false : true;
        }

        // USER WINS
        if (userwin) {
            userScore++;
            usUpdate.innerText = userScore;

            msg.innerText = `YAYY Proyukta wins 😌 ${uc} beats ${cc}`;
            msg.style.background = "linear-gradient(135deg, #A8FF78, #78FFD6)";
        } 
        // USER LOSES
        else {
            compScore++;
            csUpdate.innerText = compScore;

            msg.innerText = `Eh you lose 😑 ${cc} beats ${uc}`;
            msg.style.background = "linear-gradient(135deg, #FF6A6A, #FF9A9E)";
        }
    }

    // Smooth little pop animation
    msg.style.transform = "scale(1.05)";
    setTimeout(() => {
        msg.style.transform = "scale(1)";
    }, 150);
};
