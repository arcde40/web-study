function isValidNumber(a) {
  let i = Number(a);
  if (!Number.isInteger(i)) return false;
  return i <= 9 && i >= 1;
}

console.log(isValidNumber(9)); // true
console.log(isValidNumber("4")); // true
console.log(isValidNumber("abc")); // false
console.log(isValidNumber(-5)); // false
console.log(isValidNumber(3.5)); // false
console.log(isValidNumber(3 / 0)); // false
