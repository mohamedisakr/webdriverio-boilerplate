import { expect as chaiExpect } from "chai";
import calculatorPage from "../pages/calculator.page";
import { testCases } from "../resourses/error-guessing";
import {
  waitAndClick,
  waitAndSetValue,
  waitAndGetValue,
} from "../utilities/helper";

describe(`error guessing Scenario`, () => {
  before(() => {
    calculatorPage.open();
    calculatorPage.show();
    calculatorPage.setOperationToMultiplication();
  });

  it.skip(`${testCases[0].description}`, () => {
    let { number1, number2, expectedResult } = testCases[0];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    const actualResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(actualResult).to.equal(expectedResult);
  });

  it.skip(`${testCases[1].description}`, () => {
    let { number1, number2, expectedResult } = testCases[1];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    expect(calculatorPage.$errorMessage).toBeEnabled();
  });

  it.skip(`${testCases[2].description}`, () => {
    let { number1, number2, expectedResult } = testCases[2];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    const actualResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(actualResult).to.equal(expectedResult);
  });

  it.skip(`${testCases[3].description}`, () => {
    let { number1, number2, expectedResult } = testCases[3];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    expect(calculatorPage.$errorMessage).toBeEnabled();
  });

  it.skip(`${testCases[4].description}`, () => {
    let { number1, number2, expectedResult } = testCases[4];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    const actualResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(actualResult).to.equal(expectedResult);
  });

  it.skip(`${testCases[5].description}`, () => {
    let { number1, number2, expectedResult } = testCases[5];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    expect(calculatorPage.$errorMessage).toBeEnabled();
  });

  it.skip(`${testCases[6].description}`, () => {
    let { number1, number2, expectedResult } = testCases[6];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    expect(calculatorPage.$errorMessage).toBeEnabled();
  });

  it.skip(`${testCases[7].description}`, () => {
    let { number1, number2, expectedResult } = testCases[7];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    const actualResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(actualResult).to.equal(expectedResult);
  });

  it.skip(`${testCases[8].description}`, () => {
    let { number1, number2, expectedResult } = testCases[8];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    const actualResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(actualResult).to.equal(expectedResult);
  });

  it(`${testCases[9].description}`, () => {
    let { number1, number2, expectedResult } = testCases[9];
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    const actualResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(actualResult).to.equal(expectedResult);
  });
});
