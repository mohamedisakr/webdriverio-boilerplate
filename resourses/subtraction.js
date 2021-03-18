/*
https://mozilla.github.io/calculator/test/?grep=Unit%20Tests%20Subtraction

let scenario = document.querySelectorAll(`.test.pass`)
let testCaseList = [];
scenario.forEach(node=> {
    let h2 = node.querySelector(`h2`)
    let description = h2.textContent
    let values = [...node.querySelectorAll(`.comment .number`)].slice(0, 3)
    // values.forEach(val=>console.log(val.textContent))
    let [number1, number2, expectedResult] = values.map(val=>(val.textContent))
    let testCase = {description, operation:'-', number1, number2, expectedResult}
    testCaseList.push(testCase)
})
console.log(testCaseList)
*/
const testcases = [
  {
    description: "Should be able to subtract two positive integers",
    operation: "-",
    number1: "1500",
    number2: "2000",
    expectedResult: "500",
  },
  {
    description: "Should be able to subtract zero from a negative integer",
    operation: "-",
    number1: "-3",
    number2: "0",
    expectedResult: "-3",
  },
  {
    description: "Should be able to subtract 0 from a positive integer",
    operation: "-",
    number1: "3",
    number2: "0",
    expectedResult: "3",
  },
  {
    description:
      "Should be able to subtract a floating point number from a negative integer",
    operation: "-",
    number1: "-1",
    number2: "2.25",
    expectedResult: "-3.25",
  },
  //   {
  //     description:
  //       "Should be able to subtract an integer from the results of a previous operation",
  //     operation: "-",
  //     number1: "1500",
  //     number2: "2000",
  //     expectedResult: "500",
  //   },
  {
    description:
      "Should be able to subtract an integer from a floating point number",
    operation: "-",
    number1: "9.35",
    number2: "1",
    expectedResult: "8.35",
  },
  {
    description:
      "Should be able to subtract a floating point number from an integer",
    operation: "-",
    number1: "9",
    number2: "1.35",
    expectedResult: "7.65",
  },
  {
    description: "Should be able to subtract two floating point numbers",
    operation: "-", // 0.29 - 1.35 = -1.06
    number1: "0.29",
    number2: "1.35",
    expectedResult: "-1.06",
  },
  {
    description:
      "Should be able to subtract two max-input floating point numbers",
    operation: "-", // 7.1234567 - 2.2109876 = 4.9124691
    number1: "7.1234567",
    number2: "2.2109876",
    expectedResult: "4.9124691",
  },
  {
    description:
      "An addition of a negative floating point addend, to an integer addend should be treated as a subtraction of a positive integer subtrahend",
    operation: "+", // 1000 + -10.99 = 989.01
    number1: "1000",
    number2: "-10.99",
    expectedResult: "989.01",
  },
  {
    description:
      "An addition of a negative floating point addend should be treated as a subtraction of a positive floating point subtrahend",
    operation: "+", // -1.0 + -989.99
    number1: "-1.0",
    number2: "-989.99",
    expectedResult: "-990.99",
  },
  {
    description:
      "An addition of a negative integer addend should be treated as a subtraction of a poisitive integer subtrahend",
    operation: "+", // // 50 + - 60 = -10
    number1: "50",
    number2: "-60",
    expectedResult: "-10",
  },
  {
    description:
      "An addition of a negative integer addend to another negative integer addend should be treated as a subtraction of a poisitive integer subtrahend",
    operation: "+", // // -5 + - 20 = -25
    number1: "-5",
    number2: "-20",
    expectedResult: "-25",
  },
  //   {
  //     description:
  //       "Should be able to subtract a floating point number from the result of a previous operation",
  //     operation: "-",
  //     number1: "1500",
  //     number2: "2000",
  //     expectedResult: "500",
  //   },
  {
    description:
      "Should be able to subtract an integer from a negative floating point number",
    operation: "-", // -1.33 - 2 = -3.33
    number1: "-1.33",
    number2: "2",
    expectedResult: "-3.33",
  },
  {
    description: "Should be able to subtract two large integers",
    operation: "-", // 123456789 - 210987654 = -87530865
    number1: "123456789",
    number2: "210987654",
    expectedResult: "-87530865",
  },
  {
    description:
      "Should be able to subtract two floating point numbers with many digits",
    operation: "-", // // 7.12345678 - 2.21098765 = 4.91246913
    number1: "7.12345678",
    number2: "2.21098765",
    expectedResult: "4.91246913",
  },
];
