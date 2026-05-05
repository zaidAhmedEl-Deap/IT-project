const contactForm = document.querySelector('.contact__form');
contactForm.addEventListener('submit', function (event) {

    event.preventDefault();

    const firstName = document.querySelector('input[placeholder*="First Name"]').value.trim();
    const lastName = document.querySelector('input[placeholder*="Last Name"]').value.trim();
    const email = document.querySelector('input[placeholder*="Your Email"]').value.trim();
    const phone = document.querySelector('input[placeholder*="Your Phone Number"]').value.trim();
    const message = document.querySelector('textarea').value.trim();
    const selectedSubject = document.querySelector('input[name="subject"]:checked');

    if (!firstName || !lastName || !email || !phone || !message) {
        alert("Please fill in all fields before submitting the form.");
        return;
    }

    if (phone.length !== 11 || isNaN(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (!selectedSubject) {
        alert("Please choose the subject of your request.");
        return;
    }

    const contactData = {
        name: firstName + " " + lastName,
        email: email,
        phone: phone,
        subject: selectedSubject.value,
        message: message
    };
    localStorage.setItem('contactData', JSON.stringify(contactData));

    alert("Thank you for contacting us, " + firstName + " " + lastName + "! We have received your message and will get back to you shortly.");

    contactForm.reset();
});