
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
        text: "the fence has entered the chat. of course an anole escapes."
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
        logo.title = "secret mode engaged. click to restore order.";
        logo.setAttribute("aria-pressed", "true");
    }

    showSecretAlert(
        "JUAN-WEB-SYSTEMS :: INTEGRITY CHECK FAILED",
        "Secret mode activated. enjoy the animations and colors for some reason (why is this secret?).",
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
            "secret mode deactivated. it's not even that secret more like OBVIOUS mode";
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
    logo.title = "itsjuanb — this logo is TOTALLY not clickable";

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
                "you have discovered the most random s*** ever. the ticker interaction. Your beedfack has been sent to the team!.",
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


/* terminal */

let pipisTerminal = null;
let terminalInput = null;
let terminalOutput = null;
let terminalBuffer = "";
let terminalHistory = [];

function terminalPrint(message, className = "") {
    if (!terminalOutput) return;

    const line = document.createElement("div");
    line.className = "terminal-line";

    if (className) {
        line.classList.add(className);
    }

    line.textContent = message;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function openPipisTerminal() {
    if (!secretModeActive || pipisTerminal) return;

    pipisTerminal = document.createElement("section");
    pipisTerminal.id = "pipis-terminal";
    pipisTerminal.setAttribute("role", "dialog");
    pipisTerminal.setAttribute("aria-label", "JUAN-WEB-SYSTEMS terminal");

    pipisTerminal.innerHTML = `
        <div class="terminal-header">
            <span>JUAN-WEB-SYSTEMS :: TERMINAL</span>
            <button type="button" id="terminal-exit" aria-label="Close terminal">×</button>
        </div>
        <div class="terminal-banner">
     ██╗██╗   ██╗ █████╗ ███╗   ██╗
     ██║██║   ██║██╔══██╗████╗  ██║
     ██║██║   ██║███████║██╔██╗ ██║
██   ██║╚██╗ ██╔╝██╔══██║██║╚██╗██║
╚█████╔╝ ╚████╔╝ ██║  ██║██║ ╚████║
 ╚════╝   ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═══╝
        </div>
        <div class="terminal-output" aria-live="polite"></div>
        <form class="terminal-form">
            <label for="terminal-input">naranjapps@juan-web:~$</label>
            <input id="terminal-input" type="text"
                autocomplete="off" autocapitalize="off"
                spellcheck="false" aria-label="Terminal command">
        </form>
        <div class="terminal-footer">welcome to fun???</div>
    `;

    document.body.appendChild(pipisTerminal);

    terminalOutput = pipisTerminal.querySelector(".terminal-output");
    terminalInput = pipisTerminal.querySelector("#terminal-input");

    terminalPrint("JUAN-WEB-SYSTEMS [Version idk bro figure it out]");
    terminalPrint("(c) 199X Power Of Naranja. All rights reserved.");
    terminalPrint("Integrity check: running on a thread.");
    terminalPrint('Type "help" to list available commands.');
    terminalPrint("");

    pipisTerminal.querySelector("#terminal-exit").addEventListener(
        "click",
        closePipisTerminal
    );

    pipisTerminal.querySelector(".terminal-form").addEventListener(
        "submit",
        event => {
            event.preventDefault();

            const command = terminalInput.value.trim();
            if (!command) return;

            terminalPrint(`naranjapps@juan-web:~$ ${command}`, "terminal-command");
            terminalHistory.push(command);
            runTerminalCommand(command);
            terminalInput.value = "";
        }
    );

    terminalInput.focus();
}

function closePipisTerminal() {
    if (pipisTerminal) {
        pipisTerminal.remove();
    }

    pipisTerminal = null;
    terminalInput = null;
    terminalOutput = null;
    terminalHistory = [];
}

function runTerminalCommand(rawCommand) {
    const command = rawCommand.toLowerCase().trim();

    switch (command) {
        case "help":
            terminalPrint("AVAILABLE COMMANDS:");
            terminalPrint("  help        list commands");
            terminalPrint("  status      system status");
            terminalPrint("  anole       anole saga scoreboard");
            terminalPrint("  orange      activate Orange Protocol");
            terminalPrint("  pipis       pipis subsystem diagnostics");
            terminalPrint("  sudo ascend initiate ascenion cuz why not");
            terminalPrint("  panic       make the kernel start panicking");
            terminalPrint("  clear       clear terminal output");
            terminalPrint("  exit        banish this terminal from existence");
            break;

        case "status":
            terminalPrint("JUAN-WEB-SYSTEMS :: STATUS");
            terminalPrint(`Secret Mode: ${secretModeActive ? "active: more like obvious mode" : "INACTIVE"}`);
            terminalPrint("Website integrity: QUESTIONABLE");
            terminalPrint("Orange level: beyond any form of notation.");
            terminalPrint("ascension subsystem: yes");
            terminalPrint("Memory usage: ∞KB OK");
            break;

        case "anole":
            terminalPrint("ANOLE SAGA :: OFFICIAL SCOREBOARD");
            terminalPrint("anoles caught: 36 / 50");
            terminalPrint("remaining: 14");
            terminalPrint("total lizards: 39");
            terminalPrint("gecko saga dlc: 3 /NaNinf");
            terminalPrint("the fence... THE FENCE.");
            break;

        case "orange":
            document.body.classList.add("orange-protocol");
            terminalPrint("orange protocol started.");
            terminalPrint("the website consumed orange.");
            break;

        case "pipis":
            terminalPrint("-> pipis.");
            terminalPrint("someone's special ????");
            break;

        case "sudo ascend":
            terminalPrint("Checking permissions...");
            terminalPrint("permission granted. you are the administrator of ???");
            terminalPrint("ASCENDING...");
            document.body.classList.add("terminal-ascending");
            setTimeout(() => {
                document.body.classList.remove("terminal-ascending");
            }, 1600);
            break;

        case "panic":
            terminalPrint("kernel panic: ----------------------------------------------------> pipis.");
            terminalPrint("error: P1P13(forscaryeffect).3X3 NOT RESPONDING.");
            terminalPrint("Suggested fix: ¯\_(ツ)_/¯.");
            document.body.classList.add("terminal-panic");
            setTimeout(() => {
                document.body.classList.remove("terminal-panic");
            }, 900);
            break;

        case "clear":
            terminalOutput.replaceChildren();
            break;

        case "exit":
            closePipisTerminal();
            break;

        default:
            terminalPrint(`'${rawCommand}' is not recognized as a JUAN-WEB command.`);
            terminalPrint('Type "help" for a list of commands.');
    }

    if (terminalOutput) {
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
}

document.addEventListener("keydown", event => {
    if (!secretModeActive || pipisTerminal) return;

    if (
        event.ctrlKey || event.altKey || event.metaKey ||
        event.target.matches("input, textarea, select, [contenteditable='true']")
    ) {
        return;
    }

    if (event.key.length === 1) {
        terminalBuffer += event.key.toLowerCase();
        terminalBuffer = terminalBuffer.slice(-7);

        if (terminalBuffer === "naranja") {
            terminalBuffer = "";
            openPipisTerminal();
        }
    } else if (event.key === "Escape") {
        terminalBuffer = "";
    }
});


document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if (pipisTerminal) {
        closePipisTerminal();
    } else if (secretModeActive) {
        stopSecretMode();
    }
});

