import { expect as chaiExpect } from "chai";
import calculatorPage from "../pages/calculator.page";
import { testCases } from "../resourses/subtraction";
import {
  waitAndClick,
  waitAndSetValue,
  waitAndGetValue,
} from "../utilities/helper";

describe(`Subtraction Scenario`, () => {
  before(() => {
    calculatorPage.open();
    calculatorPage.show();
    calculatorPage.setOperationToSubtract();
  });

  /*
  testCases.forEach((testCase) => {
    let { description, operation, number1, number2, expectedResult } = testCase;
    it(`${description}`, () => {
      waitAndSetValue(calculatorPage.$number1, number1);
      waitAndSetValue(calculatorPage.$number2, number2);

      waitAndClick(calculatorPage.$calculateButton);
      let actualResult = waitAndGetValue(calculatorPage.$numberAnswer);

      chaiExpect(actualResult).to.equal(expectedResult);
      browser.pause(1000);
    });
  });
  // */

  it("Integers only checkbox should remove the decimal places", () => {
    let number1 = "10.25";
    let number2 = "5.50";
    let actualResult = "4.75";
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    const oldResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(actualResult).to.equal(oldResult);

    waitAndClick(calculatorPage.$integerOnlyCheckbox);
    // const trimmed = waitAndGetValue(calculatorPage.$numberAnswer);
    let newResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(parseInt(newResult)).to.equal(parseInt(actualResult));
  });
});

//=======================

// console.log(`expect: ${expectedResult}`);
// console.log(`actual: ${actualResult}`);

//=======================
/*
  it(`${testCases[2].description}`, () => {
    let {
      description,
      operation,
      number1,
      number2,
      expectedResult,
    } = testCases[2];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);

    waitAndClick(calculatorPage.$calculateButton);
    let actualResult = waitAndGetValue(calculatorPage.$numberAnswer);
    // console.log(`expect: ${expectedResult}`);
    // console.log(`actual: ${actualResult}`);
    chaiExpect(actualResult).to.equal(expectedResult);
    browser.pause(5000);
  });
  */

// =======================
/*
  it("first test case", () => {
    // console.log(testCases[0]);
    let {
      description,
      operation,
      number1,
      number2,
      expectedResult,
    } = testCases[0];

    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);

    waitAndClick(calculatorPage.$calculateButton);
    let actualResult = waitAndGetValue(calculatorPage.$numberAnswer); //calculatorPage.$numberAnswer.getValue();
    console.log(`expect: ${expectedResult}`);
    console.log(`actual: ${actualResult}`);
    browser.pause(5000);
    chaiExpect(actualResult).to.equal(expectedResult);
  });
  */
// =======================

// browser.url(`https://testsheepnz.github.io/BasicCalculator.html`);
// const $build = $("#selectBuild");
// const $number1 = $("#number1Field");
// const $number2 = $(`#number2Field`);
// const $operation = $(`#selectOperationDropdown`);
// const $calculateButton = $(`#calculateButton`);
// const $numberAnswerField = $(`#numberAnswerField`);
// const $clearButton = $(`#clearButton`);
// expect($number1).toBeDisplayed();

// // you must choose build # 2 as stated in instructions
// $build.selectByAttribute("value", "2");
// $build.scrollIntoView();
// browser.pause(5000);
