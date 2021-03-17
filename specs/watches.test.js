import { expect as chaiExpect } from "chai";

describe(`ebay categories - watches`, () => {
  it(`verify banner container`, () => {
    browser.url(`https://www.ebay.com/b/Wristwatches/31387/bn_2408451`);
    const expectedText = `Time for a New Wristwatch?`;
    const $bannerTitle = $(`.title-banner__title`);
    expect($bannerTitle).toBeDisplayed();
  });

  it(`verify banner title`, () => {
    const expectedText = `Time for a New Wristwatch?`;
    const $bannerTitle = $(`.title-banner__title`);
    expect($bannerTitle).toHaveTextContaining(expectedText);
  });

  it(`verify title`, () => {
    chaiExpect(browser.getUrl()).to.include(`/Wristwatches/`);
  });
});
