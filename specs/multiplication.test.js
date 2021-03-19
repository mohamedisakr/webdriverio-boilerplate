import { expect as chaiExpect } from "chai";
import calculatorPage from "../pages/calculator.page";
import { testCases } from "../resourses/multiplication";
import {
  waitAndClick,
  waitAndSetValue,
  waitAndGetValue,
} from "../utilities/helper";

describe(`Multiplication Scenario`, () => {
  before(() => {
    calculatorPage.open();
    calculatorPage.show();
    calculatorPage.setOperationToMultiplication();
  });

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
});