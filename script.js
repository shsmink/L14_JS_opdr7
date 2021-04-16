// Oude stijl: loops

var colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Nieuwe stijl: array methods (with an arrow function =>)

colors.forEach((color) => console.log(color));

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
