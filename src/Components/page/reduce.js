const arr = [4 , 5 , 7 , 8 , 9];

const redArr = arr.reduce((acc, items) => {
  return acc + items;
}, 0);

console.log(redArr, "redArr");