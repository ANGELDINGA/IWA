// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};

// Edit below lines

const status_1 = document.querySelector('#book1 .status');
const reserve_1 = document.querySelector('#book1 .reserve');
const checkout_1 = document.querySelector('#book1 .checkout');
const checkin_1 = document.querySelector('#book1 .checkin');

const status_2 = document.querySelector('#book2 .status');
const reserve_2 = document.querySelector('#book2 .reserve');
const checkout_2 = document.querySelector('#book2 .checkout');
const checkin_2 = document.querySelector('#book2 .checkin');

const status_3 = document.querySelector('#book3 .status');
const reserve_3 = document.querySelector('#book3 .reserve');
const checkout_3 = document.querySelector('#book3 .checkout');
const checkin_3 = document.querySelector('#book3 .checkin');

checkin_1.style.color = 'black';
status_1.style.color = STATUS_MAP.overdue.color;
reserve_1.disabled = !STATUS_MAP.overdue.canReserve;
checkout_1.disabled = !STATUS_MAP.overdue.canCheckout;
checkin_1.disabled = !STATUS_MAP.overdue.canCheckIn;

checkin_2.style.color = 'black';
status_2.style.color = STATUS_MAP.reserved.color;
reserve_2.disabled = !STATUS_MAP.reserved.canReserve;
checkout_2.disabled = !STATUS_MAP.reserved.canCheckout;
checkin_2.disabled = !STATUS_MAP.reserved.canCheckIn;

checkin_3.style.color = 'black';
status_3.style.color = STATUS_MAP.shelf.color;
reserve_3.disabled = !STATUS_MAP.shelf.canReserve;
checkout_3.disabled = !STATUS_MAP.shelf.canCheckout;
checkin_3.disabled = !STATUS_MAP.shelf.canCheckIn;