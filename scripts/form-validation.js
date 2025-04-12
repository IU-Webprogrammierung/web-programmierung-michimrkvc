document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Holen der Eingabefelder
        if (!form.checkValidity()) {
            formMessage.textContent = "Please fill out all fields correctly.";
            formMessage.classList.remove("success");
            formMessage.classList.add("error");
            formMessage.style.display = "block";  // Nachricht sichtbar machen
        } else {
            // Wenn alle Felder gültig sind, zeigen wir eine Erfolgsnachricht
            formMessage.textContent = "Thank you! Your message has been sent 😊";
            formMessage.classList.remove("error");
            formMessage.classList.add("success");
            formMessage.style.display = "block";  // Nachricht sichtbar machen
            form.reset();  // Formular zurücksetzen
        }
    });
});