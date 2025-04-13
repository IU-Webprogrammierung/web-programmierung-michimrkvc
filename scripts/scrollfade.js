// Code wird erst ausgeführt, wenn der HTML-Content geladen ist
document.addEventListener("DOMContentLoaded", () => {
    // Wählt alle Elemente mit der Klasse .fade-in aus – diese sollen animiert werden
    const fadeElements = document.querySelectorAll('.fade-in');

    // Erstellt einen neuen IntersectionObserver – der beobachtet, ob Elemente ins Viewport kommen
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Prüft, ob das beobachtete Element sichtbar ist
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Fügt eine Klasse hinzu
                observer.unobserve(entry.target); // Element wird nur einmal animiert
            }
        });
    }, {
        threshold: 0.1 // Das Element gilt als sichtbar, wenn mindestens 10% im Viewport sind
    });

    // Beobachtet jedes .fade-in-Element einzeln
    fadeElements.forEach(el => observer.observe(el));
});