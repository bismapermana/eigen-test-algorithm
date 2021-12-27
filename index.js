const test1 = (a) => {
  let number = a.split("").map(parseInt).filter(Boolean).toString();
  let words = a.split("");
  let arr = words.filter((item) => number.indexOf(item) === -1).reverse();
  arr.push(number);
  return arr.join("").replaceAll(",", "");
};
console.log(test1("NEGIE1"));

//TEST NO 2
const test2 = (a) => {
  let words = a.split(" ");
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    arr.push(words[i].length);
  }
  return Math.max(...arr);
};

console.log(test2("Saya sangat senang mengerjakan soal algoritma"));

//TEST NO 3
const hitungKata = (input, query) => {
  let output = [];
  query.map((item) => {
    let data = input.filter((each) => each == item);
    console.log(data);
    output.push(data.length);
  });
  return output;
};
console.log(hitungKata(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]));

//TEST NO 4
const test4 = (n) => {
  let leftNumber = 0;
  let right = n.length - 1;
  let rightNumber = 0;

  for (let i = 0; i < n.length; i++) {
    leftNumber += n[i][i];
  }

  for (let i = 0; i < n.length; i++, right--) {
    rightNumber += n[i][right];
  }

  return leftNumber - rightNumber;
};

console.log(
  test4([
    [1, 2, 0],
    [4, 5, 2],
    [7, 8, 9],
  ])
);
