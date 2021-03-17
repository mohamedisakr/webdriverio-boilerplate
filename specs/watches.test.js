import { expect as chaiExpect } from "chai";
import watchesPage from "../pages/watches.page";

describe(`ebay categories - watches`, () => {
  it(`verify banner container`, () => {
    watchesPage.open();
    expect(watchesPage.$bannerTitle).toBeDisplayed();
  });

  it(`verify banner title`, () => {
    const expectedText = `Time for a New Wristwatch?`;
    expect(watchesPage.$bannerTitle).toHaveTextContaining(expectedText);
  });

  it(`verify title`, () => {
    chaiExpect(browser.getUrl()).to.include(`/Wristwatches/`);
  });
});
