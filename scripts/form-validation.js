// Code wird erst ausgeführt, wenn der HTML-Content geladen ist
document.addEventListener("DOMContentLoaded", () => {
    // Referenz zum Formular
    const form = document.getElementById("contactForm");
    // Referenz zur Elementausgabe für die Rückmeldung an die Nutzer
    const message = document.getElementById("formMessage");

    // Fügt dem Formular einen Event Listener hinzu, der auf "submit" reagiert (wenn man das Formular abschickt)
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Verhindert das automatische Neuladen der Seite beim Absenden

        // Prüft, ob das Formular gültig ist (alle required-Felder korrekt ausgefüllt)
        if (!form.checkValidity()) {
            // Ansonsten wird Fehlermeldung angezeigt
            formMessage.textContent = "Please fill out all fields correctly.";
            formMessage.classList.remove("success"); // Entfernt vorherige Erfolgsklasse, falls vorhanden
            formMessage.classList.add("error");  // Fügt Fehlermeldungsklasse hinzu (für Styling)
            formMessage.style.display = "block";  // Nachricht sichtbar machen
        } else {
            // Wenn alle Felder gültig sind, zeigen wir eine Erfolgsnachricht
            formMessage.textContent = "Thank you! Your message has been sent 😊";
            formMessage.classList.remove("error"); // Entfernt vorherige Erfolgsklasse, falls vorhanden
            formMessage.classList.add("success"); // Fügt Fehlermeldungsklasse hinzu (für Styling)
            formMessage.style.display = "block";  // Nachricht sichtbar machen
            form.reset();  // Formular zurücksetzen
        }
    });
});