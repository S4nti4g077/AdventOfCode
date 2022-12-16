const data = "bvwbjplbgvbhsrlpgdmjqwftvncz";

const letter = data.split("");
console.log(letter);

let compare = [];
letter.forEach((el) => {
  if (!compare.includes(`${el}`)) {
    compare.push(...el);
    return;
  }
  if (compare.includes(`${el}`)) {
    compare = [];
    compare.push(el);
    if (compare.length === 4) {
      console.log(el.indexOf() + 1);
    }
  }
  if (compare.length == 4) {
    console.log(el.indexOf() + 1);
  }
});
console.log(compare);
