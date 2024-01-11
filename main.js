function submitForm() {
    // Sends e-mail without redirecting to formsubmit screen
    const form = document.querySelector('#contact-form');
    const data = new FormData(form);
    const url = 'https://formsubmit.co/brown.tyler.w@gmail.com';
    fetch(url, {method: 'POSt', body: data});
    // Edit contact container to confirm message sent
    const contact = document.querySelector('#contact');
    contact.innerHTML = "Thank you for the message!";
    return false;
}