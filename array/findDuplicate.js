let arr = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl'];

// map arr to add count property to each item
let arrMap = arr.map(name => ({
  count: 1,
  name,
}));

console.log(arrMap);

let arrReduceObj = arrMap.reduce((acc, curr) => {
  acc[curr.name] = (acc[curr.name] || 0) + curr.count;
  return acc;
}, {});

console.log(arrReduceObj);
console.log(Object.keys(arrReduceObj));

let duplicates = Object.keys(arrReduceObj).filter(name => arrReduceObj[name] > 1);
console.log(duplicates);
