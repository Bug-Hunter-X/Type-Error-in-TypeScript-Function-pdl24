function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result = add(5, 5); // Correct

let result2 = "hello";
let result3 = 5;

if(isNumber(result2) && isNumber(result3)){
    let result4 = add(result2, result3); // Correct
}
console.log(result4); // Type Error