function getDivisors(a) {
  const x = Number(a);
  const arr = [];

  for (i = 1; i * i <= x; i++) {
    if (x % i === 0) {
      arr.push(i);
      if (x / i !== i) arr.push(x / i);
    }
  }

  arr.sort((a, b) => a - b);

  return arr;
}

console.log(getDivisors(5)); // [1,5]
console.log(getDivisors(24)); // [1,2,3,4,6,8,12,24]
console.log(getDivisors(196)); // [1,2,4,7,14,28,49,98,196]
