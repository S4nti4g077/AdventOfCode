const data = [
  "$ cd /",
  "$ ls",
  "dir a",
  "14848514 b.txt",
  "8504156 c.dat",
  "dir d",
  "$ cd a",
  "$ ls",
  "dir e",
  "29116 f",
  "2557 g",
  "62596 h.lst",
  "$ cd e",
  "$ ls",
  "584 i",
  "$ cd ..",
  "$ cd ..",
  "$ cd d",
  "$ ls",
  "4060174 j",
  "8033020 d.log",
  "5626152 d.ext",
  "7214296 k",
];

class Dir {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

class file {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

data.forEach((el) => {
  const separated = el.split(" ");
  if (separated[0] === "$") {
    if (separated[1] === "ls") {
    }
  }
});
