const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

let locations = 'RSA'
let currency = null
let shipping = null
const customers = 1

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

if (locations === 'RSA') {
	shipping = 400
    currency = 'R'
    if (shoes + toys + shirts + batteries + pens >= 1000 && customers === 1) {
        shipping = 0
    }
} else if (locations === NAM){
	currency = '$'
	shipping = 600
    if (shoes + toys + shirts + batteries + pens >= 60 && customers === 1) {
        shipping = 0
}}
else {
	currency = '$'
	shipping = 800

}
if (shipping === 0 && customers != 1) {console.log(FREE_WARNING)}
locations = 'NK' ? console.log(BANNED_WARNING) : console.log('Price :', currency, shoes + batteries + pens + shirts + toys + shipping)
if (locations = 'RSA') { console.log('Price :',currency, shoes + batteries + pens + shirts + toys + shipping )}