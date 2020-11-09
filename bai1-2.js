// Bai 1
// Plz uncomment this
let inputNumber = Number(prompt('Nhập số muốn tìm số đối diện của nó'));
let n = Number(prompt('Nhập độ dài tối đa của vòng tròn trong khoảng 4 đến 20'));

function findOppositeNumber(N, number) {
	let middleNumber = N/2;
	let result;
	if (number < middleNumber ) {
		result = number + middleNumber;
	} else {
		result = number - middleNumber;
	}
	console.log(`Số đối diện của ${inputNumber} là ${result}`);
}

findOppositeNumber(n, inputNumber);

//Bai 2
let firstString = prompt('Nhập chuỗi thứ nhất');
let secondString = prompt('Nhập chuỗi thứ hai');

let finalString = [];

let longestStr = 0;
Number(longestStr);

if (firstString.length >= secondString.length) {
	longestStr = firstString.length;
} else {
	longestStr = secondString.length;
} 

function merge2String(s1, s2) {
	for (let i = 0; i <= longestStr; i++) {
		let res1 = s1.slice(i,i+1);
		finalString.push(res1);
		let res2 = s2.slice(i,i+1);
		finalString.push(res2);
	}

	let whiteSpace = finalString.indexOf('');
	finalString.splice(whiteSpace, 1);

	// remove all empty elements
	finalString = finalString.filter((entry) => { return entry.trim() != '' })

	let result = finalString.join('');
	console.log(`Chuỗi kết quả là ${result}`);
}

merge2String(firstString, secondString);

// Bai 3
