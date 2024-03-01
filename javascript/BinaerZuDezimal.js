// Zuerst wird hier die Funktion zum berechnen der Dezimal erstellt.
function berechneDezimalZahl() {
    // Hier wird die Dezimalzahl aus dem Eingabefeld in der HTML Datei geholt.
    const binaerzahl = document.getElementById('eingabe').value;

    // Hier wird die variable der dezimalzahl gesetzt.
    // Sie wird zwar nur auf null gesetzt, aber ihr wird in den
    // nächsten Schritten, die ergebniss dezimalzahl hinzu addiert.
    let dezimalzahl = 0;

    // Hier wird die Dezimalzahl aus der Binärzahl berechnet
    // und anschließend der dezimalzahl Variable, hinzugefügt.
    for (let i = binaerzahl.length - 1; i >= 0; i--) {
      dezimalzahl += parseInt(binaerzahl[i]) * 2 ** (binaerzahl.length - 1 - i);
    }

    // Hier wird die eben berechnete Dezimalzahl,
    // in das Ausgabefeld in der HTML Datei ausgegeben.
    document.getElementById('ausgabe').value = dezimalzahl;
  }
