// Zuerst wird hier die Funktion zum berechnen der Binärzahl erstellt.
function berechnen() {
    // Hier wird die Dezimalzahl aus dem Eingabefeld in der HTML Datei geholt.
    let dezimalzahl = document.getElementById('eingabe').value;

    // Hier wird die variable der binärzahl gesetzt.
    // Sie wird zwar leer gesetzt, aber wird in den
    // nächsten Schritten aufgefüllt.
    let binaerzahl = "";

    // Hier wird die Länge der Binärzahl berechnet,
    // damit anhand der Länge, im nächsten Schritt die Binärzahl selbst
    // berechnet werden kann.
    let binärzahlenLänge = Math.floor(Math.log2(dezimalzahl)) + 1;

    // Hier werden solange stellen an die Binärzahl gerechnet,
    // bis sie die eben berechnete Länge erreicht.
    for (let i = binärzahlenLänge; i >= 0; i--) {
        if (dezimalzahl >= Math.pow(2, i)) {
            binaerzahl += "1";
            dezimalzahl -= Math.pow(2, i);
        } else {
            binaerzahl += "0";
        }
    }

    // Hier wird die eben berechnete Binärzahl,
    // in das Ausgabefeld in der HTML Datei ausgegeben.
    document.getElementById('ausgabe').value = binaerzahl;
}

// Zum Schluss wird die funktion ein erstes mal ausgeführt.
// Das ist, damit Fehlercodes gesehen werden können,
// bevor der Nutzer die funktion, mit dem Knopf in der HTML Datei,
// selber ausführt. Diese Zeile kann also auch weggelassen werden.
berechnen();