// arraythis.com
const data = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];
// create a list with backpack compartments (firstBackpackList and second)

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
// print a list with compartments for each backpack
console.log(firstBackpackList);
console.log(secondBackpackList);

// compare compartments of backpacks
let listOfItems = [];

const compareBackpacks = (totalBackpacks) => {
  for (let i = totalBackpacks.length - 1; i >= 0; i--) {
    firstBackpackList[i].items.forEach((element) => {
      let temporary = [];
      if (secondBackpackList[i].items.includes(element)) {
        if (!temporary.includes(element)) {
          temporary.push(element);
        }
      }
      listOfItems.push(temporary);
    });
  }
};

compareBackpacks(firstBackpackList);
console.log("total backpacks each:", firstBackpackList.length);
console.log("double items:", listOfItems);
