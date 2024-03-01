// Hier wird, sobald der HTML Knopf gedrückt wird, je nach ausgewählter Option
// im HTML Select Element, die passende Funktion ausgeführt.
function berechnenKnopf() {
  if (uebersetzeroption === "berechneBinaerZahl") {
    berechneBinaerZahl();
    } else if (uebersetzeroption === "berechneDezimalZahl") {
      berechneDezimalZahl();
    } else if (uebersetzeroption === "--Bitte eine Option Wählen--" || "standard") {
      console.log("Option zur berechnen der Zahl, wurde noch nicht gesetzt oder konnte nicht gesetzt werden.");
      window.alert("Option zur berechnen der Zahl, wurde noch nicht gesetzt oder konnte nicht gesetzt werden. Bitte setze eine Option im Auswahlmenü.")
    }
}
