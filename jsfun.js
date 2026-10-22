const chaosButton = document.querySelector("#chaos-button");
const buttonResult = document.querySelector("#button-result");
const logo = document.querySelector("#logo");
const backToTop = document.querySelector("#back-to-top");

const buttonMessages = [
    "Good heavens! You have, perchance, engaged with that most remarkable of mechanisms—the button, as it is commonly denominated? What an utterly unforeseen turn of events! (Alas, it is not.)",
    "welcome to x-plane 12! you're in a multi hour flight. you're about to finish-OH-ctd.",
    "-> pipis.",
    "my favorite color is orange. could you tell???",
    "idk what to say...",
    "the reverse psychology worked PERFECTLY. you are now a pro button presser",
    "somewhere, a transistor is just doing its job along with bilions of others in a cpu just to run this button",
    "hello! it's itsjuanb. thanks for pressing the button. i hope you have a gud day.",
    "The website is now 0.0001% more powerful.",
    "an error has occurred. that's all we know. good luck figuring it out!!",
    "you see a wild anole. it's nothing like you've seen before- FENCE",
    "Your mission has been accepted. Your mission has been forgotten.",
    "i hope you like this absolutely incredible feature that i'm going to keep adding to for no reason.",
    "the website has become 0.0001% more orange.",
    "a big button that says do not press. how tempting. and of course you pressed it.",
    "thank you. for pressing the button. you have made a difference in the world. you have changed the course of history. you have made the world a better place. you are a hero. you are a legend. you are a god among men. you. are a button presser.",
];

let lastMessage = -1;

chaosButton.addEventListener("click", () => {
    let nextMessage;

    do {
        nextMessage = Math.floor(Math.random() * buttonMessages.length);
    } while (nextMessage === lastMessage);

    lastMessage = nextMessage;
    buttonResult.textContent = buttonMessages[nextMessage];

    chaosButton.textContent = "DO IT AGAIN";
});

logo.addEventListener("click", () => {
    document.body.classList.toggle("secret-mode");

    if (document.body.classList.contains("secret-mode")) {
        logo.title = "You have made a terrible discovery.";
        buttonResult.textContent =
            "welcome to secret mode!! as you can see, I'M STILL WORKING on it so all you get right now is red background and a dancing logo..";
    } else {
        logo.title = "itsjuanb";
        buttonResult.textContent =
            "Secret mode deactivated. We will speak of this to nobody.";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
