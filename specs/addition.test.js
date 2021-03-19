import { expect as chaiExpect } from "chai";
import calculatorPage from "../pages/calculator.page";
import { testCases } from "../resourses/addition";
import {
  waitAndClick,
  waitAndSetValue,
  waitAndGetValue,
} from "../utilities/helper";

describe(`Addition Scenario`, () => {
  before(() => {
    calculatorPage.open();
    calculatorPage.show();
    calculatorPage.setOperationToAddition();
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

  it("clear button should clear answer field", () => {
    let number1 = "12";
    let number2 = "3";
    let actualResult = "15";
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    const oldResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(actualResult).to.equal(oldResult);

    waitAndClick(calculatorPage.$clearButton);
    let newResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(newResult).to.be.empty;
  });
});
