class Calculator {
  get $build() {
    return $("#selectBuild");
  }
  get $number1() {
    return $("#number1Field");
  }
  get $number2() {
    return $(`#number2Field`);
  }
  get $operation() {
    return $(`#selectOperationDropdown`);
  }
  get $calculateButton() {
    return $(`#calculateButton`);
  }
  get $numberAnswer() {
    return $(`#numberAnswerField`); // numberAnswerField
  }
  get $clearButton() {
    return $(`#clearButton`);
  }

  setOperationToSubtract() {
    this.$operation.selectByAttribute("value", "1");
  }

  setOperationToAddition() {
    this.$operation.selectByAttribute("value", "4");
  }

  setOperationToMultiplication() {
    this.$operation.selectByAttribute("value", "2");
  }

  open() {
    browser.url(`https://testsheepnz.github.io/BasicCalculator.html`);
  }

  show() {
    this.$build.selectByAttribute("value", "2");
    this.$build.scrollIntoView();
  }
}

export default new Calculator();
