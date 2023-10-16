const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.2';

const divider = '----------------------------------';

// Only change below this line

// const owed = parseInt('R' + leoBalance + sarahBalance);
// const leo = leoName + leoSurname + " Owed: " + "R" + leoBalance / -1;
// const sarah = sarahName + sarahSurname + " Owed: " + "R" + sarahBalance / -1;
// const total = "Total amount owed: ";
// const result =   leo + "\n" + sarah +  "\n" + divider + "\n" + total + owed + "\n" + divider;
// console.log(result)

const owed = `R ${parseFloat(-leoBalance -sarahBalance).toFixed(2)}`
const leo = `${leoName} ${leoSurname.trim(" ")} (Owed: R ${parseFloat(-leoBalance).toFixed(2)})`
const sarah = `${sarahName.trim(" ")} ${sarahSurname} (Owed: R ${parseFloat(-sarahBalance).toFixed(2)})`
const total = "Total amount owed: "
const result = `\n${leo}\n${sarah}\n\n${divider}\n\n${total}${owed}\n${divider}`

console.log(result)