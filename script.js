


// first part down ---------------------------------------------------
console.log('Nice to see me :)')

let variable = 13;
if (variable > 13) {
    console.log('More than 13')
} else if (variable === 13) {
    console.log('Exactly 13')
} else {
    console.log('Less than 13')
}

let myVariable = false;
if (myVariable === true) {
    console.log('The condition has been evaluated to true')
}

let a = 554;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a-(a-1)+'valami');
}

let bookCount = 20;

for (let i = 0; i <= bookCount; i = i+2) {
  // here comes the code which moves the books
  if (bookCount % 2 == 0) {
      console.log(i)
  }   else {}
  // this block will be repeated bookCunt times
}

let printNumbersTill = (n) => {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
  }
  printNumbersTill(10);

// printNumbersTill(n) {
//   for (let n = 1; n <= ; n++) {
//         console.log(n)
//    }
// }
printValues([0, 3, 6, 7, 9]);

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

// printNumbersTill(20); // should print 1, 1, 2, ...., 20
// printNumbersTill(15); // should print 1, 1, 2, ...., 15


// getGreetingTo('Mark');              // Should not print to the console
// console.log(getGreetingTo('Mark')); // Should print 'Hello Mark!'

let myNumbers = [10, 20, 30, 50, 12];

// here we say, we want to do something with each item
myNumbers.forEach((number) => {
  // within the function I can tell what I want to do with the items
  console.log(number);
});