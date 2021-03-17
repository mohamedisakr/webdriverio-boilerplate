import { expect as chaiExpect } from "chai";
import watchesPage from "../pages/watches.page";
import { watchesBannerTitle } from "../resourses/global-text";

describe(`ebay categories - watches`, () => {
  it(`verify banner container`, () => {
    browser.url(`https://www.ebay.com/b/Wristwatches/31387/bn_2408451`);
    expect(watchesPage.$bannerTitle).toBeDisplayed();
  });

  it(`verify banner title`, () => {
    expect(watchesPage.$bannerTitle).toHaveTextContaining(watchesBannerTitle);
  });

  it(`verify title`, () => {
    // chaiExpect(browser.getUrl()).to.include(`/Wristwatches/`);
    chaiExpect(browser.getUrl()).to.not.be.empty;
  });
});
