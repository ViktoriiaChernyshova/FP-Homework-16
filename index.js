let arr = [];

while(true) {
    let value = prompt('Enter elements');
    if(!value) {
      break;
    } 
    arr.push(value);
} console.log(arr);

arr.sort((a, b) => a - b);
console.log(arr);

// arr.splice(1, 3);
// console.log(arr);
// Після splice змінюється довжина початкового масиву. Чому?