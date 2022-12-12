const data = ["2-4,6-8", "2-3,4-5", "5-7,7-9", "2-8,3-7", "6-6,4-6", "2-6,4-8"];
let counter = 0;

data.forEach((el) => {
  const arr = el.split("-");
  const center = arr[1].split(",");
  const allStrNumbers = [arr[0], center[0], center[1], arr[2]];

  const allNumbers = allStrNumbers.map(Number);
  allNumbers.forEach((el) => {
    if (el[0] <= el[2] && el[1] >= el[3]) {
      counter++;
      console.log("siema");
    }
    if (el[0] >= el[2] && el[1] <= el[3]) {
      counter++;
      console.log("siema");
    }
  });
  console.log("arr", arr);
  console.log("center", center);
  console.log("allnub", allNumbers);
});

console.log(counter);
