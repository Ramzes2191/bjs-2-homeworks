"use strict"

function solveEquation(a, b, c) {
	let arr = []
	let D
  let X1
  let X2
	D = b ** 2 - 4 * a * c
	if (D < 0) {
		arr = []
		console.log("Корней нет")
	} else if (D === 0) {
		X1 = -b / (2 * a)
		arr.push(X1)
    console.log("Один корень")
	} else if (D > 0) {
		X1 = (-b + Math.sqrt(D)) / (2 * a)
		X2 = (-b - Math.sqrt(D)) / (2 * a)
		arr.push(X1, X2)
    console.log("Два корня")
	}

	return arr
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let S
	let P
	let monthPayment
	let Payment
	percent = percent / 100
	S = amount - contribution
	P = percent / 12
	monthPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)))
	Payment = monthPayment * countMonths
	return parseFloat(Payment.toFixed(2))
}
