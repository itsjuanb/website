
/* =========================================
  the website 0.2
   ========================================= */

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
    "somewhere, a transistor is just doing its job along with billions of others in a cpu just to run this button",
    "hello! it's itsjuanb. thanks for pressing the button. i hope you have a gud day.",
    "The website is now 0.0001% more powerful.",
    "an error has occurred. that's all we know. good luck figuring it out!!",
    "you see a wild anole. it's nothing like you've seen before- FENCE",
    "Your mission has been accepted. Your mission has been forgotten.",
    "i hope you like this absolutely incredible feature that i'm going to keep adding to for no reason.",
    "the website has become 0.0001% more orange.",
    "a big button that says do not press. how tempting. and of course you pressed it.",
    "thank you. for pressing the button. you have made a difference in the world. you have changed the course of history. you have made the world a better place. you are a hero. you are a legend. you are a god among men. you. are a button presser."
];

let lastMessage = -1;

if (chaosButton && buttonResult) {
    chaosButton.addEventListener("click", () => {
        let nextMessage;

        do {
            nextMessage = Math.floor(Math.random() * buttonMessages.length);
        } while (
            buttonMessages.length > 1 &&
            nextMessage === lastMessage
        );

        lastMessage = nextMessage;
        buttonResult.textContent = buttonMessages[nextMessage];
        chaosButton.textContent = "DO IT AGAIN";
    });
}



const anoleScoreboard = document.querySelector(".anole-scoreboard");

if (anoleScoreboard) {
    const count = Number(anoleScoreboard.dataset.anoleCount);
    const goal = Number(anoleScoreboard.dataset.anoleGoal);

    const numberDisplay = anoleScoreboard.querySelector(":scope > strong");
    const progress = anoleScoreboard.querySelector(".anole-progress");
    const fill = anoleScoreboard.querySelector(".anole-progress-fill");
    const remainingDisplay = anoleScoreboard.querySelector(".score-remaining");

    if (
        Number.isFinite(count) &&
        Number.isFinite(goal) &&
        count >= 0 &&
        goal > 0 &&
        numberDisplay &&
        progress &&
        fill &&
        remainingDisplay
    ) {
        const safeCount = Math.min(count, goal);
        const remaining = Math.max(0, goal - count);
        const percentage = Math.min(100, (count / goal) * 100);

        numberDisplay.innerHTML =
            `${count} <span>/ ${goal}</span>`;

        progress.setAttribute("aria-valuemax", String(goal));
        progress.setAttribute("aria-valuenow", String(safeCount));
        progress.setAttribute(
            "aria-valuetext",
            `${count} of ${goal} anoles recorded`
        );

        fill.style.width = `${percentage}%`;

        remainingDisplay.textContent = remaining === 0
            ? "GOAL REACHED!"
            : `${remaining} REMAINING`;
    }
}



const SECRET_MESSAGES = [
    {
        title: "INTEGRITY CHECK FAILED",
        text: "JUAN-WEB-SYSTEMS has detected an event. it will not elaborate."
    },
    {
        title: "PIPIS SUBSYSTEM",
        text: "Unauthorized activity detected. ->pipis."
    },
    {
        title: "AN0L3S(forscaryeffect).exe",
        text: "36 processes. are you running a forkbomb? wait, the system only supports 50!"
    },
    {
        title: "REALITY STATUS",
        text: "QUESTIONABLE. please consult 786-493-ORANGE"
    },
    {
        title: "GRAPHICS DRIVER",
        text: "the logo has achieved sentience."
    },
    {
        title: "WINDOWS EVENT VIEWER",
        text: "your system freezes!!!! oh no, we're not telling you what happened, we're just telling you that your pc TURNED OFF"
    },
    {
        title: "FLIGHT SIMULATOR",
        text: "you were 11 hours into the flight. the website goes into crash-to-desktop mode."
    },
    {
        title: "IMPORTANT SYSTEM NOTICE",
        text: "orange levels are immeasurable."
    },
    {
        title: "MEMORY ALLOCATION",
        text: "the website has allocated 4325304606gb of RAM on pipis. guess who caused the memory shortage"
    },
    {
        title: "ANOMALY DETECTED",
        text: "The fence has entered the chat."
    },
    {
        title: "BACKGROUND PROCESS",
        text: "a transistor is switching somewhere else just to do this"
    },
    {
        title: "SYSTEM LOG",
        text: "user pressed logo it's. juan. b.."
    }
];

let secretModeActive = false;
let secretEventTimer = null;
let activeAlertTimer = null;
let currentAlert = null;
let secretAlertCount = 0;
let tickerClicks = 0;
let tickerResetTimer = null;

