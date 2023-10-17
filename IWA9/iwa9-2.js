const salary = 4000;
const lodging = 'apartment';
const size = 'large';
// added semicolons


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    '734': '3%',
    '234': '20%',
    '913': '12%',
    '415': '38%',
    '502': '42%',
}
// string

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseFloat(tax['913']) / 100;
// return the first number and divide by 100. 913
const startingAfterTax = salary * (1 - taxAsDecimal);
const type = `${size}-${lodging}`;
//interpolation, values into existing string
const balance = (startingAfterTax - (expenses.transport) - (expenses.food) - rent[type]).toFixed(2);
//two decimals, dot notation
console.log(`R ${balance}`) 
