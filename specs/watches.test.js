import { expect as chaiExpect } from "chai";
import watchesPage from "../pages/watches.page";
import { SearchBarAccordion, brands } from "../constants/accordion";

describe(`ebay categories - watches`, () => {
  before(() => {
    watchesPage.open();
    watchesPage.$fashoinMenuLink.moveTo();
    watchesPage.$watchSubMenuLink.waitForClickable();
    watchesPage.$watchSubMenuLink.click();
  });

  it(`verify banner container`, () => {
    expect(watchesPage.$bannerTitle).toBeDisplayed();
  });

  it(`verify banner title`, () => {
    const expectedText = `Time for a New Wristwatch?`;
    expect(watchesPage.$bannerTitle).toHaveTextContaining(expectedText);
  });

  it(`verify title`, () => {
    chaiExpect(browser.getUrl()).to.include(`/Wristwatches/`);
  });

  it(`list all brands`, () => {
    // console.log(`List all brands`);
    // console.log(watchesPage.getBrandList());
    chaiExpect(watchesPage.getBrandList()).to.deep.equal(brands);
  });
});
