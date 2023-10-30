// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [hide_First, first] = data.lists[0];
const [hide_Second, second] = data.lists[1];
const [hide_Third, third] = data.lists[2];

const result = []

const extractBiggest = () => {
    let firstNumber = first[first.length -1]
	let secondNumber = second[second.length -1]
    let thirdNumber = third[third.length -1]
    
    const highest = Math.max(firstNumber || 0, secondNumber || 0, thirdNumber || 0)
    
    
    if (firstNumber == highest) {
        return first.pop()
    }
    else  if (secondNumber == highest) {
        return second.pop()
    }
    else  {
        return third.pop()
    }
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)