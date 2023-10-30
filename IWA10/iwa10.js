const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId] && holidays[futureId].name || `ID ${futureId} not created yet`);
//  checks whether an item has been assigned to the 9 key & logs the name of the holiday or logs not created

const correctDate = new Date(`25 December ${currentYear} 00:00`);
const copied = {
    
    copied_id: holidays[christmas].id,
    copied_name: 'Xmas-day',
    copied_date: correctDate,
}
// object that changes name of holiday and variable with correct time.
const isEarlier = correctDate < holidays[6].date;

if (isEarlier){
    console.log('New date is earlier:', isEarlier)
    console.log(`${`ID change: ${holidays[christmas].id != copied.copied_id}`}\n${`Name change: ${copied.copied_name}`}\n${`Date change: ${copied.copied_date.getDate()}/${copied.copied_date.getMonth()+1}/${copied.copied_date.getFullYear()}`}`)

}else if(!isEarlier){
    console.log('New date is earlier:', isEarlier)
}



const firstHolidayTimestamp = holidays[3].date;

const lastHolidayTimestamp = holidays[2].date


console.log(`0${firstHolidayTimestamp.getDate()}/0${firstHolidayTimestamp.getMonth()+1}/${firstHolidayTimestamp.getFullYear()}`);
console.log(`${lastHolidayTimestamp.getDate()}/${lastHolidayTimestamp.getMonth()+1}/${lastHolidayTimestamp.getFullYear()}`);

const randomIndex = Math.floor(Math.random()*10)
const randomHoliday = holidays[randomIndex].date;
console.log(`${randomHoliday.getDate()}/${randomHoliday.getMonth()+1}/${randomHoliday.getFullYear()}`);

//max & min