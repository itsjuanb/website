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


/* =========================================
   v0.2 — SOCIAL CONNECTION ESTABLISHMENT
   ========================================= */

.socials-section {
    margin: 40px 0;
    padding: clamp(22px, 5vw, 42px);
    border: 4px solid var(--ink);
    background: var(--paper);
    box-shadow: 8px 8px 0 var(--ink);
}

.socials-section h2 {
    margin: 0 0 20px;
    font-family: Impact, "Arial Black", sans-serif;
    font-size: clamp(2.5rem, 7vw, 4.5rem);
    line-height: 1;
    text-transform: uppercase;
}

.socials-section > p {
    max-width: 650px;
}

.social-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 13px;
    margin-top: 25px;
}

.social-link {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
    padding: 18px;
    border: 3px solid var(--ink);
    background: var(--white);
    box-shadow: 4px 4px 0 var(--orange);
    text-decoration: none;
    overflow-wrap: anywhere;
    transition: transform 0.15s ease, box-shadow 0.15s ease,
                background 0.15s ease;
}

.social-link:hover {
    transform: translate(4px, 4px);
    box-shadow: none;
    background: var(--yellow);
}

.social-link:focus-visible {
    outline: 4px dashed var(--hot-orange);
    outline-offset: 4px;
}

.social-platform {
    color: #9a3900;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
}

.social-link strong {
    padding-right: 18px;
    font-size: 1rem;
}

.social-description {
    font-size: 0.75rem;
    line-height: 1.5;
}

.social-arrow {
    position: absolute;
    top: 12px;
    right: 14px;
    font-size: 1.3rem;
    font-weight: 700;
}

.social-email {
    grid-column: 1 / -1;
    background: #fff0d1;
}

.social-footnote {
    margin-top: 22px;
    font-size: 0.68rem;
    font-weight: 700;
}

/* =========================================
   v0.2 — SECRET MODE: CORRUPTED BUILD
   ========================================= */

body.secret-mode {
    background: #ff3b30;
    --orange: #ff3b30;
    --hot-orange: #ff1744;
    --yellow: #baffc9;
    --paper: #f5e6e6;
    --white: #fff5f5;
}

body.secret-mode .masthead {
    background-color: #ff3b30;
}

body.secret-mode .ticker {
    background: #19000a;
    color: #baffc9;
    border-color: #ff1744;
}

body.secret-mode .hero,
body.secret-mode .about-section,
body.secret-mode .interests-section,
body.secret-mode .socials-section,
body.secret-mode .button-section,
body.secret-mode .guestbook-note {
    border-color: #19000a;
}

body.secret-mode #logo {
    animation: logo-chaos 0.35s infinite alternate;
    text-shadow: 5px 5px 0 #baffc9, 9px 9px 0 #19000a;
}

body.secret-mode .hero {
    animation: corruption-flicker 5s steps(1, end) infinite;
}

body.secret-mode .section-number,
body.secret-mode .anole-content h3 {
    color: #b00025;
}

body.secret-mode .social-link:hover {
    background: #baffc9;
}

body.secret-mode .ticker-track {
    animation-duration: 12s;
}

@keyframes corruption-flicker {
    0%, 91%, 93%, 97%, 100% {
        transform: translateX(0);
        filter: none;
    }
    92% {
        transform: translateX(3px);
        filter: hue-rotate(35deg);
    }
    94% {
        transform: translateX(-3px);
        filter: contrast(1.4);
    }
    96% {
        transform: translateX(1px);
        filter: saturate(2);
    }
}

@keyframes logo-chaos {
    from {
        transform: rotate(-3deg) skewX(-4deg);
    }
    to {
        transform: rotate(3deg) skewX(4deg);
    }
}

/* Secret event messages injected by jsfun.js */

.secret-alert {
    position: fixed;
    z-index: 9999;
    right: 16px;
    bottom: 16px;
    width: min(390px, calc(100vw - 32px));
    padding: 14px 16px;
    border: 3px solid #baffc9;
    background: #19000a;
    color: #baffc9;
    box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.45);
    font-size: 0.75rem;
    font-weight: 700;
    overflow-wrap: anywhere;
    animation: alert-enter 0.2s steps(3, end);
}

.secret-alert strong {
    display: block;
    margin-bottom: 5px;
    color: #ff5a6b;
}

.secret-alert.glitching {
    transform: translateX(3px);
    filter: contrast(1.6);
}

@keyframes alert-enter {
    from {
        opacity: 0;
        transform: translateX(15px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Reduced motion remains respected in v0.2 */

@media (max-width: 600px) {
    .socials-section {
        box-shadow: 5px 5px 0 var(--ink);
    }

    .social-links {
        grid-template-columns: minmax(0, 1fr);
    }

    .social-email {
        grid-column: auto;
    }
}

@media (prefers-reduced-motion: reduce) {
    body.secret-mode #logo,
    body.secret-mode .hero {
        animation: none;
    }

    .social-link,
    .secret-alert {
        animation: none;
        transition: none;
    }
}
