describe(`Subtraction Scenarios`, () => {
  it("subtraction", () => {
    browser.url(`https://testsheepnz.github.io/BasicCalculator.html`);
    const $build = $("#selectBuild");
    const $number1 = $("#number1Field");
    const $number2 = $(`#number2Field`);
    const $operation = $(`#selectOperationDropdown`);
    const $calculateButton = $(`#calculateButton`);
    const $numberAnswerField = $(`#numberAnswerField`);
    const $clearButton = $(`#clearButton`);
    expect($number1).toBeDisplayed();

    // you must choose build # 2 as stated in instructions
    $build.selectByAttribute("value", "2");
    $build.scrollIntoView();
    browser.pause(5000);
  });
});
//   before(() => {
//     //
//     browser.url(
//       `https://mozilla.github.io/calculator/test/?grep=Unit%20Tests%20Subtraction`
//     );
//   });
//   it(`canary test`, () => {
//     browser.url(
//       `https://mozilla.github.io/calculator/test/?grep=Unit%20Tests%20Subtraction`
//     );
//     //   let result = ``
//     const $$scenarios = $$(`.test.pass`);
//     // const description=  $(`.test.pass h2`)
//     $$scenarios.forEach((item) => console.log(item.$(`h2`)));
//   });
