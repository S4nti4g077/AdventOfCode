// arraythis.com
const data = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];

let backpack1 = [];
let backpack2 = [];
let firstBackpackList = [];
let secondBackpackList = [];
class Backpack {
  constructor(items) {
    this.items = items;
  }
}
data.forEach((element) => {
  backpack1 = [];
  backpack2 = [];
  const number = element.length / 2 - 1;
  console.log(number);
  for (let num = 0; num <= number; num++) {
    backpack1.push(element[num]);
  }
  for (let num = number + 1; num <= element.length - 1; num++) {
    backpack2.push(element[num]);
  }
  const elfBp1 = new Backpack(backpack1);
  firstBackpackList.push(elfBp1);
  const elfBp2 = new Backpack(backpack2);
  secondBackpackList.push(elfBp2);
});

console.log(firstBackpackList);
console.log(secondBackpackList);
