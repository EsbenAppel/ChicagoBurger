// ✓ Variabler og typer
let restaurantNavn = "Chicago Burger";
let kontaktAarsager = [
  "bestilling",
  "catering",
  "åbningstider",
  "andet"
];

// ✓ Event: klik på knap (formular submit)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop formularen i at reloade siden

  // ✓ Variabler (string)
  let navn = document.getElementById("navn").value.trim();
  let email = document.getElementById("email").value.trim();
  let beskedInput = document.getElementById("besked").value.trim();

  // ✓ Kontrolstruktur (if-else)
  if (navn === "" || email === "" || beskedInput === "") {
    alert("Udfyld venligst alle felter");
    return;
  }

  // ✓ Operatorer (sammensætning af tekst)
  let besked = `Tak for din besked, ${navn}!\n\n`;
  besked += `Email: ${email}\n`;
  besked += `Besked: ${beskedInput}\n\n`;
  besked += `${restaurantNavn} kan hjælpe dig med:\n`;

  // ✓ Kontrolstruktur (loop)
  for (let i = 0; i < kontaktAarsager.length; i++) {
    besked += `- ${kontaktAarsager[i]}\n`;
  }

  // ✓ Udskrivning i browseren
  alert(besked);

  // Ryd inputfelter
  document.getElementById("navn").value = "";
  document.getElementById("email").value = "";
  document.getElementById("besked").value = "";
});

// 1. Variabler og typer
//    - 'restaurantNavn' er en string, der gemmer navnet på restauranten.
//    - 'kontaktAarsager' er et array, der indeholder de typer henvendelser, man kan kontakte restauranten for.

// 2. Eventlistener (submit på formular)
//    - Lytter på, når brugeren trykker på 'Send besked'-knappen.
//    - e.preventDefault() stopper formularen fra at reloade siden, så vi kan håndtere input med JS.

// 3. Indsamling af input
//    - 'navn' henter værdien fra input-feltet for navn.
//    - 'email' henter værdien fra input-feltet for email.
//    - 'beskedInput' henter værdien fra tekstfeltet for besked.
//    - .trim() fjerner eventuelle mellemrum før/efter teksten.

// 4. Kontrolstruktur (if-else)
//    - Tjekker om nogen af felterne er tomme.
//    - Hvis ja, vises en alert og funktionen stopper med 'return'.

// 5. Operatorer og tekstsammensætning
//    - Kombinerer tekst og variabler til en besked, der vises i alert.
//    - Bruger template literals (`) for nemmere læsbarhed og formatering.

// 6. Loop (for)
//    - Går gennem arrayet 'kontaktAarsager' og tilføjer hver årsag til beskeden.
//    - Viser brugeren, hvilke ting restauranten kan hjælpe med.

// 7. Udskrivning i browseren
//    - alert(besked) viser hele den sammensatte besked i en pop-up.

// 8. Ryd inputfelter
//    - Efter afsendelse ryddes felterne, så brugeren kan skrive en ny besked.
