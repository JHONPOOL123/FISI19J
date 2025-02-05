const messages = [
    "De verdad? ",
    "no te creo, de verdad?? T",
    "estás completamente segura ojos? E",
    "yaa por favor, mi amor... A",
    "Piensalo un poco! M",
    "si sigues diciendo que no, me hará ponerme triste... O",
    "muy muy triste...",
    "demasiado triste,ojona por favor...",
    "bueno, fue p, me voy, no pregunto más...",
    "sabes que solo te molesto, te rogaré, di que si amor!, por favor 💚",
    

]; 

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
   
}

function handleYesClick() {
    window.location.href = "pagina2/pagina2.html";
}