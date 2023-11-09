// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()


// Only edit below 

/* calculates the current month and day/dates in a grid format.
* organise days in a <html> table 
* table render the current month you are in (dynamically)
* highlight the current day in blue
* The current month and year should be displayed above the calendar 
* Each week must be indicated in the left most column
* Weeks should alternate between white and grey
* Each date of the month should be displayed under the corresponding weekday */

// Create an array of weeks (Week 1, Week 2, ...)


const createArray = (length) => {
    const result = []
    for (let i = 0; i < length; i++) {
        result.push(i + 1);
    }
    return result;
}
/*defines a function createArray that generates an array of numbers from 1 to the specified length by using a for loop. The loop starts with i = 0, iterates until i is less than the given length, and increments i by 1 with each iteration, pushing the value i + 1 into the result array.
*/

// Create the data for the calendar
const createData = () => {
    const current = new Date();
    current.setDate(1); // Set the current date to the 1st day of the month

    const startDay = current.getDay(); // Get the day of the week (0-6) for the 1st day of the month
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5); // Create an array of week numbers (1-5)
    const result = [];

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex,
            days: []
        });

        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            const day = dayIndex - startDay + (weekIndex - 1) * 7 + 1;
            const isValid = day > 0 && day <= daysInMonth;

            result[weekIndex - 1].days.push({
                dayOfWeek: dayIndex,
                value: isValid ? day : '',
            });
        }
    }

    return result;
}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}
        <td class="${classString}">
            ${value}
        </td>
    `;

    return result;
}

// Create the HTML for the calendar
const createHtml = (data) => {
    let result = '';

    for (const { week, days } of data) {
        let inner = '';
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`);

        for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const isAlternate = week % 2 === 0;

            let classString = 'table__cell';

            if (isToday) {
                classString = `${classString} table__cell_today`;
            } else if (isWeekend) {
                classString = `${classString} table__cell_weekend`;
            }

            if (isAlternate) {
                classString = `${classString} table__cell_alternate`;
            }

            inner = addCell(inner, classString, value);
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `;
    }

    return result;
}



// Only edit above

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);
