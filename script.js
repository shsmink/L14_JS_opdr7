// Oude stijl: loops

const colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Nieuwe stijl: array methods 

colors.forEach((color) => console.log(color)); // Met deze methode krijg je dezelfde utkomst als de twee bovenstaande console.logs. 

// 1. Mijn for loop neemt 3 regels in beslag en mijn while loop neemt 5 regels in beslag.
// 2. Mijn forEach method neemt 1 regel in beslag.
// 3. Voordelen array methods:
//    Loops kunnen niet meer oneindig doorlopen
//    je hoeft niet meer bij te houden met een i, bij welke iteratie je bent.
//    je hebt direct toegang tot het item waar je overheen loopt dmv het argument en de callback-functie die je de array-method geeft als argument.
//    de naam "forEach" zegt ook meteen wat je gaat doen en is semantischer dan een while of for loop.
// 4. Een array method kan je niet gebruiken op een object.

const moreColors = {
  colorDeco: "yellow",
  colorOffice: "blue",
  colorLove: "red",
  colorKingsday: "orange",
  colorNature: "green",
};

for (x in moreColors) {
  console.log(moreColors[x]);
}

// Over bovenstaand object wordt geïtereerd.
