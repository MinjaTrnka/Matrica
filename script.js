var array = [
  [1, 18],
  [1, 3, 16, 18],
  [1, 5, 14, 18],
  [1, 7, 12, 18],
  [1, 9, 10, 18],
  [1, 18],
  [1, 18],
  [1, 18],
  [1, 18],
  [1, 18],
];

for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 20; y++) {
    if (array[x].includes(y)) {
      document.write("<span style='color:green'><b>$</b></span>");
    } else {
      document.write("#");
    }
  }
  document.write("<br>");
}
