function checkEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(email); 
}

function handleFormSubmit(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email').value; 
    const ticketSelection = document.getElementById('auswahl').value; 

    if (!checkEmail(emailInput)) {
        alert('Bitte eine gültige E-Mail-Adresse eingeben.');
        return; 
    }
    if (ticketSelection === "0") {
        alert('Bitte wählen Sie aus, wieviele Tickets Sie bestellen möchten.');
        return; 
    }
    document.getElementById('ticket-form').submit();
}

document.getElementById('ticket-form').addEventListener('submit', handleFormSubmit);
