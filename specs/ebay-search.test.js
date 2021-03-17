describe.skip(`ebay search`, () => {
  it(`verify title`, () => {
    browser.url(`https://www.ebay.com`);
    const searchKeyword = "laptop";
    const $searchBox = $(`#gh-ac`);
    $searchBox.setValue(searchKeyword);
    const $searchButton = $(`#gh-btn`);
    $searchButton.click();
    // const expectedTitle = `laptop | eBay`;
    // expect(browser).toHaveTitle(expectedTitle);
    expect(browser).toHaveTitleContaining(searchKeyword);
  });

  it(`verify dropdown have certian text for the selected option`, () => {
    // browser.url(`https://www.ebay.com`);

    // const searchKeyword = "laptop";
    // const $searchBox = $(`#gh-ac`);

    // $searchBox.setValue(searchKeyword);
    // const $searchButton = $(`#gh-btn`);
    // $searchButton.click();

    const $firstOption = $(`#gh-cat option:nth-child(1)`);
    const expectedText = `PC Laptops & Netbooks`;

    expect($firstOption).toHaveText(expectedText);
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