function showSecretAlert(title, message, duration = 4200) {
    // Replace the previous alert rather than stacking notifications.
    if (currentAlert) {
        currentAlert.remove();
        currentAlert = null;
    }

    clearTimeout(activeAlertTimer);

    const alert = document.createElement("div");
    alert.className = "secret-alert";
    alert.setAttribute("role", "status");
    alert.setAttribute("aria-live", "polite");

    const heading = document.createElement("strong");
    heading.textContent = `⚠ ${title}`;

    const body = document.createElement("span");
    body.textContent = message;

    alert.append(heading, body);
    document.body.appendChild(alert);
    currentAlert = alert;

    activeAlertTimer = setTimeout(() => {
        if (currentAlert === alert) {
            alert.remove();
            currentAlert = null;
        }
    }, duration);
}

function triggerGlitch() {
    if (!secretModeActive) return;

    document.body.classList.add("glitch-event");

    const elements = [
        document.querySelector(".hero"),
        document.querySelector(".ticker"),
        document.querySelector(".socials-section")
    ].filter(Boolean);

    const target = elements[
        Math.floor(Math.random() * elements.length)
    ];

    if (target) {
        target.classList.add("glitching");

        setTimeout(() => {
            target.classList.remove("glitching");
        }, 350);
    }

    setTimeout(() => {
        document.body.classList.remove("glitch-event");
    }, 400);
}

function runSecretEvent() {
    if (!secretModeActive) return;

    const roll = Math.random();

    if (roll < 0.4) {
        const event = SECRET_MESSAGES[
            Math.floor(Math.random() * SECRET_MESSAGES.length)
        ];

        showSecretAlert(event.title, event.text);
    } else if (roll < 0.8) {
        triggerGlitch();
    } else {
        showSecretAlert(
            "BACKGROUND PROCESS",
            "the website is now 0.0001% more corrupted."
        );
    }
}

function startSecretMode() {
    secretModeActive = true;
    document.body.classList.add("secret-mode");

    if (logo) {
        logo.title = "Secret mode active. Click to restore normality.";
        logo.setAttribute("aria-pressed", "true");
    }

    showSecretAlert(
        "JUAN-WEB-SYSTEMS :: INTEGRITY CHECK FAILED",
        "Secret mode activated. Reality status: questionable.",
        6000
    );


    clearInterval(secretEventTimer);
    secretEventTimer = setInterval(() => {
        if (secretModeActive) runSecretEvent();
    }, 11000);
}

function stopSecretMode() {
    secretModeActive = false;
    document.body.classList.remove("secret-mode", "glitch-event");

    clearInterval(secretEventTimer);
    secretEventTimer = null;

    clearTimeout(activeAlertTimer);
    activeAlertTimer = null;

    if (currentAlert) {
        currentAlert.remove();
        currentAlert = null;
    }

    document.querySelectorAll(".glitching").forEach(element => {
        element.classList.remove("glitching");
    });

    if (logo) {
        logo.title = "itsjuanb — click to discover secret mode";
        logo.setAttribute("aria-pressed", "false");
    }

    if (buttonResult) {
        buttonResult.textContent =
            "Secret mode deactivated. We will speak of this to nobody.";
    }
}

function toggleSecretMode() {
    if (secretModeActive) {
        stopSecretMode();
    } else {
        startSecretMode();
    }
}

if (logo) {
    logo.setAttribute("role", "button");
    logo.setAttribute("tabindex", "0");
    logo.setAttribute("aria-label", "Toggle secret mode");
    logo.setAttribute("aria-pressed", "false");
    logo.title = "itsjuanb — click to discover secret mode";

    logo.addEventListener("click", toggleSecretMode);

    logo.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleSecretMode();
        }
    });
}



const ticker = document.querySelector(".ticker");

if (ticker) {
    ticker.addEventListener("click", () => {
        tickerClicks++;

        clearTimeout(tickerResetTimer);
        tickerResetTimer = setTimeout(() => {
            tickerClicks = 0;
        }, 3000);

        if (tickerClicks >= 7) {
            tickerClicks = 0;

            showSecretAlert(
                "HIDDEN COMMAND ACCEPTED",
                "You have discovered the ticker interaction. You should probably investigate nothing further.",
                6000
            );

            if (!secretModeActive) {
                startSecretMode();
            } else {
                triggerGlitch();
            }
        }
    });
}


document.addEventListener("keydown", event => {
    if (event.key === "Escape" && secretModeActive) {
        stopSecretMode();
    }
});


if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
