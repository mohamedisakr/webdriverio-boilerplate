import searchPage from "../pages/search.page";
import { waitForTextChange } from "../utilities/helper";

describe(`ebay search`, () => {
  it(`verify title`, () => {
    searchPage.open();

    const searchKeyword = "laptop";
    searchPage.$searchBox.setValue(searchKeyword);
    searchPage.$searchButton.click();

    expect(browser).toHaveTitleContaining(searchKeyword);
  });

  it(`verify dropdown have certian text for the selected option`, () => {
    const expectedText = `PC Laptops & Netbooks`;
    waitForTextChange(searchPage.$category, expectedText);
    expect(searchPage.$category).toHaveText(expectedText);
  });

  it.skip(`(async) verify title with Page Object Model`, async () => {
    searchPage.open();
    const searchKeyword = "laptop";

    await searchPage.$searchBox.setValue(searchKeyword);
    await searchPage.$searchButton.click();

    expect(browser).toHaveTitleContaining(searchKeyword);

    // await browser.url(`https://www.ebay.com`);
    // const searchKeyword = "laptop";
    // const $searchBox = await $(`#gh-ac`);
    // await $searchBox.setValue(searchKeyword);
    // const $searchButton = await $(`#gh-btn`);
    // await $searchButton.click();
    // expect(browser).toHaveTitleContaining(searchKeyword);
  });

  it.skip(`(async) verify title`, async () => {
    await browser.url(`https://www.ebay.com`);
    const searchKeyword = "laptop";
    const $searchBox = await $(`#gh-ac`);
    await $searchBox.setValue(searchKeyword);
    const $searchButton = await $(`#gh-btn`);
    await $searchButton.click();
    expect(browser).toHaveTitleContaining(searchKeyword);
  });
});
