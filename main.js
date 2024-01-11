function submitForm() {
    // Sends e-mail without redirecting to formsubmit screen
    const form = document.querySelector('#contact-form');
    const data = new FormData(form);
    const url = 'https://formsubmit.co/d00c3190cb3a71d4c491498544cd3aea';
    fetch(url, {method: 'POSt', body: data});
    // Edit contact container to confirm message sent
    const contact = document.querySelector('#contact');
    contact.innerHTML = "Thank you for the message!";
    return false;
}