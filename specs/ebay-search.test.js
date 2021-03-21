import allureReporter from "@wdio/allure-reporter";
import searchPage from "../pages/search.page";
import {
  waitAndSetValue,
  waitForTextChange,
  waitAndClick,
} from "../utilities/helper";
import { searchKeyword, mainTitle } from "../resourses/global-text";

describe(`ebay search`, () => {
  it(`verify title`, () => {
    searchPage.open();
    waitAndSetValue(searchPage.$searchBox, searchKeyword);
    waitAndClick(searchPage.$searchButton);
    expect(browser).toHaveTitleContaining(searchKeyword);
  });

  it(`verify dropdown have certian text for the selected option`, () => {
    allureReporter.addFeature("Search category");
    waitForTextChange(searchPage.$category, mainTitle);
    expect(searchPage.$category).toHaveText(mainTitle);
  });

  it.skip(`(async) verify title with Page Object Model`, async () => {
    allureReporter.addSeverity("Critical");
    searchPage.open();
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
    // const searchKeyword = "laptop";
    const $searchBox = await $(`#gh-ac`);
    await $searchBox.setValue(searchKeyword);
    const $searchButton = await $(`#gh-btn`);
    await $searchButton.click();
    expect(browser).toHaveTitleContaining(searchKeyword);
  });
});
