// Erstellt die Variable für die Übersetzer Option
let uebersetzeroption = "standard";

// Hier wird ein Event-Listener für das Select Element im HTML code hinzugefügt
const selectElement = document.getElementById('uebersetzenoption');
selectElement.addEventListener("change", () => {
  // Hier wird der Index Abgerufen, der momentan
  // im HTML Select Element, ausgewählt ist.
  const selectedIndex = selectElement.selectedIndex;

  // Hier wird, je nach eben abgerufenem Index,
  // der passende Text aus dem HTML Select Element abgerufen.
  uebersetzeroption = selectElement.options[selectedIndex].text;

  // Hier wird die Variable mit dem Text, der eben festgelegt wurde,
  // in die Konsolen Logs Geschrieben.
  console.log("Ausgewaehlte Art der Uebersetzung:", uebersetzeroption);
});
