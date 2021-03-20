import { expect as chaiExpect } from "chai";
import watchesPage from "../pages/watches.page";
import { SearchBarAccordion, brands } from "../resourses/accordion"; // "../re/accordion";
import { watchesBannerTitle } from "../resourses/global-text";
import { waitAndClick } from "../utilities/helper";

describe(`ebay categories - watches`, () => {
  before(() => {
    watchesPage.open();
    watchesPage.$fashoinMenuLink.moveTo();
    waitAndClick(watchesPage.$watchSubMenuLink);
  });

  it(`verify banner container`, () => {
    expect(watchesPage.$bannerTitle).toBeDisplayed();
  });

  it(`verify banner title`, () => {
    expect(watchesPage.$bannerTitle).toHaveTextContaining(watchesBannerTitle);
  });

  it(`verify title`, () => {
    chaiExpect(browser.getUrl()).to.include(`/Wristwatches/`);
  });

  it.skip(`list all brands`, () => {
    chaiExpect(watchesPage.getBrandList()).to.deep.equal(brands);
  });
});
