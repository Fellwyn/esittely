const messages = [
  "Tervehdys kaikille!",
  `Olen Jenny Kaunistunturi`, 
  `front-end dev / opiskelija`,
  "Kesällä opettelen UE:llä ohjelmointia",
  "Tässä muuten muutamia töitäni: "
];

let currentMessage = 0;
let currentChar = 0;
const typeSpeed = 40; // milliseconds between characters
const pauseBetweenMessages = 800; // pause at end of message
const initialCaretDelay = 800;

const typewriterElement = document.querySelector('.typewriter');
setTimeout(typeMessage, initialCaretDelay);

function typeMessage() {
  const message = messages[currentMessage];
  typewriterElement.textContent = message.substring(0, currentChar + 1);
  currentChar++;

if (currentChar < message.length) {
    setTimeout(typeMessage, typeSpeed);
  } else {
    // If there are more messages, go to the next one
    if (currentMessage < messages.length - 1) {
      setTimeout(() => {
        currentChar = 0;
        currentMessage++;
        typewriterElement.textContent = "";
        setTimeout(typeMessage, typeSpeed);
      }, pauseBetweenMessages);
    } else {
      // No more messages, stop
      console.log("All messages displayed.");
    }
  }
}

