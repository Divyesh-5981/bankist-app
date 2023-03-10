'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');






/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];


// Slice Method we can also use the spread operator 

/* console.log(arr.slice(1));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice(arr.length - 1));
console.log(arr.slice());
console.log([...arr]); */

// Splice Method : Which mutate the original array and delete splice elements from the array

// console.log(arr.splice(2), arr);
/* console.log(arr.splice(-1), arr);
console.log(arr.splice(1, 2), arr) */

// Reverse Method of array It mutate the original array

// arr = ['a', 'b', 'c', 'd', 'e'];

/* const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); */

// Concat Method of array We can also use the spread operator.

/* const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); */

// Join Method 

// console.log(letters.join('-'))

// new at method

// const arr = [10, 20, 30];

// Traditional way to get the last element from the array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// Modern way 
// console.log(arr.at(-1));

// Works on string as well
// const stringArr = 'Divyesh';

// console.log(stringArr.length);

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [key, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${key} : you deposited ${movement}`);
  } else {
    console.log(`Movement ${key} : you withdrew ${Math.abs(movement)}`)
  }
}

console.log("-----FOREACH-----")
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i} : you deposited ${movement}`);
  } else {
    console.log(`Movement ${i} : you withdrew ${Math.abs(movement)}`)
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, index, map) {
  console.log(`${index} : ${value}`)
});

const uniqueCurrencies = new Set(['USD', 'EUR', 'USD', 'GBP', 'GBP']);

uniqueCurrencies.forEach(function (value, index, set) {
  console.log(`${value} : ${value}`)
}); */