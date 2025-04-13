// Code wird erst ausgeführt, wenn der HTML-Content geladen ist
document.addEventListener("DOMContentLoaded", () => {
    // Sucht Button für Dark-/Lightmode
    const themeSwitch = document.getElementById("theme-switch");

    // Wenn Button nicht gefunden soll eine Warnung in Konsole angezeigt und Script beendet werden
    if (!themeSwitch) {
        console.warn("Theme-Switch-Button nicht gefunden!");
        return;
    }

    // Prüft, ob ein Darkmode-Zustand im lokalen Speicher gespeichert wurde
    let darkmode = localStorage.getItem('darkmode');

    // Funktion zum Aktivieren des Darkmodes: Klasse hinzufügen + Zustand speichern
    const enableDarkmode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    }

    // Funktion zum Deaktivieren des Darkmodes: Klasse entfernen + Zustand zurücksetzen
    const disableDarkmode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', null);
    }

    // Wenn im lokalen Speicher "darkmode = active" steht, wird Darkmode beim Laden der Seite aktiviert
    if (darkmode === "active") {
        enableDarkmode();
    }

    // Klick-Event auf Theme-Switch-Button
    // Switcht zwischen Dark- und Lightmode hin und her
    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode');
        darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    });
});
